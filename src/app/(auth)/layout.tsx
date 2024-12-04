"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks=[
    {name:"Register",href:"/register"},
    {name:"Login",href:"/login"},
    {name:"Forgot Password",href:"/forgotPassword"}
]

export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const pathname = usePathname();
    console.log(pathname)

    const [input,setInput]=useState("")
    return (
      <>
      <div>
        <input className="border border-black" type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      </div>
        <div>
        {
            navLinks.map((link, index) => {
              const isAtcive= pathname.startsWith(link.href)
              return <Link key={index} href={link.href} className={isAtcive ? "font- text-blue-400 mr-4 ":"   mr-4 "}    >
                    {link.name}
                </Link>
            })
        }
          {children}
        </div>
      </>
    );
  }
  