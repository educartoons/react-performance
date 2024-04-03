type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto w-[1200px] bg-slate-600 min-h-screen">
      {children}
    </div>
  )
}
