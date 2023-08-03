import type { Meta, StoryObj } from '@storybook/react'
import { Text, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Text,

  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 title',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um h2, mas você pode alterar o heading para qualquer tag html.',
      },
    },
  },
}
