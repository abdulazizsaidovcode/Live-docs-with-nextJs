'use client'
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Header from '@/components/header'
import { Editor } from '@/components/editor/Editor'
import React from 'react'

const ColobrativeRooms = () => {
    return (
        <RoomProvider id="my-room">
            <ClientSideSuspense fallback={<div>Loading…</div>}>
                <div className='colobrative-room'>
                    <Header>
                        <div className='flex w-fit justify-center items-center gap-2'>
                            <p className='title text-white'>fake titxle</p>
                        </div>
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </Header>
                    <Editor />
                </div>
            </ClientSideSuspense>
        </RoomProvider>
    )
}

export default ColobrativeRooms