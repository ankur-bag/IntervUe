import React from 'react'
import '../auth.form.scss'
import { useNavigate,Link } from 'react-router'

const Register = () => {

    const navigate = useNavigate()

 const handle = (e)=>{
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
                <input type = "username" id="username" name='username' placeholder='Enter username'  />
            </div>
            <div className="input-group">
                <label htmlFor='email'>Email</label>
                <input type = "email" id="email" name='email' placeholder='Enter email'  />
            </div>
            <div className="input-group">
                <label htmlFor='email'>Password</label>
                <input type = "email" id="email" name='email' placeholder='Enter password'  />
            </div>

            <button className='button primary-button ' onClick={handle}>Register</button>



            </form>

            <p>Already have an account? Please <Link to={"/login"}>Login</Link></p>
        </div>
    </main>
    </div>
  )
}

export default Register
