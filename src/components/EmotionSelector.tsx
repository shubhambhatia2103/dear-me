
import React from "react";
import { cn } from "@/lib/utils";

interface Emotion {
  name: string;
  color: string;
  bgColor: string;
}

interface EmotionSelectorProps {
  selectedEmotion: string;
  onSelectEmotion: (emotion: string) => void;
}

export function EmotionSelector({ selectedEmotion, onSelectEmotion }: EmotionSelectorProps) {
  const emotions: Emotion[] = [
    { name: "Hopeful", color: "text-emerald-600", bgColor: "bg-emerald-50" },
    { name: "Reflective", color: "text-blue-600", bgColor: "bg-blue-50" },
    { name: "Grateful", color: "text-amber-600", bgColor: "bg-amber-50" },
    { name: "Nostalgic", color: "text-purple-600", bgColor: "bg-purple-50" },
    { name: "Content", color: "text-teal-600", bgColor: "bg-teal-50" },
    { name: "Anxious", color: "text-orange-600", bgColor: "bg-orange-50" },
    { name: "Inspired", color: "text-indigo-600", bgColor: "bg-indigo-50" },
    { name: "Determined", color: "text-red-600", bgColor: "bg-red-50" },
  ];

  return (
    <div className="py-4 animate-fade-in">
      <p className="text-lg font-josefin mb-3">How are you feeling today?</p>
      <div className="flex flex-wrap gap-2">
        {emotions.map((emotion) => (
          <button
            key={emotion.name}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover-grow",
              emotion.bgColor,
              emotion.color,
              selectedEmotion === emotion.name && "ring-2 ring-primary/50"
            )}
            onClick={() => onSelectEmotion(emotion.name)}
          >
            {emotion.name}
          </button>
        ))}
      </div>
    </div>
  );
}
