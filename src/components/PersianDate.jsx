import moment from 'moment-jalaali';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const weekDays =  [
    'یکشنبه',
    'دوشنبه',
    'سه شنبه',
    'چهارشنبه',
    'پنجشنبه',
    'جمعه',
    'شنبه',
]

const yearMonth =  [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
]





const PersianDate = () => {
    const [date , setDate] = useState('');
    const [time , setTime] = useState('');
    
    
    useEffect(() => {
        let m = moment()
        let finalDate = `${weekDays[m.day()]} ${m.jDate()} ${yearMonth[m.jMonth()]} ماه ${m.jYear()}`
        setDate(finalDate);
        setTime(m.format('HH:mm:ss'))

    }, []);


    return (
        <>
            <span className='d-block  date'>{date}</span>
            <span className='d-block  time'>ساعت : {time}</span>
        </>
    );
}

export default PersianDate;