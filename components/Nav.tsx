'use client'

import Image from 'next/image'
import { useUser } from '@/contexts/userContext';

export default function Nav() {
  const { user } = useUser();

  return (
    <nav className="md:w-1/5 md:max-w-80 bg-[#FBE2C3] flex md:flex-col justify-center items-center">
      <div className="relative size-24 lg:size-36">
        <Image
          src="/images/logo.jpeg"
          alt="Mind Plus Journal Logo Image"
          fill
          sizes="100wv"
          className="object-cover"
          priority={true}
        />
      </div>
    </nav>
  )
}
