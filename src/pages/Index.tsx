
import React from "react";
import { TimeCapsule } from "@/components/TimeCapsule";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-capsule-cream to-white py-8 px-4 flex flex-col items-center">
      <header className="w-full max-w-4xl mb-8 text-center animate-fade-in">
        <h1 className="text-4xl sm:text-5xl font-cormorant font-medium mb-2">Time Capsule</h1>
        <p className="text-gray-600 font-josefin text-lg">
          Write a letter to your future self
        </p>
      </header>
      
      <main className="w-full max-w-4xl flex-1">
        <TimeCapsule />
      </main>
      
      <footer className="w-full max-w-4xl mt-8 text-center text-sm text-gray-500 font-josefin animate-fade-in">
        <p>Your letters are saved securely and will be delivered on your chosen date.</p>
        <p className="mt-1">© {new Date().getFullYear()} Time Capsule</p>
      </footer>
    </div>
  );
};

export default Index;
