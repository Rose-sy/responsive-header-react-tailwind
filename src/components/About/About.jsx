import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://img.freepik.com/premium-photo/flat-vector-style-illustration-diverse-group-people-talking-collaborating_941097-83462.jpg"
              alt="Daily motivation illustration"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Start Your Day with Positivity and Purpose
            </h2>
            <p className="mt-6 text-gray-600">
              Every day is a fresh start. No matter what happened yesterday,
              today is full of new opportunities to grow, to be kind, and to
              move one step closer to your goals. You don’t have to be perfect —
              you just have to be consistent and courageous.
            </p>
            <p className="mt-4 text-gray-600">
              Small actions lead to big results. Celebrate your wins, no matter
              how small, and keep going even when it gets tough. Remember, your
              journey is unique, and your effort matters. You’ve got this!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
