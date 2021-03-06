import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { payments } from '../actions/CartAction';
import Checkouts from '../components/Checkouts';

export default function Payment(props) {

    const paymentcheck =useSelector(state=>state.UseSigin)
     const {userInfo}= paymentcheck
     if (!userInfo) {
           props.history.push('/sigin')         
     }

    const [payment,setpayment]= useState('paypal')
    // const [paymentss,setpayments]= useState('pay')
    const dispatch =useDispatch()
   
    const submithandler=(e)=>{
        e.preventDefault()
        dispatch(payments({payment}))
        props.history.push('/placeorder')

    }

  return (
      <div>
       <Checkouts step1 step2 step3/>
       <form className='form' onSubmit={submithandler}>
           <div>
               <h1>Payment</h1>
           </div>
            <div>
                <div>
                   
                 <input  type='radio' id='paypal' value='paypal' name="payment" required checked onChange={(e)=>setpayment(e.target.value)}/>
                 <label htmlFor='paypal' >Paypal</label>

              
                </div>
            <div>
                <div>
                   
                 <input type='radio' id='Stripe' value='Stripe' name="payment" required onChange={(e)=>setpayment(e.target.value)}/>
                 <label htmlFor='Stripe'>Stripe</label>
                </div>
            </div>
            <button type='submit'>continue</button>
            </div>
            
       </form>
       </div>

  

  )
}
