import React, { useState } from 'react'
import './styles/weather.css'
import './styles/necessary.css'
import useFetch from './hooks/useFetch'
import debounceFunc from './pure functions/debounceFunc'

const Weather = () => {
    const date = new Date()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const day = days[date.getDay()];
    const months = ['jan', 'feb', 'march', 'apr', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'dec']
    const month = months[date.getMonth()]
    const [search, setSearch] = useState('mumbai')
    const { data, loading, error } = useFetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=7cab18b5480bd74503a5c61322b4225f `)
    const searchHandler = (e) => {
        setSearch(e.target.value)
    }

    const debouncesearchFunc = debounceFunc(searchHandler, 400)
    return (
        <div>

            <div className="container">
                <picture className='top_box'>

                    <img className='top_image' src="https://www.noaa.gov/sites/default/files/styles/landscape_width_1275/public/legacy/image/2019/Jun/PHOTO-dark%20and%20stormy%20cloudscape-istock-1125x534-Landscape.jpg?itok=xyVD1jOK" alt="state" loading='lazy' />

                </picture>

                <div className="top_box_cont">
                    <h1 >
                        H! Weather
                    </h1>
                    {!data ?
                        <h1>No Data Yet</h1>
                        :
                        <div className="location">
                            <div className="left">
                                <i className="fa-brands fa-mandalorian fa-2x"></i>
                                {
                                    <>
                                        <h2 className='marg0'>{day}, </h2>
                                        <h2 className='marg0'>{`${date.getDate()} ${month} ${date.getFullYear()}`}</h2>



                                    </>
                                }
                            </div>
                            <div className="">
                                <i className="fa-solid fa-location-dot fa-2x"></i>
                                {
                                    <>
                                        <h2 className='marg0'>  </h2>
                                        <h2 className='marg0'>{data.name} '{data.sys.country}'</h2>



                                    </>
                                }
                                <h3 className='marg0'>
                                    {`${date.getHours()} : ${date.getMinutes()}`} {date.getHours() > 12 ? 'pm' : 'am'}

                                </h3>
                            </div>
                        </div>
                    }
                    <div className="location2">
                        <div className='left2'>
                            <h2>location </h2>
                            <label htmlFor="search" className='search_label'>
                                <input type="search" placeholder='search' onChange={debouncesearchFunc} />

                            </label>
                        </div>

                    </div>
                </div>

                <div className="bottom_container">
                    <div className="box">
                        {

                            !data ?
                                <h1>loading...</h1>
                                :
                                <>
                                    <img className='icon_bg' src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather" />
                                    <h2 className='marg0'> temp:
                                        <p className='marg0'> {data.main.temp}&deg;C </p></h2>
                                </>
                        }
                    </div>
                    <div className="box">
                        {
                            !data ?
                                <h1>loading...</h1>
                                :
                                <>
                                    <h3 className='marg0'>
                                        <p className='marg0'>lon='{data.coord.lon}'</p>
                                        <p className='marg0'>lat='{data.coord.lat}' </p>
                                    </h3>
                                    <p className='marg0'>pres: {data.main.pressure}hPa</p>
                                    <p className='marg0'>hum:{data.main.humidity}%</p>
                                </>
                        }
                    </div>
                    <div className="box">
                        {
                            !data ?
                                <h1>loading...</h1>
                                :
                                <>
                                    <h2 className='marg0'> weather:</h2>
                                    <img className='icon_bg' src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                                        alt="weather" />
                                    <h3 className='marg0'>{data.weather[0].description}</h3>
                                </>
                        }
                    </div>
                    <div className="box">
                        {
                            !data ?
                                <h1>loading...</h1>
                                : <>
                                    <h3 className='marg0'> max temp:
                                        <p className='marg0'>  {data.main.temp_max}&deg;C </p>
                                    </h3>
                                    <h3 className='marg0'> max temp:
                                        <p className='marg0'>   {data.main.temp_min}&deg;C</p>
                                    </h3>
                                </>
                        }
                    </div>
                    <div className="box">
                        {
                            !data ?
                                <h1>loading...</h1>
                                : <>
                                    <h2 className='marg0'> Wind
                                        <hr className='marg0' />
                                    </h2>
                                    <h3 className='marg0'>
                                        <p className='marg0'> deg: {data.wind.deg}&deg;C</p>
                                        <p className='marg0'> speed:  {data.wind.speed}m/s</p>
                                    </h3>
                                </>
                        }
                    </div>
                </div>
            </div>

        </div >

    )

}

export default Weather