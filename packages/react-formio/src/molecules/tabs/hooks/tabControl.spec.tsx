import { act, render, renderHook, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { type PropsWithChildren, useContext, useRef } from "react";

import { TabControlContext, TabsProvider } from "../context/TabControl";
import { Tab } from "../Tab.js";
import { useActiveTab, useRegisterTabControl, useTabControls, useTabDispatch } from "./tabControl";

interface Config {
  selected: number;
}

const createWrapper = ({ selected }: Config = { selected: 3 }) => {
  return ({ children }: PropsWithChildren) => {
    return <TabsProvider selected={selected}>{children}</TabsProvider>;
  };
};

describe("tab control hooks", () => {
  beforeAll(() => {
    vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterAll(() => {
    vi.mocked(console.warn).mockReset();
  });

  describe("useActiveTab()", () => {
    it("returns the current tab value", () => {
      const { result } = renderHook(useActiveTab, { wrapper: createWrapper() });

      expect(result.current).toBe(3);
    });
  });

  describe("useRegisterTabControl()", () => {
    it("returns the dispatch function", () => {
      const { result } = renderHook(() => useRegisterTabControl({ value: 0, ref: useRef(null) }), {
        wrapper: createWrapper()
      });

      expect(result.current).toEqual(expect.any(Function));
    });

    it("register and unregister", () => {
      const { result, unmount } = renderHook(() => {
        const div = document.createElement("div");

        return useRegisterTabControl({ value: 0, ref: useRef<HTMLDivElement>(div) });
      });

      unmount();

      expect(result.current).toEqual(expect.any(Function));
    });

    describe("without provider", () => {
      it("log a warning", async () => {
        const { result, unmount } = renderHook(() => {
          const div = document.createElement("div");
          return useRegisterTabControl({ value: 0, ref: useRef<HTMLDivElement>(div) });
        });

        await act(() => result.current({ type: "update", payload: 4 }));

        unmount();

        expect(console.warn).toHaveBeenCalledWith("Tab Controller Context dispatch used outside of Provider");
        expect(console.warn).toHaveBeenCalledWith("Tab Controller Context register used outside of Provider");
        expect(console.warn).toHaveBeenCalledWith("Tab Controller Context unregister used outside of Provider");
      });
    });
  });

  describe("useTabDispatch()", () => {
    it("returns the dispatch function", () => {
      const { result } = renderHook(useTabDispatch, {
        wrapper: createWrapper()
      });

      expect(result.current).toEqual(expect.any(Function));
    });

    describe("without provider", () => {
      it("log a warning", async () => {
        const { result } = renderHook(useTabDispatch);

        await act(() => result.current({ type: "update", payload: 4 }));

        expect(console.warn).toHaveBeenCalledWith("Tab Controller Context dispatch used outside of Provider");
      });
    });

    describe("dispatch update", () => {
      it("update the state", async () => {
        const Test = () => {
          const dispatch = useTabDispatch();
          const tab = useActiveTab();

          const update = () => {
            dispatch({ type: "update", payload: 4 });
          };

          return (
            <>
              <button onClick={update}>update</button>
              <output name='result'>{tab}</output>
            </>
          );
        };

        render(<Test />, { wrapper: createWrapper() });

        const button = screen.getByRole("button");
        const output = screen.getByRole("status");

        expect(output).toHaveValue("3");

        await userEvent.click(button);

        expect(output).toHaveValue("4");
      });
    });

    describe("dispatch end", () => {
      it("update the state", async () => {
        const Test = () => {
          const dispatch = useTabDispatch();
          const tab = useActiveTab();

          const end = () => {
            dispatch({ type: "end" });
          };

          return (
            <>
              <Tab value={0}>Label 0</Tab>
              <Tab value={3}>Label 3</Tab>
              <Tab value={5}>Label 5</Tab>

              <button onClick={end}>end</button>

              <output name='result'>{tab}</output>
            </>
          );
        };

        render(<Test />, { wrapper: createWrapper() });

        const button = screen.getByRole("button");
        const output = screen.getByRole("status");

        expect(output).toHaveValue("3");

        await userEvent.click(button);
        expect(output).toHaveValue("5");
      });
    });

    describe("dispatch start", () => {
      it("update the state", async () => {
        const Test = () => {
          const dispatch = useTabDispatch();
          const tab = useActiveTab();

          const start = () => {
            dispatch({ type: "start" });
          };

          return (
            <>
              <Tab value={0}>Label 0</Tab>
              <Tab value={3}>Label 3</Tab>
              <Tab value={5}>Label 5</Tab>
              <button onClick={start}>start</button>
              <output name='result'>{tab}</output>
            </>
          );
        };

        render(<Test />, { wrapper: createWrapper() });

        const button = screen.getByRole("button");
        const output = screen.getByRole("status");

        expect(output).toHaveValue("3");

        await userEvent.click(button);

        expect(output).toHaveValue("0");
      });
    });

    describe("dispatch next", () => {
      it("update the state", async () => {
        const Test = () => {
          const dispatch = useTabDispatch();
          const tab = useActiveTab();

          const next = () => {
            dispatch({ type: "next" });
          };

          return (
            <>
              <Tab value={0}>Label 0</Tab>
              <Tab value={3}>Label 3</Tab>
              <Tab value={4}>Label 4</Tab>
              <Tab value={5}>Label 5</Tab>
              <button onClick={next}>next</button>
              <output name='result'>{tab}</output>
            </>
          );
        };

        render(<Test />, { wrapper: createWrapper() });

        const button = screen.getByRole("button");
        const output = screen.getByRole("status");

        expect(output).toHaveValue("3");

        await userEvent.click(button);

        expect(output).toHaveValue("4");
      });

      describe("when current tab is last one", () => {
        it("loop to the first tab", async () => {
          const Test = () => {
            const dispatch = useTabDispatch();
            const tab = useActiveTab();

            const next = () => {
              dispatch({ type: "next" });
            };

            return (
              <>
                <Tab value={0}>Label 0</Tab>
                <Tab value={3}>Label 3</Tab>
                <Tab value={4}>Label 4</Tab>
                <Tab value={5}>Label 5</Tab>
                <button onClick={next}>next</button>
                <output name='result'>{tab}</output>
              </>
            );
          };

          render(<Test />, { wrapper: createWrapper({ selected: 5 }) });

          const button = screen.getByRole("button");
          const output = screen.getByRole("status");

          expect(output).toHaveValue("5");

          await userEvent.click(button);

          expect(output).toHaveValue("0");
        });
      });
    });

    describe("dispatch previous", () => {
      it("update the state", async () => {
        const Test = () => {
          const dispatch = useTabDispatch();
          const tab = useActiveTab();

          const previous = () => {
            dispatch({ type: "previous" });
          };

          return (
            <>
              <Tab value={0}>Label 0</Tab>
              <Tab value={2}>Label 2</Tab>
              <Tab value={3}>Label 3</Tab>
              <Tab value={4}>Label 4</Tab>
              <Tab value={5}>Label 5</Tab>
              <button onClick={previous}>previous</button>
              <output name='result'>{tab}</output>
            </>
          );
        };

        render(<Test />, { wrapper: createWrapper() });

        const button = screen.getByRole("button");
        const output = screen.getByRole("status");

        expect(output).toHaveValue("3");

        await userEvent.click(button);

        expect(output).toHaveValue("2");
      });

      describe("when current tab is first one", () => {
        it("loop to the last tab", async () => {
          const Test = () => {
            const dispatch = useTabDispatch();
            const tab = useActiveTab();

            const previous = () => {
              dispatch({ type: "previous" });
            };

            return (
              <>
                <Tab value={0}>Label 0</Tab>
                <Tab value={2}>Label 2</Tab>
                <Tab value={3}>Label 3</Tab>
                <Tab value={4}>Label 4</Tab>
                <Tab value={5}>Label 5</Tab>
                <button onClick={previous}>previous</button>
                <output name='result'>{tab}</output>
              </>
            );
          };

          render(<Test />, { wrapper: createWrapper({ selected: 0 }) });

          const button = screen.getByRole("button");
          const output = screen.getByRole("status");

          expect(output).toHaveValue("0");

          await userEvent.click(button);

          expect(output).toHaveValue("5");
        });
      });
    });
  });

  describe("useTabControl()", () => {
    it("retuns the elements registered map", () => {
      const Test = () => {
        const div = document.createElement("div");
        const ref = useRef(div);

        useRegisterTabControl({ value: 0, ref });

        const controls = useTabControls();

        return <output name='result'>{controls.size}</output>;
      };

      render(<Test />, { wrapper: createWrapper() });

      const output = screen.getByRole("status");

      expect(output).toHaveValue("1");
    });

    it("allow unregister", async () => {
      const Test = () => {
        const div = document.createElement("div");
        const ref = useRef(div);

        const { register, unregister } = useContext(TabControlContext);
        const controls = useTabControls();

        return (
          <>
            <button onClick={() => register(0, ref)}>REGISTER</button>
            <button onClick={() => unregister(0)}>UNREGISTER</button>
            <output name='result'>{controls.size}</output>
          </>
        );
      };

      render(<Test />, { wrapper: createWrapper() });

      const register = screen.getByRole("button", { name: "REGISTER" });
      const unregister = screen.getByRole("button", { name: "UNREGISTER" });

      await userEvent.click(register);

      expect(screen.getByRole("status")).toHaveValue("1");

      await userEvent.click(unregister);

      expect(screen.getByRole("status")).toHaveValue("0");
    });
  });
});
