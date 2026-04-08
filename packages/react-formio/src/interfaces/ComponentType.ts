import type { Component } from "@formio/core";

export type ComponentType = Omit<Component, "components"> & { components?: ComponentType[] } & { title?: string } & Record<string, unknown>;
