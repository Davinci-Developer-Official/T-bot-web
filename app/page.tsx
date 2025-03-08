'use client'
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import logo from "@/public/logo.png"
// import Image from "next/image";
// import Subscription from "./subscriptions/page"

export default function Home() {
  const[user,setUser]=useState("")
  useMemo(()=>{
    console.log("system working")
  },[])
  const info = "Trade smarter, not harder! 🚀 T-Bot automates profits with AI-driven precision. Choose your plan and start winning today!"
  return (
   <div className="bg-white h-screen text-black p-2 flex flex-col justify-center ">
    <h1 className="text-center font-bold p-2 text-xl ">Welcome to T-Bot  </h1>
      <span className="w-[200px] h-[200px] mx-auto bg-blue-300 " ><Image src={logo} alt="" /></span>
    {/* <Subscription/> */}
    <section className="w-[90%] mx-auto p-2  bg-white  " >
    <p className="text-black ">{info}</p>

    </section>
    <Link href={user==""?"/subscriptions":"/Download"} className="ml-[10%] bg-blue-300 text-black w-[200px] p-2 rounded-md mt-5  " >Download options</Link>
   </div>
  );
}
