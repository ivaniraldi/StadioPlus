import React from 'react'

export default function Card({ image, bnb, price, title }) {
    return (
        <div className=' flex mx-3'>
            <div className='mt-10' style={{ paddingBottom: "23rem" }}>
                <div className="relative" style={{ width: "345px" }}>

                    <div className='' style={{
                        height: "350px",
                        width: "350px",
                        borderRadius: "20px",
                        backgroundColor: "#02265e",
                        position: "absolute",
                        zIndex: "-1",
                        clipPath: "polygon(30% 0, 100% 0, 100% 70%, 70% 100%, 0 100%, 0 30%)",
                    }}>
                    </div>
                    <div className=' w-full' style={{
                        position: "absolute",
                        top: "1%",
                    }}>
                        <div className='flex  '>
                            <div className=' mx-6' style={{ width: "100%" }}>
                                <img className='mt-4 mb-4' style={{ borderRadius: "8px" }} src={image} alt="" />
                            </div>
                        </div>


                        <div className='flex'>
                            <div className='mx-5'>
                                <div className='' style={{ fontFamily: "Montserrat" }}>
                                    <span className='font-bold uppercase' style={{ fontFamily: "Montserrat", fontSize: "18px", }}>{title}</span>
                                </div>

                                <div className='mt-4'>
                                    <p style={{ fontFamily: "Montserrat", fontSize: "16px", }} className="font-bold">{bnb}</p>
                                    <p style={{ fontFamily: "Montserrat", fontSize: "14px", }} className='text-gray-500'>{price}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
