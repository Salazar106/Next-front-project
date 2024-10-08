import React from "react";
import AuthCard from "./components/auth/card";
import LoginForm from "./components/auth/loginForm";
import { headers } from 'next/headers';


export default function LoginPage() {

  const req = {
    headers: {
      cookie: headers().get('cookie'),
    },
};
    
    return (
      
        <AuthCard
          title='SING IN'
          description='Set your detail to login'
          urlFooter='Sing Up'
          urlLink='/auth/sing-up'
        >
          <LoginForm/>
        </AuthCard>
    )
}