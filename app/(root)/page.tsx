import AddDocumentBtn from '@/components/addDocumentBtn'
import Header from '@/components/header'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

async function Home() {
  const clerkUser = await currentUser()
  if (!clerkUser) redirect('/sign-in')
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
          <AddDocumentBtn
            userId={clerkUser.id}
            email={clerkUser.emailAddresses[0].emailAddress}
          />
        </div >
      )}
    </main >
  )
}

export default Home
