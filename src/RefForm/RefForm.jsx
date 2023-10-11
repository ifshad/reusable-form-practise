import { useRef } from "react";


const RefForm = () => {
    const emailRef = useRef();
    const passRef = useRef();
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log(emailRef.current.value)
        console.log(passRef.current.value)
    }
    
    return (
        <div>
            <h1 className='text-blue-500'>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-3 m-3'>
                    <input ref={emailRef} type="email" name='email' className='border-2 border-gray-600 rounded-lg' />
                    <input ref={passRef} type="password" name='password' className='border-2 border-gray-600 rounded-lg' required />
                    <button type="submit" className='bg-orange-500 text-white'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default RefForm;