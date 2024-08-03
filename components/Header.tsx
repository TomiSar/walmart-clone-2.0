'use client';

import { FormEvent } from 'react';
import {
  Grid2X2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Header() {
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const input = event.currentTarget.input.value;
    router.push(`/search?q=${input}`);
  };

  return (
    <header className='flex flex-col md:flex-row bg-walmart items-center px-10 py-7 space-x-5'>
      <Link className='mb-5 md:mb-0' href='/'>
        <Image
          className='rounded-xl'
          src='https://i.imgur.com/5V4wehM.png'
          alt='Logo'
          width={150}
          height={150}
        />
      </Link>
      <form
        className='flex items-center bg-white rounded-full w-full flex-1'
        onSubmit={handleSubmit}
      >
        <input
          className='flex-1 px-4 rounded-l-full outline-none placeholder:text-sm text-black'
          type='text'
          name='input'
          placeholder='Search everything...'
        />
        <button type='submit'>
          <Search className='rounded-full h-10 px-2 w-10 bg-yellow-400 cursor-pointer' />
        </button>
      </form>
      <div className='flex space-x-5 mt-5 mb:mt-0'>
        <Link
          className='hidden xl:flex text-white font-bold items-center space-x-2 text-sm'
          href='/'
        >
          <Grid2X2 size={20} />
          <p>Departments</p>
        </Link>
        <Link
          className='hidden xl:flex text-white font-bold items-center space-x-2 text-sm'
          href='/'
        >
          <LayoutGrid size={20} />
          <p>Services</p>
        </Link>
        <Link
          className='flex text-white font-bold items-center space-x-2'
          href='/'
        >
          <Heart size={20} />
          <div>
            <p className='text-xs font-extralight'>Reorder</p>
            <p>My Items</p>
          </div>
        </Link>
        <Link
          className='flex text-white font-bold items-center space-x-2'
          href='/'
        >
          <User size={20} />
          <div>
            <p className='text-xs font-extralight'>Sign In</p>
            <p>Account</p>
          </div>
        </Link>

        <Link
          className='flex text-white font-bold items-center space-x-2'
          href='/basket'
        >
          <ShoppingCart size={20} />
          <div>
            <p className='text-xs font-extralight'>No Items</p>
            <p>0.0€</p>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
