type StackProps = {
  gutter?: number
  children: React.ReactNode
}

function Stack({ gutter = 4, children }: StackProps) {
  const gapY = `gap-y-${gutter}`

  return <div className={`flex flex-col ${gapY}`}>{children}</div>
}

export default Stack
