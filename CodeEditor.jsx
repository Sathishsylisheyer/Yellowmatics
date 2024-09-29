
import React, { useState } from 'react';

function CodeEditor() {
  const [code, setCode] = useState('<h1>Hello, Yellowmatics!</h1>');

  const runCode = () => {
    const output = document.getElementById('output').contentWindow.document;
    output.open();
    output.write(code);
    output.close();
  };

  return (
    <div>
      <textarea value={code} onChange={(e) => setCode(e.target.value)}></textarea>
      <button onClick={runCode}>Run Code</button>
      <iframe id="output" style={{ width: '100%', height: '200px' }}></iframe>
    </div>
  );
}

export default CodeEditor;
