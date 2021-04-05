import type { Properties as CSSProperties } from 'csstype';

/**
 * Typing for the interpolations.
 */
export type BasicTemplateInterpolations = string | number;

/**
 * These are all the CSS props that will exist.
 */
export type CSSProps = CSSProperties<string | number>;

export type AnyKeyCssProps<TValue> = {
  [key: string]: AnyKeyCssProps<TValue> | CSSProps | string | number | TValue;
};

export type CssFunction<TValue = void> =
  | CSSProps
  | AnyKeyCssProps<TValue>
  | TemplateStringsArray
  | string
  | boolean
  | undefined;
