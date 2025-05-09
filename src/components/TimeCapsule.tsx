
import React, { useState } from "react";
import { LetterEditor } from "@/components/LetterEditor";
import { EmotionSelector } from "@/components/EmotionSelector";
import { DateSelector } from "@/components/DateSelector";
import { EmailInput } from "@/components/EmailInput";
import { DownloadButton } from "@/components/DownloadButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";
import { toast } from "sonner";

export function TimeCapsule() {
  const [letterContent, setLetterContent] = useState("");
  const [selectedEmotion, setSelectedEmotion] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLetterChange = (content: string) => {
    setLetterContent(content);
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async () => {
    // Validate form
    if (!letterContent.trim()) {
      toast.error("Please write your letter before sending");
      return;
    }

    if (!selectedDate) {
      toast.error("Please select when you'd like to receive your letter");
      return;
    }

    if (!email || !validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success(
        "Your letter has been saved and will be delivered on " +
          selectedDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
      );
      
      // Reset form
      setLetterContent("");
      setSelectedEmotion("");
      setSelectedDate(undefined);
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Card className="border-none shadow-lg paper-texture max-w-4xl w-full mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-cormorant font-normal text-center">Write to Your Future Self</CardTitle>
        <CardDescription className="text-center text-lg font-josefin">
          This letter will be delivered to your future self at the date you choose
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <LetterEditor onContentChange={handleLetterChange} />
        <EmotionSelector 
          selectedEmotion={selectedEmotion} 
          onSelectEmotion={setSelectedEmotion} 
        />
        <DateSelector 
          selectedDate={selectedDate} 
          onSelectDate={setSelectedDate} 
        />
        <EmailInput 
          email={email} 
          onEmailChange={setEmail} 
        />
      </CardContent>
      
      <CardFooter className="flex flex-col sm:flex-row justify-between gap-4">
        <DownloadButton 
          letterContent={letterContent} 
          emotion={selectedEmotion} 
          disabled={!letterContent}
        />
        <Button 
          className="bg-primary hover:bg-primary/90 hover-grow"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          <Send className="h-4 w-4 mr-2" />
          {isSubmitting ? "Sending..." : "Send to Future Self"}
        </Button>
      </CardFooter>
    </Card>
  );
}
