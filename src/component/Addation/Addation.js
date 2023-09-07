import React from 'react'
import { Container } from 'react-bootstrap'
import './addationn.css'
import { AiFillCar } from 'react-icons/ai'
import { BiMoney } from 'react-icons/bi'
import { VscDebugRestart } from 'react-icons/vsc'
import {AiOutlineClockCircle} from 'react-icons/ai'
function Addation() {
  return (
    <>
    <Container>
    <div className='row py-4 mt-5 bg-light'>
        <div className='col col-lg-3 bg-dark py-4'>
           <AiFillCar className='t text-danger mt-2' />
           <div className='text-light mt-3'>
            <h5 >FREE SHIPPING</h5>
            <p className='lead'>Suffered Alteration in Some Form</p>
           </div>
        </div>
        <div className='col col-lg-3 bg-dark py-4'>
            <BiMoney className='t text-danger mt-2'  />
            <div className='text-light mt-3'>
                <h5>CACH ON DELIVERY</h5>
                <p className='lead'>The Internet Tend To Repeat</p>
            </div>

        </div>
        <div className='col col-lg-3 bg-dark py-4'>
            <VscDebugRestart className='t text-danger my-2 '  />
            <div className='text-light mt-3'>
                <h5>45 DAYS RETURN</h5>
                <p className='lead'>Making it Look Like Readable</p>
            </div>

        </div>
        <div className='col col-lg-3 bg-dark py-4'>
            <AiOutlineClockCircle className='t text-danger mt-2'  />
            <div className='text-light mt-3'>
                <h5>OPENING ALL WEEK</h5>
                <p className='lead'>8AM - 09PM</p>
            </div>
        </div>

      </div>
    </Container>
     
     </>
  )
}

export default Addation
