type TopProps = {
  children: React.ReactNode
}
function Top({ children }: TopProps) {
  return <h1 className="text-6xl font-bold">{children}</h1>
}

export default Top
