'use client';

import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'


function Header() {

  const session = useSession();

  return (
    <section className='bg-green-800 flex justify-between items-center py-2 px-5'>
      <h2>Musistack</h2>
      <p>{session.data?.user?.name}</p>
      {
        session.data?.user ? (
          <button className='bg-black p-2 px-3 rounded-lg border-black border-spacing-1' onClick={() => signOut()}>signOut</button>
        ) : <button className='bg-black p-2 px-3 rounded-lg border-black border-spacing-1' onClick={() => signIn()}>signIn</button>
      }
    </section>
  )
}

export default Header