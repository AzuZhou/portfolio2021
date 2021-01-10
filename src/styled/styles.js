import { css } from "styled-components"

export const responsivePadding = css`
  padding: 0 20px;

  @media screen and (min-width: 960px) {
    padding: 0 40px;
  }
`

export const desktopBreakpoint = "@media screen and (min-width: 960px)"
