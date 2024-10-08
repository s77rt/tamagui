import { memo } from 'react'
import type { IconProps } from '@tamagui/helpers-icon'
import { Svg, Line, Path, Rect } from 'react-native-svg'
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
      <Rect width="18" height="18" x="3" y="4" rx="2" ry="2" stroke={color} />
      <Line x1="16" x2="16" y1="2" y2="6" stroke={color} />
      <Line x1="8" x2="8" y1="2" y2="6" stroke={color} />
      <Line x1="3" x2="21" y1="10" y2="10" stroke={color} />
      <Path d="M8 14h.01" stroke={color} />
      <Path d="M12 14h.01" stroke={color} />
      <Path d="M16 14h.01" stroke={color} />
      <Path d="M8 18h.01" stroke={color} />
      <Path d="M12 18h.01" stroke={color} />
      <Path d="M16 18h.01" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'CalendarDays'

export const CalendarDays = memo<IconProps>(themed(Icon, { resolveValues: 'auto' }))
