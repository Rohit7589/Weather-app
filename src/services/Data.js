// import { error } from "ajv/dist/vocabularies/applicator/dependencies";
// import axios from "axios";

// const ApiKey = "fa51d0773ff7f92f448ac11d50492148"
// const ApiUrl = "https://pro.openweathermap.org/data/2.5/forecast/hourly?lat={lat}&lon={lon}&appid={API key}"
// export const getWeather = async (city) => {
//    try{
//     let response = await axios.get(`${ApiUrl}?q=${city}&appid=${ApiKey}&units=metric`)
//     return response.data;
//    }
//    catch(error){
//     console.log("getting error in fetching the data")
   
//    }
// }
 
// fetch (ApiUrl)
// .then(reponse => Response.json())
// .then(data => {
//     console.log("weatherr Data", data)
//     console.log(`Current temp in ${city}: ${data.main.temp}c`)
// })
// .catch((error) =>{
//     console.log(error)
// })


// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '6054d77edcmsh538b1e2eb64dbadp1f07dejsn3302209b91d3',
// 		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
