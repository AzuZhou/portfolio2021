import { css } from "styled-components"

// export const responsivePadding = css`
//   padding: 0 20px;

//   @media screen and (min-width: 960px) {
//     padding: 0 40px;
//   }
// `

export const sectionPadding = css`
  padding: 60px 0;

  @media screen and (min-width: 960px) {
    padding: 80px 0;
  }
`

export const responsivePadding = css`
  padding: 0 30px;

  @media screen and (min-width: 1200px) {
    padding: 0;
  }
`

export const desktopBreakpoint = "@media screen and (min-width: 960px)"
