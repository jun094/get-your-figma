type PageWrapperProps = {
  children: React.ReactNode
}

function PageWrapper({ children }: PageWrapperProps) {
  return <main className="flex flex-col mx-auto py-6 px-4 max-w-xl">{children}</main>
}

export default PageWrapper
