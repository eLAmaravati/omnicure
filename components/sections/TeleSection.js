import Link from 'next/link';
import Image from 'next/image';
import { PrimaryButtonWhite } from '../utils/Buttons';
export default function TeleSection()
{
  return (
    <section className='py-36 mt-24 container'>
      <div className="rounded-3xl p-24 relative bg-slate-800 grid grid-cols-2 gap-20 justify-center items-center">
        <div className="text-white space-y-3">
          <h2 className='font-bold text-4xl font-display'>Teleconsult Our Patient Advisors</h2>
          <PrimaryButtonWhite href='#' text='Book a Call' />
        </div>
        <div className="absolute right-20 bottom-0">
          <Image src='/images/tele-image.png' alt='Teleconsult' width={ 340 } height={ 340 } />
          <span className='size-32 rounded-full bg-white/30 flex justify-center items-center text-white backdrop-blur-lg absolute bottom-20 left-0'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}