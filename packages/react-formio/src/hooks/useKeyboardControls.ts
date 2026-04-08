"use client";

import { type KeyboardEvent, useCallback } from "react";

import { CODE, KEY } from "./keyboard.constants";

interface Options {
  up?: VoidFunction;
  down?: VoidFunction;
  left?: VoidFunction;
  right?: VoidFunction;
  start?: VoidFunction;
  end?: VoidFunction;
  activate?: VoidFunction;
}

const isActivateKey = (event: KeyboardEvent<HTMLDivElement | HTMLButtonElement>) => {
  return (
    event.key === KEY.ENTER ||
    event.key === KEY.SPACE ||
    event.key === KEY.SPACEBAR ||
    event.code === CODE.ENTER ||
    event.code === CODE.SPACE
  );
};

const voidFn = () => {};

export const useKeyboardControls = ({
  up = voidFn,
  down = voidFn,
  left = voidFn,
  right = voidFn,
  start = voidFn,
  end = voidFn,
  activate = voidFn
}: Options) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement | HTMLButtonElement>) => {
      if (isActivateKey(event)) {
        return activate();
      }

      if (event.code === CODE.HOME) {
        event.preventDefault();

        return start();
      }

      if (event.code === CODE.END) {
        event.preventDefault();

        return end();
      }

      if (event.code === CODE.ARROW_UP) {
        event.preventDefault();

        return up();
      }

      if (event.code === CODE.ARROW_DOWN) {
        event.preventDefault();

        return down();
      }

      if (event.code === CODE.ARROW_RIGHT) {
        event.preventDefault();

        return right();
      }

      if (event.code === CODE.ARROW_LEFT) {
        event.preventDefault();

        return left();
      }
    },
    [activate, down, end, left, right, start, up]
  );

  return handleKeyDown;
};
