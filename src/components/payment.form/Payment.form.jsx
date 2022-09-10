import { useState } from "react"
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import { useSelector } from "react-redux"
import {selectCartTotal} from "../../store/cart/cart.selector"
import {selectCurrentUser} from "../../store/user/user.selector"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button"
import { PaymentFormConatiner, FormContainer} from "./Payment.form.styles"

const PaymentForm = () => {

    const stripe = useStripe()
    const elements = useElements()
    const amount = useSelector(selectCartTotal)
    const currentUser = useSelector(selectCurrentUser)
    const [isProcessingPayment, setIsProcessingPayment] = useState(false)

    const paymentHandler = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }
        
        setIsProcessingPayment(true)

        const response = await fetch('/.netlify/functions/create-payment-intent', {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({amount: amount * 100 }),}).then((res) => { return res.json() } )

            const clientSecret = response.paymentIntent.client_secret;

            console.log(clientSecret)

            const paymentResult = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: currentUser ? currentUser.displayName : "Guest"
                    }
                }
            })

            setIsProcessingPayment(false)


            if(paymentResult.error) {
                alert(paymentResult.error)
            }
            else {
                if(paymentResult.paymentIntent.status === "succeeded") {
                    alert("Payment Succesful")
                }
            }
            
        }
  return (
    <PaymentFormConatiner>
        <FormContainer onSubmit={paymentHandler} >
            <h2>CREDIT Card Payment:</h2>
        <CardElement/>
        <Button isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted} >Pay Now</Button>
        </FormContainer>
    </PaymentFormConatiner>
  )
}

export default PaymentForm