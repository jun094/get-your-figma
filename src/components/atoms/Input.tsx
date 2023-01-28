type InputProps = {
  value: string
  placeholder?: string
}

function Input({ value, placeholder }: InputProps) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      className="input input-bordered w-full"
    />
  )
}

export default Input
