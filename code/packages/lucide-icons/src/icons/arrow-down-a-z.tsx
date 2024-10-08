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
      <Path d="m3 16 4 4 4-4" stroke={color} />
      <Path d="M7 20V4" stroke={color} />
      <Path d="M20 8h-5" stroke={color} />
      <Path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" stroke={color} />
      <Path d="M15 14h5l-5 6h5" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'ArrowDownAZ'

export const ArrowDownAZ = memo<IconProps>(themed(Icon, { resolveValues: 'auto' }))
