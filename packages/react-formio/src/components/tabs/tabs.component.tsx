import classnames from "classnames";
import React, { PropsWithChildren } from "react";

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
        <i className={icon} />
        <span className={"tabs__button-label text-sm whitespace-no-wrap"}>
          {children}
        </span>
      </button>
      <div
        className={classnames(
          "tabs__button-border",
          "z-1 absolute top-0 right-0 left-0 border-t-2",
          isActive ? "-active" : ""
        )}
      />
    </div>
  );
}

export interface TabsItemProps extends Record<string, any> {
  label: string;
  icon: string;
  path: string;
}

export interface TabsProps extends Record<string, any> {
  current?: TabsItemProps;
  items?: TabsItemProps[];
  style?: any;
  className?: string;
  onClick?: (item: TabsItemProps) => void;
}

export function Tabs({
  style,
  current,
  items = [],
  children,
  className,
  onClick
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
                  {item.label}
                </ButtonTab>
              );
            })}
        </div>
      </nav>
      <div className={"tabs__body"}>{children}</div>
    </div>
  );
}
