"use client"
import Link from "next/link";
import React from "react";

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Payment Options</h1>
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Complete Your Purchase</h2>
        <p className="text-gray-600 mt-2">Choose your preferred payment method:</p>
        
        <div className="mt-4 space-y-4">
          <button className="w-full bg-black text-white px-5 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition">
            <span>🛒</span> Google Pay
          </button>
          <button className="w-full bg-gray-900 text-white px-5 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-700 transition">
            <span>🍏</span> Apple Pay
          </button>
          <button className="w-full bg-green-600 text-white px-5 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-green-700 transition">
            <span>📱</span> M-Pesa Global
          </button>
        </div>
        
        <p className="text-gray-500 text-sm mt-4">Secure and fast transactions</p>
        <Link href='/subscriptions' className="bg-gray-150 p-1 text-sm cursor-pointer mt-2 rounded-md text-black " > go back</Link>
      </div>
    </div>
  );
}
