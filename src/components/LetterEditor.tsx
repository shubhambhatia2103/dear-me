
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface LetterEditorProps {
  onContentChange: (content: string) => void;
}

const placeholders = [
  "Dear future me, I hope you remember the feeling of...",
  "When you read this, I wonder if you'll still...",
  "Today I'm feeling...",
  "I'm writing this because...",
  "I hope by the time you read this, you've...",
];

export function LetterEditor({ onContentChange }: LetterEditorProps) {
  const [content, setContent] = useState("");
  const [placeholder, setPlaceholder] = useState("");

  // Set a random placeholder on mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * placeholders.length);
    setPlaceholder(placeholders[randomIndex]);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    onContentChange(e.target.value);
  };

  return (
    <div className="w-full animate-fade-in">
      <Textarea
        className={cn(
          "w-full min-h-[50vh] p-6 text-lg letter-textarea paper-texture border-none rounded-md focus:ring-1 focus:ring-primary/30 transition-all duration-300 font-cormorant",
        )}
        placeholder={placeholder}
        value={content}
        onChange={handleChange}
        autoFocus
      />
    </div>
  );
}
