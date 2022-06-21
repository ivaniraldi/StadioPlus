import React from 'react'
import Card2 from '../Card/Card2'

export default function Lanzamientos2() {

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
                    <h3 style={{ fontFamily: "Montserrat", fontSize: "16px" }}>DESCUBRE NUESTROS</h3>
                    <h3 style={{ fontFamily: "Druk Wide Bold", fontSize: "30px" }}>NUEVOS LANZAMIENTOS</h3>
                </div>
                <div className='flex justify-center'>

                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
                    {lanzamientos.map((lanzamiento, index) => (
                        <Card2 key={index} image={lanzamiento.image} bnb={lanzamiento.bnb} price={lanzamiento.price} title={lanzamiento.title} />
                    ))}
                </div>
                </div>
                <div className='flex justify-end mt-8'>
                <a href="/" className='font-semibold' style={{
                            backgroundColor: '#D6302A',
                            paddingRight: '3vw',
                            paddingLeft: '3vw',
                            paddingTop: '9px',
                            paddingBottom: '9px',
                            alignItems: 'center',
                            textAlign: 'center',
                            color: "#fff",
                            borderRadius: "3px",
                            fontFamily: "Montserrat",
                            boxShadow: "0px 0px 30px #D6302A",
                        }}>VER TODOS</a>

                </div>
            </div>
        </div>
    )
}
