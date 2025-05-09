
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface EmailInputProps {
  email: string;
  onEmailChange: (email: string) => void;
}

export function EmailInput({ email, onEmailChange }: EmailInputProps) {
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onEmailChange(value);
    
    if (value === '' || validateEmail(value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="py-4 animate-fade-in">
      <Label htmlFor="email" className="text-lg font-josefin">
        Where should we send this letter?
      </Label>
      <Input
        id="email"
        type="email"
        placeholder="your.email@example.com"
        className={cn(
          "mt-2 p-6 text-lg bg-white/80 border-gray-200",
          !isValid && "border-red-300 focus:ring-red-300",
          "font-cormorant"
        )}
        value={email}
        onChange={handleChange}
      />
      {!isValid && (
        <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
      )}
    </div>
  );
}
