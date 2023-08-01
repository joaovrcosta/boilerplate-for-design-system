import {
  Colors,
  FontSizes,
  FontWeights,
  Fonts,
  LineHeights,
  Radii,
  Space,
} from '@ignite-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors: Colors,
    fontSizes: FontSizes,
    fontWeights: FontWeights,
    fonts: Fonts,
    lineHeights: LineHeights,
    radii: Radii,
    space: Space,
  },
})
