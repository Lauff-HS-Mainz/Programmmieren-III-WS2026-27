export default function Login() {
    return (
        <div className="login-container">
            <h1>Login</h1>
            <p>Please enter your credentials to log in.</p>
            <p>Username: <input type="text" name="username" /></p>
            <p>Password: <input type="password" name="password" /></p>
            <button>Login</button>
        </div>
    );
}