//import react & usestate
import React, { useState } from "react";
//import google sign in component
import GoogleSignIn from "./GoogleSignIn";


function UserSelect() {
    // make a state variable, user, and a function to update it, setUser
    const [user, setUser] = useState<string>("");

    // make a function, handleUser, that takes in a string, and sets the user state to that string
    const handleUser = (userType: string) => {
        setUser(userType);
    };

    // make a function, handleSubmit, that takes in an event, and prevents the default action of the event
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    // return a form with three buttons, one for each user type, that calls the handleUser function when clicked
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button onClick={() => handleUser("student")}>Student</button>
                <button onClick={() => handleUser("parent")}>Parent</button>
                <button onClick={() => handleUser("teacher")}>Teacher</button>
            </form>

            {user ? <GoogleSignIn userType={user} /> : null}
        </div>
    );
};


export default UserSelect;

