import React, { useEffect } from 'react'
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Icons from './components/Icons';

function App() {

  return (
    <div className="App">
      
      <div id='container' className='h-screen'>
        <div id='backgroundWrapper' className='absolute w-full md:flex md:justify-end'>
          <div id='backgroundImg' className='bg-[url("./assets/mobile/image-host.jpg")] md:bg-[url("./assets/tablet/image-host.jpg")] xl:bg-[url("./assets/desktop/image-host.jpg")] h-screen md:h-[767px] md:w-[491px] md:absolute md:bg-no-repeat md:z-10 xl:w-[888px] xl:h-[640px] xl:mt-[130px]'></div>
          <div id='background' className='h-screen opacity-[0.7992919683456421] bg-darkBlue absolute w-full bottom-0 md:hidden'></div>
        </div>
        <div id='wrapper' className='h-full pt-[62px] px-6 pb-[94px] relative md:pt-[50px] md:pl-[30px] md:pr-[94px] md:bg-darkBlue md:flex md:flex-col md:h-[initial] md:pb-0 xl:pt-[102px] xl:pl-[165px] xl:h-full'>
          <div id='header' className='flex justify-center mb-[57px] md:justify-start md:mb-[152px] md:order-1 xl:mb-[103px]'>
            <Header />
          </div>
          <div id='body' className='mb-[36px] md:relative md:z-20 md:bg-darkBlue md:mb-0 md:pb-10 md:order-2 xl:w-[723px]'>
            <Body />
          </div>
          <div id='icons' className='flex justify-evenly items-center mb-[51px] md:order-4 md:bg-darkBlue md:z-20 md:mb-0 md:pb-[153px] xl:w-[723px] xl:justify-start xl:pb-0'>
            <Icons />
          </div>
          <div id='form' className='md:order-3 md:pb-[64px] md:bg-darkBlue md:z-20 md:pr-[302px] xl:w-[723px] xl:pr-[301px]'>
            <Form />
          </div>
          <div id='footer' className='hidden md:block md:bg-darkBlue md:order-5 xl:right-0 xl:bottom-[125px] xl:z-40 xl:bg-transparent xl:relative xl:w-full'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
