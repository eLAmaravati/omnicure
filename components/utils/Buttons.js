import Link from 'next/link';

// Primary Button White
function PrimaryButtonWhite({ href, text, customClass='' })
{
  return (
    <Link href={ href } role='button' className='text-sm/0 inline-flex items-center justify-center rounded-full border-2 border-white bg-white px-9 py-3 font-semibold capitalize tracking-wider text-stromboli-700 drop-shadow transition duration-300 ease-linear hover:drop-shadow-md hover:bg-transparent hover:text-white'>
      { text }
    </Link>
  );
}

const PrimaryButtonGreen = ({ href, text, customClass }) => {
  return (
    <Link href={href} passHref
        role="button"
        className={`text-sm/0 inline-flex items-center justify-center rounded-full border-2 border-stromboli-700 bg-stromboli-700 px-9 py-3 font-bold capitalize tracking-wider text-white drop-shadow transition duration-300 ease-linear hover:drop-shadow-md hover:bg-stromboli-900 hover:text-white ${customClass}`}
      >
        {text}
    </Link>
  );
};


// Secondary Button
const SecondaryButton = ({ href, text }) => {
  return (
    <Link href={href} className='flex justify-center items-center rounded-full text-stromboli-700 py-2 px-6 text-sm/none border-2 border-insove-blue uppercase transition duration-300 ease-linear hover:drop-shadow-md hover:text-white hover:bg-insove-blue-dark hover:border-insove-blue-dark'>
      {text}
    </Link>
  );
};

export { PrimaryButtonWhite, PrimaryButtonGreen, SecondaryButton };
