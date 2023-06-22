import './App.css';
import Body from './components/Body';
import Form from './components/Form';
import Header from './components/Header';
import Icons from './components/Icons';

function App() {
  return (
    <div className="App">
      <div id='container' className='bg-[url("./assets/mobile/image-host.jpg")] h-screen'>
        <div id='wrapper' className='opacity-[0.7992919683456421] bg-darkBlue h-full'>
          <div id='header'>
            <Header />
          </div>
          <div id='body'>
            <Body />
          </div>
          <div id='icons'>
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
