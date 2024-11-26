import React,{useState} from 'react'


const Login = ({handleLogin}) => {
    // console.log(handleLogin)
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const submitHandler= (e)=>{
        e.preventDefault();
        handleLogin(email,password);
        setemail("")
        setpassword("")
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className='flex flex-col items-center justify-center'>
                <input value={email} onChange={(e)=>{
                    setemail(e.target.value)
                }} required className=' border-2 outline-none bg-transparent border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400' type="email"  placeholder='Enter your Email'/>
                <input value={password} onChange={(e)=>{setpassword(e.target.value)}} required className=' border-2 outline-none bg-transparent border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400 mt-4' type="password" placeholder='Enter password' />
                <button className=' mt-5 text-black border-none outline-none  bg-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-white'>Login in</button>
            </form>

        </div>
    </div>
  )
}

export default Login