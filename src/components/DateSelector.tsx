
import React, { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DateSelectorProps {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
}

export function DateSelector({ selectedDate, onSelectDate }: DateSelectorProps) {
  const presetOptions = [
    { label: "3 Months", value: 3 },
    { label: "6 Months", value: 6 },
    { label: "1 Year", value: 12 },
  ];

  const handlePresetClick = (months: number) => {
    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + months);
    onSelectDate(futureDate);
  };

  return (
    <div className="py-4 animate-fade-in">
      <p className="text-lg font-josefin mb-3">When would you like to receive this letter?</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {presetOptions.map((option) => (
          <Button
            key={option.value}
            variant="outline"
            className={cn(
              "bg-capsule-cream hover:bg-capsule-cream/80 text-black",
              selectedDate && 
              format(selectedDate, "MM/dd/yyyy") === 
              format(new Date(new Date().setMonth(new Date().getMonth() + option.value)), "MM/dd/yyyy") && 
              "ring-2 ring-primary/50"
            )}
            onClick={() => handlePresetClick(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <p className="text-muted-foreground">Or choose a custom date:</p>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-[240px] justify-start text-left font-normal",
                !selectedDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {selectedDate ? format(selectedDate, "MMMM d, yyyy") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={onSelectDate}
              disabled={(date) => date < new Date()}
              initialFocus
              className="pointer-events-auto"
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
