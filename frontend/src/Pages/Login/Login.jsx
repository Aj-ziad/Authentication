import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {useNavigate} from 'react-router-dom'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Login() {

   const [email ,setEmail]=useState("")
   const [password ,setPassword]=useState("")


   const navigate =useNavigate();

      const handleLogin=async(e)=>{
    e.preventDefault()
    const res=await fetch("http://localhost:5000/login",{
      method: "POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({email,password})
    });
    const data =await res.json();
    if(res.ok){
      console.log('login with succes')
      navigate('/')
    }else{
      alert('Login to account  faildes')
    }
  }




  return (
     <div className="min-h-screen  flex items-center justify-center p-4">
      <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input 
              id="password"
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}

                required />
            </div>
            <Button type="submit" className="w-full">
          Login
        </Button>
          </div>
        </form>
      </CardContent>
  
    </Card>
    </div>
  )
}

export default Login
