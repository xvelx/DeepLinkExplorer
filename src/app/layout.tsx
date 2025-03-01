import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'App Link Explorer',
  description: 'Test app to experiement app link',
  appLinks: {
    ios: {
      app_store_id: "469964520",
      app_name: "Lloyds",
      url: "https://secure.lloydsbank.co.uk/personal/a/rmi/"
    },

    android: {
      // package: "com.grppl.android.shell.BOS",
      // url: "bos-retail://account-aggregation",
      // app_name: "BOS",

      // Lloyds
      package: "com.grppl.android.shell.CMBlloydsTSB73",
      // url: "lloyds-retail://account-aggregation",
      url: "https://secure.lloydsbank.co.uk/personal/a/rmi/",
      app_name: "Lloyds"
    }
  },
  openGraph: {
    title: "App Link Explorer",
    description: "Just to explore the app link",
    images: "https://www.google.co.uk/logos/doodles/2025/st-davids-day-2025-6753651837110640.4-l.webp",
    url: "https://deep-link-explorer.web.app/aasa",
    type: 'website'
  }
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
