export const interviewQuestions = [
  {
    courseId: 'html',
    courseName: 'HTML',
    questions: [
      {
        id: 1,
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language"
        ],
        correctAnswer: 0,
        explanation: "HTML stands for Hyper Text Markup Language. It is the standard markup language for creating web pages."
      },
      {
        id: 2,
        question: "Which HTML tag is used to define the title of a document?",
        options: [
          "<head>",
          "<title>",
          "<meta>",
          "<header>"
        ],
        correctAnswer: 1,
        explanation: "The <title> tag defines the title of the document, which appears in the browser's title bar or page tab."
      },
      {
        id: 3,
        question: "What is the correct HTML element for the largest heading?",
        options: [
          "<heading>",
          "<h6>",
          "<h1>",
          "<head>"
        ],
        correctAnswer: 2,
        explanation: "<h1> is the largest heading element in HTML, while <h6> is the smallest."
      },
      {
        id: 4,
        question: "Which HTML attribute specifies an alternate text for an image?",
        options: [
          "title",
          "alt",
          "src",
          "longdesc"
        ],
        correctAnswer: 1,
        explanation: "The 'alt' attribute provides alternative text for an image if it cannot be displayed. It's important for accessibility."
      },
      {
        id: 5,
        question: "Which doctype is correct for HTML5?",
        options: [
          "<!DOCTYPE html>",
          "<!DOCTYPE HTML5>",
          "<!DOCTYPE HTML PUBLIC>",
          "<DOCTYPE html>"
        ],
        correctAnswer: 0,
        explanation: "<!DOCTYPE html> is the simple and correct doctype declaration for HTML5."
      },
      {
        id: 6,
        question: "Which HTML element is used to specify a footer for a document?",
        options: [
          "<bottom>",
          "<section>",
          "<footer>",
          "<foot>"
        ],
        correctAnswer: 2,
        explanation: "<footer> is a semantic HTML5 element used to define a footer for a document or section."
      },
      {
        id: 7,
        question: "What is the correct HTML for creating a hyperlink?",
        options: [
          "<a url='http://example.com'>Example</a>",
          "<a href='http://example.com'>Example</a>",
          "<a link='http://example.com'>Example</a>",
          "<link href='http://example.com'>Example</link>"
        ],
        correctAnswer: 1,
        explanation: "The <a> tag with the 'href' attribute is used to create hyperlinks in HTML."
      },
      {
        id: 8,
        question: "How can you make a numbered list in HTML?",
        options: [
          "<ul>",
          "<ol>",
          "<list>",
          "<dl>"
        ],
        correctAnswer: 1,
        explanation: "<ol> (ordered list) creates a numbered list, while <ul> creates an unordered (bulleted) list."
      },
      {
        id: 9,
        question: "Which HTML element is used for playing video files?",
        options: [
          "<movie>",
          "<media>",
          "<video>",
          "<film>"
        ],
        correctAnswer: 2,
        explanation: "The <video> element is an HTML5 element used to embed video content in web pages."
      },
      {
        id: 10,
        question: "What is the correct HTML for inserting an image?",
        options: [
          "<img src='image.jpg' alt='My Image'>",
          "<image src='image.jpg' alt='My Image'>",
          "<img href='image.jpg' alt='My Image'>",
          "<picture src='image.jpg'>"
        ],
        correctAnswer: 0,
        explanation: "The <img> tag with 'src' attribute is used to insert images. The 'alt' attribute is important for accessibility."
      },
      {
        id: 11,
        question: "Which input type is used for email addresses in HTML5?",
        options: [
          "<input type='text'>",
          "<input type='email'>",
          "<input type='mail'>",
          "<input type='e-mail'>"
        ],
        correctAnswer: 1,
        explanation: "<input type='email'> is an HTML5 input type that validates email addresses automatically."
      },
      {
        id: 12,
        question: "What does the <meta> tag define?",
        options: [
          "Metadata about the HTML document",
          "Main content",
          "Navigation links",
          "Footer information"
        ],
        correctAnswer: 0,
        explanation: "The <meta> tag provides metadata about the HTML document, such as character set, description, keywords, author, etc."
      },
      {
        id: 13,
        question: "Which HTML element defines navigation links?",
        options: [
          "<navigation>",
          "<nav>",
          "<navigate>",
          "<menu>"
        ],
        correctAnswer: 1,
        explanation: "<nav> is a semantic HTML5 element specifically designed to contain navigation links."
      },
      {
        id: 14,
        question: "What is the correct HTML for making a checkbox?",
        options: [
          "<input type='check'>",
          "<input type='checkbox'>",
          "<checkbox>",
          "<check>"
        ],
        correctAnswer: 1,
        explanation: "<input type='checkbox'> creates a checkbox input that allows users to select multiple options."
      },
      {
        id: 15,
        question: "Which HTML attribute is used to define inline styles?",
        options: [
          "class",
          "style",
          "styles",
          "font"
        ],
        correctAnswer: 1,
        explanation: "The 'style' attribute is used to apply inline CSS styles directly to HTML elements."
      },
      {
        id: 16,
        question: "What is the correct HTML for making a text area?",
        options: [
          "<input type='textarea'>",
          "<textarea>",
          "<input type='textbox'>",
          "<textbox>"
        ],
        correctAnswer: 1,
        explanation: "<textarea> is a separate element used to create multi-line text input fields."
      },
      {
        id: 17,
        question: "Which HTML element is used to display a scalar measurement within a range?",
        options: [
          "<range>",
          "<measure>",
          "<meter>",
          "<gauge>"
        ],
        correctAnswer: 2,
        explanation: "The <meter> element represents a scalar measurement within a known range, like disk usage."
      },
      {
        id: 18,
        question: "What is the correct HTML for making a drop-down list?",
        options: [
          "<list>",
          "<select>",
          "<dropdown>",
          "<input type='list'>"
        ],
        correctAnswer: 1,
        explanation: "The <select> element is used to create a drop-down list, containing <option> elements."
      },
      {
        id: 19,
        question: "Which HTML element is used to define important text?",
        options: [
          "<i>",
          "<important>",
          "<strong>",
          "<b>"
        ],
        correctAnswer: 2,
        explanation: "<strong> defines important text with strong importance. Browsers typically display it in bold, but it also has semantic meaning."
      },
      {
        id: 20,
        question: "What is the correct HTML for inserting a line break?",
        options: [
          "<break>",
          "<lb>",
          "<br>",
          "<newline>"
        ],
        correctAnswer: 2,
        explanation: "<br> is a self-closing tag used to insert a single line break in HTML."
      },
      {
        id: 21,
        question: "Which HTML element is used to define emphasized text?",
        options: [
          "<italic>",
          "<i>",
          "<em>",
          "<emphasis>"
        ],
        correctAnswer: 2,
        explanation: "<em> defines emphasized text with semantic meaning. <i> is only for italic styling without semantic importance."
      },
      {
        id: 22,
        question: "What is the correct HTML for creating a table?",
        options: [
          "<table><tr><td>",
          "<tab><tr><td>",
          "<table><thead><td>",
          "<tbl><tr><td>"
        ],
        correctAnswer: 0,
        explanation: "Tables are created with <table>, containing <tr> (table rows) with <td> (table data) cells."
      },
      {
        id: 23,
        question: "Which attribute specifies that an input field must be filled out?",
        options: [
          "validate",
          "required",
          "mandatory",
          "placeholder"
        ],
        correctAnswer: 1,
        explanation: "The 'required' attribute specifies that an input field must be filled out before submitting the form."
      },
      {
        id: 24,
        question: "Which HTML element defines the main content of a document?",
        options: [
          "<main>",
          "<content>",
          "<body>",
          "<article>"
        ],
        correctAnswer: 0,
        explanation: "<main> is a semantic HTML5 element that specifies the main content of the document."
      },
      {
        id: 25,
        question: "What is the correct HTML for making a text input field?",
        options: [
          "<input type='text'>",
          "<textfield>",
          "<input type='textfield'>",
          "<text>"
        ],
        correctAnswer: 0,
        explanation: "<input type='text'> creates a single-line text input field."
      },
      {
        id: 26,
        question: "Which HTML element is used to group related content?",
        options: [
          "<div>",
          "<section>",
          "<group>",
          "<span>"
        ],
        correctAnswer: 1,
        explanation: "<section> is a semantic element for grouping related content. <div> is generic without semantic meaning."
      },
      {
        id: 27,
        question: "What is the correct HTML for inserting a background image?",
        options: [
          "<body bg='image.jpg'>",
          "<body style='background-image:url(image.jpg)'>",
          "<background img='image.jpg'>",
          "<body background='image.jpg'>"
        ],
        correctAnswer: 1,
        explanation: "Background images are set using CSS, typically with the style attribute: style='background-image:url(image.jpg)'."
      },
      {
        id: 28,
        question: "Which HTML element is used to define a header for a document or section?",
        options: [
          "<head>",
          "<header>",
          "<top>",
          "<section>"
        ],
        correctAnswer: 1,
        explanation: "<header> is a semantic HTML5 element used to define a header for a document or section."
      },
      {
        id: 29,
        question: "What does the <canvas> element do?",
        options: [
          "Creates a container for images",
          "Draws graphics via JavaScript",
          "Creates a text area",
          "Defines a section"
        ],
        correctAnswer: 1,
        explanation: "The <canvas> element is used to draw graphics on the fly via JavaScript."
      },
      {
        id: 30,
        question: "Which HTML attribute is used to specify a unique identifier?",
        options: [
          "class",
          "id",
          "name",
          "key"
        ],
        correctAnswer: 1,
        explanation: "The 'id' attribute specifies a unique identifier for an HTML element. Each id must be unique within the document."
      },
      {
        id: 31,
        question: "What is the correct HTML for making a radio button?",
        options: [
          "<input type='radio'>",
          "<radio>",
          "<input type='button'>",
          "<input type='check'>"
        ],
        correctAnswer: 0,
        explanation: "<input type='radio'> creates a radio button that allows users to select one option from a set."
      },
      {
        id: 32,
        question: "Which HTML element defines an article?",
        options: [
          "<article>",
          "<section>",
          "<content>",
          "<post>"
        ],
        correctAnswer: 0,
        explanation: "<article> is a semantic HTML5 element that represents a self-contained composition in a document."
      },
      {
        id: 33,
        question: "What is the correct HTML for defining a description list?",
        options: [
          "<ul>",
          "<ol>",
          "<dl>",
          "<list>"
        ],
        correctAnswer: 2,
        explanation: "<dl> (description list) contains <dt> (term) and <dd> (description) elements."
      },
      {
        id: 34,
        question: "Which HTML element is used to display code?",
        options: [
          "<code>",
          "<pre>",
          "<script>",
          "<program>"
        ],
        correctAnswer: 0,
        explanation: "<code> is used to display a piece of computer code. Often used with <pre> for formatted code blocks."
      },
      {
        id: 35,
        question: "What does the 'target' attribute in a link specify?",
        options: [
          "The URL of the link",
          "Where to open the linked document",
          "The title of the link",
          "The color of the link"
        ],
        correctAnswer: 1,
        explanation: "The 'target' attribute specifies where to open the linked document (e.g., _blank for new tab)."
      },
      {
        id: 36,
        question: "Which HTML5 element is used for playing audio files?",
        options: [
          "<sound>",
          "<audio>",
          "<mp3>",
          "<music>"
        ],
        correctAnswer: 1,
        explanation: "The <audio> element is an HTML5 element used to embed audio content in web pages."
      },
      {
        id: 37,
        question: "What is the correct HTML for creating a password field?",
        options: [
          "<input type='password'>",
          "<password>",
          "<input type='pass'>",
          "<pass>"
        ],
        correctAnswer: 0,
        explanation: "<input type='password'> creates a password field where characters are masked."
      },
      {
        id: 38,
        question: "Which HTML element is used to define a section that is quoted from another source?",
        options: [
          "<quote>",
          "<blockquote>",
          "<q>",
          "<cite>"
        ],
        correctAnswer: 1,
        explanation: "<blockquote> defines a section quoted from another source. <q> is for short inline quotations."
      },
      {
        id: 39,
        question: "What is the purpose of the <aside> element?",
        options: [
          "Main navigation",
          "Content aside from main content",
          "Footer information",
          "Page header"
        ],
        correctAnswer: 1,
        explanation: "<aside> defines content aside from the main content, like sidebars or call-out boxes."
      },
      {
        id: 40,
        question: "Which attribute is used to merge table cells horizontally?",
        options: [
          "rowspan",
          "colspan",
          "merge",
          "span"
        ],
        correctAnswer: 1,
        explanation: "The 'colspan' attribute merges table cells horizontally, while 'rowspan' merges them vertically."
      },
      {
        id: 41,
        question: "What is the correct HTML for inserting a comment?",
        options: [
          "// This is a comment",
          "<!-- This is a comment -->",
          "/* This is a comment */",
          "' This is a comment"
        ],
        correctAnswer: 1,
        explanation: "<!-- Comment --> is the correct syntax for HTML comments."
      },
      {
        id: 42,
        question: "Which HTML element is used to define keyboard input?",
        options: [
          "<keyboard>",
          "<kbd>",
          "<key>",
          "<input>"
        ],
        correctAnswer: 1,
        explanation: "<kbd> represents keyboard input and is typically displayed in a monospace font."
      },
      {
        id: 43,
        question: "What is the correct HTML for defining a submit button?",
        options: [
          "<button type='submit'>",
          "<input type='submit'>",
          "Both A and B",
          "<submit>"
        ],
        correctAnswer: 2,
        explanation: "Both <button type='submit'> and <input type='submit'> can create submit buttons."
      },
      {
        id: 44,
        question: "Which HTML element represents progress of a task?",
        options: [
          "<progress>",
          "<meter>",
          "<loading>",
          "<status>"
        ],
        correctAnswer: 0,
        explanation: "<progress> represents the completion progress of a task. <meter> is for measurements within a range."
      },
      {
        id: 45,
        question: "What is the purpose of the 'placeholder' attribute?",
        options: [
          "Sets default value",
          "Shows hint text in input",
          "Validates input",
          "Makes field required"
        ],
        correctAnswer: 1,
        explanation: "The 'placeholder' attribute provides a hint that describes the expected value of an input field."
      },
      {
        id: 46,
        question: "Which HTML element is used to define a thematic break?",
        options: [
          "<break>",
          "<hr>",
          "<line>",
          "<separator>"
        ],
        correctAnswer: 1,
        explanation: "<hr> (horizontal rule) represents a thematic break and is displayed as a horizontal line."
      },
      {
        id: 47,
        question: "What is the correct HTML for defining abbreviation?",
        options: [
          "<abbr>",
          "<abbreviation>",
          "<acronym>",
          "<short>"
        ],
        correctAnswer: 0,
        explanation: "<abbr> defines an abbreviation or acronym. The 'title' attribute can provide the full form."
      },
      {
        id: 48,
        question: "Which HTML5 input type is used for date selection?",
        options: [
          "<input type='calendar'>",
          "<input type='date'>",
          "<input type='datetime'>",
          "<date>"
        ],
        correctAnswer: 1,
        explanation: "<input type='date'> creates a date picker control in HTML5."
      },
      {
        id: 49,
        question: "What is the correct HTML for defining superscript text?",
        options: [
          "<sup>",
          "<super>",
          "<superscript>",
          "<elevated>"
        ],
        correctAnswer: 0,
        explanation: "<sup> defines superscript text (appears above the baseline), while <sub> defines subscript."
      },
      {
        id: 50,
        question: "Which attribute is used to specify the character encoding in HTML5?",
        options: [
          "<meta charset='UTF-8'>",
          "<meta encoding='UTF-8'>",
          "<charset='UTF-8'>",
          "<encoding type='UTF-8'>"
        ],
        correctAnswer: 0,
        explanation: "<meta charset='UTF-8'> specifies the character encoding for the HTML document in HTML5."
      }
    ]
  },
  {
    courseId: 'css',
    courseName: 'CSS',
    questions: [
      {
        id: 1,
        question: "What does CSS stand for?",
        options: [
          "Cascading Style Sheets",
          "Creative Style System",
          "Computer Style Sheets",
          "Colorful Style Sheets"
        ],
        correctAnswer: 0,
        explanation: "CSS stands for Cascading Style Sheets. It is used to style and layout web pages."
      },
      {
        id: 2,
        question: "Which HTML tag is used to define an internal style sheet?",
        options: [
          "<css>",
          "<style>",
          "<script>",
          "<styles>"
        ],
        correctAnswer: 1,
        explanation: "The <style> tag is used to define internal CSS within an HTML document."
      },
      {
        id: 3,
        question: "Which property is used to change the background color?",
        options: [
          "color",
          "bgcolor",
          "background-color",
          "bg-color"
        ],
        correctAnswer: 2,
        explanation: "The background-color property is used to set the background color of an element."
      },
      {
        id: 4,
        question: "How do you select an element with id 'demo'?",
        options: [
          ".demo",
          "#demo",
          "*demo",
          "demo"
        ],
        correctAnswer: 1,
        explanation: "The # symbol is used to select elements by their id attribute in CSS."
      },
      {
        id: 5,
        question: "How do you select elements with class name 'test'?",
        options: [
          "#test",
          ".test",
          "*test",
          "test"
        ],
        correctAnswer: 1,
        explanation: "The . (dot) symbol is used to select elements by their class name in CSS."
      },
      {
        id: 6,
        question: "Which property is used to change the text color?",
        options: [
          "text-color",
          "font-color",
          "color",
          "text-style"
        ],
        correctAnswer: 2,
        explanation: "The color property is used to change the text color in CSS."
      },
      {
        id: 7,
        question: "Which property is used to change the font size?",
        options: [
          "text-size",
          "font-size",
          "text-style",
          "font-weight"
        ],
        correctAnswer: 1,
        explanation: "The font-size property is used to change the size of the text."
      },
      {
        id: 8,
        question: "How do you make text bold in CSS?",
        options: [
          "font-weight: bold",
          "text-style: bold",
          "font-style: bold",
          "text-weight: bold"
        ],
        correctAnswer: 0,
        explanation: "The font-weight: bold property is used to make text bold in CSS."
      },
      {
        id: 9,
        question: "Which property is used to add space between the content and border?",
        options: [
          "margin",
          "padding",
          "border-spacing",
          "spacing"
        ],
        correctAnswer: 1,
        explanation: "Padding is the space between the content and the border of an element."
      },
      {
        id: 10,
        question: "Which property is used to add space outside the border?",
        options: [
          "padding",
          "margin",
          "border-spacing",
          "spacing"
        ],
        correctAnswer: 1,
        explanation: "Margin is the space outside the border of an element."
      },
      {
        id: 11,
        question: "How do you center a block element horizontally?",
        options: [
          "margin: center",
          "margin: 0 auto",
          "text-align: center",
          "align: center"
        ],
        correctAnswer: 1,
        explanation: "Using margin: 0 auto centers a block element horizontally when it has a defined width."
      },
      {
        id: 12,
        question: "Which property is used to change the display behavior of an element?",
        options: [
          "visibility",
          "show",
          "display",
          "view"
        ],
        correctAnswer: 2,
        explanation: "The display property specifies how an element should be displayed (block, inline, flex, etc.)."
      },
      {
        id: 13,
        question: "What is the default value of the position property?",
        options: [
          "relative",
          "absolute",
          "static",
          "fixed"
        ],
        correctAnswer: 2,
        explanation: "The default value of the position property is static, which positions elements in the normal document flow."
      },
      {
        id: 14,
        question: "Which property is used to make text italic?",
        options: [
          "font-weight",
          "font-style",
          "text-style",
          "text-decoration"
        ],
        correctAnswer: 1,
        explanation: "The font-style property with value 'italic' is used to make text italic."
      },
      {
        id: 15,
        question: "How do you add a shadow to text?",
        options: [
          "shadow",
          "text-shadow",
          "font-shadow",
          "shadow-text"
        ],
        correctAnswer: 1,
        explanation: "The text-shadow property adds shadow effects to text."
      },
      {
        id: 16,
        question: "Which property is used to create rounded corners?",
        options: [
          "border-curve",
          "corner-radius",
          "border-radius",
          "corner-curve"
        ],
        correctAnswer: 2,
        explanation: "The border-radius property is used to create rounded corners on elements."
      },
      {
        id: 17,
        question: "What does the z-index property control?",
        options: [
          "Element size",
          "Element position",
          "Stacking order",
          "Element visibility"
        ],
        correctAnswer: 2,
        explanation: "The z-index property controls the stacking order of positioned elements."
      },
      {
        id: 18,
        question: "Which value of display property makes an element behave like a table?",
        options: [
          "display: table",
          "display: grid",
          "display: block",
          "display: flex"
        ],
        correctAnswer: 0,
        explanation: "display: table makes an element behave like a table element."
      },
      {
        id: 19,
        question: "How do you make an element invisible but still take up space?",
        options: [
          "display: none",
          "visibility: hidden",
          "opacity: 0",
          "hidden: true"
        ],
        correctAnswer: 1,
        explanation: "visibility: hidden makes an element invisible but it still occupies space. display: none removes it completely."
      },
      {
        id: 20,
        question: "Which property is used to control text alignment?",
        options: [
          "text-align",
          "align-text",
          "text-position",
          "align"
        ],
        correctAnswer: 0,
        explanation: "The text-align property controls the horizontal alignment of text."
      },
      {
        id: 21,
        question: "What is the correct CSS syntax for making all paragraphs bold?",
        options: [
          "p {font-weight: bold}",
          "p {text-weight: bold}",
          "<p style='bold'>",
          "p {style: bold}"
        ],
        correctAnswer: 0,
        explanation: "The correct syntax is p {font-weight: bold} to make all <p> elements bold."
      },
      {
        id: 22,
        question: "Which property is used to create a flexbox layout?",
        options: [
          "display: flexbox",
          "display: flex",
          "layout: flex",
          "flex: true"
        ],
        correctAnswer: 1,
        explanation: "display: flex creates a flex container for flexible box layout."
      },
      {
        id: 23,
        question: "How do you select all <p> elements inside a <div>?",
        options: [
          "div + p",
          "div > p",
          "div p",
          "div.p"
        ],
        correctAnswer: 2,
        explanation: "div p selects all <p> elements inside a <div> (descendant selector)."
      },
      {
        id: 24,
        question: "What does the '!important' rule do?",
        options: [
          "Adds a comment",
          "Increases specificity to override other rules",
          "Marks code as important for browsers",
          "Makes properties mandatory"
        ],
        correctAnswer: 1,
        explanation: "!important increases the priority of a CSS property, overriding other rules."
      },
      {
        id: 25,
        question: "Which property is used to change cursor appearance?",
        options: [
          "cursor",
          "mouse",
          "pointer",
          "mouse-cursor"
        ],
        correctAnswer: 0,
        explanation: "The cursor property specifies the type of cursor to be displayed."
      },
      {
        id: 26,
        question: "How do you create a grid layout?",
        options: [
          "display: table",
          "display: flex",
          "display: grid",
          "layout: grid"
        ],
        correctAnswer: 2,
        explanation: "display: grid creates a grid container for CSS Grid layout."
      },
      {
        id: 27,
        question: "Which property controls the space between lines of text?",
        options: [
          "line-spacing",
          "line-height",
          "text-spacing",
          "spacing"
        ],
        correctAnswer: 1,
        explanation: "The line-height property controls the spacing between lines of text."
      },
      {
        id: 28,
        question: "What is the difference between padding and margin?",
        options: [
          "No difference",
          "Padding is inside border, margin is outside",
          "Margin is inside border, padding is outside",
          "Padding is for text, margin for blocks"
        ],
        correctAnswer: 1,
        explanation: "Padding is the space inside the border, while margin is the space outside the border."
      },
      {
        id: 29,
        question: "Which property is used to set the width of a border?",
        options: [
          "border-width",
          "border-size",
          "border-thickness",
          "border-weight"
        ],
        correctAnswer: 0,
        explanation: "The border-width property sets the width of the border."
      },
      {
        id: 30,
        question: "How do you add a background image?",
        options: [
          "background-image: url('image.jpg')",
          "bg-image: 'image.jpg'",
          "image: url('image.jpg')",
          "background: image('image.jpg')"
        ],
        correctAnswer: 0,
        explanation: "background-image: url('image.jpg') is used to add a background image."
      },
      {
        id: 31,
        question: "Which property is used to make elements transparent?",
        options: [
          "transparency",
          "opacity",
          "transparent",
          "visibility"
        ],
        correctAnswer: 1,
        explanation: "The opacity property controls the transparency of an element (0 to 1)."
      },
      {
        id: 32,
        question: "What does the overflow property control?",
        options: [
          "Text overflow",
          "How content that overflows is handled",
          "Element position",
          "Border overflow"
        ],
        correctAnswer: 1,
        explanation: "The overflow property specifies how to handle content that overflows an element's box."
      },
      {
        id: 33,
        question: "Which selector has the highest specificity?",
        options: [
          "Element selector",
          "Class selector",
          "ID selector",
          "Universal selector"
        ],
        correctAnswer: 2,
        explanation: "ID selectors have higher specificity than class or element selectors."
      },
      {
        id: 34,
        question: "How do you apply styles on hover?",
        options: [
          "element:hover",
          "element.hover",
          "element hover",
          "element::hover"
        ],
        correctAnswer: 0,
        explanation: "The :hover pseudo-class applies styles when the user hovers over an element."
      },
      {
        id: 35,
        question: "Which property is used to control text transformation?",
        options: [
          "text-style",
          "text-transform",
          "font-transform",
          "text-change"
        ],
        correctAnswer: 1,
        explanation: "The text-transform property controls text capitalization (uppercase, lowercase, capitalize)."
      },
      {
        id: 36,
        question: "What is the default display value for <div>?",
        options: [
          "inline",
          "block",
          "inline-block",
          "flex"
        ],
        correctAnswer: 1,
        explanation: "The <div> element has a default display value of block."
      },
      {
        id: 37,
        question: "Which property is used to add spacing between letters?",
        options: [
          "letter-spacing",
          "word-spacing",
          "text-spacing",
          "character-spacing"
        ],
        correctAnswer: 0,
        explanation: "The letter-spacing property increases or decreases space between letters."
      },
      {
        id: 38,
        question: "How do you create a transition effect?",
        options: [
          "animation",
          "transition",
          "transform",
          "effect"
        ],
        correctAnswer: 1,
        explanation: "The transition property creates smooth transitions between property changes."
      },
      {
        id: 39,
        question: "Which property is used to rotate an element?",
        options: [
          "rotate",
          "transform: rotate()",
          "rotation",
          "transform-rotate"
        ],
        correctAnswer: 1,
        explanation: "transform: rotate() is used to rotate elements in CSS."
      },
      {
        id: 40,
        question: "What does box-sizing: border-box do?",
        options: [
          "Adds border to box",
          "Includes padding and border in element's total width",
          "Creates a box around element",
          "Removes border"
        ],
        correctAnswer: 1,
        explanation: "box-sizing: border-box includes padding and border in the element's total width and height."
      },
      {
        id: 41,
        question: "Which property is used to align flex items vertically?",
        options: [
          "align-items",
          "vertical-align",
          "flex-align",
          "align-vertical"
        ],
        correctAnswer: 0,
        explanation: "The align-items property aligns flex items along the cross axis (vertically in row direction)."
      },
      {
        id: 42,
        question: "How do you select the first child element?",
        options: [
          ":first",
          ":first-child",
          "::first-child",
          ":child-first"
        ],
        correctAnswer: 1,
        explanation: "The :first-child pseudo-class selects the first child element."
      },
      {
        id: 43,
        question: "Which property creates a shadow around an element?",
        options: [
          "element-shadow",
          "box-shadow",
          "shadow",
          "border-shadow"
        ],
        correctAnswer: 1,
        explanation: "The box-shadow property creates shadow effects around an element."
      },
      {
        id: 44,
        question: "What is a CSS variable syntax?",
        options: [
          "$variable-name",
          "--variable-name",
          "@variable-name",
          "var-name"
        ],
        correctAnswer: 1,
        explanation: "CSS variables are defined with -- prefix and accessed using var(--variable-name)."
      },
      {
        id: 45,
        question: "Which property is used to justify flex items?",
        options: [
          "justify-content",
          "justify-items",
          "flex-justify",
          "align-content"
        ],
        correctAnswer: 0,
        explanation: "The justify-content property aligns flex items along the main axis."
      },
      {
        id: 46,
        question: "How do you create an animation in CSS?",
        options: [
          "@animation",
          "@keyframes",
          "@animate",
          "animation:"
        ],
        correctAnswer: 1,
        explanation: "@keyframes defines the animation sequence, used with the animation property."
      },
      {
        id: 47,
        question: "Which property sets the stacking context for an element?",
        options: [
          "stack",
          "position",
          "z-index",
          "layer"
        ],
        correctAnswer: 1,
        explanation: "The position property (with non-static values) creates a stacking context for z-index."
      },
      {
        id: 48,
        question: "What does the calc() function do?",
        options: [
          "Performs calculations for property values",
          "Calculates element position",
          "Counts elements",
          "Calculates specificity"
        ],
        correctAnswer: 0,
        explanation: "The calc() function performs calculations to determine CSS property values."
      },
      {
        id: 49,
        question: "Which property is used to create multiple columns?",
        options: [
          "columns",
          "column-count",
          "multi-column",
          "text-columns"
        ],
        correctAnswer: 1,
        explanation: "The column-count property creates multiple columns for text content."
      },
      {
        id: 50,
        question: "How do you apply styles to every second element?",
        options: [
          ":nth-child(2)",
          ":nth-child(2n)",
          ":every-second",
          ":second-child"
        ],
        correctAnswer: 1,
        explanation: ":nth-child(2n) or :nth-child(even) selects every second element."
      }
    ]
  },
  {
    courseId: 'javascript',
    courseName: 'JavaScript',
    questions: [
      {
        id: 1,
        question: "What will be the output of: console.log(typeof null)?",
        options: [
          "'null'",
          "'undefined'",
          "'object'",
          "'number'"
        ],
        correctAnswer: 2,
        explanation: "typeof null returns 'object', which is a known JavaScript quirk/bug from the early days."
      },
      {
        id: 2,
        question: "What is the output? console.log(2 + '2')",
        options: [
          "4",
          "'22'",
          "NaN",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "JavaScript coerces the number 2 to a string and concatenates, resulting in '22'."
      },
      {
        id: 3,
        question: "What will console.log([] == []) return?",
        options: [
          "true",
          "false",
          "undefined",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "Arrays are reference types. Two different array objects are never equal, even if they have the same contents."
      },
      {
        id: 4,
        question: "What is the output? let x = 10; console.log(x++);",
        options: [
          "10",
          "11",
          "undefined",
          "NaN"
        ],
        correctAnswer: 0,
        explanation: "The post-increment operator (x++) returns the original value before incrementing."
      },
      {
        id: 5,
        question: "What does 'use strict' do?",
        options: [
          "Makes code run faster",
          "Enables strict mode with stricter parsing",
          "Disables ES6 features",
          "Enables debugging mode"
        ],
        correctAnswer: 1,
        explanation: "'use strict' enables strict mode, which catches common coding errors and prevents certain actions."
      },
      {
        id: 6,
        question: "What is the output? console.log(1 < 2 < 3)",
        options: [
          "true",
          "false",
          "undefined",
          "Error"
        ],
        correctAnswer: 0,
        explanation: "1 < 2 evaluates to true, then true < 3 converts true to 1, and 1 < 3 is true."
      },
      {
        id: 7,
        question: "What will this return? function test() { return { name: 'John' }; }",
        options: [
          "Object with name property",
          "undefined",
          "Error",
          "null"
        ],
        correctAnswer: 0,
        explanation: "The function correctly returns an object. The opening brace is on the same line as return."
      },
      {
        id: 8,
        question: "What is a closure in JavaScript?",
        options: [
          "A loop that closes automatically",
          "A function with access to outer scope variables",
          "A method to close browser windows",
          "An error handling mechanism"
        ],
        correctAnswer: 1,
        explanation: "A closure is a function that has access to variables in its outer (enclosing) lexical scope."
      },
      {
        id: 9,
        question: "What is the output? console.log(typeof NaN)",
        options: [
          "'NaN'",
          "'number'",
          "'undefined'",
          "'object'"
        ],
        correctAnswer: 1,
        explanation: "NaN (Not-a-Number) is actually of type 'number' in JavaScript."
      },
      {
        id: 10,
        question: "What will be logged? const arr = [1,2,3]; arr[10] = 10; console.log(arr.length)",
        options: [
          "4",
          "10",
          "11",
          "undefined"
        ],
        correctAnswer: 2,
        explanation: "Setting arr[10] makes the array length 11. Indices 3-9 become empty slots."
      },
      {
        id: 11,
        question: "What is the difference between let and var?",
        options: [
          "No difference",
          "let is block-scoped, var is function-scoped",
          "var is faster",
          "let cannot be reassigned"
        ],
        correctAnswer: 1,
        explanation: "let has block scope and is not hoisted, while var is function-scoped and hoisted."
      },
      {
        id: 12,
        question: "What is the output? console.log(0.1 + 0.2 === 0.3)",
        options: [
          "true",
          "false",
          "undefined",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "Due to floating-point precision, 0.1 + 0.2 equals 0.30000000000000004, not exactly 0.3."
      },
      {
        id: 13,
        question: "What does this code return? [1,2,3].map(num => num * 2)",
        options: [
          "[1,2,3]",
          "[2,4,6]",
          "[1,4,9]",
          "6"
        ],
        correctAnswer: 1,
        explanation: "map() creates a new array with results of calling the function on every element."
      },
      {
        id: 14,
        question: "What is hoisting in JavaScript?",
        options: [
          "Moving variables to global scope",
          "Declaration moved to top of scope",
          "Deleting variables",
          "Creating new variables"
        ],
        correctAnswer: 1,
        explanation: "Hoisting moves variable and function declarations to the top of their scope during compilation."
      },
      {
        id: 15,
        question: "What is the output? console.log(!!'false')",
        options: [
          "true",
          "false",
          "undefined",
          "'false'"
        ],
        correctAnswer: 0,
        explanation: "!!'false' converts the non-empty string to boolean. Any non-empty string is truthy."
      },
      {
        id: 16,
        question: "What does === check?",
        options: [
          "Value only",
          "Type only",
          "Both value and type",
          "Reference only"
        ],
        correctAnswer: 2,
        explanation: "=== is the strict equality operator that checks both value and type without coercion."
      },
      {
        id: 17,
        question: "What is the output? const obj = {a:1}; const obj2 = obj; obj2.a = 2; console.log(obj.a)",
        options: [
          "1",
          "2",
          "undefined",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "Objects are passed by reference. obj and obj2 point to the same object."
      },
      {
        id: 18,
        question: "What does Array.prototype.filter() return?",
        options: [
          "A single element",
          "A new array with elements that pass test",
          "Boolean",
          "The original array"
        ],
        correctAnswer: 1,
        explanation: "filter() creates a new array with all elements that pass the test function."
      },
      {
        id: 19,
        question: "What is the output? console.log([1] + [2])",
        options: [
          "[1,2]",
          "3",
          "'12'",
          "[3]"
        ],
        correctAnswer: 2,
        explanation: "Arrays are converted to strings and concatenated: '1' + '2' = '12'."
      },
      {
        id: 20,
        question: "What is event bubbling?",
        options: [
          "Events bubble up from child to parent",
          "Events sink down from parent to child",
          "Events are cancelled",
          "Events are delayed"
        ],
        correctAnswer: 0,
        explanation: "Event bubbling is when an event propagates from the target element up through its ancestors."
      },
      {
        id: 21,
        question: "What will this return? function sum(a, b = 5) { return a + b; } sum(3)",
        options: [
          "8",
          "3",
          "NaN",
          "undefined"
        ],
        correctAnswer: 0,
        explanation: "Default parameters allow named parameters to be initialized with default values. Here b defaults to 5."
      },
      {
        id: 22,
        question: "What is the output? console.log([...'hello'])",
        options: [
          "'hello'",
          "['hello']",
          "['h','e','l','l','o']",
          "Error"
        ],
        correctAnswer: 2,
        explanation: "The spread operator (...) spreads a string into individual characters in an array."
      },
      {
        id: 23,
        question: "What does Promise.all() do?",
        options: [
          "Runs promises sequentially",
          "Returns first resolved promise",
          "Waits for all promises to resolve",
          "Cancels all promises"
        ],
        correctAnswer: 2,
        explanation: "Promise.all() waits for all promises to resolve, or rejects if any promise rejects."
      },
      {
        id: 24,
        question: "What is the output? const arr = [1,2,3]; delete arr[1]; console.log(arr)",
        options: [
          "[1,3]",
          "[1,undefined,3]",
          "[1,,3]",
          "Error"
        ],
        correctAnswer: 2,
        explanation: "delete creates an empty slot (hole) in the array but doesn't change its length."
      },
      {
        id: 25,
        question: "What is destructuring in JavaScript?",
        options: [
          "Deleting objects",
          "Unpacking values from arrays/objects",
          "Breaking code",
          "Destroying variables"
        ],
        correctAnswer: 1,
        explanation: "Destructuring allows unpacking values from arrays or properties from objects into distinct variables."
      },
      {
        id: 26,
        question: "What is the output? console.log(+'10')",
        options: [
          "'10'",
          "10",
          "NaN",
          "undefined"
        ],
        correctAnswer: 1,
        explanation: "The unary plus operator (+) converts the string '10' to the number 10."
      },
      {
        id: 27,
        question: "What does Object.freeze() do?",
        options: [
          "Stops JavaScript execution",
          "Makes object immutable",
          "Deletes object",
          "Copies object"
        ],
        correctAnswer: 1,
        explanation: "Object.freeze() prevents modification of existing properties and addition of new properties."
      },
      {
        id: 28,
        question: "What is the output? console.log(3 > 2 > 1)",
        options: [
          "true",
          "false",
          "undefined",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "3 > 2 is true, then true > 1 converts true to 1, and 1 > 1 is false."
      },
      {
        id: 29,
        question: "What does setTimeout() return?",
        options: [
          "undefined",
          "A promise",
          "A timeout ID",
          "The callback result"
        ],
        correctAnswer: 2,
        explanation: "setTimeout() returns a timeout ID that can be used with clearTimeout()."
      },
      {
        id: 30,
        question: "What is the output? const obj = {a:1, b:2, a:3}; console.log(obj.a)",
        options: [
          "1",
          "2",
          "3",
          "Error"
        ],
        correctAnswer: 2,
        explanation: "When duplicate keys exist in an object, the last value overwrites previous ones."
      },
      {
        id: 31,
        question: "What is the difference between == and ===?",
        options: [
          "No difference",
          "== checks type, === doesn't",
          "== allows type coercion, === doesn't",
          "=== is faster"
        ],
        correctAnswer: 2,
        explanation: "== performs type coercion before comparison, while === requires same type and value."
      },
      {
        id: 32,
        question: "What will this return? [1,2,3].reduce((acc, val) => acc + val, 0)",
        options: [
          "0",
          "6",
          "[1,2,3]",
          "123"
        ],
        correctAnswer: 1,
        explanation: "reduce() accumulates values: 0+1=1, 1+2=3, 3+3=6."
      },
      {
        id: 33,
        question: "What is the output? console.log(typeof [])",
        options: [
          "'array'",
          "'object'",
          "'Array'",
          "'list'"
        ],
        correctAnswer: 1,
        explanation: "Arrays are objects in JavaScript, so typeof returns 'object'."
      },
      {
        id: 34,
        question: "What does Array.isArray() do?",
        options: [
          "Creates an array",
          "Checks if value is an array",
          "Converts to array",
          "Sorts an array"
        ],
        correctAnswer: 1,
        explanation: "Array.isArray() determines whether the passed value is an Array."
      },
      {
        id: 35,
        question: "What is the output? let x = {a:1}; let y = x; y.a = 2; console.log(x.a)",
        options: [
          "1",
          "2",
          "undefined",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "Objects are reference types. Both x and y point to the same object in memory."
      },
      {
        id: 36,
        question: "What does the 'this' keyword refer to?",
        options: [
          "The current function",
          "The global object",
          "The object that is executing the current function",
          "undefined"
        ],
        correctAnswer: 2,
        explanation: "'this' refers to the object that is executing the current function (context-dependent)."
      },
      {
        id: 37,
        question: "What is async/await?",
        options: [
          "A loop type",
          "Syntactic sugar for promises",
          "A data type",
          "An error handler"
        ],
        correctAnswer: 1,
        explanation: "async/await is syntactic sugar for working with promises in a more synchronous-looking manner."
      },
      {
        id: 38,
        question: "What is the output? console.log(!![]))",
        options: [
          "true",
          "false",
          "[]",
          "undefined"
        ],
        correctAnswer: 0,
        explanation: "Empty arrays are truthy in JavaScript. !![] converts it to boolean true."
      },
      {
        id: 39,
        question: "What does JSON.stringify() do?",
        options: [
          "Parses JSON",
          "Converts JavaScript value to JSON string",
          "Validates JSON",
          "Creates JSON object"
        ],
        correctAnswer: 1,
        explanation: "JSON.stringify() converts a JavaScript value or object to a JSON string."
      },
      {
        id: 40,
        question: "What is the output? const arr = [1,2]; arr.length = 0; console.log(arr)",
        options: [
          "[1,2]",
          "[]",
          "[0]",
          "undefined"
        ],
        correctAnswer: 1,
        explanation: "Setting length to 0 empties the array completely."
      },
      {
        id: 41,
        question: "What does the spread operator (...) do?",
        options: [
          "Multiplies numbers",
          "Spreads/expands iterables",
          "Creates dots",
          "Comments code"
        ],
        correctAnswer: 1,
        explanation: "The spread operator expands an iterable (like an array) into individual elements."
      },
      {
        id: 42,
        question: "What is the output? console.log('5' - 3)",
        options: [
          "'53'",
          "2",
          "'2'",
          "NaN"
        ],
        correctAnswer: 1,
        explanation: "JavaScript coerces '5' to number 5 for subtraction: 5 - 3 = 2."
      },
      {
        id: 43,
        question: "What does Array.prototype.map() return?",
        options: [
          "The original array",
          "A new array with transformed elements",
          "A single value",
          "undefined"
        ],
        correctAnswer: 1,
        explanation: "map() creates a new array with the results of calling a function on every element."
      },
      {
        id: 44,
        question: "What is the output? console.log(null == undefined)",
        options: [
          "true",
          "false",
          "null",
          "undefined"
        ],
        correctAnswer: 0,
        explanation: "null == undefined is true (loose equality), but null === undefined is false."
      },
      {
        id: 45,
        question: "What does arr.forEach() return?",
        options: [
          "A new array",
          "undefined",
          "The modified array",
          "A boolean"
        ],
        correctAnswer: 1,
        explanation: "forEach() always returns undefined. It's used for side effects, not transformation."
      },
      {
        id: 46,
        question: "What is the output? const x = [1,2,3]; x[5] = 5; console.log(x[4])",
        options: [
          "undefined",
          "null",
          "4",
          "0"
        ],
        correctAnswer: 0,
        explanation: "Array index 4 was never assigned, so it returns undefined."
      },
      {
        id: 47,
        question: "What does Object.keys() return?",
        options: [
          "Object values",
          "Array of object's own property names",
          "Number of keys",
          "Object copy"
        ],
        correctAnswer: 1,
        explanation: "Object.keys() returns an array of an object's own enumerable property names."
      },
      {
        id: 48,
        question: "What is the output? console.log(1 + '1' - 1)",
        options: [
          "1",
          "10",
          "'11'",
          "NaN"
        ],
        correctAnswer: 1,
        explanation: "1 + '1' = '11' (string concatenation), then '11' - 1 = 10 (coercion to number)."
      },
      {
        id: 49,
        question: "What does the ?? operator do?",
        options: [
          "Logical OR",
          "Nullish coalescing",
          "Division",
          "Comparison"
        ],
        correctAnswer: 1,
        explanation: "The nullish coalescing operator (??) returns right operand when left is null or undefined."
      },
      {
        id: 50,
        question: "What is the output? const {a, b} = {a:1, b:2, c:3}; console.log(a, b)",
        options: [
          "undefined undefined",
          "1 2",
          "{a:1, b:2}",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "Destructuring unpacks object properties a and b into separate variables."
      }
    ]
  },
  {
    courseId: 'react',
    courseName: 'React',
    questions: [
      {
        id: 1,
        question: "What is React?",
        options: [
          "A JavaScript library for building user interfaces",
          "A database management system",
          "A CSS framework",
          "A testing framework"
        ],
        correctAnswer: 0,
        explanation: "React is a JavaScript library developed by Facebook for building user interfaces, especially single-page applications."
      },
      {
        id: 2,
        question: "What is JSX?",
        options: [
          "A new programming language",
          "A syntax extension for JavaScript",
          "A CSS preprocessor",
          "A testing library"
        ],
        correctAnswer: 1,
        explanation: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files."
      },
      {
        id: 3,
        question: "What will this component render? function App() { return <div>{2 + 2}</div> }",
        options: [
          "<div>2 + 2</div>",
          "<div>4</div>",
          "<div>22</div>",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "JSX expressions inside curly braces are evaluated. 2 + 2 evaluates to 4."
      },
      {
        id: 4,
        question: "What is the Virtual DOM?",
        options: [
          "A real DOM copy",
          "A lightweight JavaScript representation of the real DOM",
          "A browser API",
          "A testing tool"
        ],
        correctAnswer: 1,
        explanation: "The Virtual DOM is a lightweight copy of the actual DOM that React uses to optimize rendering performance."
      },
      {
        id: 5,
        question: "What is the correct way to update state?",
        options: [
          "state.count = 5",
          "this.state.count = 5",
          "setState({count: 5})",
          "state = {count: 5}"
        ],
        correctAnswer: 2,
        explanation: "State should be updated using setState() method to ensure proper re-rendering."
      },
      {
        id: 6,
        question: "What is a React Hook?",
        options: [
          "A class component",
          "A function that lets you use state in functional components",
          "A lifecycle method",
          "A routing system"
        ],
        correctAnswer: 1,
        explanation: "Hooks are functions that let you use React features like state in functional components."
      },
      {
        id: 7,
        question: "What does useState return?",
        options: [
          "Just the state value",
          "Just the setter function",
          "An array with [state, setState]",
          "An object {state, setState}"
        ],
        correctAnswer: 2,
        explanation: "useState returns an array with two elements: the current state value and a function to update it."
      },
      {
        id: 8,
        question: "When does useEffect run by default?",
        options: [
          "Only once on mount",
          "After every render",
          "Before every render",
          "Only on unmount"
        ],
        correctAnswer: 1,
        explanation: "By default, useEffect runs after every render (both initial render and updates)."
      },
      {
        id: 9,
        question: "How do you prevent useEffect from running on every render?",
        options: [
          "Don't use useEffect",
          "Pass an empty dependency array []",
          "Use useCallback",
          "Return false"
        ],
        correctAnswer: 1,
        explanation: "Passing an empty dependency array [] makes useEffect run only once on mount."
      },
      {
        id: 10,
        question: "What is the output? function Counter() { const [count, setCount] = useState(0); setCount(count + 1); return <div>{count}</div> }",
        options: [
          "0",
          "1",
          "Infinite loop",
          "Error"
        ],
        correctAnswer: 2,
        explanation: "setCount in the render causes infinite re-renders. State updates should be in event handlers or useEffect."
      },
      {
        id: 11,
        question: "What is prop drilling?",
        options: [
          "Drilling holes in components",
          "Passing props through multiple levels",
          "A performance optimization",
          "A testing technique"
        ],
        correctAnswer: 1,
        explanation: "Prop drilling is passing props through multiple component levels to reach a deeply nested component."
      },
      {
        id: 12,
        question: "What is the Context API used for?",
        options: [
          "Styling components",
          "Avoiding prop drilling by sharing data globally",
          "Routing",
          "Testing"
        ],
        correctAnswer: 1,
        explanation: "Context API provides a way to pass data through the component tree without prop drilling."
      },
      {
        id: 13,
        question: "What does this do? <input value={name} onChange={e => setName(e.target.value)} />",
        options: [
          "Uncontrolled input",
          "Controlled input",
          "Disabled input",
          "Read-only input"
        ],
        correctAnswer: 1,
        explanation: "This creates a controlled input where React controls the value through state."
      },
      {
        id: 14,
        question: "What is the key prop used for?",
        options: [
          "Styling elements",
          "Helping React identify which items changed",
          "Encrypting data",
          "Passing secret values"
        ],
        correctAnswer: 1,
        explanation: "The key prop helps React identify which items in a list have changed, added, or removed."
      },
      {
        id: 15,
        question: "What will happen? {items.map(item => <div>{item}</div>)}",
        options: [
          "Works perfectly",
          "Warning about missing key prop",
          "Error",
          "Nothing renders"
        ],
        correctAnswer: 1,
        explanation: "React will render correctly but show a warning that each child should have a unique 'key' prop."
      },
      {
        id: 16,
        question: "What is React.Fragment used for?",
        options: [
          "Breaking components",
          "Grouping elements without adding DOM nodes",
          "Creating fragments of code",
          "Testing components"
        ],
        correctAnswer: 1,
        explanation: "Fragment lets you group multiple elements without adding an extra DOM node like div."
      },
      {
        id: 17,
        question: "What is the shorthand for React.Fragment?",
        options: [
          "<frag></frag>",
          "<></> ",
          "<fragment></fragment>",
          "<f></f>"
        ],
        correctAnswer: 1,
        explanation: "The shorthand syntax for React.Fragment is <></>, also called empty tags."
      },
      {
        id: 18,
        question: "What does useMemo do?",
        options: [
          "Memorizes user data",
          "Memoizes expensive calculations",
          "Creates memos",
          "Stores component memory"
        ],
        correctAnswer: 1,
        explanation: "useMemo memoizes the result of expensive calculations to avoid recomputing on every render."
      },
      {
        id: 19,
        question: "What does useCallback do?",
        options: [
          "Creates callbacks",
          "Memoizes function references",
          "Calls functions back",
          "Handles async operations"
        ],
        correctAnswer: 1,
        explanation: "useCallback returns a memoized version of the callback function that only changes if dependencies change."
      },
      {
        id: 20,
        question: "What is the difference between useMemo and useCallback?",
        options: [
          "No difference",
          "useMemo returns a value, useCallback returns a function",
          "useMemo is faster",
          "useCallback is for classes"
        ],
        correctAnswer: 1,
        explanation: "useMemo memoizes a computed value, while useCallback memoizes a function definition."
      },
      {
        id: 21,
        question: "What will render? function App() { return ( <> <h1>Hello</h1> <p>World</p> </> ) }",
        options: [
          "Error",
          "Both elements without wrapper div",
          "Only h1",
          "Nothing"
        ],
        correctAnswer: 1,
        explanation: "Fragment (<></>) allows returning multiple elements without adding an extra DOM node."
      },
      {
        id: 22,
        question: "What is lifting state up?",
        options: [
          "Moving state to a higher component",
          "Increasing state value",
          "Deleting state",
          "Copying state"
        ],
        correctAnswer: 0,
        explanation: "Lifting state up means moving state to a common parent component to share between children."
      },
      {
        id: 23,
        question: "What is a Higher-Order Component (HOC)?",
        options: [
          "A component at the top",
          "A function that takes a component and returns a new component",
          "A class component",
          "A styled component"
        ],
        correctAnswer: 1,
        explanation: "A HOC is a function that takes a component and returns a new enhanced component."
      },
      {
        id: 24,
        question: "What does useRef return?",
        options: [
          "A reference number",
          "A mutable ref object",
          "A component reference",
          "undefined"
        ],
        correctAnswer: 1,
        explanation: "useRef returns a mutable ref object whose .current property persists across renders."
      },
      {
        id: 25,
        question: "What is useRef commonly used for?",
        options: [
          "State management",
          "Accessing DOM elements and storing mutable values",
          "Routing",
          "Styling"
        ],
        correctAnswer: 1,
        explanation: "useRef is commonly used to access DOM elements directly and store mutable values without causing re-renders."
      },
      {
        id: 26,
        question: "What will this do? const inputRef = useRef(); <input ref={inputRef} />",
        options: [
          "Error",
          "Creates a reference to the input DOM element",
          "Styles the input",
          "Validates the input"
        ],
        correctAnswer: 1,
        explanation: "This creates a ref that points to the input DOM element, accessible via inputRef.current."
      },
      {
        id: 27,
        question: "What is React Router used for?",
        options: [
          "Network requests",
          "Client-side routing in single-page applications",
          "State management",
          "Testing"
        ],
        correctAnswer: 1,
        explanation: "React Router is a library for handling client-side routing in React applications."
      },
      {
        id: 28,
        question: "What does useNavigate do in React Router v6?",
        options: [
          "Creates navigation menu",
          "Programmatically navigates to routes",
          "Navigates browser history",
          "Creates links"
        ],
        correctAnswer: 1,
        explanation: "useNavigate is a hook that returns a function for programmatic navigation between routes."
      },
      {
        id: 29,
        question: "What is the purpose of useParams?",
        options: [
          "Setting parameters",
          "Getting URL parameters from the route",
          "Passing props",
          "Configuring components"
        ],
        correctAnswer: 1,
        explanation: "useParams returns an object of key/value pairs of URL parameters from the current route."
      },
      {
        id: 30,
        question: "What are controlled components?",
        options: [
          "Components with state",
          "Form elements whose value is controlled by React state",
          "Class components",
          "Components with props"
        ],
        correctAnswer: 1,
        explanation: "Controlled components are form elements whose value is controlled by React state via value and onChange."
      },
      {
        id: 31,
        question: "What is the synthetic event in React?",
        options: [
          "A fake event",
          "React's cross-browser wrapper around native events",
          "An artificial event",
          "A testing event"
        ],
        correctAnswer: 1,
        explanation: "SyntheticEvent is React's cross-browser wrapper around the browser's native event system."
      },
      {
        id: 32,
        question: "How do you prevent default behavior in React?",
        options: [
          "return false",
          "e.preventDefault()",
          "e.stopDefault()",
          "preventDefault={true}"
        ],
        correctAnswer: 1,
        explanation: "You must explicitly call preventDefault() on the event object to prevent default behavior."
      },
      {
        id: 33,
        question: "What is the purpose of useReducer?",
        options: [
          "Reducing array size",
          "Managing complex state logic",
          "Reducing component size",
          "Performance optimization"
        ],
        correctAnswer: 1,
        explanation: "useReducer is used for managing complex state logic, similar to Redux but built into React."
      },
      {
        id: 34,
        question: "What does useContext do?",
        options: [
          "Creates context",
          "Consumes context values",
          "Provides context",
          "Deletes context"
        ],
        correctAnswer: 1,
        explanation: "useContext lets you consume values from a React Context without wrapping components."
      },
      {
        id: 35,
        question: "What will happen? const [count, setCount] = useState(0); setCount(count + 1); setCount(count + 1);",
        options: [
          "count becomes 2",
          "count becomes 1",
          "Error",
          "count becomes 0"
        ],
        correctAnswer: 1,
        explanation: "Both setCount calls use the same count value. Use functional updates: setCount(c => c + 1)."
      },
      {
        id: 36,
        question: "What is lazy loading in React?",
        options: [
          "Slow loading",
          "Loading components on demand",
          "Delaying all loading",
          "Loading data lazily"
        ],
        correctAnswer: 1,
        explanation: "Lazy loading is loading components dynamically on demand to reduce initial bundle size."
      },
      {
        id: 37,
        question: "How do you implement lazy loading?",
        options: [
          "import Component from './Component'",
          "const Component = React.lazy(() => import('./Component'))",
          "lazy('Component')",
          "import lazy Component"
        ],
        correctAnswer: 1,
        explanation: "React.lazy() enables dynamic imports for code-splitting and lazy loading components."
      },
      {
        id: 38,
        question: "What is Suspense used for?",
        options: [
          "Suspending execution",
          "Showing fallback UI while lazy component loads",
          "Error handling",
          "Animation delays"
        ],
        correctAnswer: 1,
        explanation: "Suspense lets you display a fallback UI while waiting for lazy-loaded components."
      },
      {
        id: 39,
        question: "What is the difference between createElement and JSX?",
        options: [
          "No difference, JSX compiles to createElement",
          "createElement is faster",
          "JSX is a different API",
          "createElement is deprecated"
        ],
        correctAnswer: 0,
        explanation: "JSX is syntactic sugar that compiles to React.createElement() calls."
      },
      {
        id: 40,
        question: "What is StrictMode?",
        options: [
          "Production mode",
          "Development tool for highlighting potential problems",
          "Error mode",
          "Testing mode"
        ],
        correctAnswer: 1,
        explanation: "StrictMode is a development tool that highlights potential problems and unsafe lifecycles."
      },
      {
        id: 41,
        question: "What will this render? {true && <div>Hello</div>}",
        options: [
          "Nothing",
          "<div>Hello</div>",
          "true",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "In JSX, true && expression returns expression. This is conditional rendering."
      },
      {
        id: 42,
        question: "What will this render? {false && <div>Hello</div>}",
        options: [
          "Nothing",
          "<div>Hello</div>",
          "false",
          "Error"
        ],
        correctAnswer: 0,
        explanation: "false && expression returns false, which React doesn't render (similar to null/undefined)."
      },
      {
        id: 43,
        question: "What is the purpose of componentDidMount in class components?",
        options: [
          "Before component mounts",
          "After component mounts to DOM",
          "Before unmount",
          "On every update"
        ],
        correctAnswer: 1,
        explanation: "componentDidMount is called after the component is mounted to the DOM, similar to useEffect with []."
      },
      {
        id: 44,
        question: "What is the equivalent of componentDidMount in hooks?",
        options: [
          "useEffect(() => {}, [])",
          "useState()",
          "useMemo()",
          "useMount()"
        ],
        correctAnswer: 0,
        explanation: "useEffect with an empty dependency array runs once after mount, like componentDidMount."
      },
      {
        id: 45,
        question: "What does the cleanup function in useEffect do?",
        options: [
          "Cleans code",
          "Runs when component unmounts or before next effect",
          "Deletes component",
          "Clears state"
        ],
        correctAnswer: 1,
        explanation: "The cleanup function runs before the component unmounts or before the next effect runs."
      },
      {
        id: 46,
        question: "What is React.memo?",
        options: [
          "A hook",
          "A higher-order component for memoization",
          "A state manager",
          "A router"
        ],
        correctAnswer: 1,
        explanation: "React.memo is a HOC that memoizes a component, preventing re-renders if props haven't changed."
      },
      {
        id: 47,
        question: "When should you use useCallback?",
        options: [
          "Always",
          "When passing callbacks to memoized child components",
          "Never",
          "For all functions"
        ],
        correctAnswer: 1,
        explanation: "useCallback is useful when passing callbacks to optimized child components that rely on reference equality."
      },
      {
        id: 48,
        question: "What is the purpose of keys in lists?",
        options: [
          "Security",
          "Helping React identify which items changed",
          "Styling",
          "Sorting"
        ],
        correctAnswer: 1,
        explanation: "Keys help React identify which items have changed, been added, or removed for efficient updates."
      },
      {
        id: 49,
        question: "Should you use array index as key?",
        options: [
          "Always",
          "Only if items don't reorder and have no unique id",
          "Never",
          "Only in production"
        ],
        correctAnswer: 1,
        explanation: "Using index as key is acceptable only if the list is static and items won't be reordered."
      },
      {
        id: 50,
        question: "What is the children prop?",
        options: [
          "Child components",
          "Content passed between component opening and closing tags",
          "Array of components",
          "Component state"
        ],
        correctAnswer: 1,
        explanation: "children is a special prop that represents the content passed between the opening and closing tags of a component."
      }
    ]
  },
  {
    courseId: 'nodejs',
    courseName: 'Node.js',
    questions: [
      {
        id: 1,
        question: "What is Node.js?",
        options: [
          "A programming language",
          "A JavaScript runtime built on Chrome's V8 engine",
          "A web browser",
          "A database"
        ],
        correctAnswer: 1,
        explanation: "Node.js is a JavaScript runtime environment that allows you to run JavaScript on the server side."
      },
      {
        id: 2,
        question: "What is npm?",
        options: [
          "Node Package Manager",
          "New Programming Method",
          "Node Program Module",
          "Node Package Module"
        ],
        correctAnswer: 0,
        explanation: "npm stands for Node Package Manager, the default package manager for Node.js."
      },
      {
        id: 3,
        question: "What is the Event Loop in Node.js?",
        options: [
          "A for loop",
          "Mechanism that handles asynchronous operations",
          "A testing framework",
          "A module system"
        ],
        correctAnswer: 1,
        explanation: "The Event Loop is what allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded."
      },
      {
        id: 4,
        question: "What is the output? console.log('Start'); setTimeout(() => console.log('Timeout'), 0); console.log('End');",
        options: [
          "Start, Timeout, End",
          "Start, End, Timeout",
          "Timeout, Start, End",
          "End, Start, Timeout"
        ],
        correctAnswer: 1,
        explanation: "Synchronous code executes first, then the callback queue. Output: Start, End, Timeout."
      },
      {
        id: 5,
        question: "What is middleware in Express.js?",
        options: [
          "A database layer",
          "Functions that execute during request-response cycle",
          "A routing system",
          "A template engine"
        ],
        correctAnswer: 1,
        explanation: "Middleware functions have access to request, response objects and can execute code, modify them, or end the request-response cycle."
      },
      {
        id: 6,
        question: "How do you import a module in Node.js?",
        options: [
          "import module from 'module'",
          "require('module')",
          "include('module')",
          "use('module')"
        ],
        correctAnswer: 1,
        explanation: "The require() function is used to import modules in Node.js (CommonJS)."
      },
      {
        id: 7,
        question: "What is the purpose of package.json?",
        options: [
          "Stores code",
          "Contains project metadata and dependencies",
          "Configuration for npm only",
          "Only for versioning"
        ],
        correctAnswer: 1,
        explanation: "package.json contains project metadata, dependencies, scripts, and configuration information."
      },
      {
        id: 8,
        question: "What does this do? const fs = require('fs'); fs.readFileSync('file.txt', 'utf8')",
        options: [
          "Reads file asynchronously",
          "Reads file synchronously (blocking)",
          "Writes to file",
          "Deletes file"
        ],
        correctAnswer: 1,
        explanation: "readFileSync() reads files synchronously, blocking code execution until the operation completes."
      },
      {
        id: 9,
        question: "What is the difference between readFile and readFileSync?",
        options: [
          "No difference",
          "readFile is async (non-blocking), readFileSync is sync (blocking)",
          "readFileSync is faster",
          "readFile is deprecated"
        ],
        correctAnswer: 1,
        explanation: "readFile is asynchronous and non-blocking, while readFileSync blocks code execution until complete."
      },
      {
        id: 10,
        question: "What is a callback in Node.js?",
        options: [
          "A phone call back",
          "A function passed as argument to be executed later",
          "A return statement",
          "An error handler"
        ],
        correctAnswer: 1,
        explanation: "A callback is a function passed as an argument to another function to be executed after an async operation completes."
      },
      {
        id: 11,
        question: "What is callback hell?",
        options: [
          "Slow callbacks",
          "Deeply nested callbacks making code hard to read",
          "Error in callbacks",
          "Too many callbacks"
        ],
        correctAnswer: 1,
        explanation: "Callback hell refers to deeply nested callbacks that make code difficult to read and maintain."
      },
      {
        id: 12,
        question: "How do you avoid callback hell?",
        options: [
          "Don't use callbacks",
          "Use Promises or async/await",
          "Use more callbacks",
          "Use synchronous code only"
        ],
        correctAnswer: 1,
        explanation: "Using Promises and async/await helps avoid callback hell by providing cleaner asynchronous code."
      },
      {
        id: 13,
        question: "What is Express.js?",
        options: [
          "A database",
          "A minimal web application framework for Node.js",
          "A testing library",
          "A package manager"
        ],
        correctAnswer: 1,
        explanation: "Express.js is a minimal and flexible Node.js web application framework for building web applications and APIs."
      },
      {
        id: 14,
        question: "What does this code do? app.get('/users', (req, res) => { res.json({users: []}) })",
        options: [
          "Gets users from database",
          "Defines GET route that returns JSON response",
          "Updates users",
          "Deletes users"
        ],
        correctAnswer: 1,
        explanation: "This defines a GET route at /users that sends a JSON response with an empty users array."
      },
      {
        id: 15,
        question: "What is the purpose of app.use() in Express?",
        options: [
          "Uses a module",
          "Mounts middleware functions",
          "Uses templates",
          "Uses database"
        ],
        correctAnswer: 1,
        explanation: "app.use() is used to mount middleware functions that execute for every request or specific routes."
      },
      {
        id: 16,
        question: "What is process.env used for?",
        options: [
          "Process management",
          "Accessing environment variables",
          "Environment setup",
          "Process monitoring"
        ],
        correctAnswer: 1,
        explanation: "process.env is an object containing the user environment variables, used for configuration."
      },
      {
        id: 17,
        question: "What is the purpose of .env files?",
        options: [
          "Store secret environment variables",
          "Store code",
          "Store logs",
          "Store cache"
        ],
        correctAnswer: 0,
        explanation: ".env files store environment-specific configuration and secrets that shouldn't be committed to version control."
      },
      {
        id: 18,
        question: "What package is commonly used to load .env files?",
        options: [
          "env-loader",
          "dotenv",
          "env-config",
          "envfile"
        ],
        correctAnswer: 1,
        explanation: "The dotenv package loads environment variables from .env files into process.env."
      },
      {
        id: 19,
        question: "What is the purpose of module.exports?",
        options: [
          "Import modules",
          "Export functionality from a module",
          "Delete modules",
          "List modules"
        ],
        correctAnswer: 1,
        explanation: "module.exports is used to export functions, objects, or values from a module to be used elsewhere."
      },
      {
        id: 20,
        question: "What is the difference between module.exports and exports?",
        options: [
          "No difference",
          "exports is a reference to module.exports",
          "exports is faster",
          "module.exports is deprecated"
        ],
        correctAnswer: 1,
        explanation: "exports is a shorthand reference to module.exports. Reassigning exports breaks the reference."
      },
      {
        id: 21,
        question: "What does this return? module.exports = function() { return 'Hello' }",
        options: [
          "Error",
          "A function that returns 'Hello'",
          "'Hello'",
          "undefined"
        ],
        correctAnswer: 1,
        explanation: "This exports a function. When the module is required, you get the function itself."
      },
      {
        id: 22,
        question: "What is a Stream in Node.js?",
        options: [
          "A water flow",
          "Objects that let you read/write data in chunks",
          "A video player",
          "A database connection"
        ],
        correctAnswer: 1,
        explanation: "Streams are objects that allow reading or writing data in chunks, useful for handling large files."
      },
      {
        id: 23,
        question: "What are the types of Streams in Node.js?",
        options: [
          "Only Readable",
          "Readable, Writable, Duplex, Transform",
          "Only Writable",
          "Input and Output"
        ],
        correctAnswer: 1,
        explanation: "Node.js has four types of streams: Readable, Writable, Duplex (both), and Transform (modifies data)."
      },
      {
        id: 24,
        question: "What is piping in Node.js streams?",
        options: [
          "Playing music",
          "Connecting output of one stream to input of another",
          "Breaking streams",
          "Debugging streams"
        ],
        correctAnswer: 1,
        explanation: "Piping connects the output of a readable stream to the input of a writable stream."
      },
      {
        id: 25,
        question: "What does this do? readStream.pipe(writeStream)",
        options: [
          "Reads and writes simultaneously",
          "Pipes data from read stream to write stream",
          "Creates a pipe",
          "Breaks streams"
        ],
        correctAnswer: 1,
        explanation: "This pipes data from readStream to writeStream, efficiently transferring data in chunks."
      },
      {
        id: 26,
        question: "What is Buffer in Node.js?",
        options: [
          "A delay mechanism",
          "Temporary storage for binary data",
          "A cache system",
          "A stream type"
        ],
        correctAnswer: 1,
        explanation: "Buffer is a temporary storage for binary data, used when working with streams or raw data."
      },
      {
        id: 27,
        question: "How do you create a Buffer?",
        options: [
          "new Buffer('text')",
          "Buffer.from('text')",
          "Buffer.create('text')",
          "createBuffer('text')"
        ],
        correctAnswer: 1,
        explanation: "Buffer.from() is the recommended way to create buffers. 'new Buffer()' is deprecated."
      },
      {
        id: 28,
        question: "What is clustering in Node.js?",
        options: [
          "Grouping code",
          "Running multiple Node.js processes to utilize multiple CPU cores",
          "Organizing files",
          "Database clustering"
        ],
        correctAnswer: 1,
        explanation: "Clustering allows creating child processes (workers) that share the same server port, utilizing all CPU cores."
      },
      {
        id: 29,
        question: "What module is used for clustering?",
        options: [
          "cluster",
          "multi-core",
          "worker",
          "process"
        ],
        correctAnswer: 0,
        explanation: "The 'cluster' module allows easy creation of child processes that share server ports."
      },
      {
        id: 30,
        question: "What is the purpose of __dirname?",
        options: [
          "Current directory name",
          "Absolute path of directory containing current file",
          "Parent directory",
          "Home directory"
        ],
        correctAnswer: 1,
        explanation: "__dirname provides the absolute path of the directory containing the currently executing file."
      },
      {
        id: 31,
        question: "What is the difference between __dirname and process.cwd()?",
        options: [
          "No difference",
          "__dirname is file's directory, process.cwd() is where Node was started",
          "process.cwd() is deprecated",
          "__dirname is faster"
        ],
        correctAnswer: 1,
        explanation: "__dirname is the directory of the current file, while process.cwd() is the working directory where Node was launched."
      },
      {
        id: 32,
        question: "What is CORS?",
        options: [
          "A database",
          "Cross-Origin Resource Sharing mechanism",
          "A testing framework",
          "A routing system"
        ],
        correctAnswer: 1,
        explanation: "CORS is a security mechanism that allows or restricts resources from being accessed by different origins."
      },
      {
        id: 33,
        question: "How do you enable CORS in Express?",
        options: [
          "Enable in settings",
          "Use cors middleware",
          "It's automatic",
          "Use helmet"
        ],
        correctAnswer: 1,
        explanation: "The 'cors' npm package provides middleware to enable CORS with various options."
      },
      {
        id: 34,
        question: "What is body-parser middleware used for?",
        options: [
          "Parsing URLs",
          "Parsing incoming request bodies",
          "Parsing responses",
          "Parsing headers"
        ],
        correctAnswer: 1,
        explanation: "body-parser parses incoming request bodies (JSON, URL-encoded) before your handlers."
      },
      {
        id: 35,
        question: "Is body-parser still needed in Express 4.16+?",
        options: [
          "Yes, always required",
          "No, built-in with express.json() and express.urlencoded()",
          "Yes, for JSON only",
          "It's deprecated"
        ],
        correctAnswer: 1,
        explanation: "Express 4.16+ includes built-in body parsing with express.json() and express.urlencoded()."
      },
      {
        id: 36,
        question: "What does this do? app.use(express.json())",
        options: [
          "Creates JSON",
          "Parses incoming JSON request bodies",
          "Sends JSON responses",
          "Validates JSON"
        ],
        correctAnswer: 1,
        explanation: "This middleware parses incoming requests with JSON payloads and makes data available in req.body."
      },
      {
        id: 37,
        question: "What is JWT?",
        options: [
          "Java Web Token",
          "JSON Web Token for authentication",
          "JavaScript Web Tool",
          "Just Web Token"
        ],
        correctAnswer: 1,
        explanation: "JWT (JSON Web Token) is a compact, URL-safe means of representing claims for authentication."
      },
      {
        id: 38,
        question: "What are the three parts of a JWT?",
        options: [
          "Key, Value, Signature",
          "Header, Payload, Signature",
          "Token, Key, Hash",
          "Auth, Data, Sign"
        ],
        correctAnswer: 1,
        explanation: "A JWT consists of three parts: Header (algorithm), Payload (claims), and Signature (verification)."
      },
      {
        id: 39,
        question: "What is REST API?",
        options: [
          "A sleeping API",
          "REpresentational State Transfer architectural style",
          "A testing API",
          "A database API"
        ],
        correctAnswer: 1,
        explanation: "REST is an architectural style for designing networked applications using HTTP methods."
      },
      {
        id: 40,
        question: "What are HTTP methods in REST?",
        options: [
          "Only GET and POST",
          "GET, POST, PUT, DELETE, PATCH",
          "Only GET",
          "SEND and RECEIVE"
        ],
        correctAnswer: 1,
        explanation: "REST APIs use HTTP methods: GET (read), POST (create), PUT (update), DELETE (delete), PATCH (partial update)."
      },
      {
        id: 41,
        question: "What status code indicates successful creation?",
        options: [
          "200 OK",
          "201 Created",
          "204 No Content",
          "202 Accepted"
        ],
        correctAnswer: 1,
        explanation: "201 Created indicates that a new resource was successfully created."
      },
      {
        id: 42,
        question: "What status code indicates resource not found?",
        options: [
          "400",
          "401",
          "404",
          "500"
        ],
        correctAnswer: 2,
        explanation: "404 Not Found indicates the requested resource could not be found on the server."
      },
      {
        id: 43,
        question: "What is Mongoose?",
        options: [
          "An animal",
          "MongoDB object modeling tool for Node.js",
          "A testing framework",
          "A web server"
        ],
        correctAnswer: 1,
        explanation: "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js."
      },
      {
        id: 44,
        question: "What is a Schema in Mongoose?",
        options: [
          "A database",
          "Defines structure of documents in collection",
          "A connection string",
          "A query"
        ],
        correctAnswer: 1,
        explanation: "A Schema defines the structure, data types, and validation rules for documents in a MongoDB collection."
      },
      {
        id: 45,
        question: "What is async/await in Node.js?",
        options: [
          "A loop type",
          "Syntactic sugar for handling Promises",
          "A module",
          "A callback pattern"
        ],
        correctAnswer: 1,
        explanation: "async/await is modern syntax for handling asynchronous operations, making code look synchronous."
      },
      {
        id: 46,
        question: "What does this do? async function getData() { const result = await fetch(url); return result; }",
        options: [
          "Error",
          "Waits for fetch to complete before returning",
          "Returns immediately",
          "Runs in parallel"
        ],
        correctAnswer: 1,
        explanation: "await pauses execution until the Promise resolves, then continues with the result."
      },
      {
        id: 47,
        question: "What is error handling in Express?",
        options: [
          "Try-catch only",
          "Error-handling middleware with 4 parameters",
          "Automatic",
          "Not possible"
        ],
        correctAnswer: 1,
        explanation: "Express error-handling middleware functions have four arguments: (err, req, res, next)."
      },
      {
        id: 48,
        question: "What does next() do in Express middleware?",
        options: [
          "Goes to next page",
          "Passes control to next middleware function",
          "Ends response",
          "Creates new route"
        ],
        correctAnswer: 1,
        explanation: "next() passes control to the next middleware function in the stack."
      },
      {
        id: 49,
        question: "What is nodemon used for?",
        options: [
          "Monitoring servers",
          "Automatically restarting Node app when files change",
          "Node package manager",
          "Testing framework"
        ],
        correctAnswer: 1,
        explanation: "nodemon automatically restarts the Node.js application when file changes are detected during development."
      },
      {
        id: 50,
        question: "What is the Event Emitter in Node.js?",
        options: [
          "A light emitter",
          "Class that facilitates communication between objects",
          "An error handler",
          "A module loader"
        ],
        correctAnswer: 1,
        explanation: "EventEmitter is a class that provides event-driven architecture, allowing objects to emit and listen to events."
      }
    ]
  },
  {
    courseId: 'php',
    courseName: 'PHP',
    questions: [
      {
        id: 1,
        question: "What does PHP stand for?",
        options: [
          "Personal Home Page",
          "Hypertext Preprocessor",
          "Private Home Page",
          "Programming Hypertext Processor"
        ],
        correctAnswer: 1,
        explanation: "PHP stands for PHP: Hypertext Preprocessor. It's a recursive acronym."
      },
      {
        id: 2,
        question: "How do you start a PHP code block?",
        options: [
          "<php>",
          "<?php",
          "<script>",
          "<%php%>"
        ],
        correctAnswer: 1,
        explanation: "PHP code blocks start with <?php and end with ?>."
      },
      {
        id: 3,
        question: "What is the correct way to declare a variable in PHP?",
        options: [
          "var name = 'John';",
          "$name = 'John';",
          "string name = 'John';",
          "declare name = 'John';"
        ],
        correctAnswer: 1,
        explanation: "In PHP, variables are declared with a dollar sign ($) followed by the variable name."
      },
      {
        id: 4,
        question: "What will echo '5' + '10'; output?",
        options: [
          "510",
          "15",
          "Error",
          "'5' + '10'"
        ],
        correctAnswer: 1,
        explanation: "PHP automatically converts strings to numbers for arithmetic operations. Result is 15."
      },
      {
        id: 5,
        question: "What is the difference between == and === in PHP?",
        options: [
          "No difference",
          "== compares values, === compares values and types",
          "=== is faster",
          "== is deprecated"
        ],
        correctAnswer: 1,
        explanation: "== checks value equality (with type coercion), === checks both value and type equality."
      },
      {
        id: 6,
        question: "What does this return? var_dump('5' == 5);",
        options: [
          "false",
          "true",
          "Error",
          "null"
        ],
        correctAnswer: 1,
        explanation: "== performs type coercion, so string '5' equals integer 5. Returns true."
      },
      {
        id: 7,
        question: "What does this return? var_dump('5' === 5);",
        options: [
          "true",
          "false",
          "Error",
          "null"
        ],
        correctAnswer: 1,
        explanation: "=== checks both value and type. String '5' is not identical to integer 5. Returns false."
      },
      {
        id: 8,
        question: "How do you create an array in PHP?",
        options: [
          "array = [1, 2, 3];",
          "$array = [1, 2, 3]; or $array = array(1, 2, 3);",
          "new Array(1, 2, 3);",
          "Array array = {1, 2, 3};"
        ],
        correctAnswer: 1,
        explanation: "Arrays can be created using short syntax [] or array() constructor."
      },
      {
        id: 9,
        question: "What is an associative array?",
        options: [
          "An array of arrays",
          "Array with named keys (key-value pairs)",
          "A sorted array",
          "An array of objects"
        ],
        correctAnswer: 1,
        explanation: "Associative arrays use named keys: $array = ['name' => 'John', 'age' => 30];"
      },
      {
        id: 10,
        question: "How do you access an element in an associative array?",
        options: [
          "$array.name",
          "$array['name']",
          "$array->name",
          "$array(name)"
        ],
        correctAnswer: 1,
        explanation: "Use square brackets with the key: $array['name']"
      },
      {
        id: 11,
        question: "What function is used to count array elements?",
        options: [
          "length()",
          "count()",
          "size()",
          "sizeof()"
        ],
        correctAnswer: 1,
        explanation: "count() returns the number of elements in an array. sizeof() is an alias but count() is preferred."
      },
      {
        id: 12,
        question: "What does $_GET do?",
        options: [
          "Gets all data",
          "Retrieves data from URL query parameters",
          "Gets form data only",
          "Gets session data"
        ],
        correctAnswer: 1,
        explanation: "$_GET is a superglobal array that collects data sent in the URL query string."
      },
      {
        id: 13,
        question: "What does $_POST do?",
        options: [
          "Posts to database",
          "Retrieves data from HTTP POST requests",
          "Creates posts",
          "Sends emails"
        ],
        correctAnswer: 1,
        explanation: "$_POST is a superglobal array that collects data from HTTP POST form submissions."
      },
      {
        id: 14,
        question: "What is the difference between $_GET and $_POST?",
        options: [
          "No difference",
          "$_GET is visible in URL, $_POST is not; $_POST is more secure",
          "$_POST is faster",
          "$_GET is deprecated"
        ],
        correctAnswer: 1,
        explanation: "$_GET appends data to URL (visible, less secure). $_POST sends data in request body (hidden, more secure)."
      },
      {
        id: 15,
        question: "How do you start a session in PHP?",
        options: [
          "$session->start();",
          "session_start();",
          "start_session();",
          "new Session();"
        ],
        correctAnswer: 1,
        explanation: "session_start() must be called at the beginning of a page to start or resume a session."
      },
      {
        id: 16,
        question: "How do you store data in a session?",
        options: [
          "$session['key'] = 'value';",
          "$_SESSION['key'] = 'value';",
          "session_set('key', 'value');",
          "session('key', 'value');"
        ],
        correctAnswer: 1,
        explanation: "Use the $_SESSION superglobal array to store session variables."
      },
      {
        id: 17,
        question: "How do you destroy a session?",
        options: [
          "session_stop();",
          "session_destroy();",
          "session_end();",
          "destroy_session();"
        ],
        correctAnswer: 1,
        explanation: "session_destroy() destroys all data registered to a session."
      },
      {
        id: 18,
        question: "What is a cookie in PHP?",
        options: [
          "A dessert",
          "Small data file stored on client's browser",
          "A session variable",
          "A database record"
        ],
        correctAnswer: 1,
        explanation: "Cookies are small files stored on the user's computer to remember information about the user."
      },
      {
        id: 19,
        question: "How do you set a cookie in PHP?",
        options: [
          "$_COOKIE['name'] = 'value';",
          "setcookie('name', 'value', time() + 3600);",
          "cookie_set('name', 'value');",
          "create_cookie('name', 'value');"
        ],
        correctAnswer: 1,
        explanation: "setcookie() function is used to set cookies. Must be called before any HTML output."
      },
      {
        id: 20,
        question: "What is the purpose of include() in PHP?",
        options: [
          "Includes comments",
          "Includes and evaluates specified file",
          "Includes database",
          "Includes CSS"
        ],
        correctAnswer: 1,
        explanation: "include() includes and evaluates the specified file. If file not found, warning is issued."
      },
      {
        id: 21,
        question: "What is the difference between include() and require()?",
        options: [
          "No difference",
          "require() produces fatal error if file not found, include() only warning",
          "include() is faster",
          "require() is deprecated"
        ],
        correctAnswer: 1,
        explanation: "require() produces fatal error (E_COMPILE_ERROR) and stops script. include() produces warning (E_WARNING) and continues."
      },
      {
        id: 22,
        question: "What does include_once() do?",
        options: [
          "Same as include()",
          "Includes file only once even if called multiple times",
          "Includes first file only",
          "Includes one line only"
        ],
        correctAnswer: 1,
        explanation: "include_once() ensures the file is included only once, preventing redeclaration errors."
      },
      {
        id: 23,
        question: "How do you define a function in PHP?",
        options: [
          "def function_name() {}",
          "function function_name() {}",
          "func function_name() {}",
          "function: function_name() {}"
        ],
        correctAnswer: 1,
        explanation: "Functions are defined using the function keyword: function myFunction() { ... }"
      },
      {
        id: 24,
        question: "What is the correct syntax for a function with parameters?",
        options: [
          "function sum(a, b) { return a + b; }",
          "function sum($a, $b) { return $a + $b; }",
          "function sum[a, b] { return a + b; }",
          "function sum{a, b} { return a + b; }"
        ],
        correctAnswer: 1,
        explanation: "Parameters must be prefixed with $ in PHP: function sum($a, $b)"
      },
      {
        id: 25,
        question: "What is a class in PHP?",
        options: [
          "A CSS class",
          "Blueprint for creating objects",
          "A function",
          "A variable type"
        ],
        correctAnswer: 1,
        explanation: "A class is a template for creating objects, containing properties and methods."
      },
      {
        id: 26,
        question: "How do you create an object from a class?",
        options: [
          "object = new MyClass();",
          "$object = new MyClass();",
          "MyClass object = new MyClass();",
          "create object from MyClass;"
        ],
        correctAnswer: 1,
        explanation: "Use the new keyword: $object = new MyClass();"
      },
      {
        id: 27,
        question: "What is $this in PHP?",
        options: [
          "Current file",
          "Refers to current object instance",
          "Current function",
          "Current session"
        ],
        correctAnswer: 1,
        explanation: "$this is a pseudo-variable that refers to the current object instance in a class."
      },
      {
        id: 28,
        question: "What is the visibility keyword 'public' in a class?",
        options: [
          "Makes property visible to everyone",
          "Property/method accessible from anywhere",
          "Only for methods",
          "Deprecated"
        ],
        correctAnswer: 1,
        explanation: "public properties and methods can be accessed from anywhere (inside/outside the class)."
      },
      {
        id: 29,
        question: "What does 'private' visibility mean?",
        options: [
          "Private to file",
          "Accessible only within the class itself",
          "Accessible in subclasses",
          "Not accessible anywhere"
        ],
        correctAnswer: 1,
        explanation: "private properties/methods are accessible only within the class that defines them."
      },
      {
        id: 30,
        question: "What does 'protected' visibility mean?",
        options: [
          "Fully protected",
          "Accessible within class and its subclasses",
          "Same as private",
          "Same as public"
        ],
        correctAnswer: 1,
        explanation: "protected properties/methods are accessible within the class and by inheriting classes."
      },
      {
        id: 31,
        question: "What is inheritance in PHP?",
        options: [
          "Getting money",
          "Class can inherit properties and methods from another class",
          "Copying classes",
          "Merging classes"
        ],
        correctAnswer: 1,
        explanation: "Inheritance allows a class to inherit properties and methods from a parent class using extends keyword."
      },
      {
        id: 32,
        question: "How do you create a child class?",
        options: [
          "class Child implements Parent",
          "class Child extends Parent",
          "class Child inherits Parent",
          "class Child from Parent"
        ],
        correctAnswer: 1,
        explanation: "Use the extends keyword: class Child extends Parent { ... }"
      },
      {
        id: 33,
        question: "What is the __construct() method?",
        options: [
          "Destructor",
          "Constructor - automatically called when object is created",
          "Regular method",
          "Static method"
        ],
        correctAnswer: 1,
        explanation: "__construct() is a magic method (constructor) automatically called when creating a new object."
      },
      {
        id: 34,
        question: "What is PDO in PHP?",
        options: [
          "PHP Data Object",
          "PHP Data Objects - database access layer",
          "PHP Database Operator",
          "PHP Development Object"
        ],
        correctAnswer: 1,
        explanation: "PDO (PHP Data Objects) provides a consistent interface for accessing different databases."
      },
      {
        id: 35,
        question: "Why use PDO instead of mysqli?",
        options: [
          "Faster",
          "Supports multiple databases, prepared statements, better security",
          "Easier syntax",
          "mysqli is deprecated"
        ],
        correctAnswer: 1,
        explanation: "PDO supports multiple databases (MySQL, PostgreSQL, etc.) and provides better security features."
      },
      {
        id: 36,
        question: "What are prepared statements?",
        options: [
          "Pre-written queries",
          "Parameterized queries that prevent SQL injection",
          "Faster statements",
          "Statement templates"
        ],
        correctAnswer: 1,
        explanation: "Prepared statements separate SQL logic from data, preventing SQL injection attacks."
      },
      {
        id: 37,
        question: "What is SQL injection?",
        options: [
          "Adding SQL to database",
          "Security vulnerability where malicious SQL is inserted into queries",
          "SQL syntax error",
          "Database backup"
        ],
        correctAnswer: 1,
        explanation: "SQL injection is an attack where malicious SQL code is injected into queries to manipulate the database."
      },
      {
        id: 38,
        question: "How do you prevent SQL injection?",
        options: [
          "Use strong passwords",
          "Use prepared statements and parameterized queries",
          "Encrypt database",
          "Use HTTPS"
        ],
        correctAnswer: 1,
        explanation: "Prepared statements with bound parameters prevent SQL injection by separating SQL from user data."
      },
      {
        id: 39,
        question: "What is XSS (Cross-Site Scripting)?",
        options: [
          "CSS error",
          "Security vulnerability where malicious scripts are injected",
          "JavaScript framework",
          "Database attack"
        ],
        correctAnswer: 1,
        explanation: "XSS allows attackers to inject malicious scripts into web pages viewed by other users."
      },
      {
        id: 40,
        question: "How do you prevent XSS in PHP?",
        options: [
          "Use HTTPS",
          "Use htmlspecialchars() or strip_tags() on user input",
          "Disable JavaScript",
          "Use strong passwords"
        ],
        correctAnswer: 1,
        explanation: "htmlspecialchars() converts special characters to HTML entities, preventing script execution."
      },
      {
        id: 41,
        question: "What does htmlspecialchars() do?",
        options: [
          "Creates HTML",
          "Converts special characters to HTML entities",
          "Validates HTML",
          "Removes HTML"
        ],
        correctAnswer: 1,
        explanation: "htmlspecialchars() converts characters like <, >, & to HTML entities, preventing XSS."
      },
      {
        id: 42,
        question: "What is the difference between die() and exit()?",
        options: [
          "die() is for errors only",
          "No difference, both terminate script execution",
          "exit() is faster",
          "die() is deprecated"
        ],
        correctAnswer: 1,
        explanation: "die() and exit() are equivalent. Both terminate script execution. die() is an alias of exit()."
      },
      {
        id: 43,
        question: "What is error_reporting() used for?",
        options: [
          "Reports errors to admin",
          "Sets which errors are reported/displayed",
          "Logs errors only",
          "Disables errors"
        ],
        correctAnswer: 1,
        explanation: "error_reporting() sets which error types should be reported. E.g., error_reporting(E_ALL)."
      },
      {
        id: 44,
        question: "What is try-catch used for?",
        options: [
          "Testing code",
          "Exception handling",
          "Debugging",
          "Catching errors in CSS"
        ],
        correctAnswer: 1,
        explanation: "try-catch blocks handle exceptions, allowing graceful error handling without script termination."
      },
      {
        id: 45,
        question: "What is the difference between echo and print?",
        options: [
          "No difference",
          "echo can output multiple values, print returns 1 and takes one argument",
          "print is faster",
          "echo is deprecated"
        ],
        correctAnswer: 1,
        explanation: "echo is faster (no return value), can take multiple parameters. print returns 1, takes one argument."
      },
      {
        id: 46,
        question: "What is the purpose of header() function?",
        options: [
          "Creates headers",
          "Sends raw HTTP headers (redirects, content-type, etc.)",
          "Defines page header",
          "Sets page title"
        ],
        correctAnswer: 1,
        explanation: "header() sends raw HTTP headers like redirects: header('Location: page.php');"
      },
      {
        id: 47,
        question: "What is var_dump() used for?",
        options: [
          "Deletes variables",
          "Displays structured information about variables (type and value)",
          "Exports variables",
          "Validates variables"
        ],
        correctAnswer: 1,
        explanation: "var_dump() displays detailed information about variables including type, length, and value."
      },
      {
        id: 48,
        question: "What is the difference between isset() and empty()?",
        options: [
          "No difference",
          "isset() checks if variable exists, empty() checks if it's empty",
          "empty() is deprecated",
          "isset() is for arrays only"
        ],
        correctAnswer: 1,
        explanation: "isset() returns true if variable exists and is not null. empty() returns true if variable is empty (0, '', null, false, etc.)."
      },
      {
        id: 49,
        question: "What is a namespace in PHP?",
        options: [
          "Variable name",
          "Way to encapsulate items and avoid name conflicts",
          "Function name",
          "Class name"
        ],
        correctAnswer: 1,
        explanation: "Namespaces group related classes, interfaces, functions to avoid naming conflicts."
      },
      {
        id: 50,
        question: "What is Composer in PHP?",
        options: [
          "PHP editor",
          "Dependency manager for PHP",
          "PHP framework",
          "Database tool"
        ],
        correctAnswer: 1,
        explanation: "Composer is a dependency management tool for PHP, similar to npm for Node.js."
      }
    ]
  },
  {
    courseId: 'laravel',
    courseName: 'Laravel',
    questions: [
      {
        id: 1,
        question: "What is Laravel?",
        options: [
          "A JavaScript framework",
          "A PHP web application framework",
          "A database",
          "A CSS framework"
        ],
        correctAnswer: 1,
        explanation: "Laravel is a free, open-source PHP web application framework with expressive, elegant syntax."
      },
      {
        id: 2,
        question: "What architectural pattern does Laravel follow?",
        options: [
          "MVP",
          "MVC (Model-View-Controller)",
          "MVVM",
          "MVT"
        ],
        correctAnswer: 1,
        explanation: "Laravel follows the MVC architectural pattern, separating application logic into Models, Views, and Controllers."
      },
      {
        id: 3,
        question: "What is Artisan in Laravel?",
        options: [
          "A plugin",
          "Command-line interface for Laravel",
          "A package manager",
          "A database tool"
        ],
        correctAnswer: 1,
        explanation: "Artisan is Laravel's powerful command-line interface for various tasks like migrations, seeding, and scaffolding."
      },
      {
        id: 4,
        question: "How do you create a new Laravel project?",
        options: [
          "npm create laravel",
          "composer create-project laravel/laravel project-name",
          "php new laravel",
          "laravel new project"
        ],
        correctAnswer: 1,
        explanation: "Use Composer: composer create-project laravel/laravel project-name or Laravel installer: laravel new project-name"
      },
      {
        id: 5,
        question: "What is Eloquent in Laravel?",
        options: [
          "A templating engine",
          "Laravel's Object-Relational Mapper (ORM)",
          "A validation system",
          "A routing system"
        ],
        correctAnswer: 1,
        explanation: "Eloquent is Laravel's elegant ORM that provides a simple ActiveRecord implementation for working with databases."
      },
      {
        id: 6,
        question: "How do you define a route in Laravel?",
        options: [
          "route('/path', function() { ... });",
          "Route::get('/path', function() { ... });",
          "app.get('/path', function() { ... });",
          "define_route('/path', function() { ... });"
        ],
        correctAnswer: 1,
        explanation: "Routes are defined using the Route facade: Route::get('/path', [Controller::class, 'method']);"
      },
      {
        id: 7,
        question: "What is the purpose of migrations in Laravel?",
        options: [
          "Moving files",
          "Version control for database schema",
          "Data backup",
          "Code deployment"
        ],
        correctAnswer: 1,
        explanation: "Migrations are version control for your database, allowing you to modify and share database schema."
      },
      {
        id: 8,
        question: "How do you run migrations?",
        options: [
          "php migrate",
          "php artisan migrate",
          "composer migrate",
          "laravel migrate"
        ],
        correctAnswer: 1,
        explanation: "Run migrations using the Artisan command: php artisan migrate"
      },
      {
        id: 9,
        question: "What is Blade in Laravel?",
        options: [
          "A database tool",
          "Laravel's templating engine",
          "A testing framework",
          "A CLI tool"
        ],
        correctAnswer: 1,
        explanation: "Blade is Laravel's powerful templating engine with simple yet powerful features like inheritance and sections."
      },
      {
        id: 10,
        question: "What is the Blade directive for displaying a variable?",
        options: [
          "<?= $variable ?>",
          "{{ $variable }}",
          "{!! $variable !!}",
          "<%= $variable %>"
        ],
        correctAnswer: 1,
        explanation: "{{ $variable }} displays escaped content. {!! $variable !!} displays unescaped content."
      },
      {
        id: 11,
        question: "What is middleware in Laravel?",
        options: [
          "Middle layer of database",
          "Filter for HTTP requests entering application",
          "A routing system",
          "A validation layer"
        ],
        correctAnswer: 1,
        explanation: "Middleware provides a mechanism for filtering HTTP requests, useful for authentication, CORS, logging, etc."
      },
      {
        id: 12,
        question: "How do you create a middleware?",
        options: [
          "php create middleware",
          "php artisan make:middleware MiddlewareName",
          "composer make middleware",
          "laravel new middleware"
        ],
        correctAnswer: 1,
        explanation: "Use Artisan: php artisan make:middleware MiddlewareName"
      },
      {
        id: 13,
        question: "What are route parameters in Laravel?",
        options: [
          "Query strings only",
          "Dynamic segments in route URIs",
          "POST data",
          "Headers"
        ],
        correctAnswer: 1,
        explanation: "Route parameters capture values from URI: Route::get('/user/{id}', function($id) { ... });"
      },
      {
        id: 14,
        question: "What does this do? Route::get('/user/{id}', [UserController::class, 'show']);",
        options: [
          "Creates a user",
          "Defines GET route with parameter that calls show method",
          "Updates user",
          "Deletes user"
        ],
        correctAnswer: 1,
        explanation: "This defines a GET route with an {id} parameter that calls the show method on UserController."
      },
      {
        id: 15,
        question: "What is the purpose of controllers in Laravel?",
        options: [
          "Control database",
          "Organize request handling logic into classes",
          "Control views",
          "Control routes"
        ],
        correctAnswer: 1,
        explanation: "Controllers group related request handling logic into a single class, keeping routes file clean."
      },
      {
        id: 16,
        question: "How do you create a controller?",
        options: [
          "php new controller",
          "php artisan make:controller ControllerName",
          "composer create controller",
          "laravel controller new"
        ],
        correctAnswer: 1,
        explanation: "Use Artisan: php artisan make:controller ControllerName. Add --resource for resource controller."
      },
      {
        id: 17,
        question: "What is a resource controller?",
        options: [
          "Controller for resources only",
          "Controller with CRUD methods (index, create, store, show, edit, update, destroy)",
          "Controller for APIs",
          "Controller for files"
        ],
        correctAnswer: 1,
        explanation: "Resource controllers provide CRUD methods: index, create, store, show, edit, update, destroy."
      },
      {
        id: 18,
        question: "What is the difference between get() and first() in Eloquent?",
        options: [
          "No difference",
          "get() returns collection, first() returns single model instance",
          "first() is deprecated",
          "get() is faster"
        ],
        correctAnswer: 1,
        explanation: "get() returns a collection of all matching results. first() returns the first matching model or null."
      },
      {
        id: 19,
        question: "What does User::find($id) do?",
        options: [
          "Searches by name",
          "Retrieves model by primary key",
          "Finds all users",
          "Searches database"
        ],
        correctAnswer: 1,
        explanation: "find() retrieves a model by its primary key. Returns null if not found."
      },
      {
        id: 20,
        question: "What is the difference between find() and findOrFail()?",
        options: [
          "No difference",
          "findOrFail() throws 404 exception if not found",
          "find() is deprecated",
          "findOrFail() is faster"
        ],
        correctAnswer: 1,
        explanation: "find() returns null if not found. findOrFail() throws a 404 ModelNotFoundException."
      },
      {
        id: 21,
        question: "How do you create a new record with Eloquent?",
        options: [
          "new User(['name' => 'John'])->save();",
          "$user = new User(); $user->name = 'John'; $user->save();",
          "User::insert(['name' => 'John']);",
          "User::add(['name' => 'John']);"
        ],
        correctAnswer: 1,
        explanation: "Create and save: $user = new User(); $user->name = 'John'; $user->save(); or use create()."
      },
      {
        id: 22,
        question: "What is mass assignment in Laravel?",
        options: [
          "Assigning to multiple users",
          "Creating/updating models with array of attributes",
          "Bulk operations",
          "Array operations"
        ],
        correctAnswer: 1,
        explanation: "Mass assignment allows creating models by passing array: User::create(['name' => 'John', 'email' => 'john@example.com']);"
      },
      {
        id: 23,
        question: "What are $fillable and $guarded in Eloquent models?",
        options: [
          "Database fields",
          "$fillable: mass assignable attributes, $guarded: protected attributes",
          "Validation rules",
          "Required fields"
        ],
        correctAnswer: 1,
        explanation: "$fillable defines which attributes can be mass assigned. $guarded defines which cannot be mass assigned."
      },
      {
        id: 24,
        question: "What is the purpose of seeders?",
        options: [
          "Planting seeds",
          "Populating database with test/dummy data",
          "Seeding random numbers",
          "Database backup"
        ],
        correctAnswer: 1,
        explanation: "Seeders populate database with test or initial data for development and testing."
      },
      {
        id: 25,
        question: "How do you run seeders?",
        options: [
          "php seed",
          "php artisan db:seed",
          "composer seed",
          "laravel seed"
        ],
        correctAnswer: 1,
        explanation: "Run seeders with: php artisan db:seed or php artisan db:seed --class=UserSeeder"
      },
      {
        id: 26,
        question: "What is validation in Laravel?",
        options: [
          "Code validation",
          "Validating incoming request data against rules",
          "Database validation",
          "User validation"
        ],
        correctAnswer: 1,
        explanation: "Laravel provides validation for incoming request data using rules: $request->validate(['email' => 'required|email']);"
      },
      {
        id: 27,
        question: "What does this validation rule mean? 'email' => 'required|email|unique:users'",
        options: [
          "Email not required",
          "Email required, must be valid format, must be unique in users table",
          "Email must be unique only",
          "Email optional but must be valid"
        ],
        correctAnswer: 1,
        explanation: "This rule requires the email field, validates email format, and checks uniqueness in users table."
      },
      {
        id: 28,
        question: "What is CSRF protection in Laravel?",
        options: [
          "Database protection",
          "Protection against Cross-Site Request Forgery attacks",
          "Password protection",
          "File protection"
        ],
        correctAnswer: 1,
        explanation: "CSRF protection prevents unauthorized commands from being transmitted from a user that the web application trusts."
      },
      {
        id: 29,
        question: "How do you include CSRF token in a form?",
        options: [
          "<csrf />",
          "@csrf",
          "<input type='csrf'>",
          "{{ csrf }}"
        ],
        correctAnswer: 1,
        explanation: "Use @csrf Blade directive in forms, which generates a hidden CSRF token field."
      },
      {
        id: 30,
        question: "What is the purpose of .env file?",
        options: [
          "Environment setup",
          "Store environment-specific configuration and secrets",
          "Environment variables only",
          "Development settings"
        ],
        correctAnswer: 1,
        explanation: ".env file stores environment-specific configuration like database credentials, API keys, app settings."
      },
      {
        id: 31,
        question: "How do you access .env variables in Laravel?",
        options: [
          "env('KEY')",
          "env('KEY') or config('file.key')",
          "$_ENV['KEY']",
          "getenv('KEY')"
        ],
        correctAnswer: 1,
        explanation: "Use env('KEY') helper or better: cache config and use config('app.name')."
      },
      {
        id: 32,
        question: "What is the purpose of Service Providers?",
        options: [
          "Provide services",
          "Bootstrap and register application services",
          "Service management",
          "API services"
        ],
        correctAnswer: 1,
        explanation: "Service Providers are central place to bootstrap: register bindings, event listeners, middleware, routes."
      },
      {
        id: 33,
        question: "What is the Service Container?",
        options: [
          "A storage container",
          "Powerful tool for managing class dependencies and dependency injection",
          "A service manager",
          "A database container"
        ],
        correctAnswer: 1,
        explanation: "Service Container is a powerful dependency injection container for managing class dependencies."
      },
      {
        id: 34,
        question: "What are Facades in Laravel?",
        options: [
          "Front-end designs",
          "Static interface to classes in service container",
          "Building facades",
          "UI components"
        ],
        correctAnswer: 1,
        explanation: "Facades provide a static interface to classes in the service container (e.g., Route::, DB::, Cache::)."
      },
      {
        id: 35,
        question: "What is the difference between Route::get() and Route::post()?",
        options: [
          "No difference",
          "get() handles GET requests, post() handles POST requests",
          "post() is faster",
          "get() is deprecated"
        ],
        correctAnswer: 1,
        explanation: "Route::get() handles HTTP GET requests. Route::post() handles HTTP POST requests."
      },
      {
        id: 36,
        question: "What is Request object in Laravel?",
        options: [
          "A request form",
          "Object containing HTTP request information",
          "Database request",
          "API request only"
        ],
        correctAnswer: 1,
        explanation: "Request object provides access to HTTP request data: input, files, cookies, headers, etc."
      },
      {
        id: 37,
        question: "How do you get input from request?",
        options: [
          "$request->input('name') or $request->name",
          "$request->input('name') or $request->name or request('name')",
          "$request->get('name')",
          "$request['name']"
        ],
        correctAnswer: 1,
        explanation: "Access input via: $request->input('name'), $request->name, or request('name') helper."
      },
      {
        id: 38,
        question: "What is response() helper used for?",
        options: [
          "Responding to emails",
          "Creating HTTP responses with status codes, headers, cookies",
          "Response validation",
          "Response logging"
        ],
        correctAnswer: 1,
        explanation: "response() helper creates HTTP responses: response()->json($data), response()->view(), with status/headers."
      },
      {
        id: 39,
        question: "What is the purpose of sessions in Laravel?",
        options: [
          "User meetings",
          "Store information about user across multiple requests",
          "Database sessions",
          "Training sessions"
        ],
        correctAnswer: 1,
        explanation: "Sessions store information about the user across multiple requests, maintaining state."
      },
      {
        id: 40,
        question: "How do you store data in session?",
        options: [
          "session()->put('key', 'value')",
          "session()->put('key', 'value') or session(['key' => 'value'])",
          "$_SESSION['key'] = 'value'",
          "session_set('key', 'value')"
        ],
        correctAnswer: 1,
        explanation: "Store session data: session()->put('key', 'value') or session(['key' => 'value'])."
      },
      {
        id: 41,
        question: "What is Laravel's authentication scaffolding?",
        options: [
          "Building scaffolds",
          "Pre-built authentication views, routes, and controllers",
          "User management only",
          "Security system"
        ],
        correctAnswer: 1,
        explanation: "Laravel provides authentication scaffolding via Laravel Breeze, Jetstream, or UI package."
      },
      {
        id: 42,
        question: "What is the purpose of Auth facade?",
        options: [
          "Authorization only",
          "Managing authentication: login, logout, user retrieval",
          "User management",
          "Password management"
        ],
        correctAnswer: 1,
        explanation: "Auth facade provides methods for authentication: Auth::login(), Auth::user(), Auth::logout(), etc."
      },
      {
        id: 43,
        question: "How do you get the authenticated user?",
        options: [
          "auth()->user() or Auth::user()",
          "auth()->user() or Auth::user() or request()->user()",
          "getUser()",
          "$user->auth()"
        ],
        correctAnswer: 1,
        explanation: "Get authenticated user: auth()->user(), Auth::user(), or request()->user()."
      },
      {
        id: 44,
        question: "What are Eloquent relationships?",
        options: [
          "User relationships",
          "Define relationships between database tables (hasOne, hasMany, belongsTo, etc.)",
          "Model connections",
          "Database links"
        ],
        correctAnswer: 1,
        explanation: "Eloquent relationships define table relationships: hasOne, hasMany, belongsTo, belongsToMany, etc."
      },
      {
        id: 45,
        question: "What does hasMany() relationship mean?",
        options: [
          "Has multiple databases",
          "One-to-many relationship (one model has multiple related models)",
          "Has multiple methods",
          "Has multiple users"
        ],
        correctAnswer: 1,
        explanation: "hasMany() defines one-to-many: e.g., User hasMany Posts (one user has multiple posts)."
      },
      {
        id: 46,
        question: "What is Laravel Mix?",
        options: [
          "Mixing code",
          "Asset compilation tool (wrapper around Webpack)",
          "Database mixer",
          "Testing tool"
        ],
        correctAnswer: 1,
        explanation: "Laravel Mix is an elegant wrapper around Webpack for compiling CSS and JavaScript assets."
      },
      {
        id: 47,
        question: "What is the purpose of queues in Laravel?",
        options: [
          "Queueing users",
          "Defer time-consuming tasks for later execution",
          "Database queues",
          "Request queues"
        ],
        correctAnswer: 1,
        explanation: "Queues defer time-consuming tasks (emails, API calls) to background, speeding up web requests."
      },
      {
        id: 48,
        question: "What is Laravel Tinker?",
        options: [
          "A toy",
          "REPL (interactive shell) for interacting with Laravel application",
          "A testing tool",
          "A debugger"
        ],
        correctAnswer: 1,
        explanation: "Tinker is a powerful REPL for testing code, querying database, and interacting with application."
      },
      {
        id: 49,
        question: "What is API resource in Laravel?",
        options: [
          "API documentation",
          "Transformation layer between Eloquent models and JSON responses",
          "API routes only",
          "API testing"
        ],
        correctAnswer: 1,
        explanation: "API resources transform models/collections into JSON, controlling which attributes are returned in API."
      },
      {
        id: 50,
        question: "What is the purpose of Laravel Sanctum?",
        options: [
          "Security only",
          "Lightweight authentication for SPAs and mobile APIs",
          "Database security",
          "API documentation"
        ],
        correctAnswer: 1,
        explanation: "Sanctum provides simple authentication for SPAs, mobile apps, and token-based APIs."
      }
    ]
  },
  {
    courseId: 'bootstrap',
    courseName: 'Bootstrap',
    questions: [
      {
        id: 1,
        question: "What is Bootstrap?",
        options: [
          "A JavaScript library",
          "Responsive CSS framework",
          "A database",
          "A web server"
        ],
        correctAnswer: 1,
        explanation: "Bootstrap is a popular CSS framework for developing responsive and mobile-first websites."
      },
      {
        id: 2,
        question: "Which company originally developed Bootstrap?",
        options: [
          "Google",
          "Twitter",
          "Facebook",
          "Microsoft"
        ],
        correctAnswer: 1,
        explanation: "Bootstrap was originally developed by Twitter as Twitter Blueprint."
      },
      {
        id: 3,
        question: "How many columns does Bootstrap's grid system use?",
        options: [
          "10 columns",
          "12 columns",
          "16 columns",
          "8 columns"
        ],
        correctAnswer: 1,
        explanation: "Bootstrap uses a 12-column grid system for creating responsive layouts."
      },
      {
        id: 4,
        question: "What is the purpose of the .container class?",
        options: [
          "Stores data",
          "Creates fixed-width responsive container",
          "Hides content",
          "Styles buttons"
        ],
        correctAnswer: 1,
        explanation: "The .container class provides a fixed-width responsive container with margins."
      },
      {
        id: 5,
        question: "What is the difference between .container and .container-fluid?",
        options: [
          "No difference",
          ".container is fixed-width, .container-fluid spans full width",
          ".container-fluid is deprecated",
          ".container is faster"
        ],
        correctAnswer: 1,
        explanation: ".container has max-width at each breakpoint, .container-fluid spans 100% width at all breakpoints."
      },
      {
        id: 6,
        question: "What does the .row class do?",
        options: [
          "Creates a row in table",
          "Creates horizontal group of columns with negative margins",
          "Aligns items in row",
          "Creates a border"
        ],
        correctAnswer: 1,
        explanation: ".row creates a wrapper for columns, using negative margins to align column content."
      },
      {
        id: 7,
        question: "What does col-md-6 mean?",
        options: [
          "6 pixels wide on medium screens",
          "6 columns (50% width) on medium screens and larger",
          "6 columns on mobile devices",
          "Medium size, 6px padding"
        ],
        correctAnswer: 1,
        explanation: "col-md-6 means the element takes 6 out of 12 columns (50% width) on medium screens (≥768px) and up."
      },
      {
        id: 8,
        question: "What are Bootstrap's breakpoint sizes?",
        options: [
          "sm, md, lg only",
          "xs, sm, md, lg, xl, xxl",
          "mobile, tablet, desktop",
          "small, medium, large"
        ],
        correctAnswer: 1,
        explanation: "Bootstrap 5 breakpoints: xs (<576px), sm (≥576px), md (≥768px), lg (≥992px), xl (≥1200px), xxl (≥1400px)."
      },
      {
        id: 9,
        question: "What does this do? <div class='col-sm-12 col-md-6 col-lg-4'>",
        options: [
          "Fixed width",
          "Full width on small, half on medium, third on large screens",
          "Always 4 columns",
          "Responsive height"
        ],
        correctAnswer: 1,
        explanation: "This creates responsive column: 12 cols (100%) on small, 6 cols (50%) on medium, 4 cols (33.33%) on large."
      },
      {
        id: 10,
        question: "What is the purpose of Bootstrap utility classes?",
        options: [
          "Database utilities",
          "Quick styling for margins, padding, colors, display, etc.",
          "JavaScript utilities",
          "Form utilities only"
        ],
        correctAnswer: 1,
        explanation: "Utility classes provide quick styling without custom CSS: m-3 (margin), p-2 (padding), text-center, d-flex, etc."
      },
      {
        id: 11,
        question: "What does the class 'm-3' do?",
        options: [
          "3px margin",
          "Adds margin of 1rem (16px) on all sides",
          "3% margin",
          "3 columns margin"
        ],
        correctAnswer: 1,
        explanation: "m-3 adds margin of 1rem (16px). Bootstrap spacing scale: 0=0, 1=0.25rem, 2=0.5rem, 3=1rem, 4=1.5rem, 5=3rem."
      },
      {
        id: 12,
        question: "What does 'mt-4' mean?",
        options: [
          "Margin top 4px",
          "Margin top 1.5rem (24px)",
          "Medium text 4",
          "Mobile top 4"
        ],
        correctAnswer: 1,
        explanation: "mt-4 adds margin-top of 1.5rem (24px). mt = margin-top, 4 = 1.5rem spacing."
      },
      {
        id: 13,
        question: "What does the class 'd-flex' do?",
        options: [
          "Deletes flex",
          "Sets display: flex",
          "Defines flex",
          "Double flex"
        ],
        correctAnswer: 1,
        explanation: "d-flex sets display: flex, enabling flexbox layout on the element."
      },
      {
        id: 14,
        question: "What does 'justify-content-center' do?",
        options: [
          "Centers text",
          "Centers flex items horizontally along main axis",
          "Justifies text",
          "Centers page"
        ],
        correctAnswer: 1,
        explanation: "justify-content-center centers flex items horizontally (along the main axis) in a flex container."
      },
      {
        id: 15,
        question: "What does 'align-items-center' do?",
        options: [
          "Aligns text",
          "Centers flex items vertically along cross axis",
          "Aligns horizontally",
          "Aligns paragraphs"
        ],
        correctAnswer: 1,
        explanation: "align-items-center centers flex items vertically (along the cross axis) in a flex container."
      },
      {
        id: 16,
        question: "How do you create a primary button in Bootstrap?",
        options: [
          "<button class='primary'>",
          "<button class='btn btn-primary'>",
          "<button type='primary'>",
          "<btn-primary>"
        ],
        correctAnswer: 1,
        explanation: "Use btn and btn-primary classes: <button class='btn btn-primary'>Click</button>"
      },
      {
        id: 17,
        question: "What are Bootstrap button color variants?",
        options: [
          "Only primary and secondary",
          "primary, secondary, success, danger, warning, info, light, dark",
          "red, blue, green only",
          "Only primary"
        ],
        correctAnswer: 1,
        explanation: "Bootstrap provides 8 color variants: primary, secondary, success, danger, warning, info, light, dark."
      },
      {
        id: 18,
        question: "What does 'btn-outline-primary' create?",
        options: [
          "Solid button",
          "Outlined button with transparent background",
          "3D button",
          "Shadow button"
        ],
        correctAnswer: 1,
        explanation: "btn-outline-primary creates an outlined button with transparent background and colored border."
      },
      {
        id: 19,
        question: "How do you create a large button?",
        options: [
          "class='btn-large'",
          "class='btn btn-primary btn-lg'",
          "class='big-btn'",
          "size='large'"
        ],
        correctAnswer: 1,
        explanation: "Use btn-lg for large buttons, btn-sm for small: <button class='btn btn-primary btn-lg'>"
      },
      {
        id: 20,
        question: "What is a Bootstrap card component?",
        options: [
          "Playing card",
          "Flexible content container with header, body, footer",
          "Credit card form",
          "Business card"
        ],
        correctAnswer: 1,
        explanation: "Cards are flexible containers for content, with optional header, body, footer, and images."
      },
      {
        id: 21,
        question: "What classes create a basic card?",
        options: [
          "card-container, card-content",
          "card, card-body",
          "box, box-content",
          "container, content"
        ],
        correctAnswer: 1,
        explanation: "Basic card structure: <div class='card'><div class='card-body'>Content</div></div>"
      },
      {
        id: 22,
        question: "What is the Bootstrap navbar component?",
        options: [
          "Navigation bar only",
          "Responsive navigation header with brand, links, and toggles",
          "Sidebar navigation",
          "Footer navigation"
        ],
        correctAnswer: 1,
        explanation: "Navbar is a responsive navigation header supporting branding, navigation links, and collapse functionality."
      },
      {
        id: 23,
        question: "What does 'navbar-expand-lg' do?",
        options: [
          "Expands to large size",
          "Navbar is horizontal on large screens, collapses on smaller",
          "Makes navbar larger",
          "Expands content"
        ],
        correctAnswer: 1,
        explanation: "navbar-expand-lg makes navbar horizontal on large screens (≥992px), collapses with toggle on smaller screens."
      },
      {
        id: 24,
        question: "What is a Bootstrap modal?",
        options: [
          "A data model",
          "Dialog/popup overlay that appears on top of page",
          "A layout mode",
          "A form type"
        ],
        correctAnswer: 1,
        explanation: "Modal is a dialog box/popup that displays on top of the page, typically for user interaction."
      },
      {
        id: 25,
        question: "How do you trigger a modal?",
        options: [
          "Click only",
          "Use data-bs-toggle='modal' and data-bs-target='#modalId'",
          "Automatic on page load",
          "JavaScript only"
        ],
        correctAnswer: 1,
        explanation: "Trigger modal with data attributes: <button data-bs-toggle='modal' data-bs-target='#myModal'>"
      },
      {
        id: 26,
        question: "What is Bootstrap's form-control class?",
        options: [
          "Controls forms",
          "Styles form inputs with consistent appearance",
          "Form validation",
          "Form submission"
        ],
        correctAnswer: 1,
        explanation: "form-control class styles text inputs, selects, and textareas with consistent Bootstrap styling."
      },
      {
        id: 27,
        question: "What does the 'form-group' class do (Bootstrap 4)?",
        options: [
          "Groups users",
          "Groups form label and input with proper spacing",
          "Groups forms",
          "Creates fieldset"
        ],
        correctAnswer: 1,
        explanation: "In Bootstrap 4, form-group groups labels and inputs with margin. Bootstrap 5 uses mb-3 instead."
      },
      {
        id: 28,
        question: "What is the purpose of Bootstrap alerts?",
        options: [
          "JavaScript alerts",
          "Provide contextual feedback messages (success, warning, danger)",
          "Alarm system",
          "Error logging"
        ],
        correctAnswer: 1,
        explanation: "Alerts provide feedback messages with contextual colors: alert-success, alert-warning, alert-danger, etc."
      },
      {
        id: 29,
        question: "How do you create a dismissible alert?",
        options: [
          "Click outside",
          "Add alert-dismissible class and close button with data-bs-dismiss",
          "Automatic after 5 seconds",
          "Use JavaScript only"
        ],
        correctAnswer: 1,
        explanation: "Add alert-dismissible class and button with data-bs-dismiss='alert' to make alert closeable."
      },
      {
        id: 30,
        question: "What is Bootstrap's badge component?",
        options: [
          "Achievement badges",
          "Small count and labeling component",
          "User badges",
          "Security badges"
        ],
        correctAnswer: 1,
        explanation: "Badges are small components for counts and labels: <span class='badge bg-primary'>5</span>"
      },
      {
        id: 31,
        question: "What does 'text-center' class do?",
        options: [
          "Centers vertically",
          "Centers text horizontally",
          "Creates center column",
          "Centers page"
        ],
        correctAnswer: 1,
        explanation: "text-center applies text-align: center, centering text horizontally within its container."
      },
      {
        id: 32,
        question: "What are Bootstrap's text color utility classes?",
        options: [
          "Only text-red, text-blue",
          "text-primary, text-secondary, text-success, text-danger, etc.",
          "Only text-black, text-white",
          "color-red, color-blue"
        ],
        correctAnswer: 1,
        explanation: "Bootstrap provides text-{color} classes: text-primary, text-secondary, text-success, text-danger, text-warning, etc."
      },
      {
        id: 33,
        question: "What does 'bg-primary' do?",
        options: [
          "Sets foreground color",
          "Sets background color to primary theme color",
          "Sets border color",
          "Sets text color"
        ],
        correctAnswer: 1,
        explanation: "bg-primary sets background-color to the primary theme color (default: blue)."
      },
      {
        id: 34,
        question: "What is Bootstrap's breadcrumb component?",
        options: [
          "Food crumbs",
          "Navigation aid showing current page's location",
          "Broken links",
          "Cookie consent"
        ],
        correctAnswer: 1,
        explanation: "Breadcrumb is a navigation component showing the current page's location in site hierarchy."
      },
      {
        id: 35,
        question: "What is Bootstrap's carousel component?",
        options: [
          "Merry-go-round",
          "Slideshow component for cycling through images/content",
          "Circular menu",
          "Loading spinner"
        ],
        correctAnswer: 1,
        explanation: "Carousel is a slideshow component for cycling through elements like images with previous/next controls."
      },
      {
        id: 36,
        question: "What does 'img-fluid' class do?",
        options: [
          "Makes image move",
          "Makes image responsive (max-width: 100%, height: auto)",
          "Adds water effect",
          "Makes image circular"
        ],
        correctAnswer: 1,
        explanation: "img-fluid makes images responsive by setting max-width: 100% and height: auto."
      },
      {
        id: 37,
        question: "What does 'rounded' class do?",
        options: [
          "Makes element round",
          "Adds border-radius for rounded corners",
          "Creates circle",
          "Rounds numbers"
        ],
        correctAnswer: 1,
        explanation: "rounded class adds border-radius to create rounded corners. rounded-circle creates a circle."
      },
      {
        id: 38,
        question: "What is Bootstrap's table styling?",
        options: [
          "Only borders",
          "Various table styles: striped, bordered, hover, responsive",
          "Table creation",
          "Data tables only"
        ],
        correctAnswer: 1,
        explanation: "Bootstrap provides table classes: table, table-striped, table-bordered, table-hover, table-responsive."
      },
      {
        id: 39,
        question: "What does 'table-striped' do?",
        options: [
          "Removes rows",
          "Adds zebra-striping (alternating row colors)",
          "Adds vertical lines",
          "Makes table narrow"
        ],
        correctAnswer: 1,
        explanation: "table-striped adds zebra-striping to table rows (alternating background colors)."
      },
      {
        id: 40,
        question: "What is Bootstrap's dropdown component?",
        options: [
          "Falling animation",
          "Toggleable menu for displaying links",
          "Select input only",
          "Collapsible content"
        ],
        correctAnswer: 1,
        explanation: "Dropdown is a toggleable, contextual overlay for displaying lists of links or actions."
      },
      {
        id: 41,
        question: "What does 'd-none' class do?",
        options: [
          "Displays nothing",
          "Sets display: none (hides element)",
          "Deletes element",
          "Disables element"
        ],
        correctAnswer: 1,
        explanation: "d-none sets display: none, hiding the element. Responsive variants: d-sm-none, d-md-none, etc."
      },
      {
        id: 42,
        question: "What does 'd-block' do?",
        options: [
          "Blocks access",
          "Sets display: block",
          "Creates block",
          "Disables blocking"
        ],
        correctAnswer: 1,
        explanation: "d-block sets display: block. Other options: d-inline, d-inline-block, d-flex, d-grid."
      },
      {
        id: 43,
        question: "What is Bootstrap's collapse component?",
        options: [
          "Breaks layout",
          "Toggles visibility of content",
          "Compresses files",
          "Minimizes windows"
        ],
        correctAnswer: 1,
        explanation: "Collapse component toggles visibility of content, useful for accordions and expandable sections."
      },
      {
        id: 44,
        question: "What is Bootstrap's accordion?",
        options: [
          "Musical instrument",
          "Collapsible panels where only one is open at a time",
          "Expanding menu",
          "Folding layout"
        ],
        correctAnswer: 1,
        explanation: "Accordion is a group of collapsible panels where typically only one panel is open at a time."
      },
      {
        id: 45,
        question: "What does 'w-100' class do?",
        options: [
          "100px width",
          "Sets width to 100%",
          "Width of 100 columns",
          "Window 100"
        ],
        correctAnswer: 1,
        explanation: "w-100 sets width: 100%. Other options: w-25 (25%), w-50 (50%), w-75 (75%), w-auto."
      },
      {
        id: 46,
        question: "What does 'h-100' class do?",
        options: [
          "100px height",
          "Sets height to 100%",
          "Header 100",
          "HTML 100"
        ],
        correctAnswer: 1,
        explanation: "h-100 sets height: 100%. Other options: h-25, h-50, h-75, h-auto."
      },
      {
        id: 47,
        question: "What is Bootstrap's offset classes?",
        options: [
          "Time offset",
          "Moves columns to the right by adding left margin",
          "Top offset",
          "Page offset"
        ],
        correctAnswer: 1,
        explanation: "Offset classes (e.g., offset-md-3) move columns to the right by adding left margin."
      },
      {
        id: 48,
        question: "What does 'position-relative' do?",
        options: [
          "Relative to parent",
          "Sets CSS position: relative",
          "Makes position responsive",
          "Positions relatively"
        ],
        correctAnswer: 1,
        explanation: "position-relative sets position: relative. Other options: position-absolute, position-fixed, position-sticky."
      },
      {
        id: 49,
        question: "What is Bootstrap's spinner component?",
        options: [
          "Spinning wheel",
          "Loading indicator animation",
          "Number spinner",
          "Rotating carousel"
        ],
        correctAnswer: 1,
        explanation: "Spinners are loading indicators using CSS animations: spinner-border, spinner-grow."
      },
      {
        id: 50,
        question: "What is the difference between Bootstrap 4 and Bootstrap 5?",
        options: [
          "No difference",
          "Bootstrap 5: jQuery removed, improved grid, custom CSS properties, updated forms",
          "Only version number",
          "Bootstrap 4 is faster"
        ],
        correctAnswer: 1,
        explanation: "Bootstrap 5 removed jQuery dependency, improved grid system, added CSS custom properties, updated form controls, and more."
      }
    ]
  },
  {
    courseId: 'tailwind',
    courseName: 'Tailwind CSS',
    questions: [
      {
        id: 1,
        question: "What is Tailwind CSS?",
        options: [
          "A JavaScript framework",
          "A utility-first CSS framework",
          "A preprocessor",
          "A design tool"
        ],
        correctAnswer: 1,
        explanation: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs."
      },
      {
        id: 2,
        question: "What does 'utility-first' mean in Tailwind CSS?",
        options: [
          "Utilities come first",
          "Build designs using small, single-purpose utility classes",
          "Only utility classes",
          "First framework for utilities"
        ],
        correctAnswer: 1,
        explanation: "Utility-first means composing designs by applying pre-existing utility classes directly in HTML instead of writing custom CSS."
      },
      {
        id: 3,
        question: "What does the class 'flex' do in Tailwind?",
        options: [
          "Makes element flexible",
          "Sets display: flex",
          "Creates flexbox layout only",
          "Flexible width"
        ],
        correctAnswer: 1,
        explanation: "The 'flex' class applies display: flex to create a flexbox container."
      },
      {
        id: 4,
        question: "What does 'justify-center' do?",
        options: [
          "Centers text",
          "Centers flex items horizontally (justify-content: center)",
          "Justifies text",
          "Centers page"
        ],
        correctAnswer: 1,
        explanation: "justify-center applies justify-content: center, centering flex items along the main axis."
      },
      {
        id: 5,
        question: "What does 'items-center' do?",
        options: [
          "Centers all items",
          "Centers flex items vertically (align-items: center)",
          "Centers horizontally",
          "Item alignment"
        ],
        correctAnswer: 1,
        explanation: "items-center applies align-items: center, centering flex items along the cross axis."
      },
      {
        id: 6,
        question: "What does 'p-4' mean in Tailwind?",
        options: [
          "Padding 4px",
          "Padding of 1rem (16px) on all sides",
          "Paragraph 4",
          "Page 4"
        ],
        correctAnswer: 1,
        explanation: "p-4 adds padding of 1rem (16px) on all sides. Tailwind scale: 1=0.25rem, 2=0.5rem, 3=0.75rem, 4=1rem."
      },
      {
        id: 7,
        question: "What does 'm-4' mean?",
        options: [
          "Margin 4px",
          "Margin of 1rem (16px) on all sides",
          "Medium 4",
          "Mobile 4"
        ],
        correctAnswer: 1,
        explanation: "m-4 adds margin of 1rem (16px) on all sides. Same spacing scale as padding."
      },
      {
        id: 8,
        question: "What does 'mt-8' mean?",
        options: [
          "Margin top 8px",
          "Margin top 2rem (32px)",
          "Medium text 8",
          "Mobile top 8"
        ],
        correctAnswer: 1,
        explanation: "mt-8 adds margin-top of 2rem (32px). mt = margin-top, 8 = 2rem."
      },
      {
        id: 9,
        question: "What is the difference between 'px-4' and 'py-4'?",
        options: [
          "No difference",
          "px-4 adds horizontal padding, py-4 adds vertical padding",
          "px-4 is for pixels",
          "py-4 is for Python"
        ],
        correctAnswer: 1,
        explanation: "px-4 adds padding-left and padding-right. py-4 adds padding-top and padding-bottom."
      },
      {
        id: 10,
        question: "What does 'text-center' do?",
        options: [
          "Centers element",
          "Centers text horizontally (text-align: center)",
          "Centers vertically",
          "Creates center text"
        ],
        correctAnswer: 1,
        explanation: "text-center applies text-align: center, centering text horizontally."
      },
      {
        id: 11,
        question: "What does 'text-xl' mean?",
        options: [
          "Extra large text",
          "Font size 1.25rem (20px)",
          "Excel text",
          "XML text"
        ],
        correctAnswer: 1,
        explanation: "text-xl sets font-size to 1.25rem (20px). Sizes: text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, etc."
      },
      {
        id: 12,
        question: "What does 'font-bold' do?",
        options: [
          "Makes font larger",
          "Sets font-weight: 700",
          "Bold styling",
          "Font type bold"
        ],
        correctAnswer: 1,
        explanation: "font-bold applies font-weight: 700, making text bold."
      },
      {
        id: 13,
        question: "What does 'text-blue-500' do?",
        options: [
          "Blue text, shade 500",
          "Sets text color to medium blue (color: #3b82f6)",
          "500px blue text",
          "Blue version 500"
        ],
        correctAnswer: 1,
        explanation: "text-blue-500 sets text color to medium blue. Shades range from 50 (lightest) to 950 (darkest)."
      },
      {
        id: 14,
        question: "What does 'bg-red-500' do?",
        options: [
          "Red border",
          "Sets background color to medium red",
          "Big red 500",
          "Background gradient"
        ],
        correctAnswer: 1,
        explanation: "bg-red-500 sets background-color to medium red. Same shade system as text colors."
      },
      {
        id: 15,
        question: "What does 'w-full' mean?",
        options: [
          "Full window",
          "Width: 100%",
          "Width full screen",
          "Wide full"
        ],
        correctAnswer: 1,
        explanation: "w-full sets width: 100%. Also available: w-1/2 (50%), w-1/3 (33.33%), w-1/4 (25%), etc."
      },
      {
        id: 16,
        question: "What does 'h-screen' mean?",
        options: [
          "Screen height",
          "Height: 100vh (full viewport height)",
          "Header screen",
          "High screen"
        ],
        correctAnswer: 1,
        explanation: "h-screen sets height: 100vh, making element full viewport height."
      },
      {
        id: 17,
        question: "What are Tailwind's responsive prefixes?",
        options: [
          "mobile, tablet, desktop",
          "sm:, md:, lg:, xl:, 2xl:",
          "xs, s, m, l, xl",
          "small, medium, large"
        ],
        correctAnswer: 1,
        explanation: "Tailwind breakpoints: sm: (640px), md: (768px), lg: (1024px), xl: (1280px), 2xl: (1536px)."
      },
      {
        id: 18,
        question: "What does 'md:flex' do?",
        options: [
          "Medium flex",
          "Applies display: flex on medium screens and above",
          "Flex on mobile devices",
          "Flexible medium"
        ],
        correctAnswer: 1,
        explanation: "md:flex applies display: flex on screens 768px and wider. Mobile-first approach."
      },
      {
        id: 19,
        question: "What does 'hidden md:block' do?",
        options: [
          "Always hidden",
          "Hidden on mobile, visible as block on medium screens+",
          "Medium block only",
          "Hidden block"
        ],
        correctAnswer: 1,
        explanation: "Element is hidden by default (mobile), then displays as block on medium screens and larger."
      },
      {
        id: 20,
        question: "What does 'grid grid-cols-3' create?",
        options: [
          "3 grids",
          "CSS Grid with 3 equal columns",
          "3 column table",
          "Grid of 3 items"
        ],
        correctAnswer: 1,
        explanation: "Creates a CSS Grid container with 3 equal columns. grid-cols-1 through grid-cols-12 available."
      },
      {
        id: 21,
        question: "What does 'gap-4' do in a grid or flex container?",
        options: [
          "Creates 4 gaps",
          "Adds 1rem (16px) gap between items",
          "4px gap",
          "Gap of 4 columns"
        ],
        correctAnswer: 1,
        explanation: "gap-4 adds 1rem (16px) spacing between grid or flex items. Uses same spacing scale."
      },
      {
        id: 22,
        question: "What does 'rounded' do?",
        options: [
          "Makes circle",
          "Adds border-radius: 0.25rem for rounded corners",
          "Rounds numbers",
          "Round shape"
        ],
        correctAnswer: 1,
        explanation: "rounded adds small border-radius. Options: rounded-sm, rounded, rounded-md, rounded-lg, rounded-full."
      },
      {
        id: 23,
        question: "What does 'rounded-full' do?",
        options: [
          "Full corners",
          "Creates circle/pill shape (border-radius: 9999px)",
          "Fully rounded",
          "Full border"
        ],
        correctAnswer: 1,
        explanation: "rounded-full applies very large border-radius, creating circles (on squares) or pill shapes."
      },
      {
        id: 24,
        question: "What does 'shadow-lg' do?",
        options: [
          "Large shadow",
          "Adds large box-shadow",
          "Shadow on left/right",
          "Loading shadow"
        ],
        correctAnswer: 1,
        explanation: "shadow-lg adds a large box-shadow. Options: shadow-sm, shadow, shadow-md, shadow-lg, shadow-xl, shadow-2xl."
      },
      {
        id: 25,
        question: "What does 'border border-gray-300' do?",
        options: [
          "Gray border",
          "Adds 1px solid gray border",
          "300px border",
          "Border style gray"
        ],
        correctAnswer: 1,
        explanation: "border adds 1px solid border, border-gray-300 sets the color to light gray."
      },
      {
        id: 26,
        question: "What does 'hover:bg-blue-700' do?",
        options: [
          "Hovers background",
          "Changes background to darker blue on hover",
          "Blue hover effect",
          "700ms hover"
        ],
        correctAnswer: 1,
        explanation: "hover: prefix applies styles on hover state. hover:bg-blue-700 changes background on hover."
      },
      {
        id: 27,
        question: "What does 'focus:ring-2' do?",
        options: [
          "Focuses ring",
          "Adds 2px ring (outline) on focus",
          "Ring of 2 elements",
          "2 focus states"
        ],
        correctAnswer: 1,
        explanation: "focus:ring-2 adds a 2px ring (outline) when element receives focus, useful for accessibility."
      },
      {
        id: 28,
        question: "What does 'transition duration-300' do?",
        options: [
          "Transitions page",
          "Adds CSS transition with 300ms duration",
          "300 transitions",
          "Duration of 300px"
        ],
        correctAnswer: 1,
        explanation: "Adds smooth transitions for property changes. duration-300 sets transition-duration to 300ms."
      },
      {
        id: 29,
        question: "What does 'absolute' class do?",
        options: [
          "Absolutely positioned",
          "Sets position: absolute",
          "Absolute value",
          "Absolutely centered"
        ],
        correctAnswer: 1,
        explanation: "absolute applies position: absolute. Also available: relative, fixed, sticky."
      },
      {
        id: 30,
        question: "What do 'top-0', 'right-0', 'bottom-0', 'left-0' do?",
        options: [
          "Position at 0",
          "Position element at edges (top: 0, right: 0, etc.)",
          "0px from edges",
          "Zero position"
        ],
        correctAnswer: 1,
        explanation: "These set position offsets to 0: top-0 (top: 0), right-0 (right: 0), etc."
      },
      {
        id: 31,
        question: "What does 'z-10' do?",
        options: [
          "Zoom level 10",
          "Sets z-index: 10 for layering order",
          "Z position 10",
          "10x zoom"
        ],
        correctAnswer: 1,
        explanation: "z-10 sets z-index: 10, controlling stacking order. Values: z-0, z-10, z-20, z-30, z-40, z-50, z-auto."
      },
      {
        id: 32,
        question: "What does 'overflow-hidden' do?",
        options: [
          "Hides overflow",
          "Sets overflow: hidden, clipping content",
          "Hidden scroll",
          "Overflow prevention"
        ],
        correctAnswer: 1,
        explanation: "overflow-hidden hides content that overflows container. Also: overflow-auto, overflow-scroll."
      },
      {
        id: 33,
        question: "What does 'container mx-auto' do?",
        options: [
          "Contains elements",
          "Centers container with auto horizontal margins",
          "Container and mixer",
          "Maximum width auto"
        ],
        correctAnswer: 1,
        explanation: "container sets max-width at breakpoints, mx-auto adds auto horizontal margins to center it."
      },
      {
        id: 34,
        question: "What does 'space-x-4' do in a flex container?",
        options: [
          "Spaces 4 times",
          "Adds 1rem horizontal spacing between children",
          "4px spacing",
          "Extra space 4"
        ],
        correctAnswer: 1,
        explanation: "space-x-4 adds 1rem horizontal margin between child elements. space-y-4 adds vertical spacing."
      },
      {
        id: 35,
        question: "What does 'divide-y divide-gray-200' do?",
        options: [
          "Divides elements",
          "Adds horizontal border between stacked children",
          "Divides by y-axis",
          "Gray division"
        ],
        correctAnswer: 1,
        explanation: "divide-y adds borders between stacked children, divide-gray-200 sets the border color."
      },
      {
        id: 36,
        question: "What is the '@apply' directive in Tailwind?",
        options: [
          "Applies styles",
          "Extracts utility classes into custom CSS classes",
          "Applies automatically",
          "Application directive"
        ],
        correctAnswer: 1,
        explanation: "@apply extracts utility patterns into custom CSS: .btn { @apply px-4 py-2 bg-blue-500; }"
      },
      {
        id: 37,
        question: "What does 'opacity-50' do?",
        options: [
          "50% visible",
          "Sets opacity: 0.5 (50% transparency)",
          "50px opacity",
          "Opacity level 50"
        ],
        correctAnswer: 1,
        explanation: "opacity-50 sets opacity: 0.5. Range: opacity-0 (transparent) to opacity-100 (opaque)."
      },
      {
        id: 38,
        question: "What does 'cursor-pointer' do?",
        options: [
          "Points cursor",
          "Changes cursor to pointer (hand icon)",
          "Cursor position",
          "Pointer events"
        ],
        correctAnswer: 1,
        explanation: "cursor-pointer changes cursor to pointer (hand), indicating clickable element."
      },
      {
        id: 39,
        question: "What does 'select-none' do?",
        options: [
          "Selects nothing",
          "Prevents text selection (user-select: none)",
          "Deselects elements",
          "No select input"
        ],
        correctAnswer: 1,
        explanation: "select-none applies user-select: none, preventing text selection."
      },
      {
        id: 40,
        question: "What does 'truncate' do?",
        options: [
          "Truncates file",
          "Truncates text with ellipsis (overflow: hidden, text-overflow: ellipsis)",
          "Cuts text",
          "Removes text"
        ],
        correctAnswer: 1,
        explanation: "truncate combines overflow: hidden, text-overflow: ellipsis, and white-space: nowrap."
      },
      {
        id: 41,
        question: "What does 'line-clamp-3' do?",
        options: [
          "Clamps lines",
          "Limits text to 3 lines with ellipsis",
          "3 line breaks",
          "Line height 3"
        ],
        correctAnswer: 1,
        explanation: "line-clamp-3 limits text to 3 lines, adding ellipsis for overflow (requires @tailwindcss/line-clamp plugin)."
      },
      {
        id: 42,
        question: "What does 'aspect-video' do?",
        options: [
          "Video aspect",
          "Sets 16:9 aspect ratio",
          "Aspect for videos only",
          "Video player"
        ],
        correctAnswer: 1,
        explanation: "aspect-video sets aspect-ratio: 16/9. Also: aspect-square (1:1), aspect-auto."
      },
      {
        id: 43,
        question: "What does 'scale-110' do?",
        options: [
          "Scales to 110px",
          "Scales element to 110% (transform: scale(1.1))",
          "110% zoom",
          "Scale level 110"
        ],
        correctAnswer: 1,
        explanation: "scale-110 applies transform: scale(1.1), making element 110% of original size."
      },
      {
        id: 44,
        question: "What does 'rotate-45' do?",
        options: [
          "Rotates 45px",
          "Rotates element 45 degrees",
          "45 degree angle",
          "Rotation level 45"
        ],
        correctAnswer: 1,
        explanation: "rotate-45 applies transform: rotate(45deg), rotating element 45 degrees clockwise."
      },
      {
        id: 45,
        question: "What does 'translate-x-4' do?",
        options: [
          "Translates X to 4",
          "Moves element 1rem right (transform: translateX(1rem))",
          "4px translation",
          "X-axis 4"
        ],
        correctAnswer: 1,
        explanation: "translate-x-4 moves element 1rem to the right. Negative values move left: -translate-x-4."
      },
      {
        id: 46,
        question: "What does 'backdrop-blur-sm' do?",
        options: [
          "Blurs background",
          "Applies small backdrop blur filter",
          "Small blur effect",
          "Background blur"
        ],
        correctAnswer: 1,
        explanation: "backdrop-blur-sm applies backdrop-filter: blur(4px), blurring content behind element."
      },
      {
        id: 47,
        question: "What is JIT (Just-In-Time) mode in Tailwind?",
        options: [
          "Just in time compilation",
          "Generates styles on-demand as needed, reducing file size",
          "JavaScript in Tailwind",
          "Time-based compilation"
        ],
        correctAnswer: 1,
        explanation: "JIT mode generates styles on-demand, enabling arbitrary values, faster builds, and smaller CSS files."
      },
      {
        id: 48,
        question: "What are arbitrary values in Tailwind?",
        options: [
          "Random values",
          "Custom values using square brackets: w-[137px], bg-[#1da1f2]",
          "Any values",
          "Arbitrary styling"
        ],
        correctAnswer: 1,
        explanation: "Arbitrary values allow custom values: w-[137px], bg-[#1da1f2], top-[117px] using square brackets."
      },
      {
        id: 49,
        question: "What does 'dark:bg-gray-800' do?",
        options: [
          "Dark background",
          "Applies dark gray background in dark mode",
          "Darker background",
          "800 darkness level"
        ],
        correctAnswer: 1,
        explanation: "dark: prefix applies styles in dark mode when 'darkMode' is enabled in Tailwind config."
      },
      {
        id: 50,
        question: "What is the purpose of tailwind.config.js?",
        options: [
          "JavaScript config",
          "Customize Tailwind: colors, spacing, breakpoints, plugins, etc.",
          "Config file only",
          "Tailwind settings"
        ],
        correctAnswer: 1,
        explanation: "tailwind.config.js customizes Tailwind: theme colors, spacing, fonts, breakpoints, content paths, plugins, etc."
      }
    ]
  },
  {
    courseId: 'java',
    courseName: 'Java',
    questions: [
      {
        id: 1,
        question: "What is Java and why is it platform independent?",
        options: [
          "Runs only on Windows",
          "Bytecode runs on any platform with JVM - Write Once, Run Anywhere",
          "Platform dependent language",
          "Requires recompilation for each OS"
        ],
        correctAnswer: 1,
        explanation: "Java code compiles to bytecode which runs on JVM (Java Virtual Machine). JVM is platform-specific but bytecode is universal, enabling 'Write Once, Run Anywhere'."
      },
      {
        id: 2,
        question: "Explain public static void main(String[] args)",
        options: [
          "Optional method",
          "public: accessible everywhere, static: no object needed, void: no return, main: entry point, String[] args: command-line arguments",
          "Private main method",
          "Returns integer value"
        ],
        correctAnswer: 1,
        explanation: "public: accessible from anywhere. static: can be called without creating object. void: returns nothing. main: program entry point. String[] args: accepts command-line arguments."
      },
      {
        id: 3,
        question: "What will happen? String s1='Java'; String s2='Java'; System.out.println(s1==s2);",
        options: [
          "false",
          "true (String Pool - both reference same object)",
          "Compilation error",
          "NullPointerException"
        ],
        correctAnswer: 1,
        explanation: "String literals are stored in String Pool. Both s1 and s2 reference the same object in pool, so == returns true."
      },
      {
        id: 4,
        question: "What will happen? String s1=new String('Java'); String s2=new String('Java'); System.out.println(s1==s2);",
        options: [
          "true",
          "false (different objects in heap memory)",
          "Compilation error",
          "Both are same"
        ],
        correctAnswer: 1,
        explanation: "new String() creates new objects in heap memory. s1 and s2 are different objects, so == returns false. Use .equals() for content comparison."
      },
      {
        id: 5,
        question: "Can we override static methods?",
        options: [
          "Yes, always",
          "No, static methods belong to class, not instance (method hiding occurs)",
          "Only in child class",
          "Yes, with super keyword"
        ],
        correctAnswer: 1,
        explanation: "Static methods cannot be overridden because they belong to class, not instance. If redefined in child class, it's method hiding, not overriding."
      },
      {
        id: 6,
        question: "Can we overload main() method?",
        options: [
          "No, main is special",
          "Yes, but JVM calls only public static void main(String[] args)",
          "No, compilation error",
          "Yes, all main methods execute"
        ],
        correctAnswer: 1,
        explanation: "main() can be overloaded, but JVM only calls the standard signature: public static void main(String[] args)."
      },
      {
        id: 7,
        question: "What is the output? System.out.println(10 + 20 + '30');",
        options: [
          "102030",
          "3030 (int addition first: 10+20=30, then concatenation: 30+'30'=3030)",
          "60",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "Left to right evaluation: 10+20=30 (int), then 30+'30'='3030' (string concatenation)."
      },
      {
        id: 8,
        question: "Why String is immutable in Java?",
        options: [
          "For fun",
          "Security, String Pool efficiency, Thread-safety, Hashcode caching",
          "To make it slow",
          "No specific reason"
        ],
        correctAnswer: 1,
        explanation: "Immutability provides: Security (can't modify sensitive data), String Pool reusability, Thread-safety (no synchronization needed), Hashcode caching (for HashMap keys)."
      },
      {
        id: 9,
        question: "Can we create object of abstract class?",
        options: [
          "Yes, using new keyword",
          "No, but can create using anonymous class or child class",
          "Yes, always possible",
          "No, in any case"
        ],
        correctAnswer: 1,
        explanation: "Cannot instantiate abstract class directly. But can create: 1) Child class object, 2) Anonymous class implementation."
      },
      {
        id: 10,
        question: "Can interface have constructor?",
        options: [
          "Yes, private constructor",
          "No, interfaces cannot have constructors",
          "Yes, public constructor",
          "Yes, default constructor"
        ],
        correctAnswer: 1,
        explanation: "Interfaces cannot have constructors because they cannot be instantiated. Only classes can have constructors."
      },
      {
        id: 11,
        question: "What happens if we don't override hashCode() when overriding equals()?",
        options: [
          "Nothing happens",
          "Violates equals-hashCode contract: equal objects may have different hashcodes, causing issues in HashMap/HashSet",
          "Automatic override",
          "Compilation error"
        ],
        correctAnswer: 1,
        explanation: "Contract: equal objects must have same hashcode. If violated, HashMap/HashSet won't work correctly - equal objects stored as different entries."
      },
      {
        id: 12,
        question: "How does HashMap work internally?",
        options: [
          "Simple array",
          "Array of LinkedList/TreeNodes (buckets). Uses hashCode() to find bucket, equals() to find exact entry",
          "Only LinkedList",
          "Binary tree"
        ],
        correctAnswer: 1,
        explanation: "HashMap uses array of buckets. hashCode() determines bucket index, equals() finds exact key in bucket. Java 8+: converts long LinkedList to TreeNode for O(log n) lookup."
      },
      {
        id: 13,
        question: "What is fail-fast and fail-safe iterator?",
        options: [
          "Fast and safe iteration",
          "Fail-fast: throws ConcurrentModificationException if collection modified. Fail-safe: works on clone",
          "Both are same",
          "Error handling mechanisms"
        ],
        correctAnswer: 1,
        explanation: "Fail-fast (ArrayList, HashMap): throws ConcurrentModificationException if modified during iteration. Fail-safe (CopyOnWriteArrayList, ConcurrentHashMap): works on copy, allows modification."
      },
      {
        id: 14,
        question: "Why wait(), notify() in Object class, not Thread class?",
        options: [
          "Random decision",
          "Synchronization is on objects (locks), not threads. Any object can be a lock",
          "Thread doesn't exist",
          "For backward compatibility"
        ],
        correctAnswer: 1,
        explanation: "Synchronization happens on objects (intrinsic locks), not threads. Any object can be a monitor/lock, so wait/notify must be in Object class."
      },
      {
        id: 15,
        question: "What is difference between process and thread?",
        options: [
          "Both same",
          "Process: independent program with own memory. Thread: lightweight, shares memory within process",
          "Thread is slower",
          "Process is deprecated"
        ],
        correctAnswer: 1,
        explanation: "Process: separate memory space, heavyweight, inter-process communication expensive. Thread: shares memory, lightweight, communication easy but needs synchronization."
      },
      {
        id: 16,
        question: "What is deadlock? How to avoid it?",
        options: [
          "Lock that died",
          "Two threads waiting for each other's locks. Avoid: consistent lock ordering, timeout, tryLock()",
          "Single thread stuck",
          "Cannot be avoided"
        ],
        correctAnswer: 1,
        explanation: "Deadlock: Thread A holds lock1, waits for lock2. Thread B holds lock2, waits for lock1. Both stuck. Avoid: acquire locks in same order, use tryLock(), timeout."
      },
      {
        id: 17,
        question: "What is the purpose of finalize() method?",
        options: [
          "To finish program",
          "Called by GC before destroying object for cleanup (deprecated in Java 9+, use try-with-resources)",
          "Finalizes variables",
          "Required method"
        ],
        correctAnswer: 1,
        explanation: "finalize() called by Garbage Collector before reclaiming object. Used for cleanup. Deprecated - use try-with-resources or AutoCloseable instead."
      },
      {
        id: 18,
        question: "Can we have multiple public classes in one file?",
        options: [
          "Yes, unlimited",
          "No, only one public class per file (name must match filename)",
          "Two public classes allowed",
          "Yes, with annotation"
        ],
        correctAnswer: 1,
        explanation: "Only ONE public class per file, and filename must match the public class name. Can have multiple non-public classes in same file."
      },
      {
        id: 19,
        question: "What is marker interface? Give examples.",
        options: [
          "Interface with markers",
          "Empty interface to mark/tag classes (Serializable, Cloneable, Remote)",
          "Interface with methods",
          "Deprecated concept"
        ],
        correctAnswer: 1,
        explanation: "Marker interface has no methods, just marks/tags class for special treatment. Examples: Serializable (enables serialization), Cloneable (enables cloning), Remote (RMI)."
      },
      {
        id: 20,
        question: "What is ClassNotFoundException vs NoClassDefFoundError?",
        options: [
          "Both same",
          "ClassNotFoundException: runtime exception (Class.forName()). NoClassDefFoundError: class present at compile-time, missing at runtime",
          "No difference",
          "One is warning"
        ],
        correctAnswer: 1,
        explanation: "ClassNotFoundException: checked exception when class not found dynamically (Class.forName()). NoClassDefFoundError: class found during compilation but missing at runtime."
      },
      {
        id: 21,
        question: "Can we call constructor inside another constructor?",
        options: [
          "No, never",
          "Yes, using this() for same class, super() for parent (must be first statement)",
          "Yes, anywhere",
          "Only in abstract class"
        ],
        correctAnswer: 1,
        explanation: "this() calls another constructor in same class. super() calls parent class constructor. MUST be first statement in constructor."
      },
      {
        id: 22,
        question: "What is singleton pattern? How to create thread-safe singleton?",
        options: [
          "One class",
          "Only one instance of class. Thread-safe: synchronized method, double-checked locking, or enum",
          "Single method class",
          "One object only"
        ],
        correctAnswer: 1,
        explanation: "Singleton ensures only one instance. Thread-safe approaches: 1) Synchronized getInstance(), 2) Double-checked locking, 3) Bill Pugh (static inner class), 4) Enum (best)."
      },
      {
        id: 23,
        question: "What is constructor chaining?",
        options: [
          "Multiple constructors",
          "Calling one constructor from another using this() or super()",
          "Constructor in chain",
          "Linked constructors"
        ],
        correctAnswer: 1,
        explanation: "Constructor chaining: calling another constructor from a constructor using this() (same class) or super() (parent class). Reduces code duplication."
      },
      {
        id: 24,
        question: "Can we declare constructor as final, static, or abstract?",
        options: [
          "Yes, all allowed",
          "No, constructors cannot be final, static, or abstract",
          "Only static allowed",
          "Only final allowed"
        ],
        correctAnswer: 1,
        explanation: "Constructors cannot be final (not inherited), static (belongs to object, not class), or abstract (must have implementation)."
      },
      {
        id: 25,
        question: "What is covariant return type?",
        options: [
          "Same return type",
          "Overriding method can return subtype of original return type (Java 5+)",
          "Multiple return types",
          "Void return"
        ],
        correctAnswer: 1,
        explanation: "Java 5+ allows overriding method to return subtype. Example: Parent returns Animal, Child can return Dog (subclass of Animal)."
      },
      {
        id: 26,
        question: "What is the output? Integer i1=128; Integer i2=128; System.out.println(i1==i2);",
        options: [
          "true",
          "false (Integer cache: -128 to 127. 128 creates new objects)",
          "Compilation error",
          "NullPointerException"
        ],
        correctAnswer: 1,
        explanation: "Integer caches values -128 to 127. For 128, new objects created. i1 and i2 are different objects, so == returns false."
      },
      {
        id: 27,
        question: "What is the output? Integer i1=127; Integer i2=127; System.out.println(i1==i2);",
        options: [
          "false",
          "true (Integer cache pool: same object for -128 to 127)",
          "Compilation error",
          "Random"
        ],
        correctAnswer: 1,
        explanation: "Integer caches values from -128 to 127. Both i1 and i2 reference same cached object, so == returns true."
      },
      {
        id: 28,
        question: "Why char array preferred over String for passwords?",
        options: [
          "Faster processing",
          "Security: char[] can be explicitly cleared, String stays in String Pool until GC",
          "Less memory",
          "Better encryption"
        ],
        correctAnswer: 1,
        explanation: "char[] can be cleared immediately after use. String is immutable and stays in String Pool until garbage collected, exposing password longer."
      },
      {
        id: 29,
        question: "What is diamond problem in multiple inheritance?",
        options: [
          "Diamond shape code",
          "Ambiguity when class inherits same method from multiple parents (solved by interfaces in Java)",
          "Inheritance loop",
          "Design pattern"
        ],
        correctAnswer: 1,
        explanation: "Diamond problem: class D extends B and C, both extend A. If A has method, which version does D get? Java avoids with single class inheritance, allows multiple interfaces."
      },
      {
        id: 30,
        question: "What is shallow copy vs deep copy?",
        options: [
          "Both same",
          "Shallow: copies references (shared nested objects). Deep: copies all objects recursively (independent)",
          "Shallow is better",
          "Deep is faster"
        ],
        correctAnswer: 1,
        explanation: "Shallow copy: duplicates object but references to nested objects are shared. Deep copy: duplicates object and recursively copies all nested objects."
      },
      {
        id: 31,
        question: "Can we override private or static methods?",
        options: [
          "Yes, both",
          "No, private not visible to subclass, static belongs to class not instance",
          "Only private",
          "Only static"
        ],
        correctAnswer: 1,
        explanation: "Private methods not visible to subclass, cannot override. Static methods belong to class, if redefined in child class it's method hiding, not overriding."
      },
      {
        id: 32,
        question: "What is association, aggregation, and composition?",
        options: [
          "All same",
          "Association: relationship. Aggregation: HAS-A (weak). Composition: HAS-A (strong, lifecycle dependent)",
          "Design patterns",
          "Inheritance types"
        ],
        correctAnswer: 1,
        explanation: "Association: general relationship. Aggregation: HAS-A, parts exist independently (Teacher has Students). Composition: strong HAS-A, parts destroyed with whole (House has Rooms)."
      },
      {
        id: 33,
        question: "What is transient keyword?",
        options: [
          "Temporary variable",
          "Excludes field from serialization (not saved)",
          "Transition state",
          "Transaction variable"
        ],
        correctAnswer: 1,
        explanation: "transient prevents field from being serialized. Used for sensitive data (passwords) or derived fields that shouldn't be saved."
      },
      {
        id: 34,
        question: "What is reflection in Java?",
        options: [
          "Mirror concept",
          "Inspecting/manipulating classes, methods, fields at runtime",
          "Reflecting changes",
          "Design pattern"
        ],
        correctAnswer: 1,
        explanation: "Reflection API allows inspecting and manipulating classes, methods, fields, constructors at runtime. Used in frameworks, testing, serialization."
      },
      {
        id: 35,
        question: "What is the output? try { return 1; } finally { return 2; }",
        options: [
          "1",
          "2 (finally return overrides try return)",
          "Compilation error",
          "Both 1 and 2"
        ],
        correctAnswer: 1,
        explanation: "finally block executes before method returns. If finally has return, it overrides try/catch return. Returns 2 (bad practice)."
      },
      {
        id: 36,
        question: "Can we throw checked exception from static initialization block?",
        options: [
          "Yes, using throws",
          "No, static block cannot throw checked exceptions (use try-catch or ExceptionInInitializerError)",
          "Yes, without handling",
          "No static blocks allowed"
        ],
        correctAnswer: 1,
        explanation: "Static blocks cannot throw checked exceptions (no throws clause). Must catch inside block or will be wrapped in ExceptionInInitializerError."
      },
      {
        id: 37,
        question: "What is the order of execution: static block, instance block, constructor?",
        options: [
          "Constructor, static, instance",
          "Static block → Instance block → Constructor",
          "Instance, constructor, static",
          "Random order"
        ],
        correctAnswer: 1,
        explanation: "Order: 1) Static block (class loading, once), 2) Instance block (before constructor, each object), 3) Constructor. Parent class executed before child class."
      },
      {
        id: 38,
        question: "What is default value of local variables?",
        options: [
          "0 or null",
          "No default value, must be initialized before use",
          "Empty string",
          "undefined"
        ],
        correctAnswer: 1,
        explanation: "Local variables have NO default value. Must be explicitly initialized before use, else compilation error. Only instance/class variables have defaults."
      },
      {
        id: 39,
        question: "Can we declare interface methods as private?",
        options: [
          "No, never",
          "Yes in Java 9+ (private methods for code reuse in default methods)",
          "Yes, always",
          "Only static private"
        ],
        correctAnswer: 1,
        explanation: "Java 9+ allows private methods in interfaces for code reusability within default and static methods. Cannot be inherited or overridden."
      },
      {
        id: 40,
        question: "What is functional interface?",
        options: [
          "Interface with functions",
          "Interface with exactly one abstract method (SAM). Used for lambda expressions",
          "Multiple methods interface",
          "Deprecated interface"
        ],
        correctAnswer: 1,
        explanation: "Functional interface has exactly one abstract method (SAM - Single Abstract Method). Can have default/static methods. Used with lambda expressions. @FunctionalInterface annotation."
      },
      {
        id: 41,
        question: "Can lambda expression throw checked exception?",
        options: [
          "Yes, freely",
          "Only if functional interface method declares it, else wrap in RuntimeException",
          "Never allowed",
          "Automatic handling"
        ],
        correctAnswer: 1,
        explanation: "Lambda can throw checked exception only if functional interface method declares it. Otherwise, wrap in unchecked exception or use try-catch inside lambda."
      },
      {
        id: 42,
        question: "What is method reference in Java 8?",
        options: [
          "Reference to method",
          "Shorthand for lambda: ClassName::methodName (static), object::methodName (instance)",
          "Method pointer",
          "Method variable"
        ],
        correctAnswer: 1,
        explanation: "Method reference is compact lambda alternative: ClassName::staticMethod, object::instanceMethod, ClassName::new (constructor). Example: list.forEach(System.out::println)"
      },
      {
        id: 43,
        question: "What is Optional class in Java 8?",
        options: [
          "Optional parameter",
          "Container that may or may not contain non-null value. Avoids NullPointerException",
          "Optional method",
          "Configuration class"
        ],
        correctAnswer: 1,
        explanation: "Optional<T> is a container for potentially null values. Methods: isPresent(), orElse(), orElseThrow(), ifPresent(). Helps avoid NullPointerException."
      },
      {
        id: 44,
        question: "What is difference between Comparable and Comparator?",
        options: [
          "Both same",
          "Comparable: natural ordering (compareTo() in same class). Comparator: custom ordering (compare() in separate class)",
          "Comparator is deprecated",
          "Comparable is faster"
        ],
        correctAnswer: 1,
        explanation: "Comparable: define natural ordering by implementing compareTo() in the class. Comparator: define custom ordering in separate class using compare() method. Multiple Comparators possible."
      },
      {
        id: 45,
        question: "What is ThreadLocal?",
        options: [
          "Local thread",
          "Each thread has own copy of variable (thread-level isolation)",
          "Thread timing",
          "Thread location"
        ],
        correctAnswer: 1,
        explanation: "ThreadLocal provides thread-local variables. Each thread accessing ThreadLocal has own, independently initialized copy. Used for user sessions, transactions."
      },
      {
        id: 46,
        question: "What is volatile keyword used for?",
        options: [
          "Changing variable",
          "Ensures visibility across threads (reads/writes from main memory, not cache)",
          "Temporary variable",
          "Version control"
        ],
        correctAnswer: 1,
        explanation: "volatile ensures variable is read from and written to main memory, not thread's local cache. Guarantees visibility across threads. Lighter than synchronized."
      },
      {
        id: 47,
        question: "What is CompletableFuture in Java 8?",
        options: [
          "Complete future",
          "Async programming: can be completed manually, chain operations, handle exceptions",
          "Future implementation",
          "Completion handler"
        ],
        correctAnswer: 1,
        explanation: "CompletableFuture enables asynchronous programming. Can be explicitly completed, chain operations (thenApply, thenCompose), handle exceptions, combine multiple futures."
      },
      {
        id: 48,
        question: "What happens if we don't provide default case in switch?",
        options: [
          "Compilation error",
          "No match: program continues (no action). Good practice to include default",
          "Runtime error",
          "Automatic default added"
        ],
        correctAnswer: 1,
        explanation: "Default case is optional. If no case matches and no default, switch exits silently. Best practice: include default for unhandled cases."
      },
      {
        id: 49,
        question: "Can we synchronize constructor?",
        options: [
          "Yes, using synchronized keyword",
          "No, constructors cannot be synchronized (object doesn't exist yet)",
          "Only in child class",
          "Only static constructor"
        ],
        correctAnswer: 1,
        explanation: "Constructors cannot be synchronized because object doesn't exist during construction. No point in synchronizing - only one thread can construct object at a time."
      },
      {
        id: 50,
        question: "What is double-checked locking in singleton?",
        options: [
          "Check twice",
          "Check null twice: outside synchronized for performance, inside synchronized for thread-safety",
          "Two locks",
          "Double synchronization"
        ],
        correctAnswer: 1,
        explanation: "Double-checked locking: check instance==null before synchronizing (performance), then check again inside synchronized block (thread-safety). Requires volatile instance variable."
      }
    ]
  },
  {
    courseId: 'python',
    courseName: 'Python',
    questions: [
      {
        id: 1,
        question: "What is Python and why is it popular?",
        options: [
          "Compiled language",
          "Interpreted, easy syntax, versatile",
          "Assembly language",
          "Hardware language"
        ],
        correctAnswer: 1,
        explanation: "Python is interpreted, high-level language with simple syntax. Popular for web, data science, AI, automation, scripting."
      },
      {
        id: 2,
        question: "What is the output? print(type([]))",
        options: [
          "<class 'tuple'>",
          "<class 'list'>",
          "<class 'dict'>",
          "<class 'array'>"
        ],
        correctAnswer: 1,
        explanation: "[] creates an empty list. type([]) returns <class 'list'>."
      },
      {
        id: 3,
        question: "What is the output? print(2 ** 3)",
        options: [
          "6",
          "8",
          "9",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "** is exponentiation operator. 2 ** 3 = 2³ = 8"
      },
      {
        id: 4,
        question: "What is the difference between list and tuple?",
        options: [
          "No difference",
          "List mutable [], Tuple immutable ()",
          "List slower",
          "Tuple deprecated"
        ],
        correctAnswer: 1,
        explanation: "List is mutable (can change), uses []. Tuple is immutable (cannot change), uses (), faster than list."
      },
      {
        id: 5,
        question: "What is the output? print('Hello' * 3)",
        options: [
          "Error",
          "HelloHelloHello",
          "Hello3",
          "HHH"
        ],
        correctAnswer: 1,
        explanation: "* operator repeats string. 'Hello' * 3 = 'HelloHelloHello'"
      },
      {
        id: 6,
        question: "What are *args and **kwargs?",
        options: [
          "Variable names only",
          "*args: variable arguments, **kwargs: keyword arguments",
          "Error keywords",
          "Import statements"
        ],
        correctAnswer: 1,
        explanation: "*args accepts variable number of positional arguments as tuple. **kwargs accepts variable keyword arguments as dictionary."
      },
      {
        id: 7,
        question: "What is the output? print([1,2,3][1:3])",
        options: [
          "[2]",
          "[2, 3]",
          "[1, 2]",
          "[1, 2, 3]"
        ],
        correctAnswer: 1,
        explanation: "Slicing [1:3] returns elements from index 1 to 2 (3 excluded). Result: [2, 3]"
      },
      {
        id: 8,
        question: "What is list comprehension?",
        options: [
          "List method",
          "Concise way to create lists: [x for x in range(5)]",
          "List understanding",
          "Compressed list"
        ],
        correctAnswer: 1,
        explanation: "List comprehension creates lists in one line: [x*2 for x in range(5)] creates [0, 2, 4, 6, 8]"
      },
      {
        id: 9,
        question: "What is the output? print(bool([]))",
        options: [
          "True",
          "False",
          "None",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "Empty list [] is falsy in Python. bool([]) returns False. Non-empty list is truthy."
      },
      {
        id: 10,
        question: "What is lambda function?",
        options: [
          "Named function",
          "Anonymous function: lambda x: x*2",
          "Lambda library",
          "Greek function"
        ],
        correctAnswer: 1,
        explanation: "Lambda is anonymous function: lambda arguments: expression. Example: square = lambda x: x**2"
      },
      {
        id: 11,
        question: "What is the output? print([1,2,3] + [4,5])",
        options: [
          "Error",
          "[1, 2, 3, 4, 5]",
          "[5, 7]",
          "15"
        ],
        correctAnswer: 1,
        explanation: "+ operator concatenates lists. [1,2,3] + [4,5] = [1, 2, 3, 4, 5]"
      },
      {
        id: 12,
        question: "What is the difference between append() and extend()?",
        options: [
          "Same",
          "append() adds element, extend() adds iterable",
          "extend() deprecated",
          "append() faster"
        ],
        correctAnswer: 1,
        explanation: "append() adds single element. extend() adds each element from iterable. [1,2].append([3,4]) → [1,2,[3,4]]. [1,2].extend([3,4]) → [1,2,3,4]"
      },
      {
        id: 13,
        question: "What is dictionary in Python?",
        options: [
          "Book",
          "Key-value pairs: {'a': 1, 'b': 2}",
          "List of words",
          "Tuple variant"
        ],
        correctAnswer: 1,
        explanation: "Dictionary stores key-value pairs: d = {'name': 'John', 'age': 30}. Keys must be immutable."
      },
      {
        id: 14,
        question: "What is the output? d = {'a': 1}; print(d.get('b', 0))",
        options: [
          "Error",
          "0",
          "None",
          "KeyError"
        ],
        correctAnswer: 1,
        explanation: "get() method returns default value (0) if key not found. d.get('b', 0) returns 0."
      },
      {
        id: 15,
        question: "What is the difference between is and ==?",
        options: [
          "Same",
          "is: identity (same object), ==: equality (same value)",
          "is deprecated",
          "== faster"
        ],
        correctAnswer: 1,
        explanation: "is checks if same object (memory location). == checks if same value. a=[1,2]; b=[1,2]; a==b True, a is b False"
      },
      {
        id: 16,
        question: "What is None in Python?",
        options: [
          "Zero",
          "Null value, absence of value",
          "Empty string",
          "False"
        ],
        correctAnswer: 1,
        explanation: "None is Python's null value representing absence of value. It's a singleton object of type NoneType."
      },
      {
        id: 17,
        question: "What is the output? print(5 / 2)",
        options: [
          "2",
          "2.5",
          "3",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "/ is float division. 5 / 2 = 2.5. For integer division use //: 5 // 2 = 2"
      },
      {
        id: 18,
        question: "What is the output? print(5 // 2)",
        options: [
          "2.5",
          "2",
          "3",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "// is floor division (integer division). 5 // 2 = 2. Returns integer, discards decimal."
      },
      {
        id: 19,
        question: "What is decorator in Python?",
        options: [
          "Design pattern",
          "Function that modifies another function: @decorator",
          "Class decorator",
          "HTML decorator"
        ],
        correctAnswer: 1,
        explanation: "Decorator is function that wraps another function to modify behavior: @my_decorator. Used for logging, authentication, timing."
      },
      {
        id: 20,
        question: "What is the output? print('Python'[::-1])",
        options: [
          "Python",
          "nohtyP",
          "Error",
          "Pyt"
        ],
        correctAnswer: 1,
        explanation: "[::-1] reverses sequence. 'Python'[::-1] = 'nohtyP'. Works with strings, lists, tuples."
      },
      {
        id: 21,
        question: "What are Python's mutable types?",
        options: [
          "String, Tuple",
          "List, Dict, Set",
          "Int, Float",
          "All immutable"
        ],
        correctAnswer: 1,
        explanation: "Mutable (can change): List, Dictionary, Set. Immutable: String, Tuple, Int, Float, Bool."
      },
      {
        id: 22,
        question: "What is the output? print(1 == True)",
        options: [
          "False",
          "True",
          "Error",
          "None"
        ],
        correctAnswer: 1,
        explanation: "In Python, True equals 1 and False equals 0. 1 == True returns True. But 1 is True returns False."
      },
      {
        id: 23,
        question: "What is try-except-finally?",
        options: [
          "Loop structure",
          "Exception handling: try code, except handle error, finally always runs",
          "Function definition",
          "Class structure"
        ],
        correctAnswer: 1,
        explanation: "try: risky code. except: handle errors. finally: cleanup code (always executes). Used for error handling."
      },
      {
        id: 24,
        question: "What is the difference between range() and xrange()?",
        options: [
          "Same",
          "Python 2: xrange() generator. Python 3: range() is generator",
          "xrange faster",
          "range deprecated"
        ],
        correctAnswer: 1,
        explanation: "Python 2: range() returns list, xrange() returns generator. Python 3: range() is generator, xrange() removed."
      },
      {
        id: 25,
        question: "What is generator in Python?",
        options: [
          "Power generator",
          "Function using yield, returns iterator",
          "List generator",
          "Random generator"
        ],
        correctAnswer: 1,
        explanation: "Generator uses yield to return values one at a time. Memory efficient. def gen(): yield 1; yield 2"
      },
      {
        id: 26,
        question: "What is the difference between yield and return?",
        options: [
          "Same",
          "return: exits function. yield: pauses, resumes later",
          "yield deprecated",
          "return better"
        ],
        correctAnswer: 1,
        explanation: "return exits function completely. yield pauses function, saves state, resumes on next call. yield makes generator."
      },
      {
        id: 27,
        question: "What is __init__ method?",
        options: [
          "Destructor",
          "Constructor, initializes object",
          "Class method",
          "Static method"
        ],
        correctAnswer: 1,
        explanation: "__init__ is constructor method, automatically called when creating object. Initializes object attributes."
      },
      {
        id: 28,
        question: "What is self in Python?",
        options: [
          "Keyword",
          "Reference to current instance",
          "Variable name",
          "Global object"
        ],
        correctAnswer: 1,
        explanation: "self represents current instance of class. Used to access instance variables and methods. Convention, not keyword."
      },
      {
        id: 29,
        question: "What is the difference between @staticmethod and @classmethod?",
        options: [
          "Same",
          "staticmethod: no self/cls. classmethod: receives cls",
          "classmethod deprecated",
          "staticmethod faster"
        ],
        correctAnswer: 1,
        explanation: "@staticmethod: no access to instance/class. @classmethod: receives cls (class reference), can access class attributes."
      },
      {
        id: 30,
        question: "What is inheritance in Python?",
        options: [
          "Money transfer",
          "Child class inherits parent: class Child(Parent)",
          "Copy class",
          "Class merge"
        ],
        correctAnswer: 1,
        explanation: "Inheritance: child class inherits attributes/methods from parent. class Child(Parent): enables code reuse."
      },
      {
        id: 31,
        question: "What is super() function?",
        options: [
          "Superior function",
          "Calls parent class method",
          "Superuser function",
          "Advanced function"
        ],
        correctAnswer: 1,
        explanation: "super() calls parent class methods. super().__init__() calls parent constructor. Used in inheritance."
      },
      {
        id: 32,
        question: "What is the output? print(len('Hello'))",
        options: [
          "4",
          "5",
          "6",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "len() returns length. 'Hello' has 5 characters. len('Hello') = 5"
      },
      {
        id: 33,
        question: "What is the output? print('a' in 'apple')",
        options: [
          "False",
          "True",
          "1",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "in checks membership. 'a' exists in 'apple'. Returns True."
      },
      {
        id: 34,
        question: "What is GIL in Python?",
        options: [
          "Graphics Library",
          "Global Interpreter Lock, allows one thread at a time",
          "General Interface Layer",
          "Global Import Lock"
        ],
        correctAnswer: 1,
        explanation: "GIL (Global Interpreter Lock) allows only one thread to execute Python bytecode at a time. Affects multi-threading."
      },
      {
        id: 35,
        question: "What is the output? print([] or 'default')",
        options: [
          "[]",
          "default",
          "Error",
          "None"
        ],
        correctAnswer: 1,
        explanation: "or returns first truthy value. [] is falsy, so returns 'default'. Similar to: x = [] or 'default'"
      },
      {
        id: 36,
        question: "What is map() function?",
        options: [
          "GPS map",
          "Applies function to each item: map(func, iterable)",
          "Dictionary method",
          "Mapping tool"
        ],
        correctAnswer: 1,
        explanation: "map(function, iterable) applies function to each item. map(str, [1,2,3]) converts numbers to strings."
      },
      {
        id: 37,
        question: "What is filter() function?",
        options: [
          "Water filter",
          "Filters items: filter(func, iterable)",
          "List method",
          "Search function"
        ],
        correctAnswer: 1,
        explanation: "filter(function, iterable) returns items where function returns True. filter(lambda x: x>0, [-1,0,1,2]) returns [1,2]"
      },
      {
        id: 38,
        question: "What is the output? print(not [])",
        options: [
          "False",
          "True",
          "Error",
          "None"
        ],
        correctAnswer: 1,
        explanation: "not inverts boolean. [] is falsy (False). not [] = True"
      },
      {
        id: 39,
        question: "What is enumerate() function?",
        options: [
          "Count function",
          "Returns index and value: enumerate(iterable)",
          "Number generator",
          "List counter"
        ],
        correctAnswer: 1,
        explanation: "enumerate() returns index and value pairs. for i, val in enumerate(['a','b']): gives (0,'a'), (1,'b')"
      },
      {
        id: 40,
        question: "What is zip() function?",
        options: [
          "Compression",
          "Combines iterables: zip([1,2], ['a','b'])",
          "Zipper function",
          "Package function"
        ],
        correctAnswer: 1,
        explanation: "zip() combines multiple iterables. zip([1,2], ['a','b']) returns [(1,'a'), (2,'b')]"
      },
      {
        id: 41,
        question: "What is __str__ vs __repr__?",
        options: [
          "Same",
          "__str__: user-friendly, __repr__: developer-friendly",
          "__str__ deprecated",
          "__repr__ faster"
        ],
        correctAnswer: 1,
        explanation: "__str__ for user (readable). __repr__ for developer (unambiguous, debugging). str() calls __str__, repr() calls __repr__"
      },
      {
        id: 42,
        question: "What is the output? print(3, 2, 1, sep='-')",
        options: [
          "3 2 1",
          "3-2-1",
          "321",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "sep parameter sets separator in print(). print(3,2,1,sep='-') outputs: 3-2-1"
      },
      {
        id: 43,
        question: "What is set in Python?",
        options: [
          "Array type",
          "Unordered unique elements: {1,2,3}",
          "Ordered collection",
          "Set method"
        ],
        correctAnswer: 1,
        explanation: "Set is unordered collection of unique elements. {1,2,3}. Duplicates removed automatically. No indexing."
      },
      {
        id: 44,
        question: "What is the output? print({1,2,2,3})",
        options: [
          "{1,2,2,3}",
          "{1, 2, 3}",
          "Error",
          "[1,2,3]"
        ],
        correctAnswer: 1,
        explanation: "Set removes duplicates. {1,2,2,3} becomes {1, 2, 3}"
      },
      {
        id: 45,
        question: "What is pass statement?",
        options: [
          "Skip loop",
          "Null operation, placeholder",
          "Pass value",
          "Continue statement"
        ],
        correctAnswer: 1,
        explanation: "pass is null operation (does nothing). Used as placeholder: def func(): pass. Prevents syntax error."
      },
      {
        id: 46,
        question: "What is the difference between break and continue?",
        options: [
          "Same",
          "break: exits loop. continue: skips iteration",
          "continue deprecated",
          "break slower"
        ],
        correctAnswer: 1,
        explanation: "break exits loop completely. continue skips current iteration, continues with next. Both used in loops."
      },
      {
        id: 47,
        question: "What is with statement?",
        options: [
          "Condition check",
          "Context manager: with open('file') as f",
          "Loop statement",
          "Import statement"
        ],
        correctAnswer: 1,
        explanation: "with is context manager for resource management. Automatically handles cleanup. with open('file') as f: auto closes file."
      },
      {
        id: 48,
        question: "What is the output? print(10 % 3)",
        options: [
          "3",
          "1",
          "3.33",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "% is modulo operator (remainder). 10 % 3 = 1 (10 divided by 3, remainder 1)"
      },
      {
        id: 49,
        question: "What is PEP 8?",
        options: [
          "Python version",
          "Python style guide",
          "Python error",
          "Python package"
        ],
        correctAnswer: 1,
        explanation: "PEP 8 is Python's official style guide. Defines coding conventions: naming, spacing, line length (79 chars)."
      },
      {
        id: 50,
        question: "What is virtual environment in Python?",
        options: [
          "VR environment",
          "Isolated Python environment: venv, virtualenv",
          "Virtual machine",
          "Cloud environment"
        ],
        correctAnswer: 1,
        explanation: "Virtual environment isolates project dependencies. Each project has own packages. Created with venv or virtualenv."
      }
    ]
  },
  {
    courseId: 'flutter',
    courseName: 'Flutter',
    questions: [
      {
        id: 1,
        question: "What is Flutter?",
        options: [
          "JavaScript framework",
          "Google's UI toolkit for cross-platform apps",
          "Animation library",
          "Testing tool"
        ],
        correctAnswer: 1,
        explanation: "Flutter is Google's open-source UI toolkit for building natively compiled apps for mobile, web, and desktop from single codebase."
      },
      {
        id: 2,
        question: "What language does Flutter use?",
        options: [
          "JavaScript",
          "Dart",
          "Java",
          "Python"
        ],
        correctAnswer: 1,
        explanation: "Flutter uses Dart programming language, developed by Google. Dart is object-oriented and compiled to native code."
      },
      {
        id: 3,
        question: "What is a Widget in Flutter?",
        options: [
          "Small app",
          "Everything is widget: UI elements",
          "Configuration file",
          "Plugin"
        ],
        correctAnswer: 1,
        explanation: "In Flutter, everything is a widget. Widgets are basic building blocks of UI - text, buttons, layouts, etc."
      },
      {
        id: 4,
        question: "What is the difference between StatelessWidget and StatefulWidget?",
        options: [
          "No difference",
          "Stateless: immutable. Stateful: mutable state",
          "Stateful deprecated",
          "Stateless faster always"
        ],
        correctAnswer: 1,
        explanation: "StatelessWidget: immutable, no state changes. StatefulWidget: mutable, can change state using setState()."
      },
      {
        id: 5,
        question: "What is setState() in Flutter?",
        options: [
          "Set variable",
          "Triggers rebuild of widget tree",
          "State initialization",
          "Configuration method"
        ],
        correctAnswer: 1,
        explanation: "setState() notifies framework that state changed, triggering widget rebuild. Used only in StatefulWidget."
      },
      {
        id: 6,
        question: "What is hot reload in Flutter?",
        options: [
          "Restart app",
          "Instantly reflects code changes without losing state",
          "Hot temperature",
          "Full rebuild"
        ],
        correctAnswer: 1,
        explanation: "Hot reload injects updated code into running app without losing state. Fast development iteration."
      },
      {
        id: 7,
        question: "What is hot restart in Flutter?",
        options: [
          "Same as hot reload",
          "Restarts app, loses state, full rebuild",
          "Reload only",
          "No difference"
        ],
        correctAnswer: 1,
        explanation: "Hot restart restarts entire app, loses state, recompiles all code. Slower than hot reload but more complete."
      },
      {
        id: 8,
        question: "What is BuildContext?",
        options: [
          "Build configuration",
          "Reference to widget's location in tree",
          "Build tool",
          "Context menu"
        ],
        correctAnswer: 1,
        explanation: "BuildContext is handle to widget's location in widget tree. Used to access theme, navigator, scaffold, etc."
      },
      {
        id: 9,
        question: "What is Scaffold widget?",
        options: [
          "Construction tool",
          "Material Design structure: AppBar, Body, FAB",
          "Layout widget",
          "Container type"
        ],
        correctAnswer: 1,
        explanation: "Scaffold provides Material Design structure: AppBar, Body, BottomNavigationBar, FloatingActionButton, Drawer."
      },
      {
        id: 10,
        question: "What is the difference between Container and SizedBox?",
        options: [
          "Same",
          "Container: styling, padding. SizedBox: fixed size only",
          "Container deprecated",
          "SizedBox complex"
        ],
        correctAnswer: 1,
        explanation: "Container: full-featured with padding, margin, decoration. SizedBox: lightweight, only for sizing. Use SizedBox for spacing."
      },
      {
        id: 11,
        question: "What is Column widget?",
        options: [
          "Table column",
          "Arranges children vertically",
          "Database column",
          "Grid layout"
        ],
        correctAnswer: 1,
        explanation: "Column arranges widgets vertically (top to bottom). Uses mainAxisAlignment and crossAxisAlignment for positioning."
      },
      {
        id: 12,
        question: "What is Row widget?",
        options: [
          "Table row",
          "Arranges children horizontally",
          "Row of data",
          "Line widget"
        ],
        correctAnswer: 1,
        explanation: "Row arranges widgets horizontally (left to right). Similar to Column but horizontal orientation."
      },
      {
        id: 13,
        question: "What is ListView?",
        options: [
          "List view only",
          "Scrollable list of widgets",
          "Array display",
          "Grid view"
        ],
        correctAnswer: 1,
        explanation: "ListView is scrollable list widget. ListView.builder() efficiently creates items on demand. Supports vertical/horizontal scrolling."
      },
      {
        id: 14,
        question: "What is the difference between ListView and ListView.builder()?",
        options: [
          "Same",
          "ListView: loads all. builder(): loads on-demand",
          "builder deprecated",
          "ListView faster"
        ],
        correctAnswer: 1,
        explanation: "ListView creates all items at once. ListView.builder() creates items lazily (on-demand), better for large lists."
      },
      {
        id: 15,
        question: "What is Expanded widget?",
        options: [
          "Expands view",
          "Fills available space in flex (Row/Column)",
          "Expanded state",
          "Full screen"
        ],
        correctAnswer: 1,
        explanation: "Expanded makes child fill available space in Row/Column. Uses flex property to control space distribution."
      },
      {
        id: 16,
        question: "What is Flexible widget?",
        options: [
          "Flexible layout",
          "Controls how child flexes in Row/Column",
          "Bendable widget",
          "Responsive widget"
        ],
        correctAnswer: 1,
        explanation: "Flexible controls how child fits in remaining space. fit: FlexFit.loose (can be smaller), fit: FlexFit.tight (like Expanded)."
      },
      {
        id: 17,
        question: "What is Stack widget?",
        options: [
          "Stack data structure",
          "Overlays widgets on top of each other",
          "Stacked layout",
          "Layer widget"
        ],
        correctAnswer: 1,
        explanation: "Stack overlays widgets. First child at bottom, last at top. Positioned widget controls exact position in Stack."
      },
      {
        id: 18,
        question: "What is Positioned widget used for?",
        options: [
          "Position anything",
          "Controls child position inside Stack",
          "Absolute position",
          "Layout positioning"
        ],
        correctAnswer: 1,
        explanation: "Positioned controls child's position within Stack using top, bottom, left, right properties. Only works inside Stack."
      },
      {
        id: 19,
        question: "What is Navigator in Flutter?",
        options: [
          "GPS navigator",
          "Manages app routes and navigation",
          "Navigation bar",
          "Menu widget"
        ],
        correctAnswer: 1,
        explanation: "Navigator manages stack of routes (screens). Navigator.push() opens screen, Navigator.pop() closes screen."
      },
      {
        id: 20,
        question: "What is the difference between Navigator.push() and Navigator.pushNamed()?",
        options: [
          "Same",
          "push(): direct route. pushNamed(): named route",
          "pushNamed deprecated",
          "push faster"
        ],
        correctAnswer: 1,
        explanation: "Navigator.push() takes route object directly. Navigator.pushNamed() uses named routes defined in MaterialApp."
      },
      {
        id: 21,
        question: "What is MaterialApp?",
        options: [
          "Material design",
          "Root widget with routing, theme, title",
          "Material library",
          "App configuration"
        ],
        correctAnswer: 1,
        explanation: "MaterialApp is root widget providing Material Design, routing, theme, localization. Wraps entire app."
      },
      {
        id: 22,
        question: "What is InkWell widget?",
        options: [
          "Ink effect",
          "Material ripple effect on tap",
          "Water effect",
          "Ink drawing"
        ],
        correctAnswer: 1,
        explanation: "InkWell adds Material ripple effect on tap. GestureDetector alternative with visual feedback. Used for clickable widgets."
      },
      {
        id: 23,
        question: "What is GestureDetector?",
        options: [
          "Motion sensor",
          "Detects gestures: tap, drag, swipe",
          "Touch handler",
          "Gesture animation"
        ],
        correctAnswer: 1,
        explanation: "GestureDetector detects gestures without visual feedback. Handles tap, double tap, long press, drag, swipe, etc."
      },
      {
        id: 24,
        question: "What is FutureBuilder?",
        options: [
          "Future prediction",
          "Builds widget based on Future result",
          "Time widget",
          "Async builder"
        ],
        correctAnswer: 1,
        explanation: "FutureBuilder rebuilds based on Future status. Shows loading, error, or data. Used for async operations like API calls."
      },
      {
        id: 25,
        question: "What is StreamBuilder?",
        options: [
          "Stream video",
          "Builds widget based on Stream events",
          "Data stream",
          "Real-time builder"
        ],
        correctAnswer: 1,
        explanation: "StreamBuilder rebuilds on Stream events. Handles multiple async values over time. Used for real-time data."
      },
      {
        id: 26,
        question: "What is async and await in Dart?",
        options: [
          "Synchronous code",
          "async: marks function. await: waits for Future",
          "Async library",
          "Await method"
        ],
        correctAnswer: 1,
        explanation: "async marks function as asynchronous. await pauses execution until Future completes. Used for async operations."
      },
      {
        id: 27,
        question: "What is Future in Dart?",
        options: [
          "Future time",
          "Represents async operation result",
          "Promise type",
          "Delayed execution"
        ],
        correctAnswer: 1,
        explanation: "Future represents value that will be available later. Used for async operations. Similar to Promise in JavaScript."
      },
      {
        id: 28,
        question: "What is Stream in Dart?",
        options: [
          "Water stream",
          "Sequence of async events",
          "Data flow",
          "Stream video"
        ],
        correctAnswer: 1,
        explanation: "Stream is sequence of async events over time. Can emit multiple values. Used for real-time data like WebSocket."
      },
      {
        id: 29,
        question: "What is Provider in Flutter?",
        options: [
          "Service provider",
          "State management solution",
          "Data provider",
          "API provider"
        ],
        correctAnswer: 1,
        explanation: "Provider is recommended state management. Uses InheritedWidget. Efficient, simple dependency injection and state management."
      },
      {
        id: 30,
        question: "What is setState() vs Provider?",
        options: [
          "Same",
          "setState: local state. Provider: app-wide state",
          "Provider deprecated",
          "setState better"
        ],
        correctAnswer: 1,
        explanation: "setState() for local widget state. Provider for shared state across widgets. Provider more scalable for complex apps."
      },
      {
        id: 31,
        question: "What is BLoC pattern?",
        options: [
          "Blocking pattern",
          "Business Logic Component, separates UI and logic",
          "Block pattern",
          "BLoC widget"
        ],
        correctAnswer: 1,
        explanation: "BLoC (Business Logic Component) separates business logic from UI using Streams. Popular state management pattern."
      },
      {
        id: 32,
        question: "What is GetX?",
        options: [
          "Get API",
          "State management, routing, dependency injection",
          "HTTP client",
          "Animation library"
        ],
        correctAnswer: 1,
        explanation: "GetX is lightweight solution for state management, routing, dependency injection. Simple syntax, high performance."
      },
      {
        id: 33,
        question: "What is pubspec.yaml?",
        options: [
          "YAML file",
          "Defines dependencies, assets, app metadata",
          "Configuration only",
          "Package file"
        ],
        correctAnswer: 1,
        explanation: "pubspec.yaml defines app metadata, dependencies, assets (images, fonts), Flutter SDK version. Core configuration file."
      },
      {
        id: 34,
        question: "What is the purpose of keys in Flutter?",
        options: [
          "Encryption keys",
          "Preserve state, identify widgets in tree",
          "Key-value pairs",
          "Widget keys"
        ],
        correctAnswer: 1,
        explanation: "Keys preserve state when widgets move in tree. GlobalKey, ValueKey, ObjectKey, UniqueKey. Essential for complex UIs."
      },
      {
        id: 35,
        question: "What is MediaQuery?",
        options: [
          "Media player",
          "Gets device screen size, orientation",
          "Query data",
          "Media library"
        ],
        correctAnswer: 1,
        explanation: "MediaQuery provides device screen info: size, orientation, padding, text scale. Used for responsive design."
      },
      {
        id: 36,
        question: "What is LayoutBuilder?",
        options: [
          "Build layouts",
          "Provides parent constraints to build responsive UI",
          "Layout generator",
          "Builder pattern"
        ],
        correctAnswer: 1,
        explanation: "LayoutBuilder provides parent widget's constraints. Builds different UI based on available space. Essential for responsive design."
      },
      {
        id: 37,
        question: "What is const constructor in Flutter?",
        options: [
          "Constant value",
          "Creates compile-time constant, improves performance",
          "Constructor type",
          "Immutable constructor"
        ],
        correctAnswer: 1,
        explanation: "const creates compile-time constants. Widget reused if same parameters. Improves performance by reducing rebuilds."
      },
      {
        id: 38,
        question: "What is the difference between final and const?",
        options: [
          "Same",
          "final: runtime constant. const: compile-time constant",
          "const deprecated",
          "final faster"
        ],
        correctAnswer: 1,
        explanation: "final: value set at runtime, cannot change. const: value set at compile-time, deeply immutable. const more restrictive."
      },
      {
        id: 39,
        question: "What is initState() in Flutter?",
        options: [
          "Initialize app",
          "Called once when StatefulWidget created",
          "Init method",
          "State initialization"
        ],
        correctAnswer: 1,
        explanation: "initState() called once when StatefulWidget inserted in tree. Used for initialization: controllers, subscriptions, API calls."
      },
      {
        id: 40,
        question: "What is dispose() method?",
        options: [
          "Dispose widget",
          "Cleanup when widget removed: controllers, listeners",
          "Delete method",
          "Disposal function"
        ],
        correctAnswer: 1,
        explanation: "dispose() called when widget removed from tree. Cleanup: dispose controllers, cancel subscriptions, prevent memory leaks."
      },
      {
        id: 41,
        question: "What is AnimatedContainer?",
        options: [
          "Container with animation",
          "Animates property changes automatically",
          "Animation widget",
          "Animated layout"
        ],
        correctAnswer: 1,
        explanation: "AnimatedContainer automatically animates changes to properties like color, size, padding. Simple implicit animation."
      },
      {
        id: 42,
        question: "What is Hero animation?",
        options: [
          "Superhero animation",
          "Animates widget between screens",
          "Hero widget",
          "Transition effect"
        ],
        correctAnswer: 1,
        explanation: "Hero animation smoothly transitions widget between screens. Wrap widgets with Hero(tag: 'same-tag') on both screens."
      },
      {
        id: 43,
        question: "What is Tween in Flutter?",
        options: [
          "Between values",
          "Defines animation range: Tween(begin: 0, end: 1)",
          "Twin animation",
          "Two values"
        ],
        correctAnswer: 1,
        explanation: "Tween defines range of values for animation. Tween<double>(begin: 0, end: 100) interpolates between 0 and 100."
      },
      {
        id: 44,
        question: "What is AnimationController?",
        options: [
          "Animation control",
          "Controls animation duration, direction, status",
          "Controller widget",
          "Animation manager"
        ],
        correctAnswer: 1,
        explanation: "AnimationController controls animation: duration, forward(), reverse(), repeat(). Requires TickerProvider (SingleTickerProviderStateMixin)."
      },
      {
        id: 45,
        question: "What is SingleChildScrollView?",
        options: [
          "Single scroll",
          "Scrollable widget with single child",
          "One child only",
          "Scroll view"
        ],
        correctAnswer: 1,
        explanation: "SingleChildScrollView makes single child scrollable. Used when content might overflow. Column inside it makes entire column scrollable."
      },
      {
        id: 46,
        question: "What is GridView?",
        options: [
          "Grid layout",
          "Scrollable 2D array of widgets",
          "Table view",
          "Matrix widget"
        ],
        correctAnswer: 1,
        explanation: "GridView displays widgets in 2D grid. GridView.builder() for dynamic items. GridView.count() for fixed columns."
      },
      {
        id: 47,
        question: "What is TextField widget?",
        options: [
          "Text display",
          "Text input field",
          "Text area",
          "Text editor"
        ],
        correctAnswer: 1,
        explanation: "TextField accepts text input. TextEditingController manages text. Properties: decoration, onChanged, keyboardType, obscureText."
      },
      {
        id: 48,
        question: "What is Form widget?",
        options: [
          "HTML form",
          "Groups and validates TextFormFields",
          "Form layout",
          "Input container"
        ],
        correctAnswer: 1,
        explanation: "Form groups TextFormFields for validation. FormState with GlobalKey validates all fields. Used for login, registration forms."
      },
      {
        id: 49,
        question: "What is SliverAppBar?",
        options: [
          "Sliver widget",
          "Collapsing AppBar in CustomScrollView",
          "App bar variant",
          "Sliding bar"
        ],
        correctAnswer: 1,
        explanation: "SliverAppBar is scrollable AppBar that can expand, collapse, float. Used inside CustomScrollView with other Slivers."
      },
      {
        id: 50,
        question: "What is the difference between main() and runApp()?",
        options: [
          "Same",
          "main(): entry point. runApp(): inflates widget tree",
          "runApp deprecated",
          "main runs app"
        ],
        correctAnswer: 1,
        explanation: "main() is Dart entry point. runApp() takes root widget and inflates it, attaching to screen. runApp() called inside main()."
      }
    ]
  },
  {
    courseId: 'dart',
    courseName: 'Dart',
    questions: [
      {
        id: 1,
        question: "What is Dart?",
        options: [
          "JavaScript framework",
          "Google's language for Flutter, web, server",
          "Database language",
          "Dart board game"
        ],
        correctAnswer: 1,
        explanation: "Dart is object-oriented, garbage-collected language by Google. Used for Flutter, web, server. Compiled to native code."
      },
      {
        id: 2,
        question: "What is the output? print(5 ~/ 2);",
        options: [
          "2.5",
          "2",
          "3",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "~/ is integer division operator in Dart. 5 ~/ 2 = 2 (discards decimal)."
      },
      {
        id: 3,
        question: "What is var, final, and const in Dart?",
        options: [
          "All same",
          "var: mutable. final: runtime constant. const: compile-time constant",
          "var deprecated",
          "const faster only"
        ],
        correctAnswer: 1,
        explanation: "var: mutable. final: runtime constant, immutable. const: compile-time constant, deeply immutable."
      },
      {
        id: 4,
        question: "What is the output? print(5 ~/ 2);",
        options: [
          "2.5",
          "2",
          "3",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "~/ is integer division operator. 5 ~/ 2 = 2 (discards decimal). Regular / gives 2.5."
      },
      {
        id: 5,
        question: "What is the output? print('Hello'.runtimeType)",
        options: [
          "String",
          "String (Dart type)",
          "Text",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "runtimeType returns object's type. 'Hello'.runtimeType returns String."
      },
      {
        id: 6,
        question: "What is var, final, and const?",
        options: [
          "All same",
          "var: mutable. final: runtime constant. const: compile-time constant",
          "Only naming difference",
          "var deprecated"
        ],
        correctAnswer: 1,
        explanation: "var: mutable. final: runtime constant (set once). const: compile-time constant (deeply immutable)."
      },
      {
        id: 7,
        question: "What is the output? print(5 ~/ 2);",
        options: [
          "2.5",
          "2",
          "3",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "~/ is integer division operator in Dart. 5 ~/ 2 = 2 (returns integer, not float)."
      },
      {
        id: 8,
        question: "What is the output? var x = null; print(x ?? 'default');",
        options: [
          "null",
          "default",
          "Error",
          "0"
        ],
        correctAnswer: 1,
        explanation: "?? is null-aware operator. Returns right value if left is null. x ?? 'default' returns 'default' when x is null."
      },
      {
        id: 9,
        question: "What is var vs dynamic vs Object?",
        options: [
          "All same",
          "var: type inferred. dynamic: any type. Object: base class",
          "var deprecated",
          "No difference"
        ],
        correctAnswer: 1,
        explanation: "var: type inferred at compile-time. dynamic: type checked at runtime. Object: base class, requires casting."
      },
      {
        id: 10,
        question: "What is the output? print(5 ~/ 2);",
        options: [
          "2.5",
          "2",
          "3",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "~/ is integer division operator. 5 ~/ 2 = 2 (discards decimal). Regular / gives 2.5"
      },
      {
        id: 11,
        question: "What is final vs const in Dart?",
        options: [
          "Same",
          "final: runtime constant. const: compile-time constant",
          "const deprecated",
          "final better"
        ],
        correctAnswer: 1,
        explanation: "final: value set at runtime, immutable. const: compile-time constant, deeply immutable. const more restrictive."
      },
      {
        id: 12,
        question: "What is var vs dynamic vs Object?",
        options: [
          "All same",
          "var: inferred type. dynamic: any type. Object: base class",
          "var deprecated",
          "No difference"
        ],
        correctAnswer: 1,
        explanation: "var: type inferred at compile-time. dynamic: type checked at runtime. Object: base class of all types."
      },
      {
        id: 13,
        question: "What is the output? print(5 ~/ 2);",
        options: [
          "2.5",
          "2",
          "3",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "~/ is integer division operator in Dart. 5 ~/ 2 = 2 (discards decimal, returns int)."
      },
      {
        id: 14,
        question: "What is the difference between final and const?",
        options: [
          "Same",
          "final: runtime. const: compile-time constant",
          "const deprecated",
          "final faster"
        ],
        correctAnswer: 1,
        explanation: "final: value set at runtime, immutable. const: compile-time constant, deeply immutable. const more restrictive."
      },
      {
        id: 15,
        question: "What is var, final, and const?",
        options: [
          "All same",
          "var: mutable. final: runtime constant. const: compile-time constant",
          "No difference",
          "All deprecated"
        ],
        correctAnswer: 1,
        explanation: "var: mutable variable. final: runtime constant (set once). const: compile-time constant (deeply immutable)."
      },
      {
        id: 16,
        question: "What is the output? print(5 / 2);",
        options: [
          "2",
          "2.5",
          "3",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "/ is division operator, returns double. 5 / 2 = 2.5. For integer division use ~/: 5 ~/ 2 = 2"
      },
      {
        id: 17,
        question: "What is the output? print(5 ~/ 2);",
        options: [
          "2.5",
          "2",
          "3",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "~/ is integer division (truncating division). 5 ~/ 2 = 2. Discards decimal part."
      },
      {
        id: 18,
        question: "What is var, final, and const in Dart?",
        options: [
          "All same",
          "var: mutable. final: runtime constant. const: compile-time constant",
          "var deprecated",
          "const fastest"
        ],
        correctAnswer: 1,
        explanation: "var: type inferred, can reassign. final: set once at runtime. const: compile-time constant, deeply immutable."
      },
      {
        id: 19,
        question: "What is the output? print(5 ~/ 2);",
        options: [
          "2.5",
          "2",
          "3",
          "Error"
        ],
        correctAnswer: 1,
        explanation: "~/ is integer division operator. 5 ~/ 2 = 2. Discards decimal part."
      },
      {
        id: 20,
        question: "What is null safety in Dart?",
        options: [
          "Null check",
          "Variables non-nullable by default, ? for nullable",
          "Safety feature",
          "Null handling"
        ],
        correctAnswer: 1,
        explanation: "Null safety prevents null reference errors. int x (non-nullable), int? y (nullable). Use ! to assert non-null."
      },
      {
        id: 21,
        question: "What is the difference between ?? and ??=?",
        options: [
          "Same",
          "??: null coalescing. ??=: assign if null",
          "?? deprecated",
          "??= faster"
        ],
        correctAnswer: 1,
        explanation: "?? returns right if left is null: x ?? 5. ??= assigns if null: x ??= 5 (assigns only if x is null)."
      },
      {
        id: 22,
        question: "What is late keyword?",
        options: [
          "Delayed execution",
          "Lazy initialization, non-nullable variable initialized later",
          "Late binding",
          "Time delay"
        ],
        correctAnswer: 1,
        explanation: "late delays initialization. late String name; initialized later. For non-nullable variables that can't be initialized immediately."
      },
      {
        id: 23,
        question: "What is required keyword?",
        options: [
          "Required import",
          "Makes named parameter mandatory",
          "Validation keyword",
          "Required field"
        ],
        correctAnswer: 1,
        explanation: "required makes named parameter mandatory. void func({required String name}). Must provide value when calling."
      },
      {
        id: 24,
        question: "What is the difference between List and Set?",
        options: [
          "Same",
          "List: ordered, duplicates allowed. Set: unordered, unique",
          "Set deprecated",
          "List faster"
        ],
        correctAnswer: 1,
        explanation: "List: ordered collection, allows duplicates [1,2,2]. Set: unordered, unique elements {1,2,3}. Set faster for contains()."
      },
      {
        id: 25,
        question: "What is Map in Dart?",
        options: [
          "Geography map",
          "Key-value pairs: {'key': 'value'}",
          "Array map",
          "Map function"
        ],
        correctAnswer: 1,
        explanation: "Map stores key-value pairs: {'name': 'John', 'age': 30}. Keys must be unique. Similar to dictionary/object."
      },
      {
        id: 26,
        question: "What is the output? print([1,2,3]..add(4));",
        options: [
          "Error",
          "[1, 2, 3, 4]",
          "4",
          "[1,2,3]"
        ],
        correctAnswer: 1,
        explanation: ".. is cascade operator. Performs operations on same object, returns object. [1,2,3]..add(4) returns [1,2,3,4]."
      },
      {
        id: 27,
        question: "What is spread operator in Dart?",
        options: [
          "... operator",
          "...: spreads iterable elements [...list]",
          "Spread function",
          "Distribution operator"
        ],
        correctAnswer: 1,
        explanation: "... spreads elements: [1, ...list, 4]. Unpacks iterable into individual elements. ...? for nullable."
      },
      {
        id: 28,
        question: "What is collection if?",
        options: [
          "If statement",
          "Conditional element in collection: [if(condition) item]",
          "Collection check",
          "If function"
        ],
        correctAnswer: 1,
        explanation: "Collection if adds element conditionally: [1, if(isTrue) 2, 3]. Cleaner than building list conditionally."
      },
      {
        id: 29,
        question: "What is collection for?",
        options: [
          "For loop",
          "Generates elements in collection: [for(var i in list) i*2]",
          "Collection iteration",
          "For each"
        ],
        correctAnswer: 1,
        explanation: "Collection for generates elements: [for(var i in [1,2,3]) i*2] creates [2,4,6]. Inline list generation."
      },
      {
        id: 30,
        question: "What is typedef in Dart?",
        options: [
          "Type definition",
          "Creates function type alias",
          "Variable type",
          "Type declaration"
        ],
        correctAnswer: 1,
        explanation: "typedef creates function type alias: typedef IntOperation = int Function(int, int). Simplifies function signatures."
      },
      {
        id: 31,
        question: "What is mixin in Dart?",
        options: [
          "Mix classes",
          "Reuses class code without inheritance: with keyword",
          "Mixed type",
          "Class combination"
        ],
        correctAnswer: 1,
        explanation: "Mixin reuses code across class hierarchies. mixin MyMixin {...}. Use with: class A with MyMixin. Multiple mixins allowed."
      },
      {
        id: 32,
        question: "What is the difference between extends and implements?",
        options: [
          "Same",
          "extends: inherits. implements: must override all methods",
          "implements deprecated",
          "extends faster"
        ],
        correctAnswer: 1,
        explanation: "extends: inherits implementation. implements: must provide all method implementations (interface). Can implement multiple."
      },
      {
        id: 33,
        question: "What is abstract class?",
        options: [
          "Abstract concept",
          "Cannot instantiate, may have abstract methods",
          "Incomplete class",
          "Template class"
        ],
        correctAnswer: 1,
        explanation: "abstract class cannot be instantiated. Can have abstract methods (no body) and concrete methods. Subclass must implement abstract methods."
      },
      {
        id: 34,
        question: "What is interface in Dart?",
        options: [
          "Interface keyword",
          "Any class can be interface using implements",
          "Special class type",
          "Abstract interface"
        ],
        correctAnswer: 1,
        explanation: "Dart has no interface keyword. Any class is implicit interface. Use implements to treat class as interface."
      },
      {
        id: 35,
        question: "What is factory constructor?",
        options: [
          "Factory pattern",
          "Returns existing instance or subclass instance",
          "Object factory",
          "Creation method"
        ],
        correctAnswer: 1,
        explanation: "factory constructor can return existing instance or subclass. factory MyClass() {...}. Used for caching, singletons."
      },
      {
        id: 36,
        question: "What is named constructor?",
        options: [
          "Constructor with name",
          "Additional constructors: ClassName.namedConstructor()",
          "Named parameters",
          "Constructor naming"
        ],
        correctAnswer: 1,
        explanation: "Named constructor provides alternate ways to create object: Point.origin(), Point.polar(). Class can have multiple."
      },
      {
        id: 37,
        question: "What is getter and setter?",
        options: [
          "Get and set methods",
          "Computed properties: get name => _name; set name(val) => _name = val",
          "Accessor methods",
          "Property methods"
        ],
        correctAnswer: 1,
        explanation: "Getter: computed property (get name => _name). Setter: validates/transforms (set name(val) => _name = val). Access like properties."
      },
      {
        id: 38,
        question: "What is _ (underscore) prefix?",
        options: [
          "Private naming",
          "Makes member library-private",
          "Underscore variable",
          "Special syntax"
        ],
        correctAnswer: 1,
        explanation: "_ prefix makes identifier library-private. _variable, _function(), _ClassName. Not accessible outside library."
      },
      {
        id: 39,
        question: "What is extension in Dart?",
        options: [
          "File extension",
          "Adds methods to existing class: extension on String",
          "Class extension",
          "Extends functionality"
        ],
        correctAnswer: 1,
        explanation: "Extension adds methods to existing types without modifying them. extension on String { ... }. Cannot add fields."
      },
      {
        id: 40,
        question: "What is async* in Dart?",
        options: [
          "Async function",
          "Async generator, returns Stream",
          "Multiple async",
          "Async iterator"
        ],
        correctAnswer: 1,
        explanation: "async* creates async generator returning Stream. Stream<int> count() async* { yield 1; yield 2; }. Use await for."
      },
      {
        id: 41,
        question: "What is sync* in Dart?",
        options: [
          "Sync function",
          "Sync generator, returns Iterable",
          "Synchronous mode",
          "Sync iterator"
        ],
        correctAnswer: 1,
        explanation: "sync* creates sync generator returning Iterable. Iterable<int> count() sync* { yield 1; yield 2; }. Lazy evaluation."
      },
      {
        id: 42,
        question: "What is yield keyword?",
        options: [
          "Yield result",
          "Emits value in generator function",
          "Return alternative",
          "Yield control"
        ],
        correctAnswer: 1,
        explanation: "yield emits value in generator (sync*, async*). yield value; pauses, returns value. yield* delegates to another generator."
      },
      {
        id: 43,
        question: "What is the difference between Future and Stream?",
        options: [
          "Same",
          "Future: single async value. Stream: multiple async values",
          "Stream deprecated",
          "Future faster"
        ],
        correctAnswer: 1,
        explanation: "Future: single async result. Stream: sequence of async events over time. Future for single API call, Stream for real-time data."
      },
      {
        id: 44,
        question: "What is async and await?",
        options: [
          "Async keywords",
          "async: marks function. await: waits for Future",
          "Asynchronous mode",
          "Wait function"
        ],
        correctAnswer: 1,
        explanation: "async marks function asynchronous (returns Future). await pauses until Future completes. await only in async function."
      },
      {
        id: 45,
        question: "What is runtimeType?",
        options: [
          "Runtime check",
          "Returns object's actual type at runtime",
          "Type property",
          "Runtime mode"
        ],
        correctAnswer: 1,
        explanation: "runtimeType returns object's actual runtime type. object.runtimeType. Returns Type object. Used for debugging."
      },
      {
        id: 46,
        question: "What is as keyword?",
        options: [
          "Alias",
          "Type cast: obj as String",
          "Assignment",
          "Assert"
        ],
        correctAnswer: 1,
        explanation: "as performs type cast. obj as String casts obj to String. Throws error if cast fails. Use is to check first."
      },
      {
        id: 47,
        question: "What is is keyword?",
        options: [
          "Equality check",
          "Type check: obj is String returns bool",
          "Instance check",
          "Identity check"
        ],
        correctAnswer: 1,
        explanation: "is checks if object is of type. obj is String returns true/false. obj is! String checks negation."
      },
      {
        id: 48,
        question: "What is operator overloading?",
        options: [
          "Too many operators",
          "Redefining operators: operator +(other) => ...",
          "Operator methods",
          "Multiple operators"
        ],
        correctAnswer: 1,
        explanation: "Operator overloading redefines operators for custom types. operator +(other) => Point(x+other.x, y+other.y). Makes code intuitive."
      },
      {
        id: 49,
        question: "What is noSuchMethod()?",
        options: [
          "Error method",
          "Called when accessing non-existent method",
          "Missing method",
          "Method not found"
        ],
        correctAnswer: 1,
        explanation: "noSuchMethod() invoked when accessing non-existent method. Override for dynamic behavior, proxies. Used rarely."
      },
      {
        id: 50,
        question: "What is covariant keyword?",
        options: [
          "Variant type",
          "Allows subclass to narrow parameter type",
          "Type variation",
          "Covariance rule"
        ],
        correctAnswer: 1,
        explanation: "covariant allows overriding method to accept subtype parameter. void method(covariant Animal a). Breaks type safety, use carefully."
      }
    ]
  },
  {
    courseId: 'mysql',
    courseName: 'MySQL',
    questions: [
      {
        id: 1,
        question: "What is MySQL?",
        options: [
          "NoSQL database",
          "Open-source RDBMS by Oracle",
          "Programming language",
          "SQL framework"
        ],
        correctAnswer: 1,
        explanation: "MySQL is open-source relational database management system. Uses SQL. Most popular for web applications."
      },
      {
        id: 2,
        question: "What is the difference between DELETE and TRUNCATE?",
        options: [
          "Same",
          "DELETE: WHERE clause, rollback. TRUNCATE: all rows, no rollback",
          "TRUNCATE deprecated",
          "DELETE faster"
        ],
        correctAnswer: 1,
        explanation: "DELETE: removes rows with WHERE, can rollback, slower. TRUNCATE: removes all rows, cannot rollback, resets auto_increment, faster."
      },
      {
        id: 3,
        question: "What is PRIMARY KEY?",
        options: [
          "First key",
          "Unique identifier, NOT NULL, one per table",
          "Main key",
          "Important key"
        ],
        correctAnswer: 1,
        explanation: "PRIMARY KEY uniquely identifies each row. Cannot be NULL. One per table. Auto-indexed. Often auto_increment."
      },
      {
        id: 4,
        question: "What is FOREIGN KEY?",
        options: [
          "External key",
          "Links tables, references PRIMARY KEY of another table",
          "Outside key",
          "Secondary key"
        ],
        correctAnswer: 1,
        explanation: "FOREIGN KEY creates relationship between tables. References PRIMARY KEY of another table. Maintains referential integrity."
      },
      {
        id: 5,
        question: "What is the difference between INNER JOIN and LEFT JOIN?",
        options: [
          "Same",
          "INNER: matching rows. LEFT: all left + matching right",
          "LEFT deprecated",
          "INNER faster only"
        ],
        correctAnswer: 1,
        explanation: "INNER JOIN: returns only matching rows from both tables. LEFT JOIN: all rows from left table + matching from right (NULL if no match)."
      },
      {
        id: 6,
        question: "What is INDEX in MySQL?",
        options: [
          "Table position",
          "Data structure for faster queries, trade-off: slower writes",
          "Row number",
          "Primary key"
        ],
        correctAnswer: 1,
        explanation: "INDEX creates data structure (B-tree) for faster SELECT queries. Slows INSERT/UPDATE. Create on frequently queried columns."
      },
      {
        id: 7,
        question: "What is the difference between CHAR and VARCHAR?",
        options: [
          "Same",
          "CHAR: fixed length. VARCHAR: variable length",
          "VARCHAR deprecated",
          "CHAR faster only"
        ],
        correctAnswer: 1,
        explanation: "CHAR(n): fixed length, pads spaces. VARCHAR(n): variable, stores actual length. VARCHAR saves space, CHAR faster for fixed data."
      },
      {
        id: 8,
        question: "What is UNIQUE constraint?",
        options: [
          "Unique table",
          "Ensures column has unique values, allows one NULL",
          "Primary key",
          "Unique index"
        ],
        correctAnswer: 1,
        explanation: "UNIQUE ensures all values in column are different. Unlike PRIMARY KEY, allows one NULL. Can have multiple UNIQUE columns."
      },
      {
        id: 9,
        question: "What is AUTO_INCREMENT?",
        options: [
          "Auto update",
          "Generates unique number automatically, usually for PRIMARY KEY",
          "Increment function",
          "Counter"
        ],
        correctAnswer: 1,
        explanation: "AUTO_INCREMENT generates unique incremental number for new rows. Typically used with PRIMARY KEY. Starts at 1."
      },
      {
        id: 10,
        question: "What is the difference between WHERE and HAVING?",
        options: [
          "Same",
          "WHERE: filters rows. HAVING: filters groups after GROUP BY",
          "HAVING deprecated",
          "WHERE faster only"
        ],
        correctAnswer: 1,
        explanation: "WHERE: filters individual rows before grouping. HAVING: filters grouped results after GROUP BY. HAVING can use aggregate functions."
      },
      {
        id: 11,
        question: "What is normalization?",
        options: [
          "Normal data",
          "Organizing data to reduce redundancy: 1NF, 2NF, 3NF",
          "Data formatting",
          "Table organization"
        ],
        correctAnswer: 1,
        explanation: "Normalization reduces data redundancy and improves integrity. Forms: 1NF (atomic values), 2NF (no partial dependency), 3NF (no transitive dependency)."
      },
      {
        id: 12,
        question: "What is denormalization?",
        options: [
          "Opposite normalization",
          "Adding redundancy for performance",
          "Breaking rules",
          "Unnormalizing data"
        ],
        correctAnswer: 1,
        explanation: "Denormalization adds redundant data to improve read performance. Reduces JOINs. Trade-off: more storage, complex updates."
      },
      {
        id: 13,
        question: "What is a VIEW?",
        options: [
          "Database view",
          "Virtual table based on SELECT query",
          "Table copy",
          "Display format"
        ],
        correctAnswer: 1,
        explanation: "VIEW is virtual table from SELECT query. Doesn't store data (except materialized views). Simplifies complex queries, provides security."
      },
      {
        id: 14,
        question: "What is TRANSACTION?",
        options: [
          "Database operation",
          "Group of queries: all succeed or all fail (ACID)",
          "Single query",
          "Data transfer"
        ],
        correctAnswer: 1,
        explanation: "Transaction is logical unit of work. All queries succeed (COMMIT) or all fail (ROLLBACK). Ensures data integrity (ACID properties)."
      },
      {
        id: 15,
        question: "What are ACID properties?",
        options: [
          "Database properties",
          "Atomicity, Consistency, Isolation, Durability",
          "Transaction rules",
          "Data properties"
        ],
        correctAnswer: 1,
        explanation: "ACID: Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent transactions), Durability (persists after commit)."
      },
      {
        id: 16,
        question: "What is COMMIT?",
        options: [
          "Save changes",
          "Permanently saves transaction changes",
          "Submit query",
          "Confirm operation"
        ],
        correctAnswer: 1,
        explanation: "COMMIT saves all changes in current transaction permanently. After COMMIT, changes cannot be rolled back."
      },
      {
        id: 17,
        question: "What is ROLLBACK?",
        options: [
          "Undo changes",
          "Reverts transaction changes to last COMMIT",
          "Roll back data",
          "Cancel operation"
        ],
        correctAnswer: 1,
        explanation: "ROLLBACK undoes all changes in current transaction. Restores database to state before transaction started."
      },
      {
        id: 18,
        question: "What is stored procedure?",
        options: [
          "Stored query",
          "Precompiled SQL code stored in database",
          "Saved procedure",
          "Database function"
        ],
        correctAnswer: 1,
        explanation: "Stored procedure is precompiled SQL code stored in database. Accepts parameters, executes multiple queries. Improves performance, reusability."
      },
      {
        id: 19,
        question: "What is TRIGGER?",
        options: [
          "Event trigger",
          "Auto-executes on INSERT/UPDATE/DELETE",
          "Activation function",
          "Database event"
        ],
        correctAnswer: 1,
        explanation: "Trigger automatically executes on table event (INSERT, UPDATE, DELETE). BEFORE or AFTER trigger. Used for validation, auditing."
      },
      {
        id: 20,
        question: "What is the difference between PROCEDURE and FUNCTION?",
        options: [
          "Same",
          "PROCEDURE: no return. FUNCTION: returns value",
          "FUNCTION deprecated",
          "PROCEDURE faster"
        ],
        correctAnswer: 1,
        explanation: "Stored procedure: performs action, may return output params. Function: must return single value, used in SELECT. Function more restrictive."
      },
      {
        id: 21,
        question: "What is JOIN?",
        options: [
          "Combine tables",
          "Combines rows from tables based on condition",
          "Merge data",
          "Link tables"
        ],
        correctAnswer: 1,
        explanation: "JOIN combines rows from multiple tables based on related column. Types: INNER, LEFT, RIGHT, CROSS, SELF JOIN."
      },
      {
        id: 22,
        question: "What is SELF JOIN?",
        options: [
          "Join itself",
          "Joins table to itself using alias",
          "Recursive join",
          "Same table join"
        ],
        correctAnswer: 1,
        explanation: "SELF JOIN joins table to itself using different aliases. Used for hierarchical data: employees and managers in same table."
      },
      {
        id: 23,
        question: "What is CROSS JOIN?",
        options: [
          "Cross tables",
          "Cartesian product: all combinations",
          "Cross multiply",
          "Join all"
        ],
        correctAnswer: 1,
        explanation: "CROSS JOIN returns Cartesian product. Every row from first table with every row from second. If A has 3, B has 4 → 12 rows."
      },
      {
        id: 24,
        question: "What is subquery?",
        options: [
          "Sub-level query",
          "Query inside another query",
          "Nested query",
          "Inner query"
        ],
        correctAnswer: 1,
        explanation: "Subquery is query nested inside another query. Can be in SELECT, FROM, WHERE. Returns data used by outer query."
      },
      {
        id: 25,
        question: "What is UNION?",
        options: [
          "Combine queries",
          "Combines results, removes duplicates",
          "Merge results",
          "Join queries"
        ],
        correctAnswer: 1,
        explanation: "UNION combines results from multiple SELECT queries. Removes duplicates. Column count and types must match. UNION ALL keeps duplicates."
      },
      {
        id: 26,
        question: "What is the difference between UNION and UNION ALL?",
        options: [
          "Same",
          "UNION: removes duplicates. UNION ALL: keeps all",
          "UNION ALL deprecated",
          "UNION faster"
        ],
        correctAnswer: 1,
        explanation: "UNION removes duplicate rows (slower). UNION ALL keeps all rows including duplicates (faster). Use UNION ALL when duplicates OK."
      },
      {
        id: 27,
        question: "What is GROUP BY?",
        options: [
          "Group data",
          "Groups rows by column, use with aggregate functions",
          "Organize rows",
          "Classify data"
        ],
        correctAnswer: 1,
        explanation: "GROUP BY groups rows with same values. Used with aggregate functions (COUNT, SUM, AVG). SELECT dept, COUNT(*) FROM emp GROUP BY dept."
      },
      {
        id: 28,
        question: "What is ORDER BY?",
        options: [
          "Order data",
          "Sorts result: ASC (default) or DESC",
          "Arrange rows",
          "Sort query"
        ],
        correctAnswer: 1,
        explanation: "ORDER BY sorts result set by column(s). ASC (ascending, default) or DESC (descending). Can order by multiple columns."
      },
      {
        id: 29,
        question: "What is LIMIT?",
        options: [
          "Limit results",
          "Restricts number of rows returned",
          "Maximum rows",
          "Result limit"
        ],
        correctAnswer: 1,
        explanation: "LIMIT restricts number of rows returned. LIMIT 10 returns first 10 rows. LIMIT 10, 5 skips 10, returns next 5 (pagination)."
      },
      {
        id: 30,
        question: "What is aggregate function?",
        options: [
          "Function type",
          "Performs calculation on set: COUNT, SUM, AVG, MIN, MAX",
          "Aggregate data",
          "Calculation function"
        ],
        correctAnswer: 1,
        explanation: "Aggregate function calculates on multiple rows, returns single value. COUNT(), SUM(), AVG(), MIN(), MAX(). Used with GROUP BY."
      },
      {
        id: 31,
        question: "What is the difference between COUNT(*) and COUNT(column)?",
        options: [
          "Same",
          "COUNT(*): all rows. COUNT(column): non-NULL rows",
          "COUNT(*) faster",
          "No difference"
        ],
        correctAnswer: 1,
        explanation: "COUNT(*): counts all rows including NULL. COUNT(column): counts only non-NULL values in that column."
      },
      {
        id: 32,
        question: "What is DISTINCT?",
        options: [
          "Different values",
          "Returns unique values, removes duplicates",
          "Distinct rows",
          "Unique keyword"
        ],
        correctAnswer: 1,
        explanation: "DISTINCT removes duplicate rows from result set. SELECT DISTINCT city FROM users. Returns only unique cities."
      },
      {
        id: 33,
        question: "What is NULL in MySQL?",
        options: [
          "Empty value",
          "Absence of value, not 0 or empty string",
          "Zero value",
          "Null character"
        ],
        correctAnswer: 1,
        explanation: "NULL represents absence of value. Not 0 or empty string. Use IS NULL, IS NOT NULL (not =). NULL in calculation returns NULL."
      },
      {
        id: 34,
        question: "What is IFNULL() function?",
        options: [
          "If null check",
          "Returns alternative if value is NULL",
          "Null handler",
          "Default value"
        ],
        correctAnswer: 1,
        explanation: "IFNULL(column, default) returns default if column is NULL. IFNULL(price, 0) returns 0 if price is NULL."
      },
      {
        id: 35,
        question: "What is COALESCE() function?",
        options: [
          "Combine values",
          "Returns first non-NULL value from list",
          "Null coalescing",
          "Merge nulls"
        ],
        correctAnswer: 1,
        explanation: "COALESCE(val1, val2, val3) returns first non-NULL value. COALESCE(NULL, NULL, 'default') returns 'default'."
      },
      {
        id: 36,
        question: "What is the difference between MyISAM and InnoDB?",
        options: [
          "Same",
          "InnoDB: transactions, foreign keys. MyISAM: faster reads, no transactions",
          "MyISAM deprecated",
          "InnoDB faster"
        ],
        correctAnswer: 1,
        explanation: "InnoDB: supports transactions, FOREIGN KEY, row-level locking, crash recovery. MyISAM: faster reads, table-level locking, no transactions. InnoDB default."
      },
      {
        id: 37,
        question: "What is storage engine?",
        options: [
          "Storage system",
          "Determines how data is stored: InnoDB, MyISAM",
          "Database engine",
          "Storage type"
        ],
        correctAnswer: 1,
        explanation: "Storage engine determines how tables store/retrieve data. InnoDB (default, transactions), MyISAM (fast reads), MEMORY (in-memory)."
      },
      {
        id: 38,
        question: "What is composite index?",
        options: [
          "Multiple indexes",
          "Index on multiple columns",
          "Combined index",
          "Compound key"
        ],
        correctAnswer: 1,
        explanation: "Composite index is index on multiple columns. INDEX(lastname, firstname). Order matters. Useful for queries filtering multiple columns."
      },
      {
        id: 39,
        question: "What is EXPLAIN?",
        options: [
          "Explain query",
          "Shows query execution plan for optimization",
          "Query description",
          "Analysis tool"
        ],
        correctAnswer: 1,
        explanation: "EXPLAIN shows how MySQL executes query. Displays table scan, indexes used, rows examined. Used for query optimization."
      },
      {
        id: 40,
        question: "What is slow query log?",
        options: [
          "Slow queries",
          "Logs queries taking longer than threshold",
          "Performance log",
          "Query logger"
        ],
        correctAnswer: 1,
        explanation: "Slow query log records queries exceeding long_query_time. Used to identify performance bottlenecks. Enable for optimization."
      },
      {
        id: 41,
        question: "What is replication?",
        options: [
          "Copy database",
          "Copies data from master to slave servers",
          "Duplicate data",
          "Backup system"
        ],
        correctAnswer: 1,
        explanation: "Replication copies data from master server to one or more slave servers. Used for load balancing, backup, high availability."
      },
      {
        id: 42,
        question: "What is master-slave replication?",
        options: [
          "Primary-secondary",
          "Master handles writes, slaves handle reads",
          "Replication type",
          "Server hierarchy"
        ],
        correctAnswer: 1,
        explanation: "Master server handles writes, replicates to slave servers for reads. Improves read performance, provides redundancy."
      },
      {
        id: 43,
        question: "What is partitioning?",
        options: [
          "Divide table",
          "Splits large table into smaller physical pieces",
          "Table division",
          "Data segmentation"
        ],
        correctAnswer: 1,
        explanation: "Partitioning divides large table into smaller pieces (partitions) based on rules. Improves query performance, maintenance. Types: RANGE, LIST, HASH."
      },
      {
        id: 44,
        question: "What is sharding?",
        options: [
          "Split database",
          "Distributes data across multiple servers horizontally",
          "Data sharing",
          "Server distribution"
        ],
        correctAnswer: 1,
        explanation: "Sharding horizontally partitions data across multiple servers (shards). Each shard has subset of data. Improves scalability, performance."
      },
      {
        id: 45,
        question: "What is LIKE operator?",
        options: [
          "Similarity check",
          "Pattern matching: % (any chars), _ (single char)",
          "Like comparison",
          "String match"
        ],
        correctAnswer: 1,
        explanation: "LIKE for pattern matching. % matches any characters, _ matches single character. WHERE name LIKE 'John%' finds names starting with John."
      },
      {
        id: 46,
        question: "What is the difference between CHAR_LENGTH and LENGTH?",
        options: [
          "Same",
          "CHAR_LENGTH: character count. LENGTH: byte count",
          "LENGTH deprecated",
          "CHAR_LENGTH slower"
        ],
        correctAnswer: 1,
        explanation: "CHAR_LENGTH() counts characters. LENGTH() counts bytes. For UTF-8, multi-byte characters: CHAR_LENGTH('é') = 1, LENGTH('é') = 2."
      },
      {
        id: 47,
        question: "What is CONCAT() function?",
        options: [
          "Concatenate",
          "Combines strings: CONCAT('Hello', ' ', 'World')",
          "String merge",
          "Join strings"
        ],
        correctAnswer: 1,
        explanation: "CONCAT() combines multiple strings. CONCAT('Hello', ' ', 'World') returns 'Hello World'. Returns NULL if any argument is NULL."
      },
      {
        id: 48,
        question: "What is NOW() vs CURDATE() vs CURTIME()?",
        options: [
          "All same",
          "NOW(): datetime. CURDATE(): date. CURTIME(): time",
          "NOW() best",
          "Date functions"
        ],
        correctAnswer: 1,
        explanation: "NOW() returns current datetime (2024-01-15 10:30:00). CURDATE() returns current date (2024-01-15). CURTIME() returns current time (10:30:00)."
      },
      {
        id: 49,
        question: "What is DATE_FORMAT() function?",
        options: [
          "Format date",
          "Formats date/time: DATE_FORMAT(date, '%Y-%m-%d')",
          "Date display",
          "Date conversion"
        ],
        correctAnswer: 1,
        explanation: "DATE_FORMAT() formats date/time. DATE_FORMAT(NOW(), '%Y-%m-%d') formats as '2024-01-15'. %Y: year, %m: month, %d: day."
      },
      {
        id: 50,
        question: "What is CASE statement?",
        options: [
          "Switch case",
          "Conditional logic: CASE WHEN condition THEN result END",
          "If-else SQL",
          "Condition statement"
        ],
        correctAnswer: 1,
        explanation: "CASE provides conditional logic. CASE WHEN age < 18 THEN 'Minor' ELSE 'Adult' END. Like if-else in SQL queries."
      }
    ]
  },
  {
    courseId: 'mongodb',
    courseName: 'MongoDB',
    questions: [
      {
        id: 1,
        question: "What is MongoDB?",
        options: [
          "SQL database",
          "NoSQL document database, stores JSON-like BSON",
          "Graph database",
          "Key-value store"
        ],
        correctAnswer: 1,
        explanation: "MongoDB is NoSQL document database. Stores data in flexible JSON-like BSON documents. Schema-less, horizontally scalable."
      },
      {
        id: 2,
        question: "What is the difference between SQL and NoSQL?",
        options: [
          "Same",
          "SQL: relational, schema. NoSQL: non-relational, flexible schema",
          "NoSQL deprecated",
          "SQL faster"
        ],
        correctAnswer: 1,
        explanation: "SQL: relational, fixed schema, ACID, vertical scaling. NoSQL: flexible schema, eventual consistency, horizontal scaling. MongoDB is NoSQL."
      },
      {
        id: 3,
        question: "What is BSON?",
        options: [
          "Binary JSON",
          "Binary JSON format MongoDB uses internally",
          "Better JSON",
          "JSON variant"
        ],
        correctAnswer: 1,
        explanation: "BSON (Binary JSON) is binary-encoded serialization format. More data types than JSON (Date, Binary, ObjectId). Faster parsing."
      },
      {
        id: 4,
        question: "What is document in MongoDB?",
        options: [
          "File",
          "Record stored as BSON, like JSON object",
          "Page",
          "Text data"
        ],
        correctAnswer: 1,
        explanation: "Document is basic unit of data. Similar to JSON object with key-value pairs. Stored in collections. Flexible schema."
      },
      {
        id: 5,
        question: "What is collection in MongoDB?",
        options: [
          "Data collection",
          "Group of documents, like table in SQL",
          "Array of data",
          "Document set"
        ],
        correctAnswer: 1,
        explanation: "Collection is group of documents. Similar to table in SQL but schema-less. Documents can have different fields."
      },
      {
        id: 6,
        question: "What is _id field?",
        options: [
          "ID field",
          "Unique identifier, auto-generated ObjectId",
          "Primary key",
          "Index field"
        ],
        correctAnswer: 1,
        explanation: "_id is unique identifier for each document. Auto-generated as ObjectId if not provided. Acts as primary key, indexed by default."
      },
      {
        id: 7,
        question: "What is ObjectId?",
        options: [
          "Object identifier",
          "12-byte unique ID: timestamp + machine + process + counter",
          "Object type",
          "ID object"
        ],
        correctAnswer: 1,
        explanation: "ObjectId is 12-byte unique identifier. Contains timestamp, machine ID, process ID, counter. Auto-generated for _id field."
      },
      {
        id: 8,
        question: "What is db.collection.find()?",
        options: [
          "Find data",
          "Queries documents, returns cursor",
          "Search function",
          "Select query"
        ],
        correctAnswer: 1,
        explanation: "find() queries documents from collection. Returns cursor. find({name: 'John'}) finds matching documents. find() without params returns all."
      },
      {
        id: 9,
        question: "What is db.collection.findOne()?",
        options: [
          "Find first",
          "Returns single document, not cursor",
          "One result",
          "First match"
        ],
        correctAnswer: 1,
        explanation: "findOne() returns first matching document (not cursor). Returns null if no match. Useful when expecting single result."
      },
      {
        id: 10,
        question: "What is db.collection.insertOne()?",
        options: [
          "Insert document",
          "Inserts single document, returns insertedId",
          "Add one",
          "Create document"
        ],
        correctAnswer: 1,
        explanation: "insertOne() inserts single document. Returns insertedId. Auto-generates _id if not provided. insertOne({name: 'John'})."
      },
      {
        id: 11,
        question: "What is db.collection.insertMany()?",
        options: [
          "Insert multiple",
          "Inserts multiple documents, returns insertedIds array",
          "Bulk insert",
          "Add many"
        ],
        correctAnswer: 1,
        explanation: "insertMany() inserts multiple documents in single call. Returns array of insertedIds. insertMany([{doc1}, {doc2}]). More efficient."
      },
      {
        id: 12,
        question: "What is db.collection.updateOne()?",
        options: [
          "Update first",
          "Updates first matching document",
          "Single update",
          "Modify one"
        ],
        correctAnswer: 1,
        explanation: "updateOne() updates first matching document. updateOne({name: 'John'}, {$set: {age: 30}}). Returns matchedCount, modifiedCount."
      },
      {
        id: 13,
        question: "What is db.collection.updateMany()?",
        options: [
          "Update multiple",
          "Updates all matching documents",
          "Bulk update",
          "Modify all"
        ],
        correctAnswer: 1,
        explanation: "updateMany() updates all matching documents. updateMany({city: 'NY'}, {$set: {country: 'USA'}}). Returns matchedCount, modifiedCount."
      },
      {
        id: 14,
        question: "What is db.collection.deleteOne()?",
        options: [
          "Delete first",
          "Deletes first matching document",
          "Remove one",
          "Single delete"
        ],
        correctAnswer: 1,
        explanation: "deleteOne() deletes first matching document. deleteOne({name: 'John'}). Returns deletedCount. Cannot be rolled back."
      },
      {
        id: 15,
        question: "What is db.collection.deleteMany()?",
        options: [
          "Delete multiple",
          "Deletes all matching documents",
          "Bulk delete",
          "Remove all"
        ],
        correctAnswer: 1,
        explanation: "deleteMany() deletes all matching documents. deleteMany({age: {$lt: 18}}). Returns deletedCount. Use carefully."
      },
      {
        id: 16,
        question: "What is $set operator?",
        options: [
          "Set value",
          "Sets/updates field value: {$set: {field: value}}",
          "Update operator",
          "Field setter"
        ],
        correctAnswer: 1,
        explanation: "$set updates field value. If field doesn't exist, creates it. {$set: {age: 30}}. Doesn't affect other fields."
      },
      {
        id: 17,
        question: "What is $unset operator?",
        options: [
          "Remove field",
          "Removes field from document: {$unset: {field: ''}}",
          "Delete field",
          "Unset value"
        ],
        correctAnswer: 1,
        explanation: "$unset removes field from document. {$unset: {age: ''}}. Field value in unset doesn't matter, any value works."
      },
      {
        id: 18,
        question: "What is $inc operator?",
        options: [
          "Increment",
          "Increments numeric field: {$inc: {count: 1}}",
          "Increase value",
          "Add number"
        ],
        correctAnswer: 1,
        explanation: "$inc increments/decrements numeric field. {$inc: {count: 1}} adds 1. {$inc: {count: -1}} subtracts 1. Creates field if not exists."
      },
      {
        id: 19,
        question: "What is $push operator?",
        options: [
          "Push item",
          "Adds element to array: {$push: {tags: 'new'}}",
          "Array add",
          "Append value"
        ],
        correctAnswer: 1,
        explanation: "$push adds element to array. {$push: {tags: 'mongodb'}}. Creates array if field doesn't exist. For multiple: $push with $each."
      },
      {
        id: 20,
        question: "What is $pull operator?",
        options: [
          "Pull item",
          "Removes elements from array matching condition",
          "Array remove",
          "Extract value"
        ],
        correctAnswer: 1,
        explanation: "$pull removes matching elements from array. {$pull: {tags: 'old'}} removes 'old' from tags array. Removes all occurrences."
      },
      {
        id: 21,
        question: "What is $addToSet operator?",
        options: [
          "Add to set",
          "Adds to array only if not exists (unique)",
          "Set add",
          "Unique push"
        ],
        correctAnswer: 1,
        explanation: "$addToSet adds element to array only if not already present. {$addToSet: {tags: 'new'}}. Ensures uniqueness. Use with $each for multiple."
      },
      {
        id: 22,
        question: "What is $pop operator?",
        options: [
          "Pop element",
          "Removes first (-1) or last (1) array element",
          "Array pop",
          "Remove end"
        ],
        correctAnswer: 1,
        explanation: "$pop removes first or last element from array. {$pop: {tags: 1}} removes last. {$pop: {tags: -1}} removes first."
      },
      {
        id: 23,
        question: "What is aggregation pipeline?",
        options: [
          "Data pipeline",
          "Processes documents through stages: $match, $group, $sort",
          "Aggregation process",
          "Data processing"
        ],
        correctAnswer: 1,
        explanation: "Aggregation pipeline processes documents through stages. Each stage transforms documents. Stages: $match, $group, $project, $sort, $limit, etc."
      },
      {
        id: 24,
        question: "What is $match stage?",
        options: [
          "Filter stage",
          "Filters documents like find(): {$match: {age: {$gt: 18}}}",
          "Match documents",
          "Query stage"
        ],
        correctAnswer: 1,
        explanation: "$match filters documents in aggregation. Similar to find(). {$match: {status: 'active'}}. Place early in pipeline for performance."
      },
      {
        id: 25,
        question: "What is $group stage?",
        options: [
          "Group documents",
          "Groups by field, calculates aggregates: {$group: {_id: '$city'}}",
          "Aggregation group",
          "Grouping stage"
        ],
        correctAnswer: 1,
        explanation: "$group groups documents by expression. {$group: {_id: '$city', total: {$sum: 1}}}. _id is grouping key. Use with $sum, $avg, etc."
      },
      {
        id: 26,
        question: "What is $project stage?",
        options: [
          "Project fields",
          "Includes/excludes fields: {$project: {name: 1, age: 0}}",
          "Select fields",
          "Field projection"
        ],
        correctAnswer: 1,
        explanation: "$project includes/excludes fields or creates computed fields. {$project: {name: 1, fullAge: {$add: ['$age', 1]}}}. 1: include, 0: exclude."
      },
      {
        id: 27,
        question: "What is $sort stage?",
        options: [
          "Sort documents",
          "Sorts documents: {$sort: {age: 1}} (1: asc, -1: desc)",
          "Order stage",
          "Arrange documents"
        ],
        correctAnswer: 1,
        explanation: "$sort orders documents. {$sort: {age: 1}} ascending. {$sort: {age: -1}} descending. Can sort by multiple fields."
      },
      {
        id: 28,
        question: "What is $limit stage?",
        options: [
          "Limit results",
          "Limits number of documents: {$limit: 10}",
          "Result limit",
          "Restrict stage"
        ],
        correctAnswer: 1,
        explanation: "$limit restricts number of documents passed to next stage. {$limit: 10} returns first 10. Use after $sort for top N."
      },
      {
        id: 29,
        question: "What is $skip stage?",
        options: [
          "Skip documents",
          "Skips specified number: {$skip: 20}",
          "Offset stage",
          "Skip results"
        ],
        correctAnswer: 1,
        explanation: "$skip skips specified number of documents. {$skip: 20} skips first 20. Used with $limit for pagination."
      },
      {
        id: 30,
        question: "What is $lookup stage?",
        options: [
          "Join collections",
          "Left outer join with another collection",
          "Lookup data",
          "Collection join"
        ],
        correctAnswer: 1,
        explanation: "$lookup performs left outer join with another collection. Similar to SQL LEFT JOIN. {$lookup: {from: 'orders', localField: '_id', foreignField: 'userId'}}."
      },
      {
        id: 31,
        question: "What is $unwind stage?",
        options: [
          "Unwind array",
          "Deconstructs array, outputs document per element",
          "Array expand",
          "Flatten array"
        ],
        correctAnswer: 1,
        explanation: "$unwind deconstructs array field, creates document for each element. {$unwind: '$tags'}. [doc with [a,b]] becomes 2 docs."
      },
      {
        id: 32,
        question: "What is index in MongoDB?",
        options: [
          "Data index",
          "Data structure for faster queries, trade-off: slower writes",
          "Query index",
          "Search index"
        ],
        correctAnswer: 1,
        explanation: "Index improves query performance. Creates B-tree structure. Slows inserts/updates. Create on frequently queried fields. _id indexed by default."
      },
      {
        id: 33,
        question: "What is compound index?",
        options: [
          "Multiple indexes",
          "Index on multiple fields: {name: 1, age: -1}",
          "Combined index",
          "Multi-field index"
        ],
        correctAnswer: 1,
        explanation: "Compound index indexes multiple fields. createIndex({lastname: 1, firstname: 1}). Order matters. Supports queries on prefix fields."
      },
      {
        id: 34,
        question: "What is unique index?",
        options: [
          "Unique values",
          "Ensures field values are unique",
          "Unique constraint",
          "No duplicates"
        ],
        correctAnswer: 1,
        explanation: "Unique index ensures field values are unique across collection. createIndex({email: 1}, {unique: true}). Rejects duplicate values."
      },
      {
        id: 35,
        question: "What is text index?",
        options: [
          "Text search",
          "Enables text search on string fields",
          "Search index",
          "Full-text index"
        ],
        correctAnswer: 1,
        explanation: "Text index enables text search. createIndex({content: 'text'}). Use with $text operator for search. Supports stemming, stop words."
      },
      {
        id: 36,
        question: "What is geospatial index?",
        options: [
          "Location index",
          "Indexes location data: 2d, 2dsphere",
          "Geographic index",
          "Spatial index"
        ],
        correctAnswer: 1,
        explanation: "Geospatial index for location queries. 2d for flat earth, 2dsphere for spherical earth. createIndex({location: '2dsphere'})."
      },
      {
        id: 37,
        question: "What is the difference between find() and aggregate()?",
        options: [
          "Same",
          "find(): simple queries. aggregate(): complex transformations",
          "aggregate() deprecated",
          "find() faster"
        ],
        correctAnswer: 1,
        explanation: "find(): simple filtering, projection. aggregate(): multi-stage pipeline, grouping, joining, complex transformations. Aggregate more powerful."
      },
      {
        id: 38,
        question: "What is cursor in MongoDB?",
        options: [
          "Query cursor",
          "Pointer to query result set, retrieves documents iteratively",
          "Result iterator",
          "Query pointer"
        ],
        correctAnswer: 1,
        explanation: "Cursor is pointer to query results. find() returns cursor. Documents retrieved in batches. Use .toArray(), .forEach(), or iterate."
      },
      {
        id: 39,
        question: "What is replica set?",
        options: [
          "Database copies",
          "Group of MongoDB instances with same data for high availability",
          "Replication group",
          "Server cluster"
        ],
        correctAnswer: 1,
        explanation: "Replica set is group of MongoDB instances maintaining same data. Primary handles writes, secondaries replicate. Automatic failover."
      },
      {
        id: 40,
        question: "What is sharding?",
        options: [
          "Data distribution",
          "Horizontal partitioning across multiple servers",
          "Split data",
          "Database shards"
        ],
        correctAnswer: 1,
        explanation: "Sharding distributes data across multiple servers (shards). Each shard holds subset of data. Improves scalability for large datasets."
      },
      {
        id: 41,
        question: "What is shard key?",
        options: [
          "Partition key",
          "Field determining how documents are distributed",
          "Sharding field",
          "Distribution key"
        ],
        correctAnswer: 1,
        explanation: "Shard key determines how documents are distributed across shards. Choose carefully - impacts query performance. Cannot be changed after sharding."
      },
      {
        id: 42,
        question: "What is write concern?",
        options: [
          "Write settings",
          "Acknowledgment level for write operations",
          "Write confirmation",
          "Durability setting"
        ],
        correctAnswer: 1,
        explanation: "Write concern specifies acknowledgment level. w: 1 (primary), w: 'majority' (majority of nodes), w: 0 (no acknowledgment). Trade-off: durability vs speed."
      },
      {
        id: 43,
        question: "What is read concern?",
        options: [
          "Read settings",
          "Determines data freshness level for reads",
          "Read consistency",
          "Isolation level"
        ],
        correctAnswer: 1,
        explanation: "Read concern determines data consistency level. local (default), majority (acknowledged by majority), linearizable (strongest). Trade-off: consistency vs latency."
      },
      {
        id: 44,
        question: "What is transaction in MongoDB?",
        options: [
          "Atomic operations",
          "Multi-document ACID operations (v4.0+)",
          "Transaction group",
          "Atomic writes"
        ],
        correctAnswer: 1,
        explanation: "Transaction provides ACID guarantees for multi-document operations. session.startTransaction(). commit or abort. Available in replica sets (v4.0+)."
      },
      {
        id: 45,
        question: "What is TTL index?",
        options: [
          "Time-based index",
          "Auto-deletes documents after specified time",
          "Expiry index",
          "Time to live"
        ],
        correctAnswer: 1,
        explanation: "TTL (Time To Live) index auto-deletes documents after expiration. createIndex({createdAt: 1}, {expireAfterSeconds: 3600}). Useful for sessions, logs."
      },
      {
        id: 46,
        question: "What is capped collection?",
        options: [
          "Limited collection",
          "Fixed-size collection with FIFO behavior",
          "Size-limited",
          "Circular collection"
        ],
        correctAnswer: 1,
        explanation: "Capped collection has fixed size. Oldest documents deleted when full (FIFO). High-performance writes. Good for logs. db.createCollection('logs', {capped: true, size: 100000})."
      },
      {
        id: 47,
        question: "What is the difference between embedded and referenced documents?",
        options: [
          "Same",
          "Embedded: nested. Referenced: separate with _id link",
          "Referenced deprecated",
          "Embedded faster"
        ],
        correctAnswer: 1,
        explanation: "Embedded: data nested in document (faster reads, no joins). Referenced: separate documents linked by _id (normalized, saves space). Choice depends on access pattern."
      },
      {
        id: 48,
        question: "What is explain()?",
        options: [
          "Query explanation",
          "Shows query execution plan for optimization",
          "Plan analyzer",
          "Performance tool"
        ],
        correctAnswer: 1,
        explanation: "explain() shows query execution plan. db.collection.find().explain(). Shows indexes used, documents scanned, execution time. Use for optimization."
      },
      {
        id: 49,
        question: "What is $expr operator?",
        options: [
          "Expression operator",
          "Allows aggregation expressions in query: {$expr: {$gt: ['$spent', '$budget']}}",
          "Compare fields",
          "Expression filter"
        ],
        correctAnswer: 1,
        explanation: "$expr allows aggregation expressions in find(). Compare fields within document: {$expr: {$gt: ['$spent', '$budget']}}. More powerful than basic operators."
      },
      {
        id: 50,
        question: "What is change stream?",
        options: [
          "Data stream",
          "Watches real-time data changes: insert/update/delete",
          "Change listener",
          "Event stream"
        ],
        correctAnswer: 1,
        explanation: "Change stream watches collection/database for real-time changes. collection.watch(). Returns cursor with change events. Used for real-time apps, triggers."
      }
    ]
  }
];

// Helper functions
export const getQuestionsByCourseId = (courseId) => {
  return interviewQuestions.find(course => course.courseId === courseId);
};

export const getRandomQuestions = (courseId, count = 10) => {
  const course = getQuestionsByCourseId(courseId);
  if (!course) return [];
  
  const shuffled = [...course.questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const checkAnswer = (courseId, questionId, selectedAnswer) => {
  const course = getQuestionsByCourseId(courseId);
  if (!course) return null;
  
  const question = course.questions.find(q => q.id === questionId);
  if (!question) return null;
  
  return {
    isCorrect: question.correctAnswer === selectedAnswer,
    correctAnswer: question.correctAnswer,
    explanation: question.explanation
  };
};
