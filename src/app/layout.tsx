import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'App Link Explorer',
  description: 'Test app to experiement app link',
  // appLinks: {
  //   android: {
  //     package: "com.grppl.android.shell.CMBlloydsTSB73",
  //     url: "lloyds-retail://account-aggregation",
  //     app_name: "Lloyds"
  //   }
  // },
  // openGraph: {
  //   title: "App Link Explorer",
  //   type: 'website'
  // }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
