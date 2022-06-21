import React from 'react'
import Card from '../Card/Card'

export default function Lanzamientos() {

    const lanzamientos = [
        {
            image: 'https://i.ibb.co/ZHH1vnk/Rectangle-9.png',
            bnb: '0.034 BNB',
            price: '($10.88 / 10.14€)',
            title: 'La Bombonera -"Temple Of World Football"',
        },
        {
            image: 'https://i.ibb.co/DkvFpkX/Rectangle-10.png',
            bnb: '5 BNB',
            price: '($1600.00 / 1490.50€)',
            title: 'El Semillero Del Mundo',
        },
        {
            image: 'https://i.ibb.co/2Pfc57L/Rectangle-11.png',
            bnb: '0.034 BNB',
            price: '($10.88 / 10.14€)',
            title: 'TOMBA LA BOMBA',
        }]


    return (
        <div className='text-white mt-24'>
            <div className='  ' style={{marginLeft:"6vw", marginRight:"6vw"}}>
                <div className=''>
                    <h3 style={{ fontFamily: "Montserrat", fontSize: "1.3vw" }}>DESCUBRE NUESTROS</h3>
                    <h3 style={{ fontFamily: "Druk Wide Bold", 
                    fontSize: "2.4vw",
                 }}>NUEVOS LANZAMIENTOS</h3>
                </div>
                <div className='flex justify-center'>

                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
                    {lanzamientos.map((lanzamiento, index) => (
                        <Card key={index} image={lanzamiento.image} bnb={lanzamiento.bnb} price={lanzamiento.price} title={lanzamiento.title} />
                    ))}
                </div>
                </div>
            </div>
        </div>
    )
}
