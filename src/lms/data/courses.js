// Static course data for the LMS
export const courses = [
  {
    id: 'html',
    title: 'HTML',
    description: 'Learn HTML - the foundation of web development and structure',
    color: '#e34c26',
    lessons: [
      {
        id: 'html-intro',
        title: 'HTML Introduction',
        content: `
          <h2>What is HTML?</h2>
          <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications. It provides the basic building blocks for structuring content on the World Wide Web.</p>
          
          <h3>History of HTML</h3>
          <p>HTML was first created by Tim Berners-Lee in 1990 at CERN. The latest version is HTML5, which introduced many new features including semantic elements, multimedia support, and improved form controls.</p>
          
          <h3>Key Features of HTML:</h3>
          <ul>
            <li><strong>Markup Language:</strong> Uses tags to define elements and structure</li>
            <li><strong>Platform Independent:</strong> Works on any device or operating system</li>
            <li><strong>Easy to Learn:</strong> Simple syntax and straightforward structure</li>
            <li><strong>Free and Open:</strong> No licensing costs or restrictions</li>
            <li><strong>SEO Friendly:</strong> Search engines can easily crawl HTML content</li>
          </ul>
          
          <h3>Basic HTML Document Structure:</h3>
          <p>Every HTML document follows a standard structure with DOCTYPE declaration, html element, head section for metadata, and body section for visible content.</p>
          
          <h3>HTML vs Other Technologies:</h3>
          <p>HTML provides structure, CSS handles presentation/styling, and JavaScript adds interactivity. Together, they form the foundation of modern web development.</p>
        `,
        codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is my first HTML document.</p>
</body>
</html>`,
        videoUrl: 'https://www.youtube.com/embed/UB1O30fR-EE'
      },
      {
        id: 'html-elements',
        title: 'HTML Elements & Tags',
        content: `
          <h2>Understanding HTML Elements and Tags</h2>
          <p>HTML elements are the building blocks of HTML pages. An HTML element is defined by a start tag, content, and an end tag. Elements can be nested and have attributes to provide additional information.</p>
          
          <h3>Anatomy of an HTML Element:</h3>
          <ul>
            <li><strong>Start Tag:</strong> &lt;tagname&gt;</li>
            <li><strong>Content:</strong> The text or other elements between tags</li>
            <li><strong>End Tag:</strong> &lt;/tagname&gt;</li>
            <li><strong>Attributes:</strong> Additional information like id, class, src</li>
          </ul>
          
          <h3>Block vs Inline Elements:</h3>
          <ul>
            <li><strong>Block Elements:</strong> Take full width, start on new line (div, h1-h6, p, section)</li>
            <li><strong>Inline Elements:</strong> Only take necessary width, stay on same line (span, a, strong, em)</li>
          </ul>
          
          <h3>Text Formatting Elements:</h3>
          <ul>
            <li><strong>&lt;strong&gt;</strong> - Important text (bold)</li>
            <li><strong>&lt;em&gt;</strong> - Emphasized text (italic)</li>
            <li><strong>&lt;mark&gt;</strong> - Highlighted text</li>
            <li><strong>&lt;del&gt;</strong> - Deleted text</li>
            <li><strong>&lt;ins&gt;</strong> - Inserted text</li>
          </ul>
          
          <h3>List Elements:</h3>
          <ul>
            <li><strong>&lt;ul&gt;</strong> - Unordered list (bullets)</li>
            <li><strong>&lt;ol&gt;</strong> - Ordered list (numbers)</li>
            <li><strong>&lt;li&gt;</strong> - List items</li>
            <li><strong>&lt;dl&gt;</strong> - Description list</li>
          </ul>
        `,
        codeExample: `<!-- Headings -->
<h1>Main Title</h1>
<h2>Subtitle</h2>
<h3>Section Heading</h3>

<!-- Paragraph -->
<p>This is a paragraph with some text content.</p>

<!-- Links -->
<a href="https://example.com">External Link</a>
<a href="#section1">Internal Link</a>

<!-- Images -->
<img src="image.jpg" alt="Description of image">

<!-- Containers -->
<div>This is a div (block-level)</div>
<span>This is a span (inline)</span>`
      },
      {
        id: 'html-forms',
        title: 'HTML Forms',
        content: `
          <h2>HTML Forms - Collecting User Input</h2>
          <p>HTML forms are essential for user interaction on websites. They allow users to enter data that can be sent to a server for processing. Forms are used for contact pages, login systems, surveys, and e-commerce checkout.</p>
          
          <h3>Form Attributes:</h3>
          <ul>
            <li><strong>action:</strong> URL where form data is sent</li>
            <li><strong>method:</strong> HTTP method (GET or POST)</li>
            <li><strong>enctype:</strong> How form data should be encoded</li>
            <li><strong>target:</strong> Where to display the response</li>
          </ul>
          
          <h3>Input Types:</h3>
          <ul>
            <li><strong>text:</strong> Single-line text input</li>
            <li><strong>email:</strong> Email address validation</li>
            <li><strong>password:</strong> Hidden text input</li>
            <li><strong>number:</strong> Numeric input with min/max</li>
            <li><strong>tel:</strong> Telephone number</li>
            <li><strong>url:</strong> Website URL</li>
            <li><strong>date:</strong> Date picker</li>
            <li><strong>checkbox:</strong> Multiple selections</li>
            <li><strong>radio:</strong> Single selection from options</li>
            <li><strong>file:</strong> File upload</li>
            <li><strong>range:</strong> Slider control</li>
            <li><strong>color:</strong> Color picker</li>
          </ul>
          
          <h3>Form Validation:</h3>
          <p>HTML5 provides built-in form validation attributes like required, pattern, min, max, and maxlength to ensure data quality without JavaScript.</p>
        `,
        codeExample: `<form action="/submit" method="POST">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div>
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4"></textarea>
  </div>
  
  <div>
    <label for="country">Country:</label>
    <select id="country" name="country">
      <option value="in">India</option>
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
    </select>
  </div>
  
  <button type="submit">Submit Form</button>
</form>`
      },
      {
        id: 'html-semantic',
        title: 'Semantic HTML',
        content: `
          <h2>Semantic HTML - Meaningful Structure</h2>
          <p>Semantic HTML uses HTML elements that have meaningful names which describe their purpose and content. This makes your code more readable, accessible, and SEO-friendly.</p>
          
          <h3>Benefits of Semantic HTML:</h3>
          <ul>
            <li><strong>Accessibility:</strong> Screen readers can better understand content structure</li>
            <li><strong>SEO Benefits:</strong> Search engines can better index and rank content</li>
            <li><strong>Code Maintainability:</strong> Easier for developers to understand and modify</li>
            <li><strong>Future-Proof:</strong> Works better with new technologies and standards</li>
          </ul>
          
          <h3>HTML5 Semantic Elements:</h3>
          <ul>
            <li><strong>&lt;header&gt;</strong> - Introductory content or navigation links</li>
            <li><strong>&lt;nav&gt;</strong> - Navigation menu or links</li>
            <li><strong>&lt;main&gt;</strong> - Primary content of the document</li>
            <li><strong>&lt;article&gt;</strong> - Self-contained content (blog post, news article)</li>
            <li><strong>&lt;section&gt;</strong> - Distinct section of a document</li>
            <li><strong>&lt;aside&gt;</strong> - Content tangentially related to main content</li>
            <li><strong>&lt;footer&gt;</strong> - Footer information for section or page</li>
            <li><strong>&lt;figure&gt;</strong> - Self-contained content like images</li>
            <li><strong>&lt;figcaption&gt;</strong> - Caption for figure element</li>
            <li><strong>&lt;time&gt;</strong> - Date/time information</li>
          </ul>
          
          <h3>Document Outline:</h3>
          <p>Semantic elements help create a proper document outline that assistive technologies can navigate efficiently. Use headings (h1-h6) in proper hierarchical order.</p>
          
          <h3>Microdata and Schema:</h3>
          <p>Semantic HTML works well with structured data markup (Schema.org) to provide even more context to search engines about your content.</p>
        `,
        codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Semantic HTML Example</title>
</head>
<body>
    <header>
        <h1>Website Title</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <h2>Article Title</h2>
            <p>Article content goes here...</p>
        </article>
        
        <section>
            <h2>Section Title</h2>
            <p>Section content goes here...</p>
        </section>
    </main>
    
    <aside>
        <h3>Sidebar</h3>
        <p>Related links or information</p>
    </aside>
    
    <footer>
        <p>&copy; 2024 Website Name</p>
    </footer>
</body>
</html>`
      },
      {
        id: 'html-tables',
        title: 'HTML Tables & Lists',
        content: `
          <h2>HTML Tables - Organizing Tabular Data</h2>
          <p>HTML tables are used to display data in rows and columns. They're perfect for presenting structured information like schedules, pricing, or comparison data.</p>
          
          <h3>Table Elements:</h3>
          <ul>
            <li><strong>&lt;table&gt;</strong> - Container for the entire table</li>
            <li><strong>&lt;thead&gt;</strong> - Groups header content</li>
            <li><strong>&lt;tbody&gt;</strong> - Groups body content</li>
            <li><strong>&lt;tfoot&gt;</strong> - Groups footer content</li>
            <li><strong>&lt;tr&gt;</strong> - Table row</li>
            <li><strong>&lt;th&gt;</strong> - Header cell</li>
            <li><strong>&lt;td&gt;</strong> - Data cell</li>
          </ul>
          
          <h3>Table Attributes:</h3>
          <ul>
            <li><strong>colspan:</strong> Spans multiple columns</li>
            <li><strong>rowspan:</strong> Spans multiple rows</li>
            <li><strong>scope:</strong> Defines which cells the header applies to</li>
          </ul>
          
          <h2>HTML Lists - Organizing Content</h2>
          <h3>Types of Lists:</h3>
          <ul>
            <li><strong>Ordered Lists (&lt;ol&gt;):</strong> Numbered or lettered items</li>
            <li><strong>Unordered Lists (&lt;ul&gt;):</strong> Bulleted items</li>
            <li><strong>Description Lists (&lt;dl&gt;):</strong> Term and description pairs</li>
          </ul>
        `,
        codeExample: `<!-- Table Example -->
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John Doe</td>
            <td>28</td>
            <td>New York</td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>34</td>
            <td>Los Angeles</td>
        </tr>
    </tbody>
</table>

<!-- Lists Examples -->
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>

<ul>
    <li>Bullet point</li>
    <li>Another bullet</li>
    <li>Third bullet</li>
</ul>

<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>`
      },
      {
        id: 'html-media',
        title: 'HTML Media & Links',
        content: `
          <h2>Working with Images</h2>
          <p>Images make websites more engaging and informative. HTML provides several ways to include and optimize images for web use.</p>
          
          <h3>Image Best Practices:</h3>
          <ul>
            <li><strong>Always use alt text:</strong> Describes image for accessibility</li>
            <li><strong>Optimize file size:</strong> Use appropriate formats (JPEG, PNG, WebP, SVG)</li>
            <li><strong>Responsive images:</strong> Use srcset for different screen sizes</li>
            <li><strong>Lazy loading:</strong> Use loading="lazy" for performance</li>
          </ul>
          
          <h2>Creating Links</h2>
          <h3>Types of Links:</h3>
          <ul>
            <li><strong>External Links:</strong> To other websites</li>
            <li><strong>Internal Links:</strong> To other pages on same site</li>
            <li><strong>Anchor Links:</strong> To sections within same page</li>
            <li><strong>Email Links:</strong> Opens email client</li>
            <li><strong>Phone Links:</strong> Initiates phone call on mobile</li>
          </ul>
          
          <h2>Audio and Video</h2>
          <p>HTML5 introduced native support for multimedia without plugins.</p>
          
          <h3>Media Attributes:</h3>
          <ul>
            <li><strong>controls:</strong> Shows play/pause/volume controls</li>
            <li><strong>autoplay:</strong> Starts playing automatically (use carefully)</li>
            <li><strong>loop:</strong> Repeats the media</li>
            <li><strong>muted:</strong> Starts with audio muted</li>
          </ul>
        `,
        codeExample: `<!-- Images -->
<img src="photo.jpg" alt="Beautiful sunset over mountains" width="800" height="600">

<!-- Responsive Image -->
<img src="small.jpg" 
     srcset="small.jpg 480w, medium.jpg 768w, large.jpg 1200w"
     sizes="(max-width: 768px) 100vw, 50vw"
     alt="Responsive image example">

<!-- Links -->
<a href="https://example.com">External Link</a>
<a href="about.html">Internal Link</a>
<a href="#section1">Jump to Section 1</a>
<a href="mailto:contact@example.com">Send Email</a>
<a href="tel:+1234567890">Call Us</a>

<!-- Video -->
<video controls width="640" height="360">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Your browser doesn't support video.
</video>

<!-- Audio -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Your browser doesn't support audio.
</audio>`
      },
      {
        id: 'html-advanced',
        title: 'Advanced HTML Features',
        content: `
          <h2>HTML5 APIs and Advanced Features</h2>
          <p>Modern HTML includes powerful APIs and features that enable rich, interactive web applications without requiring additional plugins.</p>
          
          <h3>Data Attributes</h3>
          <p>Custom data attributes (data-*) allow you to store extra information on HTML elements that can be accessed via JavaScript.</p>
          
          <h3>Meta Tags for SEO</h3>
          <ul>
            <li><strong>Title:</strong> Page title shown in browser tab and search results</li>
            <li><strong>Description:</strong> Page summary for search engines</li>
            <li><strong>Keywords:</strong> Relevant keywords (less important now)</li>
            <li><strong>Viewport:</strong> Controls mobile responsiveness</li>
            <li><strong>Open Graph:</strong> Social media sharing optimization</li>
          </ul>
          
          <h3>Accessibility Features</h3>
          <ul>
            <li><strong>ARIA Labels:</strong> Improve screen reader compatibility</li>
            <li><strong>Tab Index:</strong> Control keyboard navigation</li>
            <li><strong>Alt Text:</strong> Describe images for screen readers</li>
            <li><strong>Focus Management:</strong> Ensure all interactive elements are accessible</li>
          </ul>
          
          <h3>Progressive Web App Features</h3>
          <ul>
            <li><strong>Web Manifest:</strong> App-like behavior on mobile</li>
            <li><strong>Service Worker:</strong> Offline functionality</li>
            <li><strong>Web App Manifest:</strong> Installation prompts</li>
          </ul>
        `,
        codeExample: `<!-- Data Attributes -->
<div data-user-id="12345" data-role="admin" data-theme="dark">
    User Profile
</div>

<!-- Meta Tags -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Learn web development with our comprehensive courses">
    <meta name="keywords" content="HTML, CSS, JavaScript, web development">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Web Development Course">
    <meta property="og:description" content="Master modern web development">
    <meta property="og:image" content="course-preview.jpg">
    
    <title>Web Development Course - Learn HTML, CSS, JS</title>
</head>

<!-- Accessibility -->
<button aria-label="Close dialog" aria-describedby="close-help">
    ×
</button>
<span id="close-help">Closes the current dialog window</span>

<nav role="navigation" aria-label="Main menu">
    <ul>
        <li><a href="/" tabindex="1">Home</a></li>
        <li><a href="/about" tabindex="2">About</a></li>
        <li><a href="/contact" tabindex="3">Contact</a></li>
    </ul>
</nav>

<!-- Microdata -->
<article itemscope itemtype="https://schema.org/Article">
    <h1 itemprop="headline">Article Title</h1>
    <p itemprop="description">Article description...</p>
    <time itemprop="datePublished" datetime="2024-01-15">January 15, 2024</time>
</article>`
      },
      {
        id: 'html-validation',
        title: 'HTML Validation & Debugging',
        content: `
          <h2>HTML Validation - Writing Clean Code</h2>
          <p>Valid HTML ensures better performance, accessibility, and cross-browser compatibility. Learn how to validate and debug your HTML code effectively.</p>
          
          <h3>Why Validate HTML?</h3>
          <ul>
            <li><strong>Cross-browser Compatibility:</strong> Valid code works consistently across all browsers</li>
            <li><strong>Better SEO:</strong> Search engines prefer clean, valid markup</li>
            <li><strong>Accessibility:</strong> Screen readers work better with valid HTML</li>
            <li><strong>Future-proofing:</strong> Valid code is more likely to work with future browsers</li>
            <li><strong>Easier Maintenance:</strong> Clean code is easier to debug and update</li>
          </ul>
          
          <h3>HTML Validation Tools:</h3>
          <ul>
            <li><strong>W3C Markup Validator:</strong> Official HTML validation service</li>
            <li><strong>Browser Developer Tools:</strong> Built-in error detection</li>
            <li><strong>VS Code Extensions:</strong> Live validation while coding</li>
            <li><strong>HTML5 Validator:</strong> Command-line validation tools</li>
          </ul>
          
          <h3>Common HTML Errors:</h3>
          <ul>
            <li>Unclosed tags</li>
            <li>Improperly nested elements</li>
            <li>Missing required attributes</li>
            <li>Invalid attribute values</li>
            <li>Duplicate IDs</li>
            <li>Missing DOCTYPE declaration</li>
          </ul>
        `,
        codeExample: `<!-- INVALID HTML -->
<div>
    <p>Paragraph with <strong>bold text</p>
    <img src="image.jpg"> <!-- Missing alt attribute -->
    <div id="content">
        <span>Content</div> <!-- Wrong closing tag -->
    </div>
</div>

<!-- VALID HTML -->
<div>
    <p>Paragraph with <strong>bold text</strong></p>
    <img src="image.jpg" alt="Description of image">
    <div id="content">
        <span>Content</span>
    </div>
</div>

<!-- HTML5 DOCTYPE -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Valid HTML Document</title>
</head>
<body>
    <!-- Content here -->
</body>
</html>`
      },
      {
        id: 'html-performance',
        title: 'HTML Performance Optimization',
        content: `
          <h2>Optimizing HTML for Performance</h2>
          <p>Performance optimization ensures fast loading times and better user experience. Learn techniques to make your HTML more efficient.</p>
          
          <h3>HTML Performance Best Practices:</h3>
          <ul>
            <li><strong>Minimize HTTP Requests:</strong> Combine files, use CSS sprites</li>
            <li><strong>Optimize Images:</strong> Use appropriate formats, sizes, and compression</li>
            <li><strong>Minify Code:</strong> Remove unnecessary whitespace and comments</li>
            <li><strong>Use CDNs:</strong> Serve static assets from content delivery networks</li>
            <li><strong>Lazy Loading:</strong> Load images and content as needed</li>
          </ul>
          
          <h3>Critical Rendering Path:</h3>
          <ul>
            <li><strong>Above-the-fold content:</strong> Prioritize visible content</li>
            <li><strong>CSS in head:</strong> Load styles before rendering</li>
            <li><strong>JavaScript at bottom:</strong> Prevent render blocking</li>
            <li><strong>Resource hints:</strong> Use preload, prefetch, dns-prefetch</li>
          </ul>
          
          <h3>Semantic Performance Benefits:</h3>
          <ul>
            <li>Semantic elements help browsers optimize rendering</li>
            <li>Proper heading hierarchy improves parsing speed</li>
            <li>Clean markup reduces file size and parsing time</li>
          </ul>
        `,
        codeExample: `<!-- Performance Optimized HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Resource Hints -->
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="preconnect" href="https://api.example.com">
    
    <!-- Critical CSS Inline -->
    <style>
        body { font-family: Arial, sans-serif; }
        .hero { background: #f0f0f0; }
    </style>
    
    <title>Performance Optimized Page</title>
</head>
<body>
    <!-- Above-the-fold content -->
    <header class="hero">
        <h1>Fast Loading Content</h1>
    </header>
    
    <!-- Lazy loaded images -->
    <img src="hero.jpg" alt="Hero image">
    <img src="placeholder.jpg" data-src="actual-image.jpg" 
         loading="lazy" alt="Lazy loaded image">
    
    <!-- Below-the-fold content -->
    <main>
        <section>
            <h2>Content Section</h2>
            <p>Main content here...</p>
        </section>
    </main>
    
    <!-- Scripts at bottom -->
    <script src="app.min.js" defer></script>
</body>
</html>`
      },
      {
        id: 'html-best-practices',
        title: 'HTML Best Practices & Standards',
        content: `
          <h2>Modern HTML Development Standards</h2>
          <p>Follow industry best practices to write maintainable, scalable, and professional HTML code. These standards ensure your code is future-ready and team-friendly.</p>
          
          <h3>Code Organization:</h3>
          <ul>
            <li><strong>Consistent Indentation:</strong> Use 2 or 4 spaces consistently</li>
            <li><strong>Semantic Structure:</strong> Use appropriate HTML5 elements</li>
            <li><strong>Meaningful Names:</strong> Use descriptive class and ID names</li>
            <li><strong>Comment Your Code:</strong> Explain complex sections</li>
          </ul>
          
          <h3>HTML5 Standards:</h3>
          <ul>
            <li><strong>DOCTYPE Declaration:</strong> Always use HTML5 DOCTYPE</li>
            <li><strong>Language Attribute:</strong> Specify document language</li>
            <li><strong>Character Encoding:</strong> Use UTF-8 encoding</li>
            <li><strong>Viewport Meta Tag:</strong> Essential for responsive design</li>
          </ul>
          
          <h3>Accessibility Standards (WCAG):</h3>
          <ul>
            <li><strong>Alt Text:</strong> Describe all images</li>
            <li><strong>Heading Hierarchy:</strong> Proper h1-h6 structure</li>
            <li><strong>Focus Management:</strong> Logical tab order</li>
            <li><strong>Color Contrast:</strong> Ensure readable text</li>
            <li><strong>ARIA Labels:</strong> Enhance screen reader compatibility</li>
          </ul>
          
          <h3>SEO Best Practices:</h3>
          <ul>
            <li><strong>Title Tags:</strong> Unique, descriptive titles</li>
            <li><strong>Meta Descriptions:</strong> Compelling page summaries</li>
            <li><strong>Structured Data:</strong> Help search engines understand content</li>
            <li><strong>Internal Linking:</strong> Connect related content</li>
          </ul>
        `,
        codeExample: `<!-- Professional HTML Template -->
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Essential Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Professional web development services">
    
    <!-- SEO Meta Tags -->
    <meta name="keywords" content="web development, HTML, CSS, JavaScript">
    <meta name="author" content="Your Company Name">
    
    <!-- Open Graph Tags -->
    <meta property="og:title" content="Professional Web Services">
    <meta property="og:description" content="High-quality web development">
    <meta property="og:image" content="og-image.jpg">
    
    <title>Professional Web Development Services</title>
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Your Company",
        "url": "https://yoursite.com"
    }
    </script>
</head>
<body>
    <!-- Skip Link for Accessibility -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Semantic Structure -->
    <header role="banner">
        <nav role="navigation" aria-label="Main navigation">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main id="main-content" role="main">
        <section aria-labelledby="services-heading">
            <h1 id="services-heading">Our Services</h1>
            <p>Professional web development with modern standards.</p>
        </section>
    </main>
    
    <footer role="contentinfo">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
    </footer>
</body>
</html>`
      }
    ]
  },
  {
    id: 'css',
    title: 'CSS',
    description: 'Master CSS - styling and layout for beautiful web pages',
    color: '#1572b6',
    lessons: [
      {
        id: 'css-intro',
        title: 'CSS Introduction',
        content: `
          <h2>What is CSS?</h2>
          <p>CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML documents. CSS controls layout, colors, fonts, spacing, animations, and responsive design across multiple devices.</p>
          
          <h3>The Evolution of CSS:</h3>
          <ul>
            <li><strong>CSS1 (1996):</strong> Basic styling capabilities</li>
            <li><strong>CSS2 (1998):</strong> Positioning, media types, and more selectors</li>
            <li><strong>CSS3 (2011-present):</strong> Modular approach with animations, gradients, and flexbox</li>
            <li><strong>CSS4:</strong> Future developments in selectors and features</li>
          </ul>
          
          <h3>Why Use CSS?</h3>
          <ul>
            <li><strong>Separation of Concerns:</strong> Keep content (HTML) separate from presentation (CSS)</li>
            <li><strong>Efficiency:</strong> Write once, apply to multiple pages</li>
            <li><strong>Maintainability:</strong> Easy to update site-wide styles</li>
            <li><strong>Performance:</strong> Smaller HTML files, cached CSS files</li>
            <li><strong>Flexibility:</strong> Complete control over visual presentation</li>
          </ul>
          
          <h3>How to Add CSS:</h3>
          <ul>
            <li><strong>External CSS:</strong> Separate .css file linked with &lt;link&gt; tag (best practice)</li>
            <li><strong>Internal CSS:</strong> &lt;style&gt; tag in HTML head section</li>
            <li><strong>Inline CSS:</strong> Style attribute on individual elements (use sparingly)</li>
          </ul>
          
          <h3>CSS Syntax Rules:</h3>
          <p>CSS follows a simple syntax: selector { property: value; }. Multiple declarations are separated by semicolons, and rules are case-insensitive (except for class/ID names).</p>
        `,
        codeExample: `/* CSS Syntax */
selector {
    property: value;
}

/* Basic Examples */
h1 {
    color: blue;
    font-size: 28px;
    text-align: center;
}

p {
    color: #333;
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

.highlight {
    background-color: yellow;
    padding: 10px;
}

#header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}`
      },
      {
        id: 'css-selectors',
        title: 'CSS Selectors',
        content: `
          <h2>CSS Selectors</h2>
          <p>Selectors are used to target specific HTML elements that you want to style. There are various types of selectors in CSS.</p>
          
          <h3>Types of Selectors:</h3>
          <ul>
            <li><strong>Element Selector:</strong> Targets HTML elements (h1, p, div)</li>
            <li><strong>Class Selector:</strong> Targets elements with specific class (.className)</li>
            <li><strong>ID Selector:</strong> Targets element with specific ID (#idName)</li>
            <li><strong>Attribute Selector:</strong> Targets elements with specific attributes</li>
            <li><strong>Pseudo-classes:</strong> Target element states (:hover, :active)</li>
          </ul>
        `,
        codeExample: `/* Element Selector */
h1 {
    color: red;
}

/* Class Selector */
.button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
}

/* ID Selector */
#navbar {
    background-color: #333;
    height: 60px;
}

/* Attribute Selector */
input[type="text"] {
    border: 2px solid #ddd;
    padding: 8px;
}

/* Pseudo-classes */
a:hover {
    color: #ff6b6b;
    text-decoration: none;
}

button:active {
    transform: scale(0.98);
}

/* Combined Selectors */
.container h2 {
    margin-bottom: 15px;
}

.card:hover .title {
    color: #007bff;
}`
      },
      {
        id: 'css-box-model',
        title: 'CSS Box Model',
        content: `
          <h2>CSS Box Model</h2>
          <p>The CSS box model describes how elements are structured and how space is distributed around them. Every element is a rectangular box.</p>
          
          <h3>Box Model Components:</h3>
          <ul>
            <li><strong>Content:</strong> The actual content (text, images, etc.)</li>
            <li><strong>Padding:</strong> Space between content and border</li>
            <li><strong>Border:</strong> Line around the padding and content</li>
            <li><strong>Margin:</strong> Space outside the border</li>
          </ul>
          
          <h3>Box Sizing:</h3>
          <p>The box-sizing property controls how the total width and height are calculated.</p>
        `,
        codeExample: `/* Box Model Properties */
.box {
    width: 300px;
    height: 200px;
    padding: 20px;
    border: 5px solid #333;
    margin: 15px;
    background-color: #f0f0f0;
}

/* Box Sizing */
.content-box {
    box-sizing: content-box; /* default */
    /* Total width = width + padding + border */
}

.border-box {
    box-sizing: border-box;
    /* Total width = width (includes padding and border) */
}

/* Universal Box Sizing (recommended) */
* {
    box-sizing: border-box;
}

/* Margin and Padding Shorthand */
.example {
    margin: 10px 20px 15px 5px; /* top right bottom left */
    padding: 20px 15px; /* top/bottom left/right */
    margin: 10px auto; /* auto centers element */
}`
      },
      {
        id: 'css-flexbox',
        title: 'CSS Flexbox',
        content: `
          <h2>CSS Flexbox</h2>
          <p>Flexbox is a powerful layout method that allows you to arrange elements in a flexible way. It's perfect for creating responsive layouts.</p>
          
          <h3>Flex Container Properties:</h3>
          <ul>
            <li><strong>display: flex;</strong> - Creates flex container</li>
            <li><strong>flex-direction:</strong> row, column, row-reverse, column-reverse</li>
            <li><strong>justify-content:</strong> Controls main axis alignment</li>
            <li><strong>align-items:</strong> Controls cross axis alignment</li>
            <li><strong>flex-wrap:</strong> Controls whether items wrap</li>
          </ul>
        `,
        codeExample: `/* Basic Flexbox Container */
.flex-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

/* Flex Items */
.flex-item {
    flex: 1; /* grow, shrink, basis */
    padding: 20px;
    background: #f0f0f0;
    text-align: center;
}

/* Common Flexbox Patterns */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.center-content {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    flex: 1 1 300px; /* grow shrink basis */
    min-width: 0; /* prevents overflow */
}`
      },
      {
        id: 'css-grid',
        title: 'CSS Grid Layout',
        content: `
          <h2>CSS Grid - Two-Dimensional Layouts</h2>
          <p>CSS Grid is a powerful layout system that allows you to create complex two-dimensional layouts with ease. Unlike Flexbox which is one-dimensional, Grid excels at both rows and columns.</p>
          
          <h3>Grid vs Flexbox:</h3>
          <ul>
            <li><strong>Grid:</strong> Two-dimensional (rows and columns)</li>
            <li><strong>Flexbox:</strong> One-dimensional (either row or column)</li>
            <li><strong>Grid:</strong> Better for page layouts</li>
            <li><strong>Flexbox:</strong> Better for component layouts</li>
          </ul>
          
          <h3>Grid Container Properties:</h3>
          <ul>
            <li><strong>display: grid:</strong> Creates a grid container</li>
            <li><strong>grid-template-columns:</strong> Defines column sizes</li>
            <li><strong>grid-template-rows:</strong> Defines row sizes</li>
            <li><strong>grid-gap:</strong> Spacing between grid items</li>
            <li><strong>grid-template-areas:</strong> Named grid areas</li>
          </ul>
          
          <h3>Grid Item Properties:</h3>
          <ul>
            <li><strong>grid-column:</strong> Column span and position</li>
            <li><strong>grid-row:</strong> Row span and position</li>
            <li><strong>grid-area:</strong> Named area placement</li>
          </ul>
        `,
        codeExample: `/* Grid Container */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 20px;
    padding: 20px;
}

/* Advanced Grid Layout */
.page-layout {
    display: grid;
    grid-template-columns: 200px 1fr 150px;
    grid-template-rows: 60px 1fr 40px;
    grid-template-areas:
        "header header header"
        "sidebar content ads"
        "footer footer footer";
    min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.ads { grid-area: ads; }
.footer { grid-area: footer; }

/* Responsive Grid */
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}

/* Grid Item Positioning */
.featured-item {
    grid-column: 1 / -1; /* Span all columns */
    grid-row: span 2;    /* Span 2 rows */
}`
      },
      {
        id: 'css-animations',
        title: 'CSS Animations & Transitions',
        content: `
          <h2>CSS Animations and Transitions</h2>
          <p>CSS animations and transitions bring life to your web pages by enabling smooth changes between different states of elements.</p>
          
          <h3>CSS Transitions:</h3>
          <ul>
            <li><strong>transition-property:</strong> Which properties to animate</li>
            <li><strong>transition-duration:</strong> How long the transition takes</li>
            <li><strong>transition-timing-function:</strong> Speed curve of transition</li>
            <li><strong>transition-delay:</strong> Wait time before starting</li>
          </ul>
          
          <h3>CSS Keyframes:</h3>
          <p>Keyframes allow you to create complex animations by defining specific points in the animation sequence.</p>
          
          <h3>Animation Properties:</h3>
          <ul>
            <li><strong>animation-name:</strong> Name of keyframe animation</li>
            <li><strong>animation-duration:</strong> Length of animation</li>
            <li><strong>animation-iteration-count:</strong> How many times to repeat</li>
            <li><strong>animation-direction:</strong> Forward, reverse, or alternate</li>
            <li><strong>animation-fill-mode:</strong> What happens before/after</li>
          </ul>
          
          <h3>Performance Tips:</h3>
          <ul>
            <li>Animate transform and opacity for best performance</li>
            <li>Use will-change property for complex animations</li>
            <li>Avoid animating layout properties (width, height)</li>
          </ul>
        `,
        codeExample: `/* CSS Transitions */
.button {
    background: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.button:hover {
    background: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* CSS Keyframe Animation */
@keyframes slideIn {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.slide-in {
    animation: slideIn 0.5s ease-out;
}

/* Pulse Animation */
@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
}

.pulse {
    animation: pulse 2s infinite;
}

/* Loading Spinner */
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.loading {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}`
      },
      {
        id: 'css-responsive',
        title: 'Responsive Design with CSS',
        content: `
          <h2>Responsive Web Design</h2>
          <p>Responsive design ensures your website looks and works great on all devices - from mobile phones to large desktop screens.</p>
          
          <h3>Core Principles:</h3>
          <ul>
            <li><strong>Flexible Grid Systems:</strong> Use relative units instead of fixed pixels</li>
            <li><strong>Flexible Images:</strong> Images that scale with their container</li>
            <li><strong>Media Queries:</strong> Apply different styles for different screen sizes</li>
            <li><strong>Mobile-First Approach:</strong> Start with mobile design, then enhance for larger screens</li>
          </ul>
          
          <h3>CSS Units for Responsive Design:</h3>
          <ul>
            <li><strong>Relative Units:</strong> %, em, rem, vw, vh, vmin, vmax</li>
            <li><strong>When to use %:</strong> For widths relative to parent</li>
            <li><strong>When to use em:</strong> For spacing relative to font size</li>
            <li><strong>When to use rem:</strong> For consistent sizing throughout site</li>
            <li><strong>Viewport Units:</strong> vw (viewport width), vh (viewport height)</li>
          </ul>
          
          <h3>Common Breakpoints:</h3>
          <ul>
            <li><strong>Mobile:</strong> 320px - 768px</li>
            <li><strong>Tablet:</strong> 769px - 1024px</li>
            <li><strong>Desktop:</strong> 1025px+</li>
          </ul>
        `,
        codeExample: `/* Mobile-First Approach */
/* Base styles for mobile */
.container {
    width: 100%;
    padding: 1rem;
    margin: 0 auto;
}

.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

/* Tablet styles */
@media screen and (min-width: 768px) {
    .container {
        max-width: 750px;
        padding: 2rem;
    }
    
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Desktop styles */
@media screen and (min-width: 1024px) {
    .container {
        max-width: 1200px;
    }
    
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Responsive Typography */
.heading {
    font-size: clamp(1.5rem, 4vw, 3rem);
    line-height: 1.2;
}

/* Responsive Images */
.responsive-img {
    width: 100%;
    height: auto;
    max-width: 100%;
}

/* Print Styles */
@media print {
    .no-print {
        display: none;
    }
    
    body {
        font-size: 12pt;
        line-height: 1.4;
    }
}`
      },
      {
        id: 'css-variables',
        title: 'CSS Custom Properties (Variables)',
        content: `
          <h2>CSS Custom Properties</h2>
          <p>CSS Custom Properties (also known as CSS Variables) allow you to store values that can be reused throughout your stylesheet, making maintenance easier and enabling dynamic theming.</p>
          
          <h3>Benefits of CSS Variables:</h3>
          <ul>
            <li><strong>Maintainability:</strong> Change values in one place</li>
            <li><strong>Dynamic Updates:</strong> Can be changed with JavaScript</li>
            <li><strong>Inheritance:</strong> Variables cascade like other CSS properties</li>
            <li><strong>Scoping:</strong> Different values in different contexts</li>
            <li><strong>Fallback Values:</strong> Provide defaults for unsupported browsers</li>
          </ul>
          
          <h3>Syntax:</h3>
          <ul>
            <li><strong>Declaration:</strong> --variable-name: value;</li>
            <li><strong>Usage:</strong> var(--variable-name, fallback)</li>
            <li><strong>Scope:</strong> :root for global, or any selector for local</li>
          </ul>
          
          <h3>Use Cases:</h3>
          <ul>
            <li><strong>Color Schemes:</strong> Easy theme switching</li>
            <li><strong>Spacing Systems:</strong> Consistent spacing throughout site</li>
            <li><strong>Typography:</strong> Font sizes and line heights</li>
            <li><strong>Component Variants:</strong> Different versions of same component</li>
          </ul>
        `,
        codeExample: `/* Global CSS Variables */
:root {
    /* Color Palette */
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --success-color: #28a745;
    --danger-color: #dc3545;
    --warning-color: #ffc107;
    
    /* Spacing System */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 2rem;
    --space-xl: 3rem;
    
    /* Typography */
    --font-family-primary: 'Inter', sans-serif;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.25rem;
    --font-size-xl: 1.5rem;
    
    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.16);
    --shadow-lg: 0 10px 15px rgba(0,0,0,0.20);
}

/* Using Variables */
.button {
    background-color: var(--primary-color);
    color: white;
    padding: var(--space-sm) var(--space-md);
    font-family: var(--font-family-primary);
    font-size: var(--font-size-base);
    border-radius: var(--space-xs);
    box-shadow: var(--shadow-sm);
    border: none;
    cursor: pointer;
}

.button:hover {
    box-shadow: var(--shadow-md);
}

/* Dark Theme */
[data-theme="dark"] {
    --primary-color: #0d6efd;
    --text-color: #ffffff;
    --bg-color: #212529;
}

/* Component Scoped Variables */
.card {
    --card-padding: var(--space-md);
    --card-radius: calc(var(--space-xs) * 2);
    
    padding: var(--card-padding);
    border-radius: var(--card-radius);
    background: var(--bg-color, white);
}`
      },
      {
        id: 'css-advanced-selectors',
        title: 'Advanced CSS Selectors',
        content: `
          <h2>Advanced CSS Selectors</h2>
          <p>Master advanced CSS selectors to target elements with precision and create more maintainable stylesheets.</p>
          
          <h3>Attribute Selectors:</h3>
          <ul>
            <li><strong>[attr]:</strong> Elements with attribute</li>
            <li><strong>[attr="value"]:</strong> Exact attribute value</li>
            <li><strong>[attr^="value"]:</strong> Starts with value</li>
            <li><strong>[attr$="value"]:</strong> Ends with value</li>
            <li><strong>[attr*="value"]:</strong> Contains value</li>
            <li><strong>[attr~="value"]:</strong> Word in space-separated list</li>
          </ul>
          
          <h3>Pseudo-classes:</h3>
          <ul>
            <li><strong>:nth-child():</strong> Select by position</li>
            <li><strong>:nth-of-type():</strong> Select by type and position</li>
            <li><strong>:not():</strong> Exclude elements</li>
            <li><strong>:has():</strong> Parent selectors (new)</li>
            <li><strong>:is():</strong> Match any selector in list</li>
            <li><strong>:where():</strong> Zero specificity matching</li>
          </ul>
          
          <h3>Pseudo-elements:</h3>
          <ul>
            <li><strong>::before:</strong> Insert content before element</li>
            <li><strong>::after:</strong> Insert content after element</li>
            <li><strong>::first-line:</strong> First line of text</li>
            <li><strong>::first-letter:</strong> First letter of text</li>
            <li><strong>::selection:</strong> Selected text</li>
          </ul>
        `,
        codeExample: `/* Attribute Selectors */
input[type="email"] {
    border-color: blue;
}

a[href^="https://"] {
    color: green;
}

img[alt*="icon"] {
    width: 24px;
    height: 24px;
}

/* Advanced Pseudo-classes */
.list-item:nth-child(odd) {
    background-color: #f8f9fa;
}

.list-item:nth-child(3n+1) {
    color: red;
}

.button:not(.disabled) {
    cursor: pointer;
}

/* Modern Selectors */
.container:has(.error) {
    border-color: red;
}

:is(h1, h2, h3):hover {
    color: blue;
}

:where(.btn, .button) {
    padding: 0.5rem 1rem;
}

/* Pseudo-elements */
.quote::before {
    content: "\x201C"; /* Opening quote */
    font-size: 2em;
    color: #ccc;
}

.quote::after {
    content: "\x201D"; /* Closing quote */
    font-size: 2em;
    color: #ccc;
}

.tooltip {
    position: relative;
}

.tooltip::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
}

.tooltip:hover::after {
    opacity: 1;
}`
      },
      {
        id: 'css-best-practices',
        title: 'CSS Best Practices & Architecture',
        content: `
          <h2>CSS Architecture and Best Practices</h2>
          <p>Writing maintainable CSS requires following established patterns and methodologies. Learn industry-standard approaches to organizing your CSS.</p>
          
          <h3>CSS Methodologies:</h3>
          <ul>
            <li><strong>BEM:</strong> Block Element Modifier methodology</li>
            <li><strong>OOCSS:</strong> Object-Oriented CSS</li>
            <li><strong>SMACSS:</strong> Scalable and Modular Architecture</li>
            <li><strong>Atomic CSS:</strong> Small, single-purpose classes</li>
            <li><strong>CSS-in-JS:</strong> JavaScript-based styling solutions</li>
          </ul>
          
          <h3>BEM Methodology:</h3>
          <ul>
            <li><strong>Block:</strong> Standalone component (.menu)</li>
            <li><strong>Element:</strong> Part of block (.menu__item)</li>
            <li><strong>Modifier:</strong> Variation (.menu--vertical)</li>
          </ul>
          
          <h3>CSS Organization:</h3>
          <ul>
            <li><strong>Base Styles:</strong> Reset, typography, global styles</li>
            <li><strong>Layout:</strong> Grid systems, page structure</li>
            <li><strong>Components:</strong> Reusable UI components</li>
            <li><strong>Utilities:</strong> Helper classes</li>
            <li><strong>Themes:</strong> Color schemes and variations</li>
          </ul>
          
          <h3>Performance Best Practices:</h3>
          <ul>
            <li><strong>Minimize CSS:</strong> Remove unused styles</li>
            <li><strong>Optimize Selectors:</strong> Avoid overly complex selectors</li>
            <li><strong>Critical CSS:</strong> Load above-the-fold styles first</li>
            <li><strong>CSS Loading:</strong> Use preload for important stylesheets</li>
          </ul>
        `,
        codeExample: `/* BEM Methodology Example */
.card { /* Block */
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    padding: 1rem;
}

.card__header { /* Element */
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
}

.card__title { /* Element */
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
}

.card__content { /* Element */
    color: #666;
    line-height: 1.5;
}

.card--featured { /* Modifier */
    border: 2px solid gold;
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.card--large { /* Modifier */
    padding: 2rem;
}

/* Utility Classes */
.text-center { text-align: center; }
.mb-1 { margin-bottom: 0.25rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mb-3 { margin-bottom: 1rem; }
.text-primary { color: var(--primary-color); }
.bg-light { background-color: #f8f9fa; }

/* Component States */
.button {
    /* Base styles */
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
}

.button:hover {
    transform: translateY(-1px);
}

.button:active {
    transform: translateY(0);
}

.button:focus {
    outline: 2px solid var(--focus-color);
    outline-offset: 2px;
}

.button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
}

/* CSS Organization Structure */
/* 1. Variables and Custom Properties */
/* 2. Reset and Base Styles */
/* 3. Typography */
/* 4. Layout Components */
/* 5. UI Components */
/* 6. Utility Classes */
/* 7. Media Queries */`
      }
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    description: 'Master the programming language of the web',
    color: '#f7df1e',
    lessons: [
      {
        id: 'js-intro',
        title: 'JavaScript Introduction',
        content: `
          <h2>What is JavaScript?</h2>
          <p>JavaScript is a high-level, interpreted programming language that enables interactive web pages. Originally created for the browser, JavaScript now runs everywhere - servers, mobile apps, desktop applications, and even IoT devices.</p>
          
          <h3>History of JavaScript:</h3>
          <ul>
            <li><strong>1995:</strong> Created by Brendan Eich at Netscape in just 10 days</li>
            <li><strong>1997:</strong> Standardized as ECMAScript</li>
            <li><strong>2009:</strong> Node.js brings JavaScript to servers</li>
            <li><strong>2015:</strong> ES6/ES2015 introduces modern features</li>
          </ul>
          
          <h3>What makes JavaScript special?</h3>
          <ul>
            <li><strong>Dynamic Typing:</strong> Variables can hold different types</li>
            <li><strong>Event-Driven:</strong> Responds to user interactions</li>
            <li><strong>Asynchronous:</strong> Non-blocking code execution</li>
            <li><strong>Interpreted:</strong> No compilation step needed</li>
            <li><strong>Versatile:</strong> Frontend, backend, mobile, desktop</li>
          </ul>
          
          <h3>JavaScript in the Browser:</h3>
          <ul>
            <li>Manipulate HTML DOM elements</li>
            <li>Handle user events (clicks, typing, etc.)</li>
            <li>Communicate with servers (AJAX/Fetch)</li>
            <li>Store data locally in browsers</li>
            <li>Create animations and visual effects</li>
            <li>Build complete web applications</li>
          </ul>
        `
      },
      {
        id: 'js-variables-datatypes',
        title: 'Variables and Data Types',
        content: `
          <h2>JavaScript Variables</h2>
          <p>Variables are containers for storing data values. JavaScript uses dynamic typing, meaning you don't need to declare variable types explicitly.</p>
          
          <h3>Variable Declarations:</h3>
          <ul>
            <li><strong>var</strong> - Function scoped, can be redeclared, hoisted</li>
            <li><strong>let</strong> - Block scoped, cannot be redeclared, not hoisted</li>
            <li><strong>const</strong> - Block scoped, cannot be reassigned, not hoisted</li>
          </ul>
          
          <h3>JavaScript Data Types:</h3>
          <h4>Primitive Types:</h4>
          <ul>
            <li><strong>String:</strong> Text data - "Hello", 'World'</li>
            <li><strong>Number:</strong> Integers and floats - 42, 3.14</li>
            <li><strong>Boolean:</strong> true or false values</li>
            <li><strong>Undefined:</strong> Variable declared but not assigned</li>
            <li><strong>Null:</strong> Intentional absence of value</li>
            <li><strong>Symbol:</strong> Unique identifier (ES6)</li>
            <li><strong>BigInt:</strong> Large integers (ES2020)</li>
          </ul>
          
          <h4>Non-Primitive Types:</h4>
          <ul>
            <li><strong>Object:</strong> Collections of key-value pairs</li>
            <li><strong>Array:</strong> Ordered lists of values</li>
            <li><strong>Function:</strong> Reusable blocks of code</li>
          </ul>
          
          <h3>Type Checking:</h3>
          <p>Use the <code>typeof</code> operator to check variable types. Objects require additional checking since arrays and null return "object".</p>
        `
      },
      {
        id: 'js-operators-control',
        title: 'Operators and Control Structures',
        content: `
          <h2>JavaScript Operators</h2>
          <p>Operators are used to perform operations on variables and values. JavaScript includes arithmetic, comparison, logical, and assignment operators.</p>
          
          <h3>Arithmetic Operators:</h3>
          <ul>
            <li><strong>+</strong> Addition (also string concatenation)</li>
            <li><strong>-</strong> Subtraction</li>
            <li><strong>*</strong> Multiplication</li>
            <li><strong>/</strong> Division</li>
            <li><strong>%</strong> Modulus (remainder)</li>
            <li><strong>**</strong> Exponentiation (ES2016)</li>
            <li><strong>++</strong> Increment</li>
            <li><strong>--</strong> Decrement</li>
          </ul>
          
          <h3>Comparison Operators:</h3>
          <ul>
            <li><strong>==</strong> Equal to (type coercion)</li>
            <li><strong>===</strong> Strict equal to (no coercion)</li>
            <li><strong>!=</strong> Not equal to</li>
            <li><strong>!==</strong> Strict not equal to</li>
            <li><strong>&gt;</strong> Greater than</li>
            <li><strong>&lt;</strong> Less than</li>
            <li><strong>&gt;=</strong> Greater than or equal to</li>
            <li><strong>&lt;=</strong> Less than or equal to</li>
          </ul>
          
          <h3>Control Structures:</h3>
          <h4>Conditional Statements:</h4>
          <ul>
            <li><strong>if...else:</strong> Execute code based on conditions</li>
            <li><strong>switch:</strong> Execute one of many code blocks</li>
            <li><strong>Ternary operator:</strong> Shorthand for simple if...else</li>
          </ul>
          
          <h4>Loops:</h4>
          <ul>
            <li><strong>for:</strong> Loop with initialization, condition, increment</li>
            <li><strong>while:</strong> Loop while condition is true</li>
            <li><strong>do...while:</strong> Execute once, then loop while condition is true</li>
            <li><strong>for...in:</strong> Loop through object properties</li>
            <li><strong>for...of:</strong> Loop through iterable values</li>
          </ul>
        `
      },
      {
        id: 'js-functions-scope',
        title: 'Functions and Scope',
        content: `
          <h2>JavaScript Functions</h2>
          <p>Functions are one of the fundamental building blocks in JavaScript. A function is a reusable block of code designed to perform a particular task.</p>
          
          <h3>Function Declaration Methods:</h3>
          <ul>
            <li><strong>Function Declaration:</strong> Hoisted, can be called before definition</li>
            <li><strong>Function Expression:</strong> Not hoisted, assigned to variable</li>
            <li><strong>Arrow Function:</strong> Shorter syntax, lexical this binding</li>
            <li><strong>Method:</strong> Function as object property</li>
          </ul>
          
          <h3>Function Parameters:</h3>
          <ul>
            <li><strong>Required Parameters:</strong> Must be provided when calling</li>
            <li><strong>Optional Parameters:</strong> Have default values</li>
            <li><strong>Rest Parameters:</strong> Collect remaining arguments into array</li>
            <li><strong>Destructuring:</strong> Extract values from objects/arrays</li>
          </ul>
          
          <h3>JavaScript Scope:</h3>
          <p>Scope determines where variables can be accessed in your code. JavaScript has function scope and block scope.</p>
          
          <h4>Types of Scope:</h4>
          <ul>
            <li><strong>Global Scope:</strong> Variables accessible everywhere</li>
            <li><strong>Function Scope:</strong> Variables accessible within function</li>
            <li><strong>Block Scope:</strong> Variables accessible within block (let/const)</li>
            <li><strong>Module Scope:</strong> Variables accessible within module</li>
          </ul>
          
          <h3>Closures:</h3>
          <p>A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned. This is a powerful feature for data privacy and function factories.</p>
          
          <h3>Higher-Order Functions:</h3>
          <p>Functions that take other functions as arguments or return functions. Common examples include map(), filter(), reduce(), and forEach().</p>
        `
      },
      {
        id: 'js-objects-arrays',
        title: 'Objects and Arrays',
        content: `
          <h2>JavaScript Objects</h2>
          <p>Objects are collections of related data and functionality. They store data as key-value pairs and are the foundation of JavaScript programming.</p>
          
          <h3>Object Creation:</h3>
          <ul>
            <li><strong>Object Literal:</strong> Most common, using curly braces {}</li>
            <li><strong>Constructor Function:</strong> Using new keyword with function</li>
            <li><strong>Object.create():</strong> Create object with specific prototype</li>
            <li><strong>Class Syntax:</strong> ES6 class-based object creation</li>
          </ul>
          
          <h3>Working with Objects:</h3>
          <ul>
            <li><strong>Property Access:</strong> Dot notation and bracket notation</li>
            <li><strong>Property Addition:</strong> Add new properties dynamically</li>
            <li><strong>Property Deletion:</strong> Remove properties with delete</li>
            <li><strong>Property Enumeration:</strong> Loop through properties</li>
          </ul>
          
          <h3>JavaScript Arrays</h3>
          <p>Arrays are ordered lists of values. They're objects with special properties and methods for handling indexed data.</p>
          
          <h3>Array Methods:</h3>
          <h4>Mutating Methods (Change Original Array):</h4>
          <ul>
            <li><strong>push():</strong> Add elements to end</li>
            <li><strong>pop():</strong> Remove last element</li>
            <li><strong>shift():</strong> Remove first element</li>
            <li><strong>unshift():</strong> Add elements to beginning</li>
            <li><strong>splice():</strong> Add/remove elements at any position</li>
            <li><strong>sort():</strong> Sort elements</li>
            <li><strong>reverse():</strong> Reverse element order</li>
          </ul>
          
          <h4>Non-Mutating Methods (Return New Array):</h4>
          <ul>
            <li><strong>concat():</strong> Join arrays</li>
            <li><strong>slice():</strong> Extract portion of array</li>
            <li><strong>map():</strong> Transform each element</li>
            <li><strong>filter():</strong> Filter elements by condition</li>
            <li><strong>reduce():</strong> Reduce array to single value</li>
          </ul>
          
          <h3>Object and Array Destructuring:</h3>
          <p>ES6 feature that allows extracting values from objects and arrays into distinct variables, making code cleaner and more readable.</p>
        `
      },
      {
        id: 'js-dom-manipulation',
        title: 'DOM Manipulation',
        content: `
          <h2>Document Object Model (DOM)</h2>
          <p>The DOM is a programming interface for web documents. It represents the page structure as a tree of objects that JavaScript can manipulate to change content, structure, and styling.</p>
          
          <h3>Understanding the DOM:</h3>
          <ul>
            <li><strong>Document:</strong> Root node representing the entire page</li>
            <li><strong>Elements:</strong> HTML tags like div, p, h1</li>
            <li><strong>Attributes:</strong> Properties of elements like id, class</li>
            <li><strong>Text Nodes:</strong> The actual text content</li>
          </ul>
          
          <h3>Selecting DOM Elements:</h3>
          <ul>
            <li><strong>getElementById():</strong> Select single element by ID</li>
            <li><strong>getElementsByClassName():</strong> Select elements by class name</li>
            <li><strong>getElementsByTagName():</strong> Select elements by tag name</li>
            <li><strong>querySelector():</strong> Select first element matching CSS selector</li>
            <li><strong>querySelectorAll():</strong> Select all elements matching CSS selector</li>
          </ul>
          
          <h3>Manipulating Elements:</h3>
          <h4>Content Manipulation:</h4>
          <ul>
            <li><strong>innerHTML:</strong> Get/set HTML content</li>
            <li><strong>textContent:</strong> Get/set text content</li>
            <li><strong>innerText:</strong> Get/set visible text</li>
          </ul>
          
          <h4>Attribute Manipulation:</h4>
          <ul>
            <li><strong>getAttribute():</strong> Get attribute value</li>
            <li><strong>setAttribute():</strong> Set attribute value</li>
            <li><strong>removeAttribute():</strong> Remove attribute</li>
            <li><strong>hasAttribute():</strong> Check if attribute exists</li>
          </ul>
          
          <h4>Style Manipulation:</h4>
          <ul>
            <li><strong>style property:</strong> Direct CSS styling</li>
            <li><strong>className:</strong> Get/set CSS classes</li>
            <li><strong>classList:</strong> Advanced class manipulation</li>
          </ul>
          
          <h3>Creating and Modifying Structure:</h3>
          <ul>
            <li><strong>createElement():</strong> Create new elements</li>
            <li><strong>appendChild():</strong> Add child element</li>
            <li><strong>insertBefore():</strong> Insert element before another</li>
            <li><strong>removeChild():</strong> Remove child element</li>
            <li><strong>replaceChild():</strong> Replace existing element</li>
          </ul>
        `
      },
      {
        id: 'js-events',
        title: 'Events and Event Handling',
        content: `
          <h2>JavaScript Events</h2>
          <p>Events are actions that happen in the browser - user clicks, page loads, form submissions, etc. JavaScript can respond to these events to create interactive web pages.</p>
          
          <h3>Common Event Types:</h3>
          <h4>Mouse Events:</h4>
          <ul>
            <li><strong>click:</strong> Mouse click on element</li>
            <li><strong>dblclick:</strong> Mouse double-click</li>
            <li><strong>mousedown/mouseup:</strong> Mouse button pressed/released</li>
            <li><strong>mouseover/mouseout:</strong> Mouse enters/leaves element</li>
            <li><strong>mousemove:</strong> Mouse moves over element</li>
          </ul>
          
          <h4>Keyboard Events:</h4>
          <ul>
            <li><strong>keydown:</strong> Key pressed down</li>
            <li><strong>keyup:</strong> Key released</li>
            <li><strong>keypress:</strong> Key pressed and released</li>
          </ul>
          
          <h4>Form Events:</h4>
          <ul>
            <li><strong>submit:</strong> Form submitted</li>
            <li><strong>change:</strong> Input value changed</li>
            <li><strong>focus/blur:</strong> Element gains/loses focus</li>
            <li><strong>input:</strong> Input value being entered</li>
          </ul>
          
          <h4>Window Events:</h4>
          <ul>
            <li><strong>load:</strong> Page finished loading</li>
            <li><strong>resize:</strong> Window resized</li>
            <li><strong>scroll:</strong> Page scrolled</li>
            <li><strong>beforeunload:</strong> Before page unloads</li>
          </ul>
          
          <h3>Event Handling Methods:</h3>
          <ul>
            <li><strong>HTML Attributes:</strong> onclick="function()"</li>
            <li><strong>DOM Properties:</strong> element.onclick = function</li>
            <li><strong>addEventListener():</strong> Modern, flexible approach</li>
          </ul>
          
          <h3>Event Object:</h3>
          <p>Contains information about the event that occurred:</p>
          <ul>
            <li><strong>target:</strong> Element that triggered the event</li>
            <li><strong>currentTarget:</strong> Element with event listener</li>
            <li><strong>type:</strong> Type of event</li>
            <li><strong>preventDefault():</strong> Stop default behavior</li>
            <li><strong>stopPropagation():</strong> Stop event bubbling</li>
          </ul>
          
          <h3>Event Propagation:</h3>
          <ul>
            <li><strong>Capturing Phase:</strong> Event travels down DOM tree</li>
            <li><strong>Target Phase:</strong> Event reaches target element</li>
            <li><strong>Bubbling Phase:</strong> Event bubbles up DOM tree</li>
          </ul>
        `
      },
      {
        id: 'js-async-programming',
        title: 'Asynchronous Programming',
        content: `
          <h2>Asynchronous JavaScript</h2>
          <p>JavaScript is single-threaded but can handle asynchronous operations through callbacks, promises, and async/await. This allows non-blocking code execution.</p>
          
          <h3>Understanding Asynchronous Behavior:</h3>
          <ul>
            <li><strong>Call Stack:</strong> Where synchronous code executes</li>
            <li><strong>Web APIs:</strong> Browser features (setTimeout, fetch, DOM events)</li>
            <li><strong>Callback Queue:</strong> Where completed async operations wait</li>
            <li><strong>Event Loop:</strong> Moves items from queue to call stack</li>
          </ul>
          
          <h3>Callbacks:</h3>
          <p>Functions passed to other functions to be executed later. Can lead to "callback hell" with nested callbacks.</p>
          
          <h3>Promises:</h3>
          <p>Objects representing eventual completion or failure of asynchronous operations. Have three states:</p>
          <ul>
            <li><strong>Pending:</strong> Initial state, neither fulfilled nor rejected</li>
            <li><strong>Fulfilled:</strong> Operation completed successfully</li>
            <li><strong>Rejected:</strong> Operation failed</li>
          </ul>
          
          <h4>Promise Methods:</h4>
          <ul>
            <li><strong>then():</strong> Handle successful resolution</li>
            <li><strong>catch():</strong> Handle rejection</li>
            <li><strong>finally():</strong> Execute code regardless of outcome</li>
            <li><strong>Promise.all():</strong> Wait for all promises to resolve</li>
            <li><strong>Promise.race():</strong> Resolve with first completed promise</li>
          </ul>
          
          <h3>Async/Await:</h3>
          <p>ES2017 syntax that makes asynchronous code look synchronous. Built on top of promises.</p>
          <ul>
            <li><strong>async function:</strong> Returns a promise</li>
            <li><strong>await:</strong> Pauses function until promise resolves</li>
            <li><strong>Error Handling:</strong> Use try/catch with async/await</li>
          </ul>
          
          <h3>Common Async Operations:</h3>
          <ul>
            <li><strong>fetch():</strong> Make HTTP requests</li>
            <li><strong>setTimeout():</strong> Delay code execution</li>
            <li><strong>setInterval():</strong> Repeat code execution</li>
            <li><strong>File Reading:</strong> Reading files in Node.js</li>
            <li><strong>Database Operations:</strong> Querying databases</li>
          </ul>
        `
      },
      {
        id: 'js-es6-features',
        title: 'ES6+ Modern Features',
        content: `
          <h2>ECMAScript 2015 (ES6) and Beyond</h2>
          <p>ES6 introduced many powerful features that modernized JavaScript. Understanding these features is essential for contemporary JavaScript development.</p>
          
          <h3>Variable Declarations:</h3>
          <ul>
            <li><strong>let:</strong> Block-scoped variable declaration</li>
            <li><strong>const:</strong> Block-scoped constant declaration</li>
            <li>Both avoid hoisting issues of <code>var</code></li>
          </ul>
          
          <h3>Arrow Functions:</h3>
          <ul>
            <li>Shorter syntax for function expressions</li>
            <li>Lexical <code>this</code> binding</li>
            <li>Cannot be used as constructors</li>
            <li>No <code>arguments</code> object</li>
          </ul>
          
          <h3>Template Literals:</h3>
          <ul>
            <li>Multi-line strings</li>
            <li>String interpolation with $&#123;&#125;</li>
            <li>Tagged template literals</li>
          </ul>
          
          <h3>Destructuring Assignment:</h3>
          <ul>
            <li><strong>Array Destructuring:</strong> Extract array elements</li>
            <li><strong>Object Destructuring:</strong> Extract object properties</li>
            <li><strong>Default Values:</strong> Fallback values</li>
            <li><strong>Nested Destructuring:</strong> Extract from nested structures</li>
          </ul>
          
          <h3>Enhanced Object Literals:</h3>
          <ul>
            <li><strong>Property Shorthand:</strong> {name} instead of {name: name}</li>
            <li><strong>Method Shorthand:</strong> method() instead of method: function()</li>
            <li><strong>Computed Properties:</strong> Dynamic property names</li>
          </ul>
          
          <h3>Classes:</h3>
          <ul>
            <li>Class declaration syntax</li>
            <li>Constructor methods</li>
            <li>Instance and static methods</li>
            <li>Inheritance with extends</li>
            <li>Super keyword</li>
          </ul>
          
          <h3>Modules:</h3>
          <ul>
            <li><strong>import/export:</strong> Module system</li>
            <li><strong>Named exports:</strong> Export multiple items</li>
            <li><strong>Default exports:</strong> Export single main item</li>
            <li><strong>Dynamic imports:</strong> Lazy loading modules</li>
          </ul>
          
          <h3>New Methods and Features:</h3>
          <ul>
            <li><strong>Array Methods:</strong> find(), includes(), Array.from()</li>
            <li><strong>String Methods:</strong> startsWith(), endsWith(), repeat()</li>
            <li><strong>Object Methods:</strong> Object.assign(), Object.keys()</li>
            <li><strong>Map and Set:</strong> New data structures</li>
            <li><strong>Symbols:</strong> Unique identifiers</li>
            <li><strong>Iterators:</strong> Custom iteration behavior</li>
            <li><strong>Generators:</strong> Functions that can pause and resume</li>
          </ul>
        `
      },
      {
        id: 'js-projects-best-practices',
        title: 'JavaScript Projects and Best Practices',
        content: `
          <h2>JavaScript Best Practices</h2>
          <p>Writing clean, maintainable JavaScript code requires following established patterns and best practices. These guidelines help create robust applications.</p>
          
          <h3>Code Organization:</h3>
          <ul>
            <li><strong>Modular Code:</strong> Break code into reusable modules</li>
            <li><strong>Separation of Concerns:</strong> Keep logic, presentation, and data separate</li>
            <li><strong>File Structure:</strong> Organize files logically</li>
            <li><strong>Naming Conventions:</strong> Use descriptive, consistent names</li>
          </ul>
          
          <h3>Performance Best Practices:</h3>
          <ul>
            <li><strong>Minimize DOM Access:</strong> Cache DOM queries</li>
            <li><strong>Use Event Delegation:</strong> Attach fewer event listeners</li>
            <li><strong>Optimize Loops:</strong> Cache array length, use appropriate loop type</li>
            <li><strong>Lazy Loading:</strong> Load resources when needed</li>
            <li><strong>Debouncing/Throttling:</strong> Control function execution frequency</li>
          </ul>
          
          <h3>Error Handling:</h3>
          <ul>
            <li><strong>Try/Catch Blocks:</strong> Handle runtime errors gracefully</li>
            <li><strong>Input Validation:</strong> Validate user input</li>
            <li><strong>Error Messages:</strong> Provide meaningful error information</li>
            <li><strong>Logging:</strong> Log errors for debugging</li>
          </ul>
          
          <h3>Security Considerations:</h3>
          <ul>
            <li><strong>Input Sanitization:</strong> Clean user input</li>
            <li><strong>XSS Prevention:</strong> Avoid innerHTML with user data</li>
            <li><strong>CSRF Protection:</strong> Use tokens for forms</li>
            <li><strong>Content Security Policy:</strong> Control resource loading</li>
          </ul>
          
          <h3>Project Ideas for Practice:</h3>
          
          <h4>Beginner Projects:</h4>
          <ul>
            <li><strong>Calculator:</strong> Basic arithmetic operations</li>
            <li><strong>To-Do List:</strong> Add, edit, delete tasks</li>
            <li><strong>Random Quote Generator:</strong> Display inspirational quotes</li>
            <li><strong>Color Picker:</strong> Generate random colors</li>
            <li><strong>Digital Clock:</strong> Real-time clock display</li>
          </ul>
          
          <h4>Intermediate Projects:</h4>
          <ul>
            <li><strong>Weather App:</strong> Fetch weather data from API</li>
            <li><strong>Quiz App:</strong> Multiple choice questions with scoring</li>
            <li><strong>Expense Tracker:</strong> Track income and expenses</li>
            <li><strong>Memory Game:</strong> Card matching game</li>
            <li><strong>Password Generator:</strong> Generate secure passwords</li>
          </ul>
          
          <h4>Advanced Projects:</h4>
          <ul>
            <li><strong>Chat Application:</strong> Real-time messaging</li>
            <li><strong>E-commerce Cart:</strong> Shopping cart functionality</li>
            <li><strong>Music Player:</strong> Audio playback controls</li>
            <li><strong>Drawing App:</strong> Canvas-based drawing tool</li>
            <li><strong>Task Management System:</strong> Project management tool</li>
          </ul>
          
          <h3>Development Tools:</h3>
          <ul>
            <li><strong>Code Editors:</strong> VS Code, Sublime Text</li>
            <li><strong>Browser DevTools:</strong> Debugging and profiling</li>
            <li><strong>Package Managers:</strong> npm, yarn</li>
            <li><strong>Build Tools:</strong> Webpack, Vite</li>
            <li><strong>Version Control:</strong> Git and GitHub</li>
            <li><strong>Linting:</strong> ESLint for code quality</li>
            <li><strong>Testing:</strong> Jest, Cypress for testing</li>
          </ul>
        `
      }
    ]
  },
  {
    id: 'react',
    title: 'React',
    description: 'Build modern UI and Single Page Applications with React',
    color: '#61dafb',
    lessons: [
      {
        id: 'react-intro',
        title: 'React Introduction',
        content: `
          <h2>What is React?</h2>
          <p>React is a JavaScript library for building user interfaces, particularly web applications. Created by Facebook in 2013, React has become one of the most popular frontend frameworks for creating dynamic, interactive web applications.</p>
          
          <h3>Key Concepts:</h3>
          <ul>
            <li><strong>Component-Based Architecture:</strong> Build encapsulated components that manage their own state</li>
            <li><strong>Virtual DOM:</strong> React creates an in-memory virtual DOM to optimize rendering</li>
            <li><strong>Declarative:</strong> Describe what the UI should look like for any given state</li>
            <li><strong>Unidirectional Data Flow:</strong> Data flows down from parent to child components</li>
          </ul>
          
          <h3>Why Choose React?</h3>
          <ul>
            <li><strong>Reusability:</strong> Components can be reused across different parts of application</li>
            <li><strong>Performance:</strong> Virtual DOM minimizes expensive DOM manipulation</li>
            <li><strong>Developer Experience:</strong> Great tooling, debugging, and community support</li>
            <li><strong>Ecosystem:</strong> Rich ecosystem of libraries and tools</li>
            <li><strong>Job Market:</strong> High demand for React developers</li>
          </ul>
          
          <h3>React vs Other Frameworks:</h3>
          <ul>
            <li><strong>Vue.js:</strong> React has larger community, Vue has gentler learning curve</li>
            <li><strong>Angular:</strong> React is more lightweight, Angular is full framework</li>
            <li><strong>Vanilla JavaScript:</strong> React provides structure and reusability</li>
          </ul>
          
          <h3>Prerequisites:</h3>
          <ul>
            <li>Solid understanding of HTML, CSS, and JavaScript</li>
            <li>ES6+ features (arrow functions, destructuring, modules)</li>
            <li>Basic understanding of Node.js and npm</li>
          </ul>
        `
      },
      {
        id: 'react-setup-jsx',
        title: 'React Setup and JSX',
        content: `
          <h2>Setting Up React</h2>
          <p>There are several ways to start a React project. The most common method is using Create React App, which provides a modern build setup with no configuration.</p>
          
          <h3>Installation Methods:</h3>
          <ul>
            <li><strong>Create React App:</strong> Official tool for React projects</li>
            <li><strong>Vite:</strong> Fast build tool with React template</li>
            <li><strong>Next.js:</strong> Full-stack React framework</li>
            <li><strong>Manual Setup:</strong> Custom Webpack/Babel configuration</li>
          </ul>
          
          <h3>Project Structure:</h3>
          <ul>
            <li><strong>public/:</strong> Static assets and HTML template</li>
            <li><strong>src/:</strong> React source code</li>
            <li><strong>src/index.js:</strong> Entry point of the application</li>
            <li><strong>src/App.js:</strong> Main application component</li>
            <li><strong>package.json:</strong> Project dependencies and scripts</li>
          </ul>
          
          <h2>JSX (JavaScript XML)</h2>
          <p>JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like syntax directly in JavaScript files.</p>
          
          <h3>JSX Rules:</h3>
          <ul>
            <li><strong>Single Parent:</strong> JSX expressions must have one parent element</li>
            <li><strong>Self-Closing Tags:</strong> All tags must be properly closed</li>
            <li><strong>className instead of class:</strong> Use className for CSS classes</li>
            <li><strong>camelCase Properties:</strong> Use camelCase for HTML attributes</li>
          </ul>
          
          <h3>JavaScript in JSX:</h3>
          <ul>
            <li><strong>Expressions:</strong> Use curly braces {} for JavaScript expressions</li>
            <li><strong>Variables:</strong> Display variable values</li>
            <li><strong>Functions:</strong> Call functions within JSX</li>
            <li><strong>Conditional Rendering:</strong> Show/hide elements based on conditions</li>
          </ul>
          
          <h3>JSX vs HTML Differences:</h3>
          <ul>
            <li>className instead of class</li>
            <li>htmlFor instead of for</li>
            <li>Style objects instead of style strings</li>
            <li>Self-closing tags required</li>
          </ul>
        `
      },
      {
        id: 'react-components-props',
        title: 'Components and Props',
        content: `
          <h2>React Components</h2>
          <p>Components are the building blocks of React applications. They are independent, reusable pieces of code that return JSX to describe what should appear on screen.</p>
          
          <h3>Types of Components:</h3>
          <h4>Functional Components:</h4>
          <ul>
            <li>Simple JavaScript functions that return JSX</li>
            <li>Modern preferred approach</li>
            <li>Use Hooks for state and lifecycle</li>
            <li>Easier to test and understand</li>
          </ul>
          
          <h4>Class Components:</h4>
          <ul>
            <li>ES6 classes that extend React.Component</li>
            <li>Legacy approach, still supported</li>
            <li>Have built-in state and lifecycle methods</li>
            <li>More verbose than functional components</li>
          </ul>
          
          <h2>Props (Properties)</h2>
          <p>Props are arguments passed into React components. They are passed to components via HTML attributes and allow components to be dynamic and reusable.</p>
          
          <h3>Props Characteristics:</h3>
          <ul>
            <li><strong>Read-Only:</strong> Props cannot be modified by the receiving component</li>
            <li><strong>Unidirectional:</strong> Data flows from parent to child</li>
            <li><strong>Dynamic:</strong> Props can be variables, functions, or objects</li>
            <li><strong>Typed:</strong> Can be validated with PropTypes</li>
          </ul>
          
          <h3>Working with Props:</h3>
          <ul>
            <li><strong>Destructuring:</strong> Extract props in function parameters</li>
            <li><strong>Default Props:</strong> Provide fallback values</li>
            <li><strong>Children Prop:</strong> Special prop for nested content</li>
            <li><strong>Prop Validation:</strong> Ensure correct prop types</li>
          </ul>
          
          <h3>Component Composition:</h3>
          <ul>
            <li>Break UI into small, focused components</li>
            <li>Compose larger features from smaller components</li>
            <li>Keep components single-purpose</li>
            <li>Enable component reusability</li>
          </ul>
        `
      },
      {
        id: 'react-state-hooks',
        title: 'State Management and Hooks',
        content: `
          <h2>React State</h2>
          <p>State is data that changes over time in your component. Unlike props, state is owned and controlled by the component itself and can be modified.</p>
          
          <h3>State Characteristics:</h3>
          <ul>
            <li><strong>Mutable:</strong> State can be changed using setter functions</li>
            <li><strong>Local:</strong> State belongs to the component that declares it</li>
            <li><strong>Reactive:</strong> Changing state triggers re-rendering</li>
            <li><strong>Immutable Updates:</strong> Always create new state objects</li>
          </ul>
          
          <h2>React Hooks</h2>
          <p>Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8.</p>
          
          <h3>Rules of Hooks:</h3>
          <ul>
            <li>Only call Hooks at the top level of functions</li>
            <li>Only call Hooks from React functions</li>
            <li>Hook names must start with "use"</li>
          </ul>
          
          <h3>Built-in Hooks:</h3>
          <h4>useState:</h4>
          <ul>
            <li>Manage component state</li>
            <li>Returns current state and setter function</li>
            <li>Can hold any type of value</li>
            <li>Updates are asynchronous</li>
          </ul>
          
          <h4>useEffect:</h4>
          <ul>
            <li>Perform side effects in components</li>
            <li>Runs after every render by default</li>
            <li>Can be optimized with dependencies</li>
            <li>Replaces componentDidMount, componentDidUpdate, componentWillUnmount</li>
          </ul>
          
          <h4>Other Important Hooks:</h4>
          <ul>
            <li><strong>useContext:</strong> Access React context values</li>
            <li><strong>useReducer:</strong> Manage complex state logic</li>
            <li><strong>useMemo:</strong> Memoize expensive calculations</li>
            <li><strong>useCallback:</strong> Memoize functions</li>
            <li><strong>useRef:</strong> Access DOM elements directly</li>
          </ul>
          
          <h3>Custom Hooks:</h3>
          <ul>
            <li>Reuse stateful logic between components</li>
            <li>Extract component logic into reusable functions</li>
            <li>Follow naming convention (start with "use")</li>
            <li>Can use other Hooks inside them</li>
          </ul>
        `
      },
      {
        id: 'react-event-handling',
        title: 'Event Handling in React',
        content: `
          <h2>React Event Handling</h2>
          <p>React has its own event system called SyntheticEvents, which wraps native DOM events to provide consistent behavior across different browsers.</p>
          
          <h3>SyntheticEvent Features:</h3>
          <ul>
            <li><strong>Cross-browser Compatibility:</strong> Same API across all browsers</li>
            <li><strong>Event Pooling:</strong> Events are reused for performance (legacy)</li>
            <li><strong>Prevent Default:</strong> Use preventDefault() to stop default behavior</li>
            <li><strong>Stop Propagation:</strong> Use stopPropagation() to stop event bubbling</li>
          </ul>
          
          <h3>Common Event Types:</h3>
          <h4>Mouse Events:</h4>
          <ul>
            <li><strong>onClick:</strong> Mouse click events</li>
            <li><strong>onDoubleClick:</strong> Double click events</li>
            <li><strong>onMouseOver/onMouseOut:</strong> Mouse hover events</li>
            <li><strong>onMouseDown/onMouseUp:</strong> Mouse press/release</li>
          </ul>
          
          <h4>Form Events:</h4>
          <ul>
            <li><strong>onChange:</strong> Input value changes</li>
            <li><strong>onSubmit:</strong> Form submission</li>
            <li><strong>onFocus/onBlur:</strong> Element focus/blur</li>
            <li><strong>onKeyDown/onKeyUp:</strong> Keyboard events</li>
          </ul>
          
          <h3>Event Handler Patterns:</h3>
          <ul>
            <li><strong>Inline Handlers:</strong> Define function directly in JSX</li>
            <li><strong>Method Handlers:</strong> Define as component methods</li>
            <li><strong>Arrow Functions:</strong> Maintain proper this binding</li>
            <li><strong>useCallback:</strong> Optimize handler functions</li>
          </ul>
          
          <h3>Form Handling:</h3>
          <h4>Controlled Components:</h4>
          <ul>
            <li>Form elements controlled by React state</li>
            <li>Single source of truth</li>
            <li>React controls the input value</li>
            <li>Recommended approach</li>
          </ul>
          
          <h4>Uncontrolled Components:</h4>
          <ul>
            <li>Form elements control their own state</li>
            <li>Use refs to access values</li>
            <li>Less React-like but sometimes necessary</li>
            <li>Good for file inputs</li>
          </ul>
          
          <h3>Event Best Practices:</h3>
          <ul>
            <li>Avoid creating functions in render</li>
            <li>Use arrow functions or bind properly</li>
            <li>Debounce expensive operations</li>
            <li>Clean up event listeners in useEffect</li>
          </ul>
        `
      },
      {
        id: 'react-conditional-lists',
        title: 'Conditional Rendering and Lists',
        content: `
          <h2>Conditional Rendering</h2>
          <p>In React, you can render different components or elements based on certain conditions. This allows you to create dynamic user interfaces that respond to state changes.</p>
          
          <h3>Conditional Rendering Techniques:</h3>
          <h4>if/else Statements:</h4>
          <ul>
            <li>Use regular JavaScript if/else before return</li>
            <li>Good for complex conditional logic</li>
            <li>Can assign different JSX to variables</li>
          </ul>
          
          <h4>Ternary Operator:</h4>
          <ul>
            <li>Inline conditional rendering in JSX</li>
            <li>Perfect for simple true/false conditions</li>
            <li>More concise than if/else</li>
          </ul>
          
          <h4>Logical && Operator:</h4>
          <ul>
            <li>Render element only if condition is true</li>
            <li>Great for showing/hiding elements</li>
            <li>Be careful with falsy values</li>
          </ul>
          
          <h4>Switch Statements:</h4>
          <ul>
            <li>Handle multiple conditions</li>
            <li>Good for state machines</li>
            <li>Cleaner than multiple if/else</li>
          </ul>
          
          <h2>Rendering Lists</h2>
          <p>Rendering lists is a common pattern in React applications. You typically use the JavaScript map() function to transform an array of data into an array of JSX elements.</p>
          
          <h3>List Rendering Patterns:</h3>
          <ul>
            <li><strong>Array.map():</strong> Transform array items to JSX</li>
            <li><strong>Array.filter():</strong> Filter items before rendering</li>
            <li><strong>Array.reduce():</strong> Complex transformations</li>
            <li><strong>Nested Lists:</strong> Render lists within lists</li>
          </ul>
          
          <h3>React Keys:</h3>
          <p>Keys help React identify which items have changed, are added, or are removed. Keys should be given to elements inside the array to give the elements a stable identity.</p>
          
          <h4>Key Requirements:</h4>
          <ul>
            <li><strong>Unique:</strong> Keys must be unique among siblings</li>
            <li><strong>Stable:</strong> Keys shouldn't change between renders</li>
            <li><strong>Predictable:</strong> Same item should have same key</li>
          </ul>
          
          <h4>Key Best Practices:</h4>
          <ul>
            <li>Use unique IDs from your data when available</li>
            <li>Avoid using array indices as keys</li>
            <li>Don't generate keys on the fly</li>
            <li>Keys only need to be unique among siblings</li>
          </ul>
          
          <h3>Advanced List Patterns:</h3>
          <ul>
            <li><strong>Conditional Items:</strong> Show/hide list items</li>
            <li><strong>Empty States:</strong> Show message when list is empty</li>
            <li><strong>Loading States:</strong> Show loading while fetching data</li>
            <li><strong>Pagination:</strong> Split large lists into pages</li>
            <li><strong>Virtual Lists:</strong> Render only visible items for performance</li>
          </ul>
        `
      },
      {
        id: 'react-component-lifecycle',
        title: 'Component Lifecycle and Effects',
        content: `
          <h2>Component Lifecycle</h2>
          <p>React components go through various phases during their lifetime: mounting, updating, and unmounting. Understanding these phases helps you manage side effects and optimize performance.</p>
          
          <h3>Class Component Lifecycle (Legacy):</h3>
          <h4>Mounting:</h4>
          <ul>
            <li><strong>constructor():</strong> Initialize state and bind methods</li>
            <li><strong>componentDidMount():</strong> Component mounted to DOM</li>
          </ul>
          
          <h4>Updating:</h4>
          <ul>
            <li><strong>componentDidUpdate():</strong> Component re-rendered</li>
            <li><strong>getSnapshotBeforeUpdate():</strong> Capture information before DOM changes</li>
          </ul>
          
          <h4>Unmounting:</h4>
          <ul>
            <li><strong>componentWillUnmount():</strong> Component being removed from DOM</li>
          </ul>
          
          <h2>useEffect Hook</h2>
          <p>useEffect is the Hook equivalent of class lifecycle methods. It lets you perform side effects in functional components.</p>
          
          <h3>useEffect Patterns:</h3>
          <h4>Effect with No Dependencies:</h4>
          <ul>
            <li>Runs after every render</li>
            <li>Similar to componentDidMount + componentDidUpdate</li>
            <li>Should be avoided unless necessary</li>
          </ul>
          
          <h4>Effect with Empty Dependencies:</h4>
          <ul>
            <li>Runs only once after initial render</li>
            <li>Similar to componentDidMount</li>
            <li>Good for data fetching, subscriptions</li>
          </ul>
          
          <h4>Effect with Dependencies:</h4>
          <ul>
            <li>Runs when dependency values change</li>
            <li>Most common and useful pattern</li>
            <li>Optimizes performance</li>
          </ul>
          
          <h3>Effect Cleanup:</h3>
          <ul>
            <li><strong>Return Function:</strong> Cleanup function runs before next effect</li>
            <li><strong>Event Listeners:</strong> Remove event listeners</li>
            <li><strong>Subscriptions:</strong> Cancel subscriptions</li>
            <li><strong>Timers:</strong> Clear timeouts and intervals</li>
          </ul>
          
          <h3>Common Side Effects:</h3>
          <ul>
            <li><strong>Data Fetching:</strong> API calls, loading data</li>
            <li><strong>Subscriptions:</strong> WebSocket connections</li>
            <li><strong>DOM Manipulation:</strong> Direct DOM changes</li>
            <li><strong>Timers:</strong> setTimeout, setInterval</li>
            <li><strong>Document Title:</strong> Update page title</li>
          </ul>
          
          <h3>Advanced Effect Patterns:</h3>
          <ul>
            <li><strong>Multiple Effects:</strong> Separate effects by concern</li>
            <li><strong>Custom Hooks:</strong> Extract effect logic</li>
            <li><strong>Error Boundaries:</strong> Handle errors in effects</li>
            <li><strong>Async Effects:</strong> Handle promises properly</li>
          </ul>
        `
      },
      {
        id: 'react-routing-navigation',
        title: 'React Router and Navigation',
        content: `
          <h2>React Router</h2>
          <p>React Router is the standard routing library for React applications. It enables navigation between different components/pages in a Single Page Application (SPA).</p>
          
          <h3>Core Concepts:</h3>
          <ul>
            <li><strong>Router:</strong> Provides routing context to the application</li>
            <li><strong>Routes:</strong> Define path-to-component mappings</li>
            <li><strong>Route:</strong> Individual route configuration</li>
            <li><strong>Link:</strong> Navigation component for internal links</li>
            <li><strong>Navigate:</strong> Programmatic navigation</li>
          </ul>
          
          <h3>Router Types:</h3>
          <ul>
            <li><strong>BrowserRouter:</strong> Uses HTML5 history API</li>
            <li><strong>HashRouter:</strong> Uses hash portion of URL</li>
            <li><strong>MemoryRouter:</strong> Keeps history in memory (testing)</li>
          </ul>
          
          <h3>Basic Route Configuration:</h3>
          <ul>
            <li><strong>Static Routes:</strong> Fixed URL paths</li>
            <li><strong>Dynamic Routes:</strong> URL parameters and wildcards</li>
            <li><strong>Nested Routes:</strong> Routes within routes</li>
            <li><strong>Index Routes:</strong> Default child routes</li>
          </ul>
          
          <h3>Navigation Components:</h3>
          <h4>Link Component:</h4>
          <ul>
            <li>Creates accessible navigation links</li>
            <li>Prevents full page refresh</li>
            <li>Supports styling for active links</li>
          </ul>
          
          <h4>NavLink Component:</h4>
          <ul>
            <li>Special Link with active state styling</li>
            <li>Automatically adds "active" class</li>
            <li>Good for navigation menus</li>
          </ul>
          
          <h3>Route Parameters:</h3>
          <ul>
            <li><strong>Path Parameters:</strong> /user/:id</li>
            <li><strong>Query Parameters:</strong> /search?q=react</li>
            <li><strong>useParams Hook:</strong> Access path parameters</li>
            <li><strong>useSearchParams Hook:</strong> Access query parameters</li>
          </ul>
          
          <h3>Programmatic Navigation:</h3>
          <ul>
            <li><strong>useNavigate Hook:</strong> Navigate programmatically</li>
            <li><strong>Navigate Component:</strong> Declarative redirects</li>
            <li><strong>History Object:</strong> Browser history manipulation</li>
          </ul>
          
          <h3>Advanced Routing:</h3>
          <ul>
            <li><strong>Protected Routes:</strong> Authentication-based routing</li>
            <li><strong>Route Guards:</strong> Conditional route access</li>
            <li><strong>Lazy Loading:</strong> Code splitting with React.lazy</li>
            <li><strong>Error Boundaries:</strong> Handle routing errors</li>
            <li><strong>404 Pages:</strong> Handle unmatched routes</li>
          </ul>
        `
      },
      {
        id: 'react-context-state',
        title: 'Context API and State Management',
        content: `
          <h2>React Context API</h2>
          <p>Context provides a way to share data between components without passing props down manually at every level. It's designed to share data that can be considered "global" for a tree of React components.</p>
          
          <h3>When to Use Context:</h3>
          <ul>
            <li><strong>Theme Data:</strong> Dark/light mode preferences</li>
            <li><strong>User Authentication:</strong> Current user information</li>
            <li><strong>Language Settings:</strong> Internationalization</li>
            <li><strong>Shopping Cart:</strong> E-commerce cart state</li>
          </ul>
          
          <h3>Context Components:</h3>
          <ul>
            <li><strong>createContext:</strong> Creates context object</li>
            <li><strong>Provider:</strong> Provides context value to children</li>
            <li><strong>Consumer:</strong> Consumes context value (legacy)</li>
            <li><strong>useContext:</strong> Hook to consume context</li>
          </ul>
          
          <h3>Context Best Practices:</h3>
          <ul>
            <li>Split contexts by concern</li>
            <li>Provide default values</li>
            <li>Use custom hooks for context</li>
            <li>Avoid overusing context</li>
            <li>Consider performance implications</li>
          </ul>
          
          <h2>State Management Patterns</h2>
          <p>As React applications grow, managing state becomes more complex. Various patterns and libraries can help organize and manage application state.</p>
          
          <h3>Local State Management:</h3>
          <ul>
            <li><strong>useState:</strong> Simple component state</li>
            <li><strong>useReducer:</strong> Complex state logic</li>
            <li><strong>Custom Hooks:</strong> Reusable state logic</li>
          </ul>
          
          <h3>Global State Solutions:</h3>
          <h4>Redux:</h4>
          <ul>
            <li>Predictable state container</li>
            <li>Time-travel debugging</li>
            <li>Large ecosystem</li>
            <li>Learning curve</li>
          </ul>
          
          <h4>Zustand:</h4>
          <ul>
            <li>Small, fast state management</li>
            <li>No boilerplate</li>
            <li>TypeScript friendly</li>
            <li>Simple API</li>
          </ul>
          
          <h4>Recoil:</h4>
          <ul>
            <li>Facebook's experimental state library</li>
            <li>Atomic state management</li>
            <li>Great for complex apps</li>
            <li>Still experimental</li>
          </ul>
          
          <h3>State Management Best Practices:</h3>
          <ul>
            <li><strong>Start Local:</strong> Use local state first</li>
            <li><strong>Lift State Up:</strong> Move state up when needed</li>
            <li><strong>Normalize Data:</strong> Avoid nested state</li>
            <li><strong>Immutable Updates:</strong> Don't mutate state directly</li>
            <li><strong>Separate Concerns:</strong> Keep different types of state separate</li>
          </ul>
        `
      },
      {
        id: 'react-performance-projects',
        title: 'Performance Optimization and Projects',
        content: `
          <h2>React Performance Optimization</h2>
          <p>React applications can become slow if not optimized properly. Understanding performance bottlenecks and optimization techniques is crucial for building fast, responsive applications.</p>
          
          <h3>Common Performance Issues:</h3>
          <ul>
            <li><strong>Unnecessary Re-renders:</strong> Components re-rendering when they don't need to</li>
            <li><strong>Large Bundle Sizes:</strong> Too much JavaScript code</li>
            <li><strong>Expensive Calculations:</strong> Heavy computations on every render</li>
            <li><strong>Memory Leaks:</strong> Not cleaning up resources</li>
          </ul>
          
          <h3>Optimization Techniques:</h3>
          <h4>React.memo:</h4>
          <ul>
            <li>Prevents re-renders of functional components</li>
            <li>Uses shallow comparison of props</li>
            <li>Can provide custom comparison function</li>
          </ul>
          
          <h4>useMemo:</h4>
          <ul>
            <li>Memoizes expensive calculations</li>
            <li>Only recalculates when dependencies change</li>
            <li>Don't overuse - has its own overhead</li>
          </ul>
          
          <h4>useCallback:</h4>
          <ul>
            <li>Memoizes function instances</li>
            <li>Prevents child re-renders due to new function refs</li>
            <li>Useful when passing functions as props</li>
          </ul>
          
          <h3>Code Splitting:</h3>
          <ul>
            <li><strong>React.lazy:</strong> Lazy load components</li>
            <li><strong>Suspense:</strong> Handle loading states</li>
            <li><strong>Route-based Splitting:</strong> Split by routes</li>
            <li><strong>Component-based Splitting:</strong> Split large components</li>
          </ul>
          
          <h3>Bundle Optimization:</h3>
          <ul>
            <li><strong>Tree Shaking:</strong> Remove unused code</li>
            <li><strong>Webpack Bundle Analyzer:</strong> Analyze bundle size</li>
            <li><strong>Dynamic Imports:</strong> Load code on demand</li>
            <li><strong>External Dependencies:</strong> Use CDNs for common libraries</li>
          </ul>
          
          <h2>React Project Ideas</h2>
          <p>Building real projects is the best way to learn React. Here are project ideas categorized by difficulty level.</p>
          
          <h3>Beginner Projects:</h3>
          <ul>
            <li><strong>Todo App:</strong> Add, edit, delete, filter tasks</li>
            <li><strong>Counter App:</strong> Simple state management</li>
            <li><strong>Weather App:</strong> API calls and data display</li>
            <li><strong>Quiz App:</strong> Multiple choice questions</li>
            <li><strong>Calculator:</strong> Basic arithmetic operations</li>
          </ul>
          
          <h3>Intermediate Projects:</h3>
          <ul>
            <li><strong>E-commerce Store:</strong> Products, cart, checkout</li>
            <li><strong>Blog Platform:</strong> Posts, comments, authentication</li>
            <li><strong>Chat Application:</strong> Real-time messaging</li>
            <li><strong>Movie Database:</strong> Search, filter, details pages</li>
            <li><strong>Recipe App:</strong> Search recipes, save favorites</li>
          </ul>
          
          <h3>Advanced Projects:</h3>
          <ul>
            <li><strong>Social Media Platform:</strong> Posts, likes, comments, friends</li>
            <li><strong>Project Management Tool:</strong> Tasks, teams, deadlines</li>
            <li><strong>Video Streaming App:</strong> Upload, play, playlists</li>
            <li><strong>Real Estate Platform:</strong> Listings, search, maps</li>
            <li><strong>Learning Management System:</strong> Courses, progress tracking</li>
          </ul>
          
          <h3>Development Best Practices:</h3>
          <ul>
            <li><strong>Component Structure:</strong> Keep components small and focused</li>
            <li><strong>Error Boundaries:</strong> Handle errors gracefully</li>
            <li><strong>Testing:</strong> Unit tests with Jest and React Testing Library</li>
            <li><strong>TypeScript:</strong> Add type safety to your React apps</li>
            <li><strong>Accessibility:</strong> Make your apps usable by everyone</li>
            <li><strong>SEO:</strong> Server-side rendering with Next.js</li>
          </ul>
        `
      }
    ]
  }
];

// Helper function to get course by ID
export const getCourseById = (courseId) => {
  return courses.find(course => course.id === courseId);
};

// Helper function to get lesson by course ID and lesson ID
export const getLessonById = (courseId, lessonId) => {
  const course = getCourseById(courseId);
  if (course) {
    return course.lessons.find(lesson => lesson.id === lessonId);
  }
  return null;
};

// Helper function to get next lesson
export const getNextLesson = (courseId, currentLessonId) => {
  const course = getCourseById(courseId);
  if (course) {
    const currentIndex = course.lessons.findIndex(lesson => lesson.id === currentLessonId);
    if (currentIndex !== -1 && currentIndex < course.lessons.length - 1) {
      return course.lessons[currentIndex + 1];
    }
  }
  return null;
};

// Helper function to get previous lesson
export const getPreviousLesson = (courseId, currentLessonId) => {
  const course = getCourseById(courseId);
  if (course) {
    const currentIndex = course.lessons.findIndex(lesson => lesson.id === currentLessonId);
    if (currentIndex > 0) {
      return course.lessons[currentIndex - 1];
    }
  }
  return null;
};