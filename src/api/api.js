const apiKey='f2f6e245fe075a07cc86b8c3663ed56f';


const getWeather=async(city)=>{
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then((res)=>res.json())
    .then((json)=>{
        return json;
    });
};

export default getWeather;