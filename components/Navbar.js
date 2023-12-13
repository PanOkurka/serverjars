/*  ./components/Navbar.jsx     */
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router'


export const Navbar = () => {
  const [active, setActive] = useState(false);

  const router = useRouter()

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap p-3 Navbar'>
	{router.asPath === "/" ? 
          <p className='cursor-pointer inline-flex items-center p-2 mr-4 hover:no-underline'>
            <img src='/images/logo.jpg' alt='Ethernal-Logo' className='fill-current text-white h-8 w-8 mr-2' />
            <span className='text-xl text-white font-bold MainColor uppercase tracking-wide no-underline'>
            Minecraft Jars
            </span>
          </p>
	 :
	<Link href='/' passHref shallow className='no-underline inline-flex items-center p-2 mr-4 hover:no-underline'> 
            <img src='/images/logo.jpg' alt='Ethernal-Logo' className='fill-current text-white h-8 w-8 mr-2' />
            <span className='text-xl text-white font-bold MainColor uppercase tracking-wide no-underline'>
            Minecraft Jars
            </span>
	</Link>
	}
        <button
          className=' inline-flex p-3 rounded lg:hidden text-white ml-auto hover:no-underline outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
          {router.asPath === "/" ?
            <p className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:no-underline MainColor hover:cursor-pointer'>
              Home
            </p>
          :
            <Link href='/' shallow className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:no-underline MainColor'>
              Home
            </Link>
            
          }
            <Link href='/vanilla' shallow className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:no-underline MainColor'>
                Vanilla
            </Link>
            <Link href='/servers' shallow className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:no-underline MainColor'>
                Servers
            </Link>
            <Link href='/proxy' shallow className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:no-underline MainColor'>
                Proxy
            </Link>
            <Link href='/modded' shallow className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:no-underline MainColor'>
                Modded
            </Link>
            
            </div>
        </div>
      </nav>
    </>
  );
};
