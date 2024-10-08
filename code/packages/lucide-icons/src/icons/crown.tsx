import { memo } from 'react'
import type { IconProps } from '@tamagui/helpers-icon'
import { Svg, Path } from 'react-native-svg'
import { themed } from '@tamagui/helpers-icon'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'Crown'

export const Crown = memo<IconProps>(themed(Icon, { resolveValues: 'auto' }))
