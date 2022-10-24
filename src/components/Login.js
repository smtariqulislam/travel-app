import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Login = () => {

    const { signIn } =useContext(AuthContext)

    const handleSubmit= event =>{
        
        event.preventDefault();
        const form = event.target;
        console.log(event.target)
        const email =form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset()

        })
        .catch(error => console.error(error))

    }

    return (
        
        <div className="grid justify-center mb-2 mt-2">
            <div className="grid justify-center max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm text-gray-400">Sign in to access your account</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label for="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="gmail.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm">Password</label>
                                <Link  to='/register' className="text-xs hover:underline text-gray-400">Forgot password?</Link>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button className="w-full px-8 py-3 font-semibold rounded-md   bg-violet-400    hover:bg-sky-700 text-gray-900">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center text-gray-400">Don't have an account yet?
                            <Link  to='/register' className="hover:underline text-violet-400">Register</Link>.
                        </p>
                    </div>
                </form>
            </div>
      </div>
    );
};

export default Login;