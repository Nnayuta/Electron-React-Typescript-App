import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      common: {
        default: string;
        defaultHover: string;
        defaultDisabled: string;
        black: string;
        white: string;
        background: string;
        primary: string;
        secondary: string;
        text: string;
        text2: string;
      };
    };
  }
}
