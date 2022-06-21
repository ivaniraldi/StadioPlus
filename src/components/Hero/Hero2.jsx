import React from 'react'

export default function Hero2() {
    return (
        <div>
            <div className=' flex justify-center mt-8'>
                <div className=' flex justify-center mx-20'>
                    <div>
                        <img style={{
                            position: "relative",
                            zIndex: "-1"
                        }} className="w-full " src="https://i.ibb.co/wSf8TRR/Rectangle-28.png" alt="Rectangle-28" />

                    </div>
                    <img style={{
                        position: "absolute",
                        bottom: "6.7vw",
                        zIndex: "-1",
                    }} src="https://i.ibb.co/n1wDXbJ/Group-39.png" alt="Group-39"></img>

                    <div style={{
                        position: "absolute",
                        top: "17vw",
                        textAlign: "center",
                        color: "white",
                        zIndex: "2",
                        fontFamily: "Abhaya Libre SemiBold",
                        fontSize: "3.6vw",
                    }}>
                        <p>YA ESTÁ AQUÍ EL NUEVO <br /> TOKEN DE <span style={{ color: "#D6302A" }}>STADIOPLUS</span> </p>
                    </div>
                    <div style={{
                        position: "absolute",
                        top: "11vw",
                        textAlign: "center",
                        zIndex: "1",
                        fontFamily: "Druk Wide Bold",
                        fontSize: "8vw",
                        transform: "scale(0.7, 1)"
                    }}>
                        <p><span className='' style={{
                            color: "#ffffff00",
                            WebkitTextStroke: "2px #D6302A",
                        }}>STADIOPLUS</span> </p>
                    </div>
                    <div style={{
                        position: "absolute",
                        top: "29vw",
                        textAlign: "center",
                        zIndex: "1",
                        fontFamily: "Motserrat",
                        fontSize: "1.5vw",
                    }}>
                        <p><span className='text-gray-300' style={{}}>El token que revolucionará el modelo de monetización del <br /> mundo del deporte y los eSports gracias a los NFTs.</span> </p>
                    </div>
                    <div style={{
                        position: "absolute",
                        top: "38vw",
                        textAlign: "center",
                        zIndex: "1",
                        fontFamily: "Motserrat",
                        fontSize: "1.5vw",
                    }}>
                        <a href="/" className='font-semibold' style={{
                            backgroundColor: '#D6302A',
                            paddingRight: '2vw',
                            paddingLeft: '2vw',
                            paddingTop: '9px',
                            paddingBottom: '9px',
                            alignItems: 'center',
                            textAlign: 'center',
                            color: "#fff",
                            borderRadius: "3px",
                            fontFamily: "Montserrat",
                            boxShadow: "0px 0px 30px #D6302A",
                        }}>MÁS INFORMACIÓN</a>
                    </div>

                </div>
            </div>
            <div className='flex justify-center mt-8'>
                <div className='' style={{
                    backgroundColor: 'rgba(34, 33, 42, 0.2)',
                    backdropFilter: 'blur(10px)',
                    width: '70%',
                    height: '100%',
                    borderRadius: '5px',
                    boxSizing: 'border-box',
                    border: '1px solid #ffffff23',
                }}>
                    <div className='px-12 py-10 text-center' style={{
                        fontFamily: "Montserrat",
                        fontSize: "1.3vw",

                    }}>
                        <p className='text-gray-400'>“La inversión en <span className="font-bold text-white"> criptoactivos</span> no está regulada, puede no ser adecuada para inversores minoristas y perderse la totalidad del importe invertido” “Es importante leer y comprender los riesgos de esta inversión, que se explican detalladamente en esta ubicación”.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
