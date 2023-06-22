import './App.css';
import Body from './components/Body';
import Form from './components/Form';
import Header from './components/Header';
import Icons from './components/Icons';

function App() {
  return (
    <div className="App">
      
      <div id='container' className='h-screen'>
        <div id='backgroundWrapper' className='absolute w-full'>
          <div id='backgroundImg' className='bg-[url("./assets/mobile/image-host.jpg")] h-screen'></div>
          <div id='background' className='h-screen opacity-[0.7992919683456421] bg-darkBlue absolute w-full bottom-0'></div>
        </div>
        <div id='wrapper' className='h-full pt-[62px] px-6 pb-[94px] relative'>
          <div id='header' className='flex justify-center mb-[57px]'>
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
