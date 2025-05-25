import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
function Registermodal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    // Perform registration logic here
    const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
    }
    await axios.post("http://localhost:4001/user/signup", userInfo)
    .then((res)=>{
        console.log(res.data)
        if(res.data){
            toast.success("Successfully registered ✅");
            setTimeout(() => {
              document.getElementById("my_modal_2").close();
              localStorage.setItem("users", JSON.stringify(res.data.user));
            }, 3000);
        }
        
    })
    .catch((err)=>{
        if(err.response){
            console.log(err)
            toast.error("Error:" + err.response.data.message);
        }
        
    })
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-2xl shadow-2xl p-8 w-full max-w-lg animate-slideIn">
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Create an Account
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div>
              <label className="block text-white font-semibold mb-1" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                {...register("name", { required: "Name is required" })}
                className="input input-bordered w-full bg-sky-50/10 text-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 rounded-md px-4 py-2"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* mobile */}
            <div>
              <label className="block text-white font-semibold mb-1" htmlFor="mobile">
                Mobile Number
              </label>
              <input
                id="mobile"
                type="text"
                placeholder="Enter your mobile number"
                {...register("mobile", { required: "Mobile number is required" })}
                className="input input-bordered w-full bg-sky-50/10 text-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 rounded-md px-4 py-2"
              />
              {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-white font-semibold mb-1" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
                className="input input-bordered w-full bg-sky-50/10 text-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 rounded-md px-4 py-2"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-white font-semibold mb-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="input input-bordered w-full bg-sky-50/10 text-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 rounded-md px-4 py-2"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
            </div>
            {/* confirm password */}
            <div>
              <label className="block text-white font-semibold mb-1" htmlFor="confirm_password">
                Confirm Password
              </label>
              <input
                id="confirm_password"
                type="password"
                placeholder="Confirm your password"
                {...register("confirm_password", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === getValues("password") || "Passwords do not match",
                })}
                className="input input-bordered w-full bg-sky-50/10 text-white border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 rounded-md px-4 py-2"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                className="btn bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium"
                onClick={() => document.getElementById('my_modal_2').close()}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary text-white font-semibold"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="text-sm text-center text-gray-900 mt-6">
            Already have an account?{" "}
            <a onClick={() => {document.getElementById('my_modal_1').showModal();
              document.getElementById("my_modal_2").close()}
            }
             className="text-sky-100 hover:underline font-medium cursor-pointer">
              Log in
            </a>
          </p>
        </div>
      </dialog>
    </div>
  );
}

export default Registermodal;
