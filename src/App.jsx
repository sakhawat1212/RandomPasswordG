import React, { useState } from "react";

export default function App() {
  const [length, setLength] = useState(12);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}<>?/";

  const generatePassword = () => {
    let chars = "";
    if (includeUpper) chars += upperCase;
    if (includeLower) chars += lowerCase;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    if (chars === "") {
      alert("Please select at least one option!");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      alert("Password copied to clipboard!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md text-white">
        <h1 className="text-2xl font-bold text-center mb-4">🔑 Password Generator</h1>

        {/* Generated password box */}
        <div className="flex items-center justify-between bg-gray-700 p-3 rounded-xl mb-4">
          <span className="break-all">{password || "Your password will appear here"}</span>
          <button
            onClick={copyToClipboard}
            className="ml-2 bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-lg text-sm"
          >
            Copy
          </button>
        </div>

        {/* Password length */}
        <div className="mb-4">
          <label className="block mb-2">Password Length: {length}</label>
          <input
            type="range"
            min="6"
            max="32"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <label>
            <input
              type="checkbox"
              checked={includeUpper}
              onChange={() => setIncludeUpper(!includeUpper)}
              className="mr-2"
            />
            Uppercase
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeLower}
              onChange={() => setIncludeLower(!includeLower)}
              className="mr-2"
            />
            Lowercase
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              className="mr-2"
            />
            Numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
              className="mr-2"
            />
            Symbols
          </label>
        </div>

        {/* Generate button */}
        <button
          onClick={generatePassword}
          className="w-full bg-green-500 hover:bg-green-600 py-2 rounded-xl font-semibold"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}
