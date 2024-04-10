export interface IAuthInputProps {
  label: string
  value: any
  type: 'text' | 'email' | 'password'
  isRequired: boolean
  onValueChange: (newValue: any) => void
}
