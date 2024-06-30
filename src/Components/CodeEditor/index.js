import React, { useState } from 'react';
import './index.css'; // Import your CSS file here

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor-container">
      <textarea
        className="code-input"
        value={code}
        onChange={handleCodeChange}
        spellCheck="false"
      />
      <pre className="code-output">
        <code className="language-javascript">
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeEditor;
