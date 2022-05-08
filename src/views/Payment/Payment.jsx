import React, { useState } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { payment } from '../../services/UsersService';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import './Payment.scss'
import { useAuthContext } from "../../contexts/AuthContext";


const StripeForm = () => {
  const { state: { amount } } = useLocation()
  const { user } = useAuthContext();

  const stripe = useStripe();
  const elements = useElements();
  const { userId,calculateTotalPrice } = useParams()
  const navigate = useNavigate()
  

  if (!amount) {
    navigate('/')
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
    } else if (paymentMethod) {
      const { id } = paymentMethod
      payment({ amount: Number(amount) * 100, subUserId: userId, paymentId: id })
      .then(result => {
        navigate("/")
      })
    }
  };

  return (
    <>
      <form className='Payment' onSubmit={handleSubmit}>
        <div className="my-4">
        <h5 className='PaymentTitle'> Time to checkOut {user?.name}! </h5>
        </div>
        <CardElement className='CardElement'/>
        <h1 className='AmountToPay'>Amount that will be charged: {amount} USD</h1>
        <button className='PaymentButton' type="submit" disabled={!stripe || !elements}>
          Pay
        </button>
        
      </form>

    </>
  );
};

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payment = () => (
  <div className="">
    <Elements stripe={stripePromise}>
      <StripeForm />
    </Elements>
  </div>

);

export default Payment