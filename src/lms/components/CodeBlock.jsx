import React, { useState } from 'react';
import styles from '../styles/lms.module.css';

/**
 * CodeBlock Component
 * Displays formatted code with syntax highlighting and copy functionality
 */
const CodeBlock = ({ code, language = 'javascript' }) => {
  const [copied, setCopied] = useState(false);

  // Function to copy code to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy code:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Simple syntax highlighting for common keywords
  const highlightCode = (code) => {
    // This is a basic implementation. In a real project, you'd use a library like Prism.js
    const keywords = [
      'function', 'const', 'let', 'var', 'if', 'else', 'for', 'while', 
      'return', 'import', 'export', 'class', 'extends', 'constructor',
      'async', 'await', 'try', 'catch', 'finally', 'throw', 'new'
    ];
    
    const htmlTags = [
      'html', 'head', 'body', 'title', 'div', 'span', 'p', 'h1', 'h2', 'h3',
      'h4', 'h5', 'h6', 'a', 'img', 'ul', 'ol', 'li', 'nav', 'header', 'footer',
      'section', 'article', 'aside', 'main'
    ];

    let highlighted = code;

    // Highlight JavaScript keywords
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      highlighted = highlighted.replace(regex, `<span class="${styles.keyword}">${keyword}</span>`);
    });

    // Highlight HTML tags
    htmlTags.forEach(tag => {
      const regex = new RegExp(`<\\/?${tag}\\b[^>]*>`, 'gi');
      highlighted = highlighted.replace(regex, (match) => 
        `<span class="${styles.htmlTag}">${match}</span>`
      );
    });

    // Highlight strings
    highlighted = highlighted.replace(
      /"([^"\\]*(\\.[^"\\]*)*)"/g, 
      `<span class="${styles.string}">"$1"</span>`
    );
    highlighted = highlighted.replace(
      /'([^'\\]*(\\.[^'\\]*)*)'/g, 
      `<span class="${styles.string}">'$1'</span>`
    );

    // Highlight comments
    highlighted = highlighted.replace(
      /\/\*[\s\S]*?\*\//g, 
      `<span class="${styles.comment}">$&</span>`
    );
    highlighted = highlighted.replace(
      /\/\/.*$/gm, 
      `<span class="${styles.comment}">$&</span>`
    );

    // Highlight numbers
    highlighted = highlighted.replace(
      /\b\d+(\.\d+)?\b/g, 
      `<span class="${styles.number}">$&</span>`
    );

    return highlighted;
  };

  return (
    <div className={styles.codeBlock}>
      {/* Code Block Header */}
      <div className={styles.codeHeader}>
        <div className={styles.codeLanguage}>
          <span className={styles.languageTag}>{language}</span>
        </div>
        <button 
          className={styles.copyButton}
          onClick={copyToClipboard}
          title="Copy code"
        >
          {copied ? (
            <>
              <span className={styles.copyIcon}>✓</span>
              Copied!
            </>
          ) : (
            <>
              <span className={styles.copyIcon}>📋</span>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className={styles.codeContainer}>
        <pre className={styles.codeContent}>
          <code 
            dangerouslySetInnerHTML={{ 
              __html: highlightCode(code) 
            }}
          />
        </pre>
      </div>

      {/* Line Numbers (optional enhancement) */}
      <div className={styles.lineNumbers}>
        {code.split('\n').map((_, index) => (
          <div key={index} className={styles.lineNumber}>
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodeBlock;