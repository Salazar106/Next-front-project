'use client'

import { useState } from "react";

interface text{
    text:string
}

export const CopyText = ({text}:text) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text)
          .then(() => {
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 500); // Reset copied state after 1.5 seconds
          })
          .catch((err) => {
            console.error('Error al copiar el texto: ', err);
          });
      };
    
      


  return (
    <span
        className="font-bold text-primary"
        style={{ cursor: 'pointer', textDecoration: copied ? 'underline' : 'none' }}
        onClick={copyToClipboard}
    >
      {copied ? 'Copied!' : text}
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque aspernatur magni quam, sapiente iure accusantium beatae veniam voluptate officia deserunt facere fugit expedita delectus molestiae quae dolore numquam voluptatum dicta!</p>
    </span>
  );
};