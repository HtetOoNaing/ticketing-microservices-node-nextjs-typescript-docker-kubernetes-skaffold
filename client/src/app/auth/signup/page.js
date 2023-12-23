import Button from "@/app/components/button";
import Input from "@/app/components/input";

export default function Signup() {
  return (
    <form className="p-2">
      <h1 className="text-blue-500 text-xl text-center">Signup Page</h1>
      <div>
        <Input type="email" id="email" placeholder="example@company.com" label="Email address" containerClassName="mt-4" />
        <Input type="password" id="password" placeholder="password" label="Password" containerClassName="mt-4" />
        <Button className="mt-4">Signup</Button>
      </div>
    </form>
  )
}