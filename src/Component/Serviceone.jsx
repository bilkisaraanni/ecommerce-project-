import React from 'react'

import Service from './Service'
import car from '../assets/car.png' 
import yearphon from '../assets/yearphon.png' 
import tikbar from '../assets/tikbar.png' 
import Container from './Container'

const Serviceone = () => {
  return (
   <>
   <Container>
    <div className='flex'>
            <Service
             img={car}
             head="FREE AND FAST DELIVERY"
             pera="Free delivery for all orders over $140"
            />

             <Service
             img={yearphon}
             head="24/7 CUSTOMER SERVICE"
             pera="Friendly 24/7 customer support"
            />

             <Service
             img={tikbar}
             head="MONEY BACK GUARANTEE"
             pera="We reurn money within 30 days"
            />
        </div>
   </Container>
   </>
  )
}

export default Serviceone