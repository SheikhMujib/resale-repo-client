import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const {register, formState: { errors }, handleSubmit} = useForm();
    const {signIn, googleSignIn} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () =>{
      googleSignIn(googleProvider)
      .then(result =>{
        const user = result.user;
        console.log(user);
        navigate(from, {replace: true});
      })
      .catch(error => {
        console.log(error.message);
        setLoginError(error.message);
      });
  }
    
    const handleLogin = data => {
      console.log(data);
      setLoginError('');
      signIn(data.email, data.password)
      .then(result =>{
        const user = result.user;
        console.log(user);
        navigate(from, {replace: true});
      })
      .catch(error => {
        console.log(error.message);
        setLoginError(error.message);
      });
    }

    return (
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row px-24">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" {...register("email", {required: "Please insert a valid email address", pattern: /^\S+@\S+$/i })} className="input input-bordered"/>
          {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" {...register("password", {required: "Please insert a strong password", minLength: { value: 8, message: "Password must be 8 characters or long." }})} className="input input-bordered"/>
          {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
          <label className="label">
            <Link to="/" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary text-white" value="Login"/>
        </div>
        <div>
          {loginError && <p className='text-red-600'>{loginError}</p> }
        </div>
      </form>
        <div className='pb-7'>
        <p className='text-center'>New to Resale Repo? <Link to="/signup" className='text-secondary'>Create an account</Link></p>
        <div className="divider">OR</div>
        <div className='mx-5'>
            <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
        </div>
    </div>
  </div>
      </div>
    );
};

export default Login;