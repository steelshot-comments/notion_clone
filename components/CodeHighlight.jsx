import { useState, useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-python.min';
import 'prismjs/components/prism-css.min';
import 'prismjs/components/prism-json.min';

function CodeHighlight() {
  const preRef = useRef(null);
  const [language, setLanguage] = useState('javascript');

  useEffect(() => {
    Prism.highlightAll();
  }, [language]);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleCodeChange = () => {
    Prism.highlightAll();
  };

  return (
    <div>
      <div>
        <select value={language} onChange={handleLanguageChange}>
          <option value="jsx">JSX</option>
          <option value="python">Python</option>
          <option value="css">CSS</option>
          <option value="json">JSON</option>
        </select>
      </div>
      <pre ref={preRef} contentEditable onInput={handleCodeChange}>
        <code className={`language-${language}`}>
          {preRef.current?.textContent}
        </code>
      </pre>
    </div>
  );
}

export default CodeHighlight;
