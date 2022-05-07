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

const StripeForm = () => {
  const { state: { amount } } = useLocation()

  const stripe = useStripe();
  const elements = useElements();
  const [user, setUser] = useState();
  const { userId,calculateTotalPrice } = useParams()
  const navigate = useNavigate()

  if (!amount) {
    navigate('/')
  }

  console.log(calculateTotalPrice);

  /* useEffect(() => {
    getUserDetail(userId)
      .then(user => setUser(user))
  }, []) */

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
      console.log(error)
    } else if (paymentMethod) {
      const { id } = paymentMethod
      payment({ amount: Number(amount) * 100, subUserId: userId, paymentId: id })
      .then(result => {
        navigate("/")
      })
    }
  };

  return (
    <form className='Payment' onSubmit={handleSubmit}>
      <div className="my-4">
       <h5>Pay your shopping card {user?.email} </h5>
      </div>
      <CardElement/>
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
    </form>
  );
};

console.log(process.env.REACT_APP_STRIPE_KEY)
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payment = () => (
  <div className="">
    <Elements stripe={stripePromise}>
      <StripeForm />
    </Elements>
  </div>

);

export default Payment