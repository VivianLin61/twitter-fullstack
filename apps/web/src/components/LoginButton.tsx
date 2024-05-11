'use client';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
export const LoginButton = ({ children }: { children: React.ReactNode }) => {
  const handleGoogleLogin = async (creds: CredentialResponse) => {
    console.log(creds);
  };

  return (
    <div>
      {children}
      <GoogleLogin onSuccess={handleGoogleLogin} />
    </div>
  );
};
