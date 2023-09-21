//import react
import React from "react";
import { GoogleLogin } from "@react-oauth/google";


interface GoogleSignInProps {
    userType: string; // Assuming you pass the user type as a prop
}

function GoogleSignIn({ userType }: GoogleSignInProps ) {
    const responseMessage = (response: any) => {
        console.log(response);
    };
    const errorMessage = (error: any) => {
        console.log(error);
    };
    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            <GoogleLogin
                onSuccess={() => {
                    responseMessage("Success");
                }}
                onError={() => {
                    errorMessage("Error");
                }}
            />
        </div>
    )
};


export default GoogleSignIn;