import { memo } from 'react'
import type { IconProps } from '@tamagui/helpers-icon'
import { Svg, Circle as _Circle, Path } from 'react-native-svg'
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
      <Path
        d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
        stroke={color}
      />
      <_Circle cx="12" cy="8" r="2" stroke={color} />
      <Path d="M15 13a3 3 0 1 0-6 0" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'BookUser'

export const BookUser = memo<IconProps>(themed(Icon, { resolveValues: 'auto' }))
