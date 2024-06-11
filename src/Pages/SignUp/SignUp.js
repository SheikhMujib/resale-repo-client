import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const {register, formState: { errors }, handleSubmit} = useForm();
    const {createUser} = useContext(AuthContext)
    const handleSignUp = (data) =>{
      console.log(data);
      createUser(data.email, data.password)
      .then(result =>{
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.log(error));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row px-24">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" {...register("name", {required: "Please insert your name"})}/>
          {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered" {...register("email", {required: "Please insert a valid email address", pattern: /^\S+@\S+$/i })}/>
          {errors.email && <p className='text-red-600'>{errors.email?.message}</p>} 
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password"  className="input input-bordered" {...register("password", {required: "Please insert a strong password", minLength: { value: 8, message: "Password must be 8 characters or long." }})}/>
          {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary text-white" value="SignUp"/>
        </div>
      </form>
        <div className='pb-7'>
        <p className='text-center'>Already have an account? <Link to="/login" className='text-secondary'>Login</Link></p>
        <div className="divider">OR</div>
        <div className='mx-5'>
            <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
        </div>
    </div>
  </div>
      </div>
    );
};

export default SignUp;