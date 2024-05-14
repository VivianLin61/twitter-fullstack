import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.css';

import RightSidebar from '@/components/RightSidebar';
import Sidebar from '@/components/Sidebar';

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
            <Sidebar className='md:col-span-1 lg:col-span-3' />
            <div className=' h-full w-full border-l-[0.5px] border-r-[0.5px] border-gray-800 md:col-span-5 md:max-w-2xl md:place-self-center lg:col-span-6'>
              {children}
            </div>
            <div className='hidden md:block lg:col-span-3'>
              <RightSidebar />
            </div>
            <ReactQueryDevtools initialIsOpen={true} />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
