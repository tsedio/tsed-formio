import classnames from "classnames";
import noop from "lodash/noop";
import React, { PropsWithChildren } from "react";
import { iconClass } from "../../utils/iconClass";

export function ButtonTab({
  icon,
  back,
  onClick,
  isActive,
  children
}: PropsWithChildren<any>) {
  return (
    <div
      className={classnames(
        "tabs__button-wrapper",
        isActive ? "-active" : "",
        back ? "-back" : ""
      )}
    >
      <button
        className={classnames(
          "tabs__button",
          isActive ? "-active" : "",
          back ? "-back" : ""
        )}
        onClick={onClick}
      >
        {icon && (
          <i
            className={classnames(
              iconClass(undefined, icon),
              "tabs__button-icon"
            )}
          />
        )}
        <span className={"tabs__button-label"}>{children}</span>
      </button>
      <div
        className={classnames("tabs__button-border", isActive ? "-active" : "")}
      />
    </div>
  );
}

export interface TabsItemProps extends Record<string, any> {
  label?: string;
  icon?: string;
}

export interface TabsProps extends Record<string, any> {
  current?: TabsItemProps;
  items?: TabsItemProps[];
  style?: any;
  className?: string;
  onClick?: (item: TabsItemProps) => void;
  i18n?: (f: string) => string;
}

export function Tabs({
  style,
  current,
  items = [],
  children,
  className,
  onClick,
  i18n = noop as any
}: PropsWithChildren<TabsProps>) {
  return (
    <div className={`tabs ${className}`} style={style}>
      <nav className='tabs__header'>
        <div className='tabs__header-wrapper'>
          <div className='tabs__header-border' />
          {items
            .filter((item) => item.label || item.icon)
            .map((item, index) => {
              return (
                <ButtonTab
                  key={index}
                  back={item.back}
                  isActive={current?.action === item.action}
                  exact={item.exact}
                  onClick={() => {
                    onClick && onClick(item);
                  }}
                  reverseBg={true}
                  {...item}
                >
                  {i18n(item.label)}
                </ButtonTab>
              );
            })}
        </div>
      </nav>
      <div className={"tabs__body"}>{children}</div>
    </div>
  );
}
