// import { useEffect, useState } from 'react';
// import './App.css';
// import Dashboard from './component/Dashboard';
// import Main from './component/Main';
// import axios from 'axios';





// function App() {

//   const [weather, setWeather] = useState({ data: {}, loading: true, error: false});
//   const [isCelcius, setIsCelcius] = useState(true)
//   const [query, setQuery] = useState("");


//   const search = async (event) =>{
//     event.preventDefault();

//     const apiKey = "b03a640e5ef6980o4da35b006t5f2942";
//     const url = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}`;

//     setWeather({loading: true})
//     await axios.get(url)
//       .then((res) => {
//         console.log("res", res);
//         setWeather({ data: res.data, loading: false, error: false });
//       })
//       .catch((error) => {
//         setWeather({ ...weather, data: {}, error: true });
//         console.log("error", error);
//       });

//   }


//   useEffect(() => {

//     const fetchData = async () => {
//       const apiKey = "b03a640e5ef6980o4da35b006t5f2942";
//       const url = `https://api.shecodes.io/weather/v1/current?query=Indore&key=${apiKey}`;
  
//       try {
//         const response = await axios.get(url);
//         setWeather({ data: response.data, loading: false, error: false });
//       } catch (error) {
//         setWeather({ data: {}, loading: false, error: true });
//         console.log("error", error);
//       }
//     };
  
//     fetchData();
//   }, []);

 



//   return (

//     <div className='flex h-screen w-screen justify-between px-16 gap-2 bg-slate-900' >
//       <div className='bg-blue-950 border rounded-md border-blue-400 w-2/6 h-full'>
//       {weather.loading && (
//         <>
//           <br />
//           <br />
//           <h4 className='text-center text-3xl  text-white'>Searching..</h4>
//         </>
//       )}

//       {weather.error && (
//         <>
//           <br />
//           <br />
//           <span className="error-message">
//             <span style={{ fontFamily: "font" }}>
//               Sorry city not found, please try again.
//             </span>
//           </span>
//         </>
//       )}

//       {weather && weather.data && weather.data.condition && (
//         // Forecast component
//         <Dashboard weather={weather}  isCelcius={isCelcius} query={query} setQuery={setQuery} search={search} />
//         // toDate={toDate}
//       )}
//       </div>

//       <div className='bg-slate-900 w-screen h-screen'>
//       {weather.loading && (
//         <>
//           <br />
//           <br />
//           <h4 className='text-center text-3xl  text-white'>Searching..</h4>
//         </>
//       )}

//       {weather.error && (
//         <>
//           <br />
//           <br />
//           <span className="error-message">
//             <span style={{ fontFamily: "font" }}>
//               Sorry city not found, please try again.
//             </span>
//           </span>
//         </>
//       )}

// {weather && weather.data && weather.data.condition && (
//           <Main setIsCelcius={setIsCelcius} weather={weather} isCelcius={isCelcius} query={query}/>
//           )}
//       </div>
//     </div>
    
//       );
// }

//       export default App;


import React, { useState } from 'react'
import './App.css';

const App = () => {
 
  const [isOpen,setIsOpen] = useState(false)

 const clickHandler =() => {
    setIsOpen(!isOpen)
 }

  return (
    <>
       <div className='flex flex-col justify-center w-full items-center bg-gradient-to-t from-slate-200 to-indigo-800 '>
        <div className='w-[100px]'>
          <button onClick={clickHandler} className='bg-black text-white  p-2 mt-3 w-full boder-3 border-transparent rounded-lg hover:tracking-wider active:bg-white active:text-black  active:border-black duration-100'>
            click here
          </button>
        </div>

        {isOpen && <div className=' w-[100px] '>
          <ul className='bg-slate-700 rounded-sm p-2 bar text-white flex flex-col  justify-center items-center'>
            <li className='border-b border-b-slate-400 flex flex-col justify-center items-center w-4/5'>contact</li>
            <li className='border-b border-b-slate-400 flex flex-col justify-center items-center w-4/5'>about us</li>
            <li className='border-b border-b-slate-400 flex flex-col justify-center items-center w-4/5'>address</li>
            <li className='flex flex-col justify-center items-center w-4/5'>email</li>
          </ul>
        </div>}
        <div>
          <h1>hello</h1>
        </div>
      </div>
    </>
  )
}

export default App