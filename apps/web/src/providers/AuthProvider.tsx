'use client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <GoogleOAuthProvider clientId='33819804526-d7dibq9beo4i03agfoq5padfjts1c8so.apps.googleusercontent.com'>
      {children}
    </GoogleOAuthProvider>
  );
};
