import React from "react";
import AuthCard from "@/app/components/auth/card";
import ForgotPasswordForm from "@/app/components/auth/forgotPassword";

export default function ForgotPasswordPage() {
    return (
        <AuthCard
            title='Forgot Password'
            description='Set your email to recover'
            urlFooter='Return login'
            urlLink='/'
        >
            <ForgotPasswordForm/>
        </AuthCard> 
    )
}