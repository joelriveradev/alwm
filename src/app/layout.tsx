import { type Metadata } from 'next'
import { cn } from '@/lib/utils'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: 'Add Life with Music',
    default: '',
  },
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={cn('h-full bg-white antialiased')}>
      <head>
        <link
          rel='preconnect'
          href='https://cdn.fontshare.com'
          crossOrigin='anonymous'
        />
        <link
          rel='stylesheet'
          href='https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap'
        />

        <link rel='apple-touch-icon' href='/poster.png' />
        <link rel='apple-touch-startup-image' href='/poster.png' />
        <meta name='apple-mobile-web-app-title' content='Add Life With Music' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
      </head>

      <body className='flex min-h-dvh'>
        <div className='w-full'>{children}</div>
      </body>
    </html>
  )
}
