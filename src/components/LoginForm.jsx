import { useState } from 'react'

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    function ShowPassword() {
    if (showPassword) {
        setShowPassword(false)
    } else {
        setShowPassword(true)
    }
    }
    return (
    <>
    <div>
        <input className="input" placeholder="Email" />
    </div>
    <div>
        <input className="input" placeholder="password" type={showPassword ? 'text' : 'password'} />
        <button className="show-button" onClick={ShowPassword}>{showPassword ? 'Hide' : 'Show'}</button>
    </div>
    <div>
        <button className="login-button">Log In</button>
        <button className="signup-button">Sign Up</button>
    </div>
    </>
    )
}

export default LoginForm