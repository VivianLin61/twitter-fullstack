'use client';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { graphqlClient } from 'clients/api';
import { verifyUserGoogleTokenQuery } from 'graphql/query/user';
import { useCallback } from 'react';
import { toast } from 'react-hot-toast';

export const LoginButton = ({ children }: { children: React.ReactNode }) => {
  const handleGoogleLogin = useCallback(async (creds: CredentialResponse) => {
    const googleToken = creds.credential;
    if (!googleToken) return toast.error('No token found');
    const { verifyGoogleToken } = await graphqlClient.request(
      verifyUserGoogleTokenQuery,
      {
        token: googleToken,
      }
    );
    if (verifyGoogleToken) {
      toast.success('Login Successful');
      localStorage.setItem('token', verifyGoogleToken);
    }
    // await queryClient.invalidateQueries(['getCurrentUser']);
  }, []);

  return (
    <div>
      {children}
      <GoogleLogin onSuccess={handleGoogleLogin} />
    </div>
  );
};
