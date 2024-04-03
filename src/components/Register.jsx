import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";


const Register = () => {
    const {registerUser, setUser} = useContext(AuthContext)
    const [error, setError]= useState('')
    const [emailError, setEmailError] = useState('')

    const handleRegister = (e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;





        if(!/@gmail\.com$/.test(email)){
            setEmailError('Email must end with @gmail.com')
            return
        }
        if(password.length < 6){
            setError("Password must be 6 characters")
            return
        }
        if(password !== confirmPassword){
            setError("Password didn't match")
            return
        }
        if(!/\d{2,}$/.test(password)){
            setError('Password must be end with at least 2 number')
            return
        }
        if(!/[@#%^&]/.test(password)){
            setError('Please add a special characters like @,#,%,&')
            return
        }
        setEmailError("")
        setError("")


        console.log(name, photo, email, password, confirmPassword);
        registerUser(email, password)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => setError(error.message))
    }



    return (
        <div className="w-[40%] mx-auto min-w[500px] mt-6">
            <h1 className="text-3xl font-bold text-center">Register Form</h1>
            <form onSubmit={handleRegister}>
                <div>
                    <p>Name</p>
                    <input type="text" name="name" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div>
                    <p>Photo</p>
                    <input type="text" name="photo" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div>
                    <p>Email</p>
                    <input type="text" name="email" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                {
                    emailError && <small className="text-red-500">{emailError}</small>
                }
                <div>
                    <p>Password</p>
                    <input type="password" name="password" placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div>
                    <p>Confirm Password</p>
                    <input type="password" name="confirmPassword" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                {
                    error && <small className="text-red-500">{error}</small>
                }
                <button type="submit" className="btn btn-primary w-full mt-2">Register</button>
            </form>
        </div>
    );
};

export default Register;