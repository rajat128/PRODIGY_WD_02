import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [time, settime] = useState(0)
  const[pause,setpause]=useState(true)
  const[pauses,isPauses]=useState(false)
  const[active,setactive]=useState(false)
  const[lap,setlap]=useState([])
  const[i,seti]=useState(1)
  useEffect(()=>{
    let interval=null;
    if(active &&!pause){
       interval=setInterval(()=>{
        settime(time=>time+10)
      },10)
      
    }
      else if(pause){
          clearInterval(interval)
      }
     return ()=>{
      clearInterval(interval)
     }
  },[pause,active])
    function start(){
       setactive(true)
       setpause(false)
    }
    function pauseit(){
        setpause(!pause)
        isPauses(!pauses)
    }
    function reset(){
      settime(0)
      setactive(false)
      setlap([])
      seti(1)
      const lapList = document.getElementById('lap-list');
      lapList.innerHTML=''
    }
    function lapse(){
        seti(i=>i+1)
        let l=''
      let min=("0" + `${Math.floor((time / 60000) % 60)}`).slice(-2)
      let sec=("0" + `${Math.floor((time / 1000) % 60)}`).slice(-2)
      let ms=("0" + (time / 10) % 100).slice(-2);
     
      l=i+". "+min+" : "+sec+" : "+ms
     
      let h=document.createElement('li');
  h.innerHTML=l;

  const lapList = document.getElementById('lap-list');
  lapList.appendChild(h);
 
    }
  return (
    <>
    <div className='bg-gray-800 h-24  p-5'>   
            <a href="https://prodigyinfotech.dev/"className='font-sans font-extrabold text-xl '>
            <img src="https://prodigyinfotech.dev/assets/images/logo/logo.svg" className='text-black'></img></a>
    </div>
    <div className='bg-slate-200'>
      <div className='flex justify-center ml-10'>
<div className="relative bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg  h-20 w-96 bg-gray-900 text-white mt-28">
  <div className="flex justify-center items-center ">
    <div className="flex items-center mr-4 mt-5">
      <span className="text-4xl font-bold text-white" id="minutes">{("0" + `${Math.floor((time / 60000) % 60)}`).slice(-2)}:</span>
      <span className="ml-2 text-sm font-bold uppercase">{`ㅤ`+``}Min</span>
    </div>
    <div className="flex items-center mt-5">
      <span className="text-4xl font-bold" id="seconds"> {("0" + `${Math.floor((time / 1000) % 60)}`).slice(-2)+`    `}: </span>
      <span className="ml-2 text-sm font-bold uppercase">{`ㅤ`+` `}Sec{` ㅤ`}</span>
    </div>
    <div className="flex items-center mt-5">
      <span className="text-4xl font-bold" id="seconds"> {("0" + (time / 10) % 100).slice(-2)+`    `}:</span>
      <span className="ml-2 text-sm font-bold uppercase">{`ㅤ`}Ms</span>
    </div>
  </div>
  
</div>
</div>
<div className='flex justify-center mt-10 '>
<button className='hover:bg-slate-100 bg-green-500 hover:rounded-lg text-white hover:text-green-500 font-semibold hover:text-green-500 hover:font-bold py-2 px-4 border border-green-500 hover:border-transparent rounded ml-5 w-24' onClick={start}>Start</button>
<button className='bg-yellow-500  text-white hover:bg-slate-100 hover:rounded-lg hover:text-yellow-500 font-semibold hover:text-yellow-500  hover:font-bold  py-2 px-4 border border-yellow-500 hover:border-transparent rounded ml-5 w-24' onClick={pauseit}>{pauses?"Resume":"Pause"}</button>
<button className='bg-red-500 hover:text-red-500 text-white hover:bg-slate-100  font-semibold hover:text-red-500  hover:font-bold  py-2 px-4 border border-red-500 hover:border-transparent rounded ml-5 w-24' onClick={reset}>Reset</button>
<button className='bg-blue-500 text-white  hover:bg-slate-100 hover:text-blue-700 font-semibold hover:text-blue-500  hover:font-bold  py-2 px-4 border border-transparent hover:border-transparent rounded ml-5 w-24' onClick={lapse}>Lapse</button>
</div>
<div className=" flex justify-center h-screen relative   mt-5 pb-12 font-sans text-gray-700 sm:px-6 lg:px-8 ">
    <div className=" bg-gray-100 flex justify-center h-screen relative  w-full max-w-xl px-8 py-12 mx-auto space-y-4 bg-white border rounded-lg shadow-xl text-black text-3xl">
    <ul id="lap-list"></ul>
    
    </div>
  
</div>
</div>

    </>
  )
}

export default App
