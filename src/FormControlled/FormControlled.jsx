import { useState } from "react";


const FormControlled = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePassChange = e => {
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email, password)
    }
    return (
        <div>
            <h1 className='text-red-400'>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-3 m-3'>
                    <input onChange={handleEmailChange} type="email" name='email' className='border-2 border-gray-600 rounded-lg' />
                    <input onChange={handlePassChange} type="password" name='password' className='border-2 border-gray-600 rounded-lg' required />
                    <button type="submit" className='bg-lime-500 text-white'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default FormControlled;