import P from 'prop-types'
import React from 'react'

import * as S from './styles'

const Heading = ({ children, light = false }) => {
  return <S.Title light={light}>{children}</S.Title>
}

Heading.propTypes = {
  children: P.string.isRequired,
  light: P.bool.isRequired,
}

export default Heading
