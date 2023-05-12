import styled, { css } from 'styled-components'

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.md}
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.lg}  
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xlg}
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.xhg}
  `,
}

const titleCase = (uppercase) => {
  return css`
    text-transform: ${uppercase ? 'uppercase' : 'none'};
  `
}

export const Title = styled.h1`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
  `}
`
