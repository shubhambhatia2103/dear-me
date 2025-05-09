
import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generatePDF } from "@/lib/pdf-generator";
import { toast } from "sonner";

interface DownloadButtonProps {
  letterContent: string;
  emotion: string;
  disabled: boolean;
}

export function DownloadButton({ letterContent, emotion, disabled }: DownloadButtonProps) {
  const handleDownload = async () => {
    if (!letterContent) {
      toast.error("Please write your letter before downloading");
      return;
    }

    try {
      const currentDate = new Date().toLocaleDateString();
      const filename = `time-capsule-letter-${currentDate}.txt`;
      
      // Create a simple text file
      const element = document.createElement("a");
      const file = new Blob([
        `Time Capsule Letter\n`,
        `Date: ${currentDate}\n`,
        emotion ? `Feeling: ${emotion}\n\n` : "\n",
        letterContent
      ], { type: 'text/plain' });
      
      element.href = URL.createObjectURL(file);
      element.download = filename;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      
      toast.success("Letter downloaded successfully");
    } catch (error) {
      toast.error("Failed to download letter");
      console.error("Download error:", error);
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="bg-white hover:bg-gray-50 text-gray-700 border-gray-200"
      onClick={handleDownload}
      disabled={disabled}
    >
      <Download className="h-4 w-4 mr-2" />
      Download Letter
    </Button>
  );
}
