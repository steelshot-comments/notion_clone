import SyntaxHighlighter from "react-syntax-highlighter";
import Dropdown from "./Dropdown";
import { useState } from "react";

function Code() {
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState('javascript');
  const [theme, setTheme] = useState('dracula');
  return (
    <div>
      <Dropdown
        defaultTheme={'javascript'}
        onChange={(e) => setLanguage(e.target.value)}
        data={'javascript'}
      />
      <Dropdown
        defaultTheme={'dracula'}
        onChange={(e) => setTheme(e.target.value)}
        data={'themes'}
      />
      <textarea
        className="border-0 min-h-[300px] p-10 resize-none"
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
    </div>
  );
}

export default Code;
