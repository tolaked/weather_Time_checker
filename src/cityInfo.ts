import axios from "axios";

interface CityInfo {
  time: string;
  weather: string;
}

let result: object;
function getweather(cityName: string): Object {
  return (
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=a55fe211358961045e7643e38ac177cd&query=${cityName}`
      )
      // the JSON body is taken from the response
      .then((res) => {
        if(res.data.success === false){
          console.log('please provide a valid location')
         
      }
      else{
        result = {
          time: res.data.location.localtime.split(" ")[1],
          weather: res.data.current.weather_descriptions[0],
        } as CityInfo

        console.log(result);
      }
        
      })

      .catch(err=>{
        console.log(err)
      })
  )
}

getweather("lagos");
