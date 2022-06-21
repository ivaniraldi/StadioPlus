import React from 'react'

export default function Sponsor() {
  return (
    <div className="text-white mt-6">
    <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:flex' >
        <div style={{
                    fontFamily: "Druk Wide Bold",
                }}>
                <p style={{fontSize:"16px",
                wordBreak: "normal",
                fontFamily: "Montserrat"
            }}>DESCUBRE NUESTROS</p>
                <p style={{fontSize:"30px"}}>PARTNERTS</p>
                </div>

                <div className=' w-full text-gray-500 font-bold justify-around mt-10 grid grid-cols-2 md:flex sm:grid-cols-2 lg:flex' style={{marginLeft:"1vw"}}>
                    <a href="#" className='mt-2 sm:mt-2 md:mt-2 xl:mt-0 lg:mt-0'>
                    <span> <img src="https://i.ibb.co/8NWLBKh/facebook.png" alt="facebook" className='inline' style={{opacity:"0.7"}} />LOGOIMPSUM</span>
                    </a>
                    <a href="#" className='mt-2 sm:mt-2 md:mt-2 xl:mt-0 lg:mt-0'>
                    <span> <img src="https://i.ibb.co/8NWLBKh/facebook.png" alt="facebook" className='inline' style={{opacity:"0.7"}} />LOGOIMPSUM</span>
                    </a>
                    <a href="#" className='mt-2 sm:mt-2 md:mt-2 xl:mt-0 lg:mt-0'>
                    <span> <img src="https://i.ibb.co/8NWLBKh/facebook.png" alt="facebook" className='inline' style={{opacity:"0.7"}} />LOGOIMPSUM</span>
                    </a>
                    <a href="#" className='mt-2 sm:mt-2 md:mt-2 xl:mt-0 lg:mt-0'>
                    <span> <img src="https://i.ibb.co/8NWLBKh/facebook.png" alt="facebook" className='inline' style={{opacity:"0.7"}} />LOGOIMPSUM</span>
                    </a>
                    <a href="#" className='mt-2 sm:mt-2 md:mt-2 xl:mt-0 lg:mt-0'>
                    <span> <img src="https://i.ibb.co/8NWLBKh/facebook.png" alt="facebook" className='inline' style={{opacity:"0.7"}} />LOGOIMPSUM</span>
                    </a>

                </div>

        </div>
    </div>
</div>
  )
}
