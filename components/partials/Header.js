import Link from 'next/link';
import Image from 'next/image';
import { PrimaryButtonWhite } from '../utils/Buttons';
export default function Header()
{

  const navLinks = [
    {
      href: '#',
      text: 'Second Opinion'
    },
    {
      href: '#',
      text: 'Medical Travel'
    },
    {
      href: '#',
      text: 'Clinical Trials'
    },
    {
      href: '#',
      text: 'Membership Goal'
    },
    {
      href: '#',
      text: 'Testimonials'
    },
    {
      href: '#',
      text: 'Login'
    }
  ];

  return (
    <header className='bg-gradient-to-b from-stromboli-700 from-70% via-white to-white to-70% text-white'>
      <nav className='container py-5 grid grid-cols-12'>
        <div className="col-span-2">
          <Link href='#'>
            <Image src='/images/logo-omnicure-white.svg' alt='Logo Omnicure' height={ 100 } width={ 150 } className='h-auto' />
          </Link></div>

        <ul className='col-span-8 hidden justify-center items-center gap-10 text-sm lg:flex'>
          {
            navLinks.map((navlink, index) => (
              <li key={ index }>
                <Link href={ navlink.href }>{ navlink.text }</Link>
              </li>
            ))
          }
        </ul>

        <div className='col-span-2 justify-self-end self-center'>
          <PrimaryButtonWhite href='#' text='book now' />
        </div>
      </nav>

      <div className="container py-24 text-center">
        <h1 className='font-display text-6xl font-bold mx-auto max-w-screen-sm'>World's Best Advanced Cross-Border Care</h1>
        <p className='text-xl my-7'>Find The Best Hospitals and Doctors Across the world</p>
        <form action="" method="post" className='mx-auto max-w-screen-md flex flex-col flex-wrap gap-5 justify-between lg:flex-row'>
          <div className="rounded-full px-3 py-4 border-2 border-white/20 flex-1 flex backdrop-blur-md bg-white/15">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 inline">
              <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
            </svg>

            <input type="search" name="search" id="search" placeholder='Search disease, hospitals, countries' className='w-full outline-none bg-transparent px-2' />
          </div>
          <PrimaryButtonWhite href='' text='Explore Premium Core' type='submit' />
        </form>

        <div className="flex justify-center mt-20">
          <div className="bg-gradient-to-b from-stromboli-600 to-white p-5 rounded-2xl relative">
            <Image src='/images/header-image-1.png' alt='Header image' width={1000} height={640} className='rounded-xl'/>
            <span className='text-white bg-slate-800 rounded-full py-4 px-8 inline-block w-60 absolute bottom-1/2 -left-32'>World's Leading USA Hospitals</span>
            <span className='text-white bg-slate-800 rounded-full py-4 px-8 inline-block w-60 absolute -right-32 bottom-20'>52 Countries <br /> Reached</span>
          </div>
        </div>
      </div>

    </header>
  );
}