import React from 'react';
import { useNavigate } from "react-router-dom";

import User from "../../auth/User";


function Login ({logInApp}) {
    let navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const loginCredentials = {
            name: formData.get('name'),
            password: formData.get('password')
        }

        axios.post('api/login', loginCredentials)
             .then(res => {
                if(res.data.error){
                    console.log(res.data.error)
                } else {
                    User.authenticated(res.data, () => {
                        logInApp();
                        navigate("/");
                    });
                }
        });
    }

    return (
        <div className="container mb-5">
            <div className="row justify-content-center mb-5">
                <form className="col-10 col-md-6" onSubmit={e => handleSubmit(e)}>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" className="text-input w-100 mb-3" type="text"/>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" className="text-input w-100 mb-3" type="password"/>
                    <button className="mx-auto w-25 d-block text-center submit" name="submit" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
    
}

export default Login;