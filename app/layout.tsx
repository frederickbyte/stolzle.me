import './globals.css'
import { Roboto_Mono } from 'next/font/google'
import Footer from '@/components/footer'

export const metadata = {
  title: {
    default: 'Andrew Stolzle',
    template: '%s | Andrew Stolzle',
  },
  description: 'Web developer working with React and DotNet',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: 'favicon.ico',
  },
}

const robotoMono = Roboto_Mono({ subsets: ['latin'], variable: '--font-robotoMono' })

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={'flex flex-col flex-1 h-full smooth-scroll p-0 m-0 border-0 ' + robotoMono.className}>
      <body className='antialiased flex flex-col flex-1 text-sm font-mono text-defaultText max-w-3xl mx-4 mt-8 md:mt-20 md:text-md lg:mt-32 lg:mx-auto lg:text-lg'>
        <main className='flex flex-col flex-1'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
