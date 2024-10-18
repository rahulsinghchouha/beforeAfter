import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className=" flex justify-center items-center h-screen w-[100%] relative ">

      <div className='min-h-[400px] min-w-[400px] topLeft topRight  bg-cyan-700 rounded-b-[90px] relative text-white font-[15px]'>
        <div className='leftTriangle '></div>
        <div className='rightTriangle'></div>
        <div className='h-14 w-60 bg-yellow-600 mt-20 ml-20 sss sssTriangle sssBox text-white text-[35px] font-[400] pl-24 '>
          Css
        </div>
        <div className='ml-[90px] pt-10 h-[48px] w-[214px]  text-center leading-1 '>
          Anything is Possible with  CSS, it is powerful, versatile, and a comerstone of web development. Master CSS to  master the web development journey.
        </div>

      </div>
    </div>
  );
}

export default App;
