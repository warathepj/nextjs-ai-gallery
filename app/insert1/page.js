// app/insert/page.js/
// creat text input in app/insert/page.js/
// app/insert/page.js
"use client"; // This is a client component

import { useState } from 'react';

export default function InsertPage() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <p>You entered: {inputText}</p>
    </div>
  );
}
