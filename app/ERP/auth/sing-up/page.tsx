import React from "react";
import AuthCard from "@/app/components/auth/card";
import SingUpForm from "@/app/components/auth/singUpForm";

export default function SingUpPage() {
  return (
    <AuthCard
      title='Sing Up'
      description='Set your detail to register'
      urlFooter='Sing In'
      urlLink='/'
    >
      <SingUpForm/>
    </AuthCard>  
  )
}