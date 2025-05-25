import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import axios from 'axios';
// import { useAuth } from '../context/AuthProvider'; 

function Loginmodal() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();

  // const [authUser, setAuthUser] = useAuth(); 

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo);
      if (res.data) {
        toast.success("Login successful ✅");
        setTimeout(() => {
          localStorage.setItem("users", JSON.stringify(res.data.user));
          // setAuthUser(res.data.user);
          document.getElementById("my_modal_1").close(); // ✅ fixed modal ID
        }, 3000);
      }
    } catch (err) {
      if (err.response) {
        console.error(err);
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("Login failed. Please try again.");
      }
    }
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 shadow-2xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-white mb-6 text-center">
            Login to Chattrix
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className="mb-5">
              <label htmlFor="email" className="block text-sm font-semibold text-white mb-1">
                Email
              </label>
              <input
                type="email"
                // id="email"
                className="input input-bordered w-full bg-sky-50/10 text-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 rounded-md px-4 py-2"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-semibold text-white mb-1">
                Password
              </label>
              <input
                type="password"
                // id="password"
                className="input input-bordered w-full bg-sky-50/10 text-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 rounded-md px-4 py-2"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
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
            <a onClick={() => {document.getElementById('my_modal_2').showModal();
              document.getElementById("my_modal_1").close()}
            }
             className="text-sky-100 hover:underline font-medium cursor-pointer">
              Register
            </a>
          </p>
        </div>
      </dialog>
    </div>
  );
}

export default Loginmodal;
