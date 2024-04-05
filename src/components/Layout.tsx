type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto w-[1200px] max-w-full min-h-screen bg-white">
      {children}
    </div>
  )
}
