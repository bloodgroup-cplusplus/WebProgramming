import React from 'react'

export default function CheckoutForm() {

    const handleSubmit=async(e)=>{
        e.preventDefault();
    };

  return (
    <form id = "payment-form" onSubmit={handleSubmit}>
        <button disabled={isProcessing} id="submit">
            <span id="button-text">
                {isProcessing? "Processing ...": "Pay now"}
            </span>
        </button>
        {/* Show any error or success messages */}

        {message && <div id="payment-message">{message}</div>}
    </form>
  )
}
