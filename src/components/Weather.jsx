import React, { useEffect, useState } from 'react';
import PersianDate from './PersianDate';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherInfo } from '../redux/weather/weatherAction';

const Weather = () => {
    const [backMode , setBackMode] = useState('cold');
    const [cityName , setCityName] = useState('');
    const {data , error , loading} = useSelector((state)=>state.weatherReducer);

    const dispatch = useDispatch();

    const sendRequset = ()=>{
        dispatch(getWeatherInfo(cityName))
        setCityName('')
    }

    // ------------------------==============================
        // به دلیل وجود فیلتر شدن ای پی آی اب هوا تبدیل به یوزر شد
    // ------------------------==============================


    useEffect(() => {
        if(!data.name){
            return
        }

        let tepm = data.id
        if(tepm < 3){
            setBackMode('cold')
        }
        else if (tepm < 7){
            setBackMode('usual')
        }
        else if (tepm <= 10){
            setBackMode('warm')
        }
    }, [data]);


    return (
        <div className={`app pt-4 d-flex align-items-center vh-100 justify-content-center flex-column container-fluid back_${backMode}`}>
            <span className='fs-1  mb-5 fw-bold p-2 px-4' style={{color:'#fff',background:' linear-gradient( 90deg, rgba(195, 224, 209, 0.4), rgba(0, 209, 255, 0.4) )',border:'2px solid #ffffff6e',borderRadius:10}}>وضعیت آب و هوا</span>
            <div className="main_box mx-auto px-4">
                <div className='row justify-content-center mb-3 py-3 pt-4'>
                    <div className='col-10 col-md-9 '>
                        <form className='d-flex justify-content-between w-100'>
                            <input type="text" value={cityName} onChange={(e)=>{setCityName(e.target.value)}}
                            className='search_input w-100 text_color placeholder_color' 
                            placeholder={data.name || 'نام شهر یا کشور'}
                            />
                        </form>
                    </div>
                </div>

                <span className='d-block text-white fs-4 mb-2 fw-bold w-100'>امروز :</span>
                <div className='row justify-content-center bg-white dateLog py-3 pt-4'>
                    <div className='col-11 '>
                        <h3 className='DateContainer text_color'>
                            <PersianDate/>
                        </h3>
                    </div>
                </div>

                {loading ? 
                    <div className="spinner-border text-secondary d-flex justify-content-center mx-auto mt-5" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                : data.name ? 
                    (<>
                        <span className='d-flex justify-content-between text-white fs-4 mt-5 mb-2 fw-bold w-100'>
                            <span className='d-flex text-white fs-4 mb-2 fw-bold '>دمای هوا :</span>
                            <span className='d-flex text-white fs-4 mb-2 justify-content-center w-50 fw-bold '>وضعیت هوا :</span>
                        </span>
                        <div className='row justify-content-center bg-white dateLog py-3 pt-4'>
                            <div className='col-6'>
                                <div className='temprature_box text_color text-center'>
                                <span className='fs-4 '>{data.name}</span> 
                                </div>
                            </div>
                            <div className='col-5'>
                                <h1 className='text-center fs-3 lathin_text text_color '>{backMode}</h1>
                            </div>
                        </div>
                    </>)
                : error ? (
                        <div className='row justify-content-center bg-white dateLog mt-5 py-3 pt-4' style={{marginTop:100}}>
                            <div className='col-6'>
                                <h1 className='text-center fs-4 text_color '>یک مشکل به وجود آمده !</h1>
                            </div>
                        </div> )
                :  ( 
                        <div className='row justify-content-center bg-white dateLog py-3 pt-4' style={{marginTop:100}}>
                            <div className='col-6'>
                                <h1 className='text-center fs-4 text_color'>لطفا اسم شهر را وارد کنید !</h1>
                            </div>
                        </div> )
                }


                <button className="btn fw-bold text_color bg-white d-block w-50 mx-auto sendData"
                 onClick={sendRequset}   >ارسال درخواست</button>
            </div>

        </div>
    );
}

export default Weather;