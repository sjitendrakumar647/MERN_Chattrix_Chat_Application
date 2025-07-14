import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useAuth } from '../context/AuthProvider';

function Loginmodal() {
  const [authUser, setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      identifier: data.identifier, // can be email or mobile
      password: data.password,
    };
    await axios.post("http://localhost:4001/user/login", userInfo,{
      withCredentials: true,
    })
    .then((res)=>{
        console.log(res.data)
        if(res.data){
            toast.success("Login successful ✅");
            // alert("Login successful");
            setTimeout(() => {
              localStorage.setItem("users", JSON.stringify(res.data));
              document.getElementById("my_modal_1").close();
              setAuthUser(res.data);
            }, 3000);
        }
        
    })   
    .catch ((err) => {
      if (err.response) {
        console.error(err);
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("Login failed. Please try again.");
      }
    });
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 shadow-2xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-white mb-6 text-center">
            Login to Chattrix
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email or Mobile */}
            <div className="mb-5">
              <label htmlFor="identifier" className="block text-sm font-semibold text-white mb-1">
                Email or Mobile
              </label>
              <input
                type="text"
                className="input input-bordered w-full bg-sky-50/10 text-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 rounded-md px-4 py-2"
                placeholder="Enter email or mobile number"
                {...register("identifier", {
                  required: "Email or mobile is required",
                  pattern: {
                    value: /^(\d{10}|\S+@\S+\.\S+)$/,
                    message: "Enter a valid email or 10-digit mobile number",
                  },
                })}
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-semibold text-white mb-1">
                Password
              </label>
              <input
                type="password"
                className="input input-bordered w-full bg-sky-50/10 text-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 rounded-md px-4 py-2"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="btn bg-gray-200 hover:bg-gray-300 text-gray-700"
                onClick={() => document.getElementById("my_modal_1").close()}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Submit
              </button>
            </div>
          </form>
          <p className="text-sm text-center text-gray-900 mt-6">
            Don't have an account?{" "}
            <a
              onClick={() => {
                document.getElementById("my_modal_2").showModal();
                document.getElementById("my_modal_1").close();
              }}
              className="text-sky-100 hover:underline font-medium cursor-pointer"
            >
              Register
            </a>
          </p>
        </div>
      </dialog>
    </div>
  );
}

export default Loginmodal;
