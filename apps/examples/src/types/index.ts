import type { FC, ReactNode } from 'react';

export interface Children {
  children: ReactNode;
}

export type Component<E = unknown> = FC<E>;

export type Layout<E = unknown> = Component<Children & E>;
