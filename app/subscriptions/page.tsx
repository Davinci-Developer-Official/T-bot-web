import React from "react";
import Link from "next/link";

const plans = [
  {
    name: "Community",
    price: "$0",
    features: [
      "Auto trading only",
      "No manual control",
      "Platform owns profits",
      "Basic market summary (weekly)",
    ],
    was:"$1",
    button: "Join for Free",
  },
  {
    name: "Basic",
    price: "$154.83  ", /// ksh 19,999
    features: [
      "Manual & Auto trading",
      "User owns profits",
      "Withdrawals enabled",
      "AI reports (monthly)",
    ],
    was:"$350.54", //ksh 45,277
    button: "Subscribe",
  },
  {
    name: "Standard",
    price: "$350.54", // ksh 45,277
    features: [
      "Advanced trading tools",
      "Faster withdrawals",
      "Trend predictions (bi-weekly)",
      "AI reports",
    ],
    was:"$500.54",//ksh 64,652
    button: "Subscribe",
  },
  {
    name: "Premium",
    price: "$500.50",//ksh 64,647
    features: [
      "VIP execution speeds",
      "Fastest withdrawals",
      "Full AI models & analytics",
      "Custom reports (weekly)",
    ],
    was:"$1500.54",// ksh 193,812
    button: "Subscribe",
  },
];

export default function SubscriptionPlans() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <Link href="/" className=" text-black text-xl mr-[90%] w-fit "> X </Link>
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Choose Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-gray-800">{plan.name}</h2>
            <p className="text-3xl font-bold text-gray-900 mt-2">{plan.price}</p>
            <ul className="mt-4 space-y-2 text-gray-600 text-sm text-center">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-green-500">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-3xl font-bold text-gray-900 mt-2 line-through ">{plan.was}</p>

            <Link href={plan.price=="$0"?"/Download":"/subscriptions/Payment"} passHref>
              <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
                {plan.button}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
