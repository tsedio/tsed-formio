import classnames from "classnames";
import { PropsWithChildren, useCallback, useEffect, useRef } from "react";

import { useKeyboardControls } from "../../hooks/useKeyboardControls.js";
import { registerComponent } from "../../registries/components.js";
import { iconClass } from "../../utils/iconClass.js";
import { useActiveTab, useRegisterTabControl, useTabsUid } from "./hooks/tabControl.js";

export interface TabProps {
  icon?: string;
  isActive?: boolean;
  className?: string;
  after?: React.ReactNode;
  value: number;
  /**
   * on tab select handler
   */
  onClick?: (value: number) => void;
}

export function Tab({ onClick, icon, value, children, className, after }: PropsWithChildren<TabProps>) {
  const uid = useTabsUid();
  const ref = useRef<HTMLButtonElement>(null);
  const activeTab = useActiveTab();
  const dispatch = useRegisterTabControl({ value, ref });
  const previousActiveTab = useRef(activeTab);

  const isActive = useRef(activeTab === value);
  isActive.current = activeTab === value;

  useEffect(() => {
    if (previousActiveTab.current !== activeTab && value === activeTab) {
      ref.current?.focus();
      onClick?.(value);
    }
    if (previousActiveTab.current !== activeTab) {
      previousActiveTab.current = activeTab;
    }
  }, [value, onClick, activeTab]);

  const start = useCallback(() => {
    dispatch({ type: "start" });
  }, [dispatch]);

  const end = useCallback(() => {
    dispatch({ type: "end" });
  }, [dispatch]);

  const up = useCallback(() => {
    dispatch({ type: "previous" });
  }, [dispatch]);

  const down = useCallback(() => {
    dispatch({ type: "next" });
  }, [dispatch]);

  const left = useCallback(() => {
    const isRTL = document.documentElement.dir === "rtl";

    dispatch({ type: isRTL ? "next" : "previous" });
  }, [dispatch]);

  const right = useCallback(() => {
    const isRTL = document.documentElement.dir === "rtl";

    dispatch({ type: isRTL ? "previous" : "next" });
  }, [dispatch]);

  const handleKeyDown = useKeyboardControls({
    start,
    end,
    up,
    down,
    left,
    right
  });

  const handleClick = useCallback(() => {
    dispatch({ type: "update", payload: value });
  }, [dispatch, value]);

  return (
    <div title={"button-wrapper"} className={classnames("tw-tabs__button-wrapper", className, { "-active": isActive.current }, className)}>
      <button
        ref={ref}
        id={`Tab_${value}_${uid}`}
        data-name='Tab'
        title='button-tab'
        role='tab'
        aria-selected={isActive.current}
        aria-controls={`TabPanel_${value}_${uid}`}
        tabIndex={isActive.current ? 0 : -1}
        className={"tw-tabs__button"}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        {icon && <i className={classnames(iconClass(undefined, icon), "tw-tabs__button-icon")} />}
        <span className={"tw-tabs__button-label"}>{children}</span>
        {after}
      </button>
      <div className='tw-tabs__button-border' />
    </div>
  );
}

registerComponent("Tab", Tab);
