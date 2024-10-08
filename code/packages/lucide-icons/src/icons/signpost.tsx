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
      <Path d="M12 3v3" stroke={color} />
      <Path d="M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z" stroke={color} />
      <Path d="M12 13v8" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'Signpost'

export const Signpost = memo<IconProps>(themed(Icon, { resolveValues: 'auto' }))
