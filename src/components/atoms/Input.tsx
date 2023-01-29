import {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  InputHTMLAttributes,
  Ref,
} from 'react'

type InputProps = {
  name?: string
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

function Input(
  { type = 'text', value, name, placeholder, onChange, onFocus }: InputProps,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <input
      ref={ref}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      className="input input-bordered w-full"
      onChange={onChange}
      onFocus={onFocus}
    />
  )
}

export default forwardRef(Input)
