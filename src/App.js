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
          <div id='backgroundImg' className='bg-[url("./assets/mobile/image-host.jpg")] md:bg-[url("./assets/tablet/image-host.jpg")] h-screen md:h-[767px] md:w-[491px] md:absolute md:bg-no-repeat md:z-10'></div>
          <div id='background' className='h-screen opacity-[0.7992919683456421] bg-darkBlue absolute w-full bottom-0 md:hidden'></div>
        </div>
        <div id='wrapper' className='h-full pt-[62px] px-6 pb-[94px] relative md:pt-[50px] md:pl-[30px] md:pr-[94px] md:bg-darkBlue md:flex md:flex-col md:h-[initial] md:pb-0'>
          <div id='header' className='flex justify-center mb-[57px] md:justify-start md:mb-[152px] md:order-1'>
            <Header />
          </div>
          <div id='body' className='mb-[36px] md:relative md:z-20 md:bg-darkBlue md:mb-0 md:pb-10 md:order-2'>
            <Body />
          </div>
          <div id='icons' className='flex justify-evenly items-center mb-[51px] md:order-4 md:bg-darkBlue md:z-20 md:mb-0 md:pb-[153px]'>
            <Icons />
          </div>
          <div id='form' className='md:order-3 md:pb-[64px] md:bg-darkBlue md:z-20 md:pr-[302px]'>
            <Form />
          </div>
          <div id='footer' className='hidden md:block md:bg-darkBlue md:order-5'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
