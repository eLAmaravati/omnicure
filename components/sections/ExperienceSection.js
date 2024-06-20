import Image from 'next/image';
import { PrimaryButtonGreen } from '../utils/Buttons';
export default function ExperienceSection()
{
  return (
    <section>
      <div className="container grid gap-20 grid-cols-6">
        <h2 className='font-bold font-display text-4xl col-span-6 text-stromboli-700 self-center lg:col-span-3'>Experience Exceptional Healthcare In The USA With Omnicure USA</h2>
        <p className='text-lg col-span-6 lg:col-span-3'>Discover the pinnacle of healthcare services in the United States, where advancements, quality, cutting edge research, expert doctors and a commitment to patient success, combine to provide an unparalleled medical tourism experience. Omnicure USA is your dedicated partner, guiding you towards improved health and wellness. Connect with us today and embark on a journey of exceptional USA healthcare services.</p>

        <div className="relative col-span-6 bg-neutral-100 rounded-3xl text-center space-y-3 px-8 py-16 lg:col-span-2">
          <Image src='/images/icon-second-opinion.svg' alt='second opinion' width={ 68 } height={ 68 } className='block mx-auto' />
          <h3 className='font-medium text-xl text-neutral-800'>Second Opinion</h3>
          <p>When facing a serious,
            life-changing illness, we understand the critical importance of obtaining expert advices.</p>
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
            <PrimaryButtonGreen href='#' text='Get Started' />
          </div>
        </div>
        <div className="relative col-span-6 bg-neutral-100 rounded-3xl space-y-3 text-center px-8 py-16 lg:col-span-2">
          <Image src='/images/icon-treatement.svg' alt='second opinion' width={ 68 } height={ 68 } className='block mx-auto' />
          <h3 className='font-medium text-xl text-neutral-800'>Treatment</h3>
          <p>Get help from the best chosen hospitals and specialists that excel in providing premium healthcare directly from the United States.</p>
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
            <PrimaryButtonGreen href='#' text='Get Started' />
          </div>
        </div>
        <div className="relative col-span-6 bg-neutral-100 rounded-3xl text-center space-y-3 px-8 py-16 lg:col-span-2">
          <Image src="/images/icon-global-plans.svg" alt="second opinion" width={ 68 } height={ 68 } className="block mx-auto" />
          <h3 className="font-medium text-xl text-neutral-800">Global Plans</h3>
          <p>When facing a serious, life-changing illness, we understand the critical importance of obtaining expert advice.</p>
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
            <PrimaryButtonGreen href="#" text="Get Started" />
          </div>
        </div>
      </div>
    </section>
  );
}