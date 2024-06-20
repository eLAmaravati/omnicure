import Image from 'next/image';
export default function LogoSection()
{
  return (
    <section>
      <div className="container grid grid-cols-2 gap-20">
        <div className="col-span-2 grid gap-8 grid-cols-3 lg:col-span-1">
          <div className="col-span-1 flex flex-col gap-8 lg:mt-20">
            <figure className='bg-neutral-100 rounded-3xl size-40 flex justify-center items-center'>
              <Image src='/images/logo-mayo.png' alt='Logo Mayo' height={ 60 } width={ 60 } />
            </figure>
            <figure className='bg-neutral-100 rounded-3xl size-40 flex justify-center items-center'>
              <Image src='/images/logo-stanford-1.png' alt='Logo Mayo' height={ 80 } width={ 80 } />
            </figure>
            <figure className='bg-neutral-100 rounded-3xl size-40 flex justify-center items-center'>
              <Image src='/images/logo-stanford-2.png' alt='Logo Mayo' height={ 80 } width={ 80 } />
            </figure>
          </div>

          <div className="col-span-1 flex flex-col gap-8">
            <figure className='bg-neutral-100 rounded-3xl size-40 flex justify-center items-center'>
              <Image src='/images/logo-mda.png' alt='Logo Mayo' height={ 80 } width={ 80 } />
            </figure>
            <figure className='bg-neutral-100 rounded-3xl size-40 flex justify-center items-center'>
              <Image src='/images/logo-boston.png' alt='Logo Mayo' height={ 80 } width={ 80 } />
            </figure>
            <figure className='bg-neutral-100 rounded-3xl size-40 flex justify-center items-center'>
              <Image src='/images/logo-children.png' alt='Logo Mayo' height={ 80 } width={ 80 } />
            </figure>
          </div>

          <div className="col-span-1 flex flex-col gap-8 lg:mt-10">
            <figure className='bg-neutral-100 rounded-3xl size-40 flex justify-center items-center'>
              <Image src='/images/logo-mda.png' alt='Logo Mayo' height={ 80 } width={ 80 } />
            </figure>
            <figure className='bg-neutral-100 rounded-3xl size-40 flex justify-center items-center'>
              <Image src='/images/logo-boston.png' alt='Logo Mayo' height={ 80 } width={ 80 } />
            </figure>
            <figure className='bg-neutral-100 rounded-3xl size-40 flex justify-center items-center'>
              <Image src='/images/logo-children.png' alt='Logo Mayo' height={ 80 } width={ 80 } />
            </figure>
          </div>
        </div>
        <div className="place-self-center col-span-2 lg:col-span-1">
          <h2 className='text-4xl font-bold font-display text-stromboli-700'>World's Best USA Hospitals
            & Research Centers</h2>
        </div>
      </div>
    </section>
  );
}