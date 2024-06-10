import React from 'react';

export default function PaymentForm() {
  function payWithPaystack(email, amount) {
    // Paystack payment logic
    console.log('Processing payment...');
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector('#email').value;
    const amount = form.querySelector('#amount').value;
    payWithPaystack(email, amount);
  }

  return (
    <form id="paymentForm" class="max-w-lg mx-auto">
    <div class="mb-6">
      <label for="email" class="block text-gray-700 font-bold mb-2">Email Address</label>
      <input type="email" id="email" class="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter your email" required />
    </div>
    <div class="mb-6">
      <label for="amount" class="block text-gray-700 font-bold mb-2">Amount</label>
      <input type="tel" id="amount" class="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter the amount" required />
    </div>
    <div class="mb-6">
      <label for="first-name" class="block text-gray-700 font-bold mb-2">First Name</label>
      <input type="text" id="first-name" class="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter your first name" />
    </div>
    <div class="mb-6">
      <label for="last-name" class="block text-gray-700 font-bold mb-2">Last Name</label>
      <input type="text" id="last-name" class="w-full border rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter your last name" />
    </div>
    <div class="flex justify-center">
      <button type="submit" onclick="payWithPaystack()" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">Pay</button>
    </div>
  </form>
  
  );
}
