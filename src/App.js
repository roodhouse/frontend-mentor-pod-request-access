import './App.css';
import Body from './components/Body';
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
        <div id='wrapper' className='h-full pt-[62px] px-6 pb-[94px] relative md:pt-[50px] md:pl-[30px] md:pr-[94px] md:bg-darkBlue'>
          <div id='header' className='flex justify-center mb-[57px] md:justify-start'>
            <Header />
          </div>
          <div id='body' className='mb-[36px]'>
            <Body />
          </div>
          <div id='icons' className='flex justify-evenly items-center mb-[51px]'>
            <Icons />
          </div>
          <div id='form'>
            <Form />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
