import { useEffect } from 'react';
import { supabase } from '../../../lib/supabase';

export default function MagicLinkRedirect() {
  useEffect(() => {
    async function handleMagicLinkAuthentication() {
      const url = new URL(window.location.href)
      const access_token = url.searchParams.get('access_token')

      if (access_token) {
        const { error } = await supabase.auth.signIn({ access_token })
        if (error) {
          console.error('Error logging in with magic link:', error.message)
        } else {
          window.location.href = ('/dashboard')
        }
      }
    }

    handleMagicLinkAuthentication();
  }, []);

  return <div>Redirecting...</div>;
}
