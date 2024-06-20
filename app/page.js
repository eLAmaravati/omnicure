import Image from "next/image";
import Header from '@/components/partials/Header';
import ExperienceSection from '@/components/sections/ExperienceSection';
import TeleSection from '@/components/sections/TeleSection';
import LogoSection from '@/components/sections/LogoSection';
import GlobalPlansSection from '@/public/images/GlobalPlansSection';
import Footer from '@/components/partials/Footer';
export default function Home() {
  return (
    <>
    <Header/>
    <main className='mb-40'>
      <ExperienceSection/>
      <TeleSection/>
      <LogoSection/>
      <GlobalPlansSection/>
    </main>
    <Footer/>
    </>
  );
}
