import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const Home = () => {
    const user = useContext(AuthContext)
    console.log(user);
    return (
        <div className='flex justify-center items-center h-screen'>
            <h2 className='text-3xl'>This is Home</h2>
        </div>
    );
};

export default Home;