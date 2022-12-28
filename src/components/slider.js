import React, { useState, useEffect } from 'react'
import i0 from '../data/i0.png'
import i1 from '../data/i1.webp'
import i2 from '../data/i2.jpeg'
import i3 from '../data/i3.jpeg'
import i4 from '../data/i4.jpeg'
import i5 from '../data/i5.jpeg'
import i6 from '../data/i6.jpeg'
import i7 from '../data/i7.jpeg'
import i8 from '../data/i8.jpeg'
import Img from './img'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

function Slider() {
    const [curr, setCurr] = useState(0)
    const data = [
                    <Img src={i0} />,
                    <Img src={i1} />,
                    <Img src={i2} />,
                    <Img src={i3} />,
                    <Img src={i4} />,
                    <Img src={i5} />,
                    <Img src={i6} />,
                    <Img src={i7} />,
                    <Img src={i8} />
                ]
    const len = data.length

    const prevSlide = () =>{
        setCurr(current => current === 0 ? len - 1 : current - 1)
    }

    const nextSlide = () =>{
        setCurr(current => current === len - 1 ? 0 : current + 1)
    }

    useEffect(() => {
     let interval = setInterval(() =>{
        if(curr >= 0){
            setCurr(current => current + 1)
        }
         if(curr === len - 1) {
            setCurr(0)
        }
     }, 3000)
    
      return () => {
        if(interval){
            clearInterval(interval)
        }
      }
    })
    
    if(!Array.isArray(data) || data.length === 0){
        return null
    }
  return (
    <div className='slider'>
            {
                data.map((item, index) =>{
                    return (
                    <div className={index === curr ? 'slide active' : 'slide'} style={{transform: `translateX(-${curr * 100}%)`}} key={index}>
                        {item}
                    </div>
                    )
                })
            }
            <div className='prev' onClick={prevSlide}>
                <FaAngleLeft />
            </div>
            <div className='next' onClick={nextSlide}>
                <FaAngleRight />
            </div>
            <div className='num'>
                {
                    data.map((item,index) =>{
                        return (
                            <button className={curr === index ? 'activate' : 'btn'} onClick={() => setCurr(index)} key={index}>{index+1}</button>
                        )
                    })
                }
            </div>
    </div>
  )
}

export default Slider