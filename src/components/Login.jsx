import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const Login = () => {

    const {loginUser} = useContext(AuthContext)
   
    const handleLogin = (e)=>{
        e.preventDefault()
        
      
        const email = e.target.email.value;
        const password = e.target.password.value;
    
        console.log( email, password);
        loginUser(email, password)
    }


    return (
        <div className="w-[40%] mx-auto min-w[500px] mt-6">
        <h1 className="text-3xl font-bold text-center">Please Login</h1>
        <form onSubmit={handleLogin}>
            
            <div>
                <p>Email</p>
                <input type="text" name="email" placeholder="Type here" className="input input-bordered w-full " />
            </div>
            <div>
                <p>Password</p>
                <input type="password" name="password" placeholder="Type here" className="input input-bordered w-full " />
            </div>
            
            <button type="submit" className="btn btn-primary w-full mt-2">Register</button>
        </form>
    </div>
    );
};

export default Login;