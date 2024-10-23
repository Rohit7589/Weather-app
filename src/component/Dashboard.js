import { FaSearchLocation } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
// import ReactAnimatedWeather from "react-animated-weather";


const Dashboard = (props) => {

  const {data} = props.weather;
  const isCelcius =props.isCelcius
  let setQuery = props.setQuery
  let query = props.query
  let search = props.search

  const getCurrentDate =() => {
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric"
    }
    const currentDate = new Date().toLocaleDateString("en-US", options);
    return currentDate;
  }

  const changeHandler = (event) => {
    setQuery(event.target.value)
  }

  const pressHandler = (event) => {
    if(event.key === "Enter"){
      search(event)
    }
  }

  return (
    
      <div className='flex flex-col h-full gap-12 px-5 justify-center  text-center'>
      <div className="flex flex-row justify-between mt-[35px] items-center">
          <input className="bg-slate-900 py-1 border-0 outline-0 w-2/3 px-2 rounded-md text-white" 
           type='text' name="city" value={query} placeholder='Search for places' onChange={changeHandler} onKeyUp={pressHandler}/>
          <button onClick={search} className="bg-gray-400 rounded-full p-1"><FaSearchLocation /></button>
        </div>

        <div className="w-full flex justify-center items-center te">
          <span>{data.condition.icon_url && (
          <img
            width={200}
            height={200}
            src={data.condition.icon_url}
            alt={data.condition.description}
            className="temp-icon"
          />
        )}</span>
        </div>


        <div className="flex w-full items-center justify-center text-white ">
          <h1 className="text-5xl"> {isCelcius ? Math.round(data.temperature.current) : Math.round((data.temperature.current * 9) / 5 + 32)} </h1>
          <p className="flex items-center text-slate-300 text-2xl">{isCelcius ? <span> <sup>o</sup>C</span> : <span> <sup>o</sup>F</span>} </p>
        </div>


        <div className=" text-slate-300 ">
        {data.condition.description}
        </div>

        <div className="flex flex-col gap-3  ">
          <div className="flex  text-slate-400 text-sm justify-center gap-3">
            <p>Today</p>   .
            <p>{getCurrentDate()}</p>
          </div>

          <div className="flex items-center justify-center text-sm text-slate-400">
            <span className=" text-slate-300"><IoLocation /></span>
            <p>  {data.city}, <span>{data.country}</span> </p>
          </div>
        </div>

    

    </div>
  )
}

export default Dashboard