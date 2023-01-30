type TextareaProps = {
  value: any
}
function Textarea({ value }: TextareaProps) {
  return (
    <textarea
      readOnly
      value={value}
      className="textarea textarea-bordered"
      placeholder="data..."
    />
  )
}

export default Textarea
