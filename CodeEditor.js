import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';

const initialCode = `// Simple no-frills code editor with syntax highlighting
function helloWorld() {
  console.log('Hello, world!');
}`;

const CodeEditor = () => {
    const [code, setCode] = useState(initialCode);

    const handleChange = (event) => {
        setCode(event.target.value);
    };

    return (
        <div className="container__editor">
            <textarea
                value={code}
                onChange={handleChange}
                className="container_editor_area"
            />
            <Highlight
                code={code}
                language="javascript"
                theme={themes.vsDark}
            >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={`CodeEditor-pre ${className}`} style={{ ...style, padding: '10px', overflow: 'auto' }}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        </div>
    );
};

export default CodeEditor;
