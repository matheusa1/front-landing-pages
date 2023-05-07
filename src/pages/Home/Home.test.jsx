import { screen } from '@testing-library/react'

import Home from '.'
import { renderTheme } from '../../styles/renderTheme'
import { theme } from '../../styles/theme'

test('renders learn react link', () => {
  renderTheme(<Home />)
  const headingContainer = screen.getByRole('heading', {
    name: 'Home',
  }).parentElement

  expect(headingContainer).toHaveStyle({
    background: theme.colors.mainBg,
  })

  expect(headingContainer).toMatchSnapshot()

  expect(headingContainer).toHaveStyleRule('background', '#F00')
})
