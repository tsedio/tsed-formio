import classnames from "classnames";
import React, { PropsWithChildren } from "react";
import { iconClass } from "../../utils/iconClass";

export function ButtonTab({ icon, back, onClick, isActive, reverse, children, className, after }: PropsWithChildren<any>) {
  return (
    <div title={'button-wrapper'} className={classnames("tw-tabs__button-wrapper", isActive ? "-active" : "", back ? "-back" : "", className)}>
      <button
        title={'button-tab'}
        className={classnames("tw-tabs__button", reverse ? "-reverse" : "", isActive ? "-active" : "", back ? "-back" : "")}
        onClick={onClick}
      >
        {icon && <i className={classnames(iconClass(undefined, icon), "tw-tabs__button-icon")} />}
        <span className={"tw-tabs__button-label"}>{children}</span>
        {after}
      </button>
      <div className={classnames("tw-tabs__button-border", isActive ? "-active" : "")} />
    </div>
  );
}

export interface TabsItemProps extends Record<string, any> {
  label?: string;
  icon?: string;
}

export interface TabsProps extends Record<string, any> {
  headerChildren?: any;
  AddButton?: any;
  current?: TabsItemProps;
  items?: TabsItemProps[];
  style?: any;
  className?: string;
  reverse?: boolean;
  Button?: any;
  onClick?: (item: TabsItemProps) => void;
  i18n?: (f: string) => string;
}

export function Tabs({
  style,
  current,
  items = [],
  children,
  HeaderChildren,
  AddButton,
  Button = ButtonTab,
  className,
  onClick,
  i18n = (f) => f,
  ...additionalProps
}: PropsWithChildren<TabsProps>) {
  return (
    <div data-testid={'tabs-comp'} className={`tw-tabs ${className}`} style={style}>
      <div>
        <nav className='tw-tabs__header'>
          <div className='tw-tabs__header-wrapper'>
            <div className='tw-tabs__header-border' />
            {items
              .filter((item) => item.label || item.icon)
              .map((item, index) => {
                return (
                  <Button
                    key={index}
                    back={item.back}
                    isActive={current?.action === item.action}
                    exact={item.exact}
                    onClick={() => {
                      onClick && onClick(item);
                    }}
                    {...additionalProps}
                    {...item}
                  >
                    {i18n(item.label || "")}
                  </Button>
                );
              })}
            {AddButton && <AddButton {...additionalProps} current={current} />}
          </div>
        </nav>
        {HeaderChildren && <HeaderChildren {...additionalProps} current={current} />}
      </div>
      <div title={"tab-body"} className={"tw-tabs__body"}>{children}</div>
    </div>
  );
}
