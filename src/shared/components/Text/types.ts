type TextTypes = 'label' | 'span'

type TextProps = {
  type?: TextTypes,
  value: string,
  color?: string,
  size?: number,
  weight?: number,
  height?: number,
  family?: string,
  htmlFor?: string
}

export default TextProps
