import { NavbarNested } from '@/components/NavbarNested/NavbarNested';

export function LayoutPage({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <NavbarNested/>
      <main style={{ flex: 1}}>{children}</main>
    </div>
  )
}