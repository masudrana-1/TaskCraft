import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './Components/Sidebar/Sidebar'
import GlobalStylesProvider from './providers/GlobalStylesProvider'
import ContextProvider from './providers/ContextProvider'
import { ClerkProvider, auth } from '@clerk/nextjs'
// import NextTopLoader from 'nextjs-toploader';
// import Logo from './Components/Logo/Logo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Task Craft',
  description: "Task management application"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
  // check user login or logout
  const { userId } = auth();
  
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* <NextTopLoader
            height={2}
            color='#27AE60'
            easing='cubic-bezier(0.53, 0.21, 0, 1)'
          /> */}
          <ContextProvider>
            <GlobalStylesProvider>
              <div className='w-full'>
                {children}
              </div>
              {userId && <Sidebar/>}
            </GlobalStylesProvider>
          </ContextProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
