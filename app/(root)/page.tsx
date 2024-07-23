import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Home() {
  const document = []
  return (
    <main>
      <Header className='sticky left-0 top-0'>
        <div className='flex items-center gap-2 lg:gap-4'>
          Notificatios
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>

      {document.length > 0 ? (
        <div></div>
      ) : (
        <div className='document-list-empty'>
          <Image
            src={'/assets/icons/doc.svg'}
            alt='documnet'
            width={40}
            height={40}
            className='mx-auto'
          />
        </div >
      )}
    </main >
  )
}

export default Home
