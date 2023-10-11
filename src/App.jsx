import './App.css'
import FormControlled from './FormControlled/FormControlled';

function App() {
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e.target.password.value)
  }
  return (
    <>
      <h1 className='text-green-500'>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-3 m-3'>
          <input type="email" name='email' className='border-2 border-gray-600 rounded-lg' />
          <input type="password" name='password' className='border-2 border-gray-600 rounded-lg' required />
          <button type="submit" className='bg-violet-500 text-white'>Submit</button>
        </div>
      </form>
      <FormControlled></FormControlled>
    </>
  )
}

export default App
