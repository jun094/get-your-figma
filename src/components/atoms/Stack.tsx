type StackProps = {
  gap?: string
  children: React.ReactNode
}

function Stack({ gap = 'gap-y-4', children }: StackProps) {
  return <div className={`flex flex-col ${gap}`}>{children}</div>
}

export default Stack
