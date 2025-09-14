import { config } from '@tamagui/config/v3'
import { createTamagui } from '@tamagui/core'

// @ts-ignore - Tamagui type compatibility issues
const tamaguiConfig = createTamagui({
  ...config,
  media: {},
})

export default tamaguiConfig

// @ts-ignore - Type circular reference
export type Conf = typeof tamaguiConfig

declare module '@tamagui/core' {
  // @ts-ignore - Type recursion issue
  interface TamaguiCustomConfig extends Conf {}
}