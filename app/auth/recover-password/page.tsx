import React from "react";
import AuthCard from "@/app/components/auth/card";
import RecoverPasswordForm from "@/app/components/auth/recorverPassword";


export default function RecoverPasswordPage() {
    return (
        <AuthCard
            title='Update your Password'
            description='Set your new password to update profile'
            urlFooter='Return login'
            urlLink='/'
        >
            <RecoverPasswordForm/>
        </AuthCard>
    )
}