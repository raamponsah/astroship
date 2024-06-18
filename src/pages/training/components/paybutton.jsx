import React, { useState, useEffect } from "react";
import { PaystackButton } from "react-paystack";
import { supabase } from '../../../lib/supabase.js';

const PaystackCheckout = React.memo(({ amount, email }) => {
  const publicKey = "pk_test_27857813fd279a181392262255e5625370126f03";

  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSession() {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          setError(error.message);
          return;
        }
        setSession(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchSession();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!publicKey) {
    console.error("Paystack public key is missing!");
    return null; // Render nothing if public key is missing
  }

  const componentProps = {
    email: session?.user?.email || email || "default@email.com",
    amount: amount * 100, // Paystack accepts amount in kobo
    publicKey,
    text: "Pay Now",
    onSuccess: () => alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return <PaystackButton {...componentProps} />;
});

export default PaystackCheckout;
