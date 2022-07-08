import React from "react";

import { iconClass } from "../../utils/iconClass";
import { FormControl } from "./formControl.component";

export default {
  title: "ReactFormio/FormControl",
  component: FormControl,
  argTypes: {
    label: {
      control: {
        type: "text"
      }
    },
    name: {
      control: {
        type: "text"
      }
    },
    children: {
      control: {
        type: HTMLElement || HTMLCollection
      }
    }
  },
  parameters: {}
};

export const Sandbox = (args: any) => {
  return <FormControl {...args} />;
};

Sandbox.args = {
  label: "Label",
  children: <input type='text' className='form-control' placeholder='placeholder' />
};

export const WithPrefix = (args: any) => {
  return <FormControl {...args} />;
};

WithPrefix.args = {
  label: "Label",
  children: <input type='text' className='form-control' placeholder='placeholder' />,
  prefix: <i className={iconClass(undefined, "calendar")} />
};

export const WithSuffix = (args: any) => {
  return <FormControl {...args} />;
};

WithSuffix.args = {
  label: "Label",
  children: <input type='text' className='form-control' placeholder='placeholder' />,
  suffix: <i className={iconClass(undefined, "calendar")} />
};

export const WithDescription = (args: any) => {
  return <FormControl {...args} />;
};

WithDescription.args = {
  label: "Label",
  children: <input type='text' className='form-control' placeholder='placeholder' />
};
