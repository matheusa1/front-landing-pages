import Heading from '.'

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O Texto está escuro',
    light: false,
  },
  argTypes: {
    children: { type: 'string' },
    light: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

export const Light = (args) => <Heading {...args} />
export const Dark = (args) => <Heading {...args} light />

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
}

Dark.args = {
  children: 'O Texto está claro',
  light: true,
}