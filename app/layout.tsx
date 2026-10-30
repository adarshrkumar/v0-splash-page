import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Adarsh R. Kumar — Undergraduate Sophomore',
  description: 'The personal landing page of Adarsh R. Kumar, an Electrical and Computer Engineering undergraduate at Santa Clara University.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
