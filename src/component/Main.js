import React, { useEffect, useState } from 'react'

import axios from 'axios'

const Main = (props) => {


    let setIsCelcius = props.setIsCelcius
    const { data } = props.weather
    const isCelcius = props.isCelcius
 

    const [forecastData, setForcastData] = useState([])


    useEffect(() => {
        const fetchForecastData = async () => {
            const apiKey = "b03a640e5ef6980o4da35b006t5f2942";
            const url = `https://api.shecodes.io/weather/v1/forecast?query=${data.city}&key=${apiKey}&units=metric`;

            try {
                const response = await axios.get(url);
                setForcastData(response.data.daily);
            } catch (error) {
                console.log("Error fetching forecast data:", error);
            }
        };

        fetchForecastData();
    }, [data.city]);

    const formatDay = (dateString) => {
        const options = { weekday: "short" };
        const date = new Date(dateString * 1000);
        return date.toLocaleDateString("en-US", options);
    };

    return (
        <div className='flex justify-center items-center h-auto w-full  px-5 py-2'>
            <div className='flex flex-col gap-[35px] w-5/6  justify-center items-center '>
                <div className='text-white mt-[20px] flex justify-end gap-2  w-5/6'>
                    <button onClick={() => { setIsCelcius(true) }} className=' bg-slate-50 flex justify-center items-center text-black rounded-full w-8 h-8'><sup>o</sup>C</button>
                    <button onClick={() => { setIsCelcius(false) }} className='bg-gray-400 flex justify-center items-center text-white rounded-full w-8 h-8'><sup>o</sup>F</button>
                </div>

                <div className='flex flex-wrap gap-2 w-5/6 justify-between  text-white items-center'>

                        {forecastData &&
                            forecastData.slice(0, 5).map((day) => (
                                <div className='bg-blue-950 w-[110px] rounded-md px-2 h-[150px] flex flex-col justify-center items-center' key={day.time}>
                                    <p className="text-sm">{formatDay(day.time)}</p>
                                    {day.condition.icon_url && (
                                        <img
                                            src={day.condition.icon_url}
                                            alt={day.condition.description}
                                        />
                                    )}

                                    <p className="text-sm">
                                
                                       {isCelcius? Math.round(day.temperature.minimum) :  Math.round((day.temperature.minimum * 9) / 5 + 32)} {isCelcius ? <span>°C/ </span> : <span>°F/</span>} 
                                       {/* <span>{Math.round(day.temperature.maximum)}°C</span> */}
                                       <span>{isCelcius? Math.round(day.temperature.maximum) :  Math.round((day.temperature.maximum * 9) / 5 + 32)} {isCelcius ? <span>°C</span> : <span>°F</span>}</span>
                                    </p>
                                </div>
                            ))}
                    
                </div>

                <div className='text-white w-5/6  flex flex-col gap-5'>
                    <div>
                        <h1>Today's Highlights</h1>
                    </div>

                    <div className='flex flex-wrap justify-between w-full h-[120px] '>
                        <div className='bg-blue-950 w-2/5 gap-1 flex flex-wrap flex-col justify-center items-center '>
                            <p className='text-sm'>Wind Status</p>
                            <p className='flex flex-wrap justify-center items-center text-center text-2xl'> <span className='text-5xl font-semibold'>{data.wind.speed}</span>m/s</p>
                            <p className='text-xs'>wsw</p>
                        </div>

                        <div className='bg-blue-950 w-2/5 gap-1 flex flex-col justify-center items-center '>
                            <p className='text-sm'>Humidity</p>
                            <p className='flex justify-center items-center text-center text-2xl'> <span className='text-5xl font-semibold'>{data.temperature.humidity}</span> %</p>
                        </div>
                    </div>

                    <div className='flex justify-between w-full h-[100px] '>
                        <div className='bg-blue-950 w-2/5  flex flex-col py-2 justify-center items-center '>
                            <p className='text-sm'>Visibility</p>
                            <p className='flex justify-center items-center text-center text-2xl'> <span className='text-5xl font-semibold'>8,4</span> miles</p>
                        </div>

                        <div className='bg-blue-950 w-2/5  flex flex-col py-2 justify-center items-center '>
                            <p className='text-sm'>Air Pressure</p>
                            <p className='flex justify-center items-center text-center text-2xl'> <span className='text-5xl font-semibold'>{data.temperature.humidity}</span> mb</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Main