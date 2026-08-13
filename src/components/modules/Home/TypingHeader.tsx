"use client";

import React, { useState, useEffect } from "react";

const ROLES = [
  "Backend Developer.",
  "MERN Stack Developer.",
];

export default function TypingHeader() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const fullText = ROLES[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing text letter-by-letter
        setCurrentText(fullText.substring(0, currentText.length + 1));
        
        // Pause at the end of full word
        if (currentText === fullText) {
          setTypingSpeed(1800); // pause at completed state
          setIsDeleting(true);
        } else {
          setTypingSpeed(80 + Math.random() * 40); // typing speed
        }
      } else {
        // Deleting text letter-by-letter
        setCurrentText(fullText.substring(0, currentText.length - 1));
        
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          setTypingSpeed(400); // pause before starting next word
        } else {
          setTypingSpeed(40); // deleting speed (faster)
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  return (
    <div className="text-xl sm:text-2xl font-semibold text-muted-foreground min-h-[36px]">
      I am a{" "}
      <span className="text-foreground font-bold border-r-2 border-foreground/60 pr-1 animate-pulse">
        {currentText}
      </span>
    </div>
  );
}
