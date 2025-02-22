import { IThemeColors, IThemeRGB, IThemeVariables } from "../../types";

const greys = {
  "ld-lightblue": "#f6f8f9",
  "ld-lightpurple": "#f1f3f8",
  "ld-grey": "#f2f5fb",
  "ld-lightgrey": "#e1e5e7",
  "acc-lightgrey": "#c6cdd0",
  "acc-grey": "#b2c0c4",
  "ld-darkgrey": "#95a3a7",
  "acc-light-text": "#999db3",
  "acc-darkgrey": "#5d6280",
  "acc-code": "#575662",
  "ld-darkergrey": "#384B52",
};

const blues = {
  "ld-blue": "#6db0fc",
  "acc-hoverlinkblue": "#3d91f0",
  "acc-linkblue": "#1f6dc6",
  "ld-mediumblue": "#2b5db6",
  "acc-hoverblue": "#1d2c7f",
  "ld-darkerblue": "#1e2842",
  "ld-darkestblue": "#182134",
};

const accents = {
  "acc-lightgreen": "#d4f5e4",
  "ld-green": "#5deda2",
  "acc-bright-green": "#29e3c1",
  "acc-hovergreen": "#6fdda4",
  "acc-green": "#5ac58d",

  "acc-hoverred": "#EF4341",
  "acc-red": "#FF6967",
  "acc-orange": "#ed8936",
  "acc-pink": "#d588d5",
  "acc-purple": "#805EDD",
};

// TODO: Improve these names
export const staticColors = {
  ...greys,
  ...blues,
  ...accents,
};

const configurableColors: IThemeColors = {
  primary: withOpacity("--color-primary"),
  "acc-1": withOpacity("--color-acc-1"),
  "background-acc-1": withOpacity("--color-background-acc-1"),
  "background-acc-start": withOpacity("--color-background-acc-start"),
  "button-1": withOpacity("--color-button-1"),
  "link-1": withOpacity("--color-link-1"),
  "button-2": withOpacity("--color-button-2"),
  "link-2": withOpacity("--color-link-2"),
  "link-light": withOpacity("--color-link-light"),
  "background-light": `rgba(var(--color-link-1), 0.08)`,
  "code-background": withOpacity("--color-code-background"),
};

const colors = { ...staticColors, ...configurableColors };

export default colors;

// Can override these values by passing this object with different values to
// `applyTheme`
export const baseColorVariableValues: IThemeRGB = {
  "rgb-primary": "1, 10, 64", // ld-darkblue
  "rgb-acc-1": "252, 66, 201", // ld-pink
  "rgb-background-acc-1": "24, 33, 52", // ld-darkestblue
  "rgb-background-acc-start": "31, 41, 66",
  "rgb-button-1": "61, 145, 240", // acc-hoverlinkblue
  "rgb-link-1": "31, 109, 198", // acc-linkblue
  "rgb-button-2": "31, 109, 198", // acc-linkblue
  "rgb-link-2": "61, 145, 240", // acc-hoverlinkblue
  "rgb-link-light": "109, 176, 252", // ld-blue
  "rgb-code-background": "30, 40, 66", // ld-darkerblue
};

// Reference for using CSS variables in Tailwind:
// https://tailwindcss.com/docs/customizing-colors#using-css-variables
function withOpacity(variableName: keyof IThemeVariables): string {
  return `rgba(var(${variableName}), <alpha-value>)`;
}
