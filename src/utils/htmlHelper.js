/**
 * Truncates HTML content while preserving formatting (lists, bold, etc.)
 * @param {string} htmlString - The HTML content to truncate
 * @param {number} charLimit - Character limit (default: 250)
 * @returns {string} Truncated HTML with closing tags
 */
export const truncateHtml = (htmlString, charLimit = 250) => {
  if (!htmlString) return '';

  // Create a temporary DOM element
  const temp = document.createElement('div');
  temp.innerHTML = htmlString;

  // Get all text content to count characters
  let charCount = 0;
  let truncated = false;
  let resultHTML = '';

  const processNode = (node) => {
    if (truncated) return '';

    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      const remaining = charLimit - charCount;

      if (text.length <= remaining) {
        charCount += text.length;
        return text;
      } else {
        charCount = charLimit;
        truncated = true;
        return text.substring(0, remaining) + '...';
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const tag = node.tagName.toLowerCase();
      
      // Skip certain tags
      if (['script', 'style'].includes(tag)) {
        return '';
      }

      let content = '';
      for (let child of node.childNodes) {
        content += processNode(child);
        if (truncated && tag !== 'ul' && tag !== 'ol' && tag !== 'li') {
          break;
        }
      }

      if (content) {
        return `<${tag}>${content}</${tag}>`;
      }
      return content;
    }

    return '';
  };

  resultHTML = processNode(temp);

  // Clean up incomplete tags and ensure proper closure
  resultHTML = cleanHTML(resultHTML);

  return resultHTML;
};

/**
 * Cleans up HTML to ensure all tags are properly closed
 * @param {string} html - HTML string to clean
 * @returns {string} Cleaned HTML
 */
const cleanHTML = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  return doc.body.innerHTML;
};

/**
 * Strips all HTML tags from a string
 * @param {string} htmlString - HTML string
 * @returns {string} Plain text without HTML
 */
export const stripHtml = (htmlString) => {
  if (!htmlString) return '';
  const temp = document.createElement('div');
  temp.innerHTML = htmlString;
  return temp.textContent || temp.innerText || '';
};

/**
 * Gets plain text preview from HTML (for SEO descriptions, etc.)
 * @param {string} htmlString - HTML string
 * @param {number} charLimit - Character limit
 * @returns {string} Plain text preview
 */
export const getTextPreview = (htmlString, charLimit = 160) => {
  const plainText = stripHtml(htmlString);
  if (plainText.length <= charLimit) {
    return plainText;
  }
  return plainText.substring(0, charLimit) + '...';
};

/**
 * Converts bullet points and numbered lists to proper HTML list format
 * @param {string} content - Content with bullet points (•) or numbered lists
 * @returns {string} HTML with proper <ul>, <ol>, <li> tags
 */
export const convertListsToHTML = (content) => {
  if (!content) return '';

  // Split content into lines
  const lines = content.split('\n');
  let result = [];
  let inUnorderedList = false;
  let inOrderedList = false;
  let unorderedItems = [];
  let orderedItems = [];

  lines.forEach((line) => {
    const trimmedLine = line.trim();

    // Check for bullet point (•)
    if (trimmedLine.startsWith('•')) {
      if (inOrderedList && orderedItems.length > 0) {
        // Close ordered list and start unordered
        result.push(`<ol>${orderedItems.map(item => `<li>${item}</li>`).join('')}</ol>`);
        orderedItems = [];
        inOrderedList = false;
      }
      inUnorderedList = true;
      const itemText = trimmedLine.substring(1).trim();
      unorderedItems.push(itemText);
    }
    // Check for numbered list (1., 2., 3., etc.)
    else if (/^\d+\.\s/.test(trimmedLine)) {
      if (inUnorderedList && unorderedItems.length > 0) {
        // Close unordered list and start ordered
        result.push(`<ul>${unorderedItems.map(item => `<li>${item}</li>`).join('')}</ul>`);
        unorderedItems = [];
        inUnorderedList = false;
      }
      inOrderedList = true;
      const itemText = trimmedLine.replace(/^\d+\.\s/, '').trim();
      orderedItems.push(itemText);
    }
    // Empty line or regular content
    else {
      // Close any open lists
      if (inUnorderedList && unorderedItems.length > 0) {
        result.push(`<ul>${unorderedItems.map(item => `<li>${item}</li>`).join('')}</ul>`);
        unorderedItems = [];
        inUnorderedList = false;
      }
      if (inOrderedList && orderedItems.length > 0) {
        result.push(`<ol>${orderedItems.map(item => `<li>${item}</li>`).join('')}</ol>`);
        orderedItems = [];
        inOrderedList = false;
      }

      // Add regular content as paragraph
      if (trimmedLine) {
        result.push(`<p>${trimmedLine}</p>`);
      }
    }
  });

  // Close any remaining open lists
  if (inUnorderedList && unorderedItems.length > 0) {
    result.push(`<ul>${unorderedItems.map(item => `<li>${item}</li>`).join('')}</ul>`);
  }
  if (inOrderedList && orderedItems.length > 0) {
    result.push(`<ol>${orderedItems.map(item => `<li>${item}</li>`).join('')}</ol>`);
  }

  return result.join('');
};
