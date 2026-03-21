import React, { useState } from 'react'
import '../auth.form.scss'
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
const Register = () => {


    const { loading, handleRegister } = useAuth()

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleRegister({username,email,password})
        navigate("/")
    }

    if(loading)
    {
        return (<main>Loading.....</main>)
    }

    const handle = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <main>
                <div className='form-container'>
                    <h1>Register</h1>
                    <form>

                        <div className="input-group">
                            <label htmlFor='username'>Username</label>
                            <input
                                onChange={(e) => { setUsername(e.target.value) }}
                                type="username" id="username" name='username' placeholder='Enter username' />
                        </div>
                        <div className="input-group">
                            <label htmlFor='email'>Email</label>
                            <input
                                onChange={(e) => { setEmail(e.target.value) }}
                                type="email" id="email" name='email' placeholder='Enter email' />
                        </div>
                        <div className="input-group">
                            <label htmlFor='email'>Password</label>
                            <input
                                onChange={(e) => { setPassword(e.target.value) }}
                                type="email" id="email" name='email' placeholder='Enter password' />
                        </div>

                        <button className='button primary-button ' onClick={handleSubmit}>Register</button>



                    </form>

                    <p>Already have an account? Please <Link to={"/login"}>Login</Link></p>
                </div>
            </main>
        </div>
    )
}

export default Register
