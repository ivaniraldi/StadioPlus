import React from 'react'

export default function Card2({ image, bnb, price, title }) {
  return (
    <div className='flex justify-center mt-16'>
        <div className=''>
            <div className='flex justify-center'>

            <img src={image} alt="" className=""style={{
                borderRadius: "20px 20px 0px 0px"
            }}/>
            </div>

            <div className='text-center uppercase  mx-10 mt-2'
            style={{
                fontFamily: "Montserrat",
                fontSize: "18px",
            }}>
            <h1 className='font-bold'>{title}</h1>
            <h2 className='text-gray-500 font-bold mt-4' style={{fontSize:"16px"}}>{bnb}</h2>
            <h3 className='text-gray-500' style={{fontSize:"14px"}}>{price}</h3>
            </div>
        </div>
    </div>
  )
}
