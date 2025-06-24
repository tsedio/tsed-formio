import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { useKeyboardControls } from "./useKeyboardControls";

describe("useKeyboardControls()", () => {
  const activate = vi.fn();
  const start = vi.fn();
  const end = vi.fn();
  const up = vi.fn();
  const down = vi.fn();
  const left = vi.fn();
  const right = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });
  const Test = () => {
    const handle = useKeyboardControls({ activate, start, end, up, down, left, right });

    return (
      <div tabIndex={0} role='button' onKeyDown={handle}>
        Test
      </div>
    );
  };

  describe("on Enter", () => {
    it('call the "activate" callback', async () => {
      render(<Test />);

      const button = screen.getByRole("button");
      button.focus();

      await userEvent.keyboard("[Enter]{Enter}");

      expect(activate).toHaveBeenCalledTimes(2);
      expect(start).not.toHaveBeenCalled();
      expect(end).not.toHaveBeenCalled();
      expect(up).not.toHaveBeenCalled();
      expect(down).not.toHaveBeenCalled();
      expect(left).not.toHaveBeenCalled();
      expect(right).not.toHaveBeenCalled();
    });
  });

  describe("on Spacebar", () => {
    it('call the "activate" callback', async () => {
      render(<Test />);

      const button = screen.getByRole("button");
      button.focus();

      await userEvent.keyboard("[Space]{ }{Spacebar}");

      expect(activate).toHaveBeenCalledTimes(3);
      expect(start).not.toHaveBeenCalled();
      expect(end).not.toHaveBeenCalled();
      expect(up).not.toHaveBeenCalled();
      expect(down).not.toHaveBeenCalled();
      expect(left).not.toHaveBeenCalled();
      expect(right).not.toHaveBeenCalled();
    });
  });

  describe("on Home", () => {
    it('call the "start" callback', async () => {
      render(<Test />);

      const button = screen.getByRole("button");
      button.focus();

      await userEvent.keyboard("[Home]");

      expect(activate).not.toHaveBeenCalled();
      expect(start).toHaveBeenCalledTimes(1);
      expect(end).not.toHaveBeenCalled();
      expect(up).not.toHaveBeenCalled();
      expect(down).not.toHaveBeenCalled();
      expect(left).not.toHaveBeenCalled();
      expect(right).not.toHaveBeenCalled();
    });
  });

  describe("on End", () => {
    it('call the "end" callback', async () => {
      render(<Test />);

      const button = screen.getByRole("button");
      button.focus();

      await userEvent.keyboard("[End]");

      expect(activate).not.toHaveBeenCalled();
      expect(start).not.toHaveBeenCalled();
      expect(end).toHaveBeenCalledTimes(1);
      expect(up).not.toHaveBeenCalled();
      expect(down).not.toHaveBeenCalled();
      expect(left).not.toHaveBeenCalled();
      expect(right).not.toHaveBeenCalled();
    });
  });

  describe("on Arrow Up", () => {
    it('call the "up" callback', async () => {
      render(<Test />);

      const button = screen.getByRole("button");
      button.focus();

      await userEvent.keyboard("[ArrowUp]");

      expect(activate).not.toHaveBeenCalled();
      expect(start).not.toHaveBeenCalled();
      expect(end).not.toHaveBeenCalled();
      expect(up).toHaveBeenCalledTimes(1);
      expect(down).not.toHaveBeenCalled();
      expect(left).not.toHaveBeenCalled();
      expect(right).not.toHaveBeenCalled();
    });
  });

  describe("on Arrow Down", () => {
    it('call the "down" callback', async () => {
      render(<Test />);

      const button = screen.getByRole("button");
      button.focus();

      await userEvent.keyboard("[ArrowDown]");

      expect(activate).not.toHaveBeenCalled();
      expect(start).not.toHaveBeenCalled();
      expect(end).not.toHaveBeenCalled();
      expect(up).not.toHaveBeenCalled();
      expect(down).toHaveBeenCalledTimes(1);
      expect(left).not.toHaveBeenCalled();
      expect(right).not.toHaveBeenCalled();
    });
  });

  describe("on Arrow Left", () => {
    it('call the "left" callback', async () => {
      render(<Test />);

      const button = screen.getByRole("button");
      button.focus();

      await userEvent.keyboard("[ArrowLeft]");

      expect(activate).not.toHaveBeenCalled();
      expect(start).not.toHaveBeenCalled();
      expect(end).not.toHaveBeenCalled();
      expect(up).not.toHaveBeenCalled();
      expect(down).not.toHaveBeenCalled();
      expect(left).toHaveBeenCalledTimes(1);
      expect(right).not.toHaveBeenCalled();
    });
  });

  describe("on Arrow Right", () => {
    it('call the "right" callback', async () => {
      render(<Test />);

      const button = screen.getByRole("button");
      button.focus();

      await userEvent.keyboard("[ArrowRight]");

      expect(activate).not.toHaveBeenCalled();
      expect(start).not.toHaveBeenCalled();
      expect(end).not.toHaveBeenCalled();
      expect(up).not.toHaveBeenCalled();
      expect(down).not.toHaveBeenCalled();
      expect(left).not.toHaveBeenCalled();
      expect(right).toHaveBeenCalledTimes(1);
    });
  });

  describe("without any callback", () => {
    it("does nothing", async () => {
      const Test = () => {
        const handle = useKeyboardControls({ activate });

        return (
          <div tabIndex={0} role='button' onKeyDown={handle}>
            Test
          </div>
        );
      };

      render(<Test />);

      const button = screen.getByRole("button");
      button.focus();

      await userEvent.keyboard("[ArrowUp][ArrowUp][ArrowDown][ArrowDown][ArrowLeft][ArrowRight][ArrowLeft][ArrowRight]{b}{a}[Enter]");

      expect(activate).toHaveBeenCalledTimes(1);
      expect(start).not.toHaveBeenCalled();
      expect(end).not.toHaveBeenCalled();
      expect(up).not.toHaveBeenCalled();
      expect(down).not.toHaveBeenCalled();
      expect(left).not.toHaveBeenCalled();
      expect(right).not.toHaveBeenCalledTimes(1);
    });
  });
});
