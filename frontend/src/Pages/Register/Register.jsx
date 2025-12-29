import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"


function Register() {
  const [email ,setEmail]=useState("")
  const [password ,setPassword]=useState("")

  const handleRegister=async(e)=>{
    e.preventDefault()
    const res=await fetch("http://localhost:5000/register",{
      method: "POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({email,password})
    });
    const data =await res.json();
    if(res.ok){
      console.log('account created with succes')
    }else{
      alert('account created faildes')
    }
  }

  return (
      <div className="min-h-screen  flex items-center justify-center p-4">
          <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Create Account</CardTitle>
            <CardDescription>
              Enter your email to create your account
            </CardDescription>
          
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input 
                  id="password" 
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  type="password" 
                  required />
                </div>
                <Button type="submit" className="w-full">
              Sign Up
            </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            
            <br />
            <p className="text-center text-sm text-gray-800">
            Already Have an Account?{" "}
            <a
              href="#"
              className="font-medium text-blue-600 hover:underline"
            >
              Log in
            </a>
          </p>
          </CardFooter>
        </Card>
        </div>
  )
}

export default Register
