import { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleLogin = (e) => {
        e.preventDefault()
        if (username.trim() !== '' && password.trim() !== '') {
            setUser({ username, password });
        }
    }
    return (
        <div>
            <h2>User Details</h2>
            <input type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username" />{' '}
            <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password" /> {' '}
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login