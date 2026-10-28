import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useEffect, useState } from "react";

import type { FormType } from "../../interfaces";
import { Form } from "./Form";

const formSchema = (): FormType => ({
  type: "form",
  display: "form",
  components: [
    {
      label: "First name",
      key: "firstName",
      type: "textfield",
      input: true
    }
  ]
});

// Case A: references declared outside any component (stable across renders)
const STABLE_FORM = formSchema();
const STABLE_OPTIONS = { noAlerts: true } as any;
const STABLE_SUBMISSION = { data: { firstName: "Initial" } };

function Ticker({ children }: { children: (tick: number) => React.ReactNode }) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return <>{children(tick)}</>;
}

function getInput() {
  return screen.getByRole("textbox") as HTMLInputElement;
}

async function typeIn(value: string) {
  const input = getInput();
  input.value = value;
  fireEvent.input(input, { target: { value } });
  // formio debounces change propagation, let it flush
  await act(() => new Promise((resolve) => setTimeout(resolve, 50)));
}

async function tickParent(times: number) {
  for (let i = 0; i < times; i++) {
    await act(async () => {
      vi.advanceTimersByTime(1000);
    });
    // let async createForm / setSubmission settle
    await act(() => new Promise((resolve) => setTimeout(resolve, 20)));
  }
}

describe("Form - parent re-renders", () => {
  beforeEach(() => {
    // Only fake setInterval: formio relies on real setTimeout/promises internally
    vi.useFakeTimers({ toFake: ["setInterval", "clearInterval"] });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("case A (stable references): keeps user input and creates the form once", async () => {
    const onFormReady = vi.fn();
    const onChange = vi.fn();

    render(
      <Ticker>
        {() => (
          <Form form={STABLE_FORM} options={STABLE_OPTIONS} submission={STABLE_SUBMISSION} onFormReady={onFormReady} onChange={onChange} />
        )}
      </Ticker>
    );

    await waitFor(() => expect(getInput().value).toBe("Initial"));

    await typeIn("John");
    await tickParent(5);

    expect(getInput().value).toBe("John");
    expect(onFormReady).toHaveBeenCalledTimes(1);
  });

  it("case B (inline literals): keeps user input and creates the form once", async () => {
    const onFormReady = vi.fn();
    const onChange = vi.fn();

    render(
      <Ticker>
        {() => (
          <Form
            form={formSchema()}
            options={{ noAlerts: true } as any}
            submission={{ data: { firstName: "Initial" } }}
            onFormReady={(instance) => onFormReady(instance)}
            onChange={(...args) => onChange(...args)}
          />
        )}
      </Ticker>
    );

    await waitFor(() => expect(getInput().value).toBe("Initial"));

    await typeIn("John");
    await tickParent(5);

    expect(getInput().value).toBe("John");
    expect(onFormReady).toHaveBeenCalledTimes(1);
  });

  it("does not stack event listeners across re-renders", async () => {
    const onChange = vi.fn();

    render(<Ticker>{() => <Form form={STABLE_FORM} onChange={onChange} />}</Ticker>);

    await waitFor(() => expect(getInput()).toBeInTheDocument());
    await tickParent(5);

    onChange.mockClear();
    await typeIn("John");

    const userChanges = () => onChange.mock.calls.filter(([value]) => value?.changed?.value === "John");
    await waitFor(() => expect(userChanges().length).toBeGreaterThan(0));
    // give stacked listeners (if any) a chance to fire too
    await act(() => new Promise((resolve) => setTimeout(resolve, 100)));
    expect(userChanges().length).toBe(1);
  });

  it("recreates the form when the schema really changes", async () => {
    const onFormReady = vi.fn();
    const { rerender } = render(<Form form={formSchema()} onFormReady={onFormReady} />);

    await waitFor(() => expect(onFormReady).toHaveBeenCalledTimes(1));

    const nextSchema = formSchema();
    nextSchema.components[0].label = "Last name";
    rerender(<Form form={nextSchema} onFormReady={onFormReady} />);

    await waitFor(() => expect(onFormReady).toHaveBeenCalledTimes(2));
    expect(screen.getByText("Last name")).toBeInTheDocument();
  });

  it("applies a new submission with different content", async () => {
    const form = formSchema();
    const { rerender } = render(<Form form={form} submission={{ data: { firstName: "Initial" } }} />);

    await waitFor(() => expect(getInput().value).toBe("Initial"));

    rerender(<Form form={form} submission={{ data: { firstName: "Updated" } }} />);

    await waitFor(() => expect(getInput().value).toBe("Updated"));
  });

  it("applies a submission with the same data but a different _id", async () => {
    const form = formSchema();
    let instance: any;
    const { rerender } = render(
      <Form form={form} submission={{ _id: "a", data: { firstName: "Same" } }} onFormReady={(i) => (instance = i)} />
    );

    await waitFor(() => expect(getInput().value).toBe("Same"));
    expect(instance.submission._id).toBe("a");

    rerender(<Form form={form} submission={{ _id: "b", data: { firstName: "Same" } }} onFormReady={(i) => (instance = i)} />);

    await waitFor(() => expect(instance.submission._id).toBe("b"));
  });

  it("applies defaultSubmission only once at creation", async () => {
    const form = formSchema();
    const { rerender } = render(<Form form={form} defaultSubmission={{ data: { firstName: "Default" } }} />);

    await waitFor(() => expect(getInput().value).toBe("Default"));
    await typeIn("John");

    rerender(<Form form={form} defaultSubmission={{ data: { firstName: "Other default" } }} />);
    await act(() => new Promise((resolve) => setTimeout(resolve, 50)));

    expect(getInput().value).toBe("John");
  });
});
