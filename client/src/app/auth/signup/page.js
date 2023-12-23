"use client";

import Button from "@/app/components/button";
import Input from "@/app/components/input";
import { useState } from "react";
export default function Signup() {
  const [userinfo, setUserinfo] = useState({
    email: '',
    password: ''
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserinfo(info => ({...info, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('userinfo', userinfo)
  }

  return (
    <form onSubmit={handleSubmit} className="p-2">
      <h1 className="text-blue-500 text-xl text-center">Signup Page</h1>
      <div>
        <Input type="email" name="email" value={userinfo.email} onChange={handleOnChange} placeholder="example@company.com" label="Email address" containerClassName="mt-4" />
        <Input type="password" name="password" value={userinfo.password} onChange={handleOnChange} placeholder="password" label="Password" containerClassName="mt-4" />
        <Button type="submit" className="mt-4">Signup</Button>
      </div>
    </form>
  )
}