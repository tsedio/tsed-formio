import React from "react";
import { FormControl } from "./formControl.component";
import { iconClass } from "../../utils/iconClass";

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
  return <FormControl {...args} prefix={<i className={iconClass(undefined, "calendar")} />} />;
};

WithPrefix.args = {
  label: "Label",
  children: <input type='text' className='form-control' placeholder='placeholder' />
};

export const WithSuffix = (args: any) => {
  return <FormControl {...args} suffix={<i className={iconClass(undefined, "calendar")} />} />;
};

WithSuffix.args = {
  label: "Label",
  children: <input type='text' className='form-control' placeholder='placeholder' />
};

export const WithDescription = (args: any) => {
  return <FormControl {...args} />;
};

WithDescription.args = {
  label: "Label",
  children: <input type='text' className='form-control' placeholder='placeholder' />
};
