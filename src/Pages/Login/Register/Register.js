import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();


    const navigateLogin = event => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }

    return (
        <div className='register-form'>
            <h2 className='text-center text-primary mb-4'>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your Email' />
                <input type="password" name="password" id="" placeholder='Your Password' />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-danger fw-bold text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;