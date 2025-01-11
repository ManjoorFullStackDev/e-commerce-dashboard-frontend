import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { admin_login } from "../../store/Reducers/authReducer";
const AdminLogin = () => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(admin_login(userData));
    console.log(userData);
  };
  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center text-zinc-500">
      <div className="w-[350px] text-[#fffff] p-2">
        <div className="bg-violet-200 p-4 rounded-md">
          <div className="h-[70px] flex justify-center items-center ">
            <div className="w-[180px] h-[50px]">
              <img
                className="w-full h-full"
                src="http://localhost:3000/logo.png"
              />
            </div>
          </div>
          <form onSubmit={onSubmitHandler}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                className="px-3 py-2 outline-none border
                border-slate-700
                bg-transparent
                rounded-md"
                type="email"
                name="email"
                onChange={inputHandler}
                value={userData.email}
                placeholder="Email"
                id="email"
                required
              />
            </div>

            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                className="px-3 py-2 outline-none border
                border-slate-700
                bg-transparent
                rounded-md"
                type="password"
                onChange={inputHandler}
                value={userData.password}
                name="password"
                placeholder="Password"
                id="password"
                required
              />
            </div>
            <button className="bg-slate-800 w-full hover:shadow-blue-300 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
