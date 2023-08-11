import React, { useEffect, useState } from "react";

type TypingAnimationProps = {
  strings: string[];
};

const TypingAnimation: React.FC<TypingAnimationProps> = ({ strings }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentString, setCurrentString] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const stringToType = strings[currentStringIndex];
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setCurrentString(stringToType.substring(0, currentIndex));
      currentIndex++;

      if (currentIndex > stringToType.length) {
        clearInterval(typingInterval);
        setIsTyping(false);

        // Move to the next string in the array after a delay
        setTimeout(() => {
          setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
          setIsTyping(true);
        }, 1000);
      }
    }, 200);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentStringIndex, strings]);

  return (
    <div className="self-typed">
      <p className="typed-text text-gray-700 text-5xl font-medium inline-block">
        {currentString}
      </p>
      {isTyping && <span className="cursor inline-block ">|</span>}
    </div>
  );
};

export default TypingAnimation;
