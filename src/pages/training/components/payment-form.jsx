"use server";

import PaystackPop from '@paystack/inline-js';
import { supabase } from "@lib/supabase";

const PaymentForm = ({ entry, email }) => {
  const price = Math.floor(entry?.data?.actualPrice - (entry?.data?.actualPrice * (entry?.data?.discount || 0)) / 100);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      alert("Please provide a valid email address.");
      return;
    }

    if(price <=0){
      (async (transaction) => {
        const { error } = await supabase
          .from('learner_ledger')
          .insert({
            email:email,
            workshop_code:entry?.data?.workshopSecurityCode,
            paid: parseFloat(price),
            workshop_title:entry?.data?.title,
          })
        window.location.href = '/success';
      })()
    }else{
      const paystack = new PaystackPop();
      paystack.newTransaction({
        key: 'pk_live_5cc4fb269f5e4916a0da31e31476122aa25c0318',
        email: email,
        amount: price * 100, // Convert to kobo if the price is in Naira
        metadata: {
          custom_fields: [
            {
              display_name: "Customer Email",
              variable_name: "customer_email",
              value: email
            },
            {
              display_name: "Workshop Entry",
              variable_name: "workshop_entry",
              value: entry?.data?.title
            },
            {
              display_name: "Number of Days",
              variable_name: "days",
              value: entry?.data?.numberOfDays
            },
            {
              display_name: "Discount Applied",
              variable_name: "discount",
              value: entry?.data?.discount || 0
            }
          ]
        },
        onSuccess: async (transaction) => {
          const { error } = await supabase
            .from('learner_ledger')
            .insert({
              email:email,
              workshop_code:entry?.data?.workshopSecurityCode,
              paid: parseFloat(price),
              workshop_title:entry?.data?.title,
            })
          window.location.href = '/success';
        },
        onCancel: () => {
          console.log('Transaction was cancelled');
        }
      });
    }


  };




  return (
    <div className="border border-purple-400 bg-gradient-to-r from-pink-200 to-purple-300 rounded p-8">
      <h2 className="text-xl lg:text-2xl rounded font-semibold mb-4">{price <=0 ? "Secure your seat": "Payment Details"}</h2>
      <form id="paymentForm" className="mx-auto" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
            placeholder="Enter your email"
            value={email || ''}
            required
            disabled={!!email}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">Amount</label>
          <input
            type="tel"
            disabled
            value={`GHS ${price}`}
            id="amount"
            className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
            placeholder="Enter the amount"
          />
        </div>

        {!email && (
          <>
            <div className="mb-6">
              <label htmlFor="first-name" className="block text-gray-700 font-bold mb-2">First Name</label>
              <input
                type="text"
                id="first-name"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your first name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="last-name" className="block text-gray-700 font-bold mb-2">Last Name</label>
              <input
                type="text"
                id="last-name"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your last name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Phone number</label>
              <input
                type="tel"
                id="phoneNumber"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your phone number"
              />
            </div>
          </>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            className="border border-purple-400 bg-gradient-to-r from-pink-600 to-purple-800 w-full hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          >
            {price <=0? "Secure your seat" : "Pay"}
          </button>
        </div>
        <small className="text-purple-800 underline text-xs">
          <a href="/toc" target="_blank">By clicking on the above button you agree to our terms and conditions</a>
        </small>
      </form>
    </div>
  );
};

export default PaymentForm;
