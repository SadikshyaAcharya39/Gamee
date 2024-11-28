// "use client"
// import React, { useEffect, useState } from 'react'
// import { useRouter } from 'next/navigation'
// import toast from "react-hot-toast";
// import axios from "axios";
// import Link from 'next/link';
// import { Toaster } from 'react-hot-toast'


// const SignUpForm = () => {
//     const router = useRouter();
//     const [user, setUser] = React.useState({
//         email: "",
//         password: "",
//         username: "",
//     })
//     const [buttonDisabled, setButtonDisabled] = React.useState(false);
//     const [loading, setLoading] = React.useState(false)

//     const onSignup = async () => {
//         try {
//             setLoading(true);
//             const response = await axios.post("/api/v1/users/signup", user);
//             console.log("Signup success", response.data);
//             toast.success("successfully sign up.")
//             router.push("/sign-in");
            
//         } catch (error:any) {
//             toast.error(error.message);
//         }finally {
//             setLoading(false);
//         }
//     }

//     useEffect(() => {
//         if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
//             setButtonDisabled(false);
//         } else {
//             setButtonDisabled(true);
//         }
//     }, [user]);

//     return (<>
//         <div className="bg-grey-200 min-h-screen flex flex-col">
//             <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
//                 <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
//                     <h1 className="mb-8 text-3xl text-center">Sign up</h1>
//                     <input
//                         value={user.username}
//                         onChange={(e) => setUser({...user, username: e.target.value})}
//                         type="text"
//                         className="block border border-grey-light w-full p-3 rounded mb-4"
//                         name="fullname"
//                         placeholder="User Name" />

//                     <input
//                         value={user.email}
//                         onChange={(e) => setUser({...user, email: e.target.value})}
//                         type="text"
//                         className="block border border-grey-light w-full p-3 rounded mb-4"
//                         name="email"
//                         placeholder="Email" />

//                     <input
//                         value={user.password}
//                         onChange={(e) => setUser({...user, password: e.target.value})}
//                         type="password"
//                         className="block border border-grey-light w-full p-3 rounded mb-4"
//                         name="password"
//                         placeholder="Password" />
//                     <input
//                         type="password"
//                         className="block border border-grey-light w-full p-3 rounded mb-4"
//                         name="confirm_password"
//                         placeholder="Confirm Password" />

//                     <button
//                         type="submit"
//                         className="w-full text-center py-3 rounded bg-purple-900 text-white hover:bg-purple-900 focus:outline-none focus:bg-purple-900 my-1 cursor-pointer" onClick={onSignup}
//                     >Create Account</button>

//                     <div className="text-center text-sm text-grey-dark mt-4">
//                         By signing up, you agree to the
//                         <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
//                             Terms of Service
//                         </a> and
//                         <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
//                             Privacy Policy
//                         </a>
//                     </div>
//                 </div>
//                 <div className="text-grey-dark mt-6">
//                     Already have an account?
//                     <Link className="no-underline border-b border-blue text-blue" href="/sign-in">
//                         Log in
//                     </Link>.
//                 </div>
//             </div>
//             <Toaster/>
//         </div>
//     </>)
// }
// export default SignUpForm


"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

const SignUpForm = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/v1/users/signup", user);
      console.log("Signup success", response.data);
      toast.success("Successfully signed up.");
      router.push("/sign-in");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      <div className="bg-orange-500 min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center text-orange-600">Sign Up</h1>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              type="text"
              className="block border border-orange-400 w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="User Name"
            />

            <input
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="text"
              className="block border border-orange-400 w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password"
              className="block border border-orange-400 w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />

            <input
              type="password"
              className="block border border-orange-400 w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-orange-600 text-white hover:bg-orange-700 focus:outline-none focus:bg-orange-700 my-1 cursor-pointer"
              onClick={onSignup}
              disabled={buttonDisabled}
            >
              {loading ? "Processing..." : "Create Account"}
            </button>

            <div className="text-center text-sm text-gray-600 mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-orange-500 text-orange-600"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className="no-underline border-b border-orange-500 text-orange-600"
                href="#"
              >
                Privacy Policy
              </a>
              .
            </div>
          </div>
          <div className="text-white mt-4">
            Already have an account?{" "}
            <Link
              className="border-b border-white hover:text-orange-300 font-bold"
              href="/sign-in"
            >
              Log in
            </Link>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default SignUpForm;
