import P from 'prop-types'
import React from 'react'

import * as S from './styles'

const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'big',
  uppercase = false,
}) => {
  return (
    <S.Title colorDark={colorDark} as={as} size={size} uppercase={uppercase}>
      {children}
    </S.Title>
  )
}

Heading.propTypes = {
  children: P.string.isRequired,
  colorDark: P.bool.isRequired,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  size: P.oneOf(['small', 'medium', 'big', 'huge']).isRequired,
  uppercase: P.bool.isRequired,
}

export default Heading
