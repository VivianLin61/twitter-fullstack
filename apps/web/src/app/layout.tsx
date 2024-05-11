import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.css';

import { LoginButton } from '@/components/LoginButton';

import { AuthProvider } from '@/providers/AuthProvider';
import { QueryProvider } from '@/providers/QueryProvider';

const inter = Inter({ subsets: ['latin'] });
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} flex h-screen w-screen md:grid md:grid-cols-6 lg:grid-cols-12`}
      >
        <QueryProvider>
          <AuthProvider>
            <Toaster />
            <div className=' h-full w-full border-l-[0.5px] border-r-[0.5px] border-gray-800 md:col-span-5 md:max-w-2xl md:place-self-center lg:col-span-6'>
              {children}
            </div>
            <div className='hidden md:block lg:col-span-3'>
              <div className='flex flex-col items-center gap-2 p-4 text-center '>
                <LoginButton>
                  <h1 className='mb-2 text-2xl font-semibold'>
                    New to twitter?
                  </h1>
                </LoginButton>
              </div>
            </div>
            <ReactQueryDevtools initialIsOpen={true} />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
