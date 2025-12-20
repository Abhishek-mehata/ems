import { useState } from "react"

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password)
    }
    return (
        <div className="w-full mx-auto p-4  bg-black min-h-screen flex  justify-center text-white">
            <div className="w-full mx-auto p-4 max-w-md border border-gray-300 h-fit rounded-lg shadow-md mt-20">
                <h2 className="text-[27px] text-center font-[450]">Login</h2>

                <form onSubmit={(e) => submitHandler(e)}>

                    <input
                        type="email"
                        placeholder="Enter email here ..."
                        className=" text-[18px]  text-[#8f949c] bg-gray-800 rounded-md p-2 mt-4 w-full"

                        required
                        value={email}
                        onChange={(e) => {
                            console.log(e.target.value)
                            setEmail(e.target.value);
                        }}

                    />

                    <input
                        type="password"
                        placeholder="Enter password here ..."
                        className=" text-[18px]  text-[#8f949c] bg-gray-800 rounded-md p-2 mt-4 w-full"
                        required
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>

                </form>
            </div>
        </div>
    )
}

export default Login




// import { useState } from "react";

// const Login = ({ handleLogin }) => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const submitHandler = (e) => {
//         e.preventDefault();
//         handleLogin(email, password);
//     };

//     return (
//         <div className="w-full mx-auto p-4 bg-black min-h-screen flex justify-center items-center text-white">
//             <div className="w-full max-w-md p-6 border border-gray-700 rounded-xl shadow-lg bg-[#0f0f0f]">

//                 <h2 className="text-3xl text-center font-semibold mb-6">Login</h2>

//                 <form onSubmit={submitHandler}>
//                     <input
//                         type="email"
//                         placeholder="Enter email..."
//                         className="text-lg bg-gray-800 text-gray-300 rounded-md p-3 mt-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
//                         required
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />

//                     <input
//                         type="password"
//                         placeholder="Enter password..."
//                         className="text-lg bg-gray-800 text-gray-300 rounded-md p-3 mt-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
//                         required
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />

//                     <button
//                         type="submit"
//                         className="mt-6 bg-emerald-600 hover:bg-emerald-700 transition-all duration-200 font-semibold text-lg py-2 w-full rounded-full"
//                     >
//                         Log In
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;
