import { Icon } from '@adobe/react-spectrum'
import type { Icon as PhosphorIconType } from '@phosphor-icons/react'
import type { ReactElement } from 'react'

export interface PhosphorIconProps {
  icon: PhosphorIconType
  size?: 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'
  color?: string
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
}

export function PhosphorIcon({ icon: IconComponent, size, color, weight, ...props }: PhosphorIconProps): ReactElement {
  return (
    <Icon {...props} size={size}>
      <IconComponent color={color} weight={weight} />
    </Icon>
  )
}