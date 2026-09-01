import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Production domain
const DOMAIN = 'https://bhoomitechzone.in';
const API_BASE_URL = 'https://backend.bhoomitechzone.in';

// Static routes from App.jsx (excluding dynamic and LMS routes)
const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/web-development',
  '/mobile-app-development',
  '/software-development',
  '/website-design',
  '/digital-marketing',
  '/social-media-marketing',
  '/content-marketing',
  '/seo-optimization',
  '/it-consulting',
  '/support',
  '/app-maintenance',
  '/web-maintenance',
  '/crm-systems',
  '/erp-solutions',
  '/ecommerce-platform',
  '/inventory-management',
  '/hrm-software',
  '/lms-software',
  '/billing-software',
  '/web-application',
  '/fintech',
  '/edutech',
  '/healthcare',
  '/realestate',
  '/manufacturing',
  '/logistics',
  '/legal-service',
  '/consulting-firms',
  '/marketing-agencies',
  '/non-profit',
  '/startups',
  '/retail-ecommerce',
  '/schedule-meeting',
  '/our-clients',
  '/technology',
  '/career',
  '/blog',
  '/gallery',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
  '/lms'
];

// LMS courses and lessons (static from frontend data)
const lmsCourses = [
  {
    id: 'html',
    lessons: ['html-course', 'html-elements', 'html-attributes', 'html-headings', 'html-paragraphs', 
              'html-styles', 'html-formatting', 'html-quotations', 'html-comments', 'html-colors', 
              'html-links', 'html-images', 'html-favicon', 'html-tables', 'html-lists', 'html-blocks', 
              'html-classes', 'html-id', 'html-iframes', 'html-javascript', 'html-file-paths', 
              'html-head', 'html-layout', 'html-responsive', 'html-entities', 'html-symbols', 
              'html-emojis', 'html-forms', 'html-form-attributes', 'html-form-elements', 
              'html-input-types', 'html-input-attributes', 'html-input-form-attributes']
  },
  {
    id: 'css',
    lessons: ['css-introduction', 'css-syntax', 'css-selectors', 'css-colors', 'css-backgrounds', 
              'css-borders', 'css-margins', 'css-padding', 'css-height-width', 'css-box-model', 
              'css-outline', 'css-text', 'css-fonts', 'css-icons', 'css-links', 'css-lists', 
              'css-tables', 'css-display', 'css-position', 'css-z-index', 'css-overflow', 
              'css-float', 'css-inline-block', 'css-align', 'css-combinators', 'css-pseudo-class', 
              'css-pseudo-element', 'css-opacity', 'css-navigation-bar', 'css-dropdowns', 
              'css-image-gallery', 'css-image-sprites', 'css-forms', 'css-counters', 'css-layout', 
              'css-units', 'css-specificity', 'css-rounded-corners', 'css-border-images', 
              'css-backgrounds', 'css-colors', 'css-gradients', 'css-shadows', 'css-text-effects', 
              'css-web-fonts', 'css-2d-transforms', 'css-3d-transforms', 'css-transitions', 
              'css-animations', 'css-images', 'css-buttons', 'css-pagination', 'css-flexbox', 
              'css-grid', 'css-responsive']
  },
  {
    id: 'javascript',
    lessons: ['js-introduction', 'js-syntax', 'js-comments', 'js-variables', 'js-let', 'js-const', 
              'js-operators', 'js-data-types', 'js-functions', 'js-objects', 'js-events', 
              'js-strings', 'js-string-methods', 'js-numbers', 'js-number-methods', 'js-arrays', 
              'js-array-methods', 'js-array-sort', 'js-array-iteration', 'js-dates', 'js-math', 
              'js-random', 'js-booleans', 'js-comparisons', 'js-conditions', 'js-switch', 
              'js-loop-for', 'js-loop-while', 'js-break', 'js-sets', 'js-maps', 'js-typeof', 
              'js-type-conversion', 'js-regex', 'js-errors', 'js-scope', 'js-hoisting', 
              'js-strict-mode', 'js-this-keyword', 'js-arrow-function', 'js-classes', 
              'js-json', 'js-debugging', 'js-style-guide', 'js-best-practices', 'js-common-mistakes', 
              'js-performance', 'js-dom-intro', 'js-dom-methods', 'js-dom-document', 'js-dom-elements', 
              'js-dom-html', 'js-dom-forms', 'js-dom-css', 'js-dom-animations', 'js-dom-events', 
              'js-dom-event-listener', 'js-dom-navigation', 'js-dom-nodes', 'js-dom-collections', 
              'js-dom-node-lists']
  },
  {
    id: 'react',
    lessons: ['react-introduction', 'react-setup', 'react-jsx', 'react-components', 'react-props', 
              'react-state', 'react-lifecycle', 'react-events', 'react-forms', 'react-lists', 
              'react-keys', 'react-refs', 'react-fragments', 'react-router', 'react-hooks', 
              'react-usestate', 'react-useeffect', 'react-usecontext', 'react-useref', 
              'react-usereducer', 'react-usecallback', 'react-usememo', 'react-custom-hooks', 
              'react-css-styling', 'react-conditional-rendering', 'react-error-boundaries']
  },
  {
    id: 'nodejs',
    lessons: ['nodejs-introduction', 'nodejs-get-started', 'nodejs-modules', 'nodejs-http', 
              'nodejs-file-system', 'nodejs-url', 'nodejs-npm', 'nodejs-events', 'nodejs-upload-files', 
              'nodejs-email', 'nodejs-mysql', 'nodejs-mongodb']
  },
  {
    id: 'php',
    lessons: ['php-introduction', 'php-syntax', 'php-comments', 'php-variables', 'php-echo-print', 
              'php-data-types', 'php-strings', 'php-numbers', 'php-constants', 'php-operators', 
              'php-if-else', 'php-switch', 'php-loops', 'php-functions', 'php-arrays', 
              'php-superglobals', 'php-forms', 'php-form-validation', 'php-form-required', 
              'php-form-url-email', 'php-form-complete', 'php-date-time', 'php-include', 
              'php-file-handling', 'php-file-open-read', 'php-file-create-write', 'php-file-upload', 
              'php-cookies', 'php-sessions', 'php-filters', 'php-advanced-filters', 'php-json', 
              'php-exceptions']
  },
  {
    id: 'mysql',
    lessons: ['mysql-introduction', 'mysql-installation', 'mysql-syntax', 'mysql-create-database', 
              'mysql-create-table', 'mysql-insert', 'mysql-select', 'mysql-where', 'mysql-and-or-not', 
              'mysql-order-by', 'mysql-update', 'mysql-delete', 'mysql-limit', 'mysql-like', 
              'mysql-wildcards', 'mysql-in', 'mysql-between', 'mysql-aliases', 'mysql-joins', 
              'mysql-inner-join', 'mysql-left-join', 'mysql-right-join', 'mysql-cross-join', 
              'mysql-self-join', 'mysql-union', 'mysql-group-by', 'mysql-having', 'mysql-exists', 
              'mysql-any-all', 'mysql-insert-select', 'mysql-case', 'mysql-null-functions', 
              'mysql-comments', 'mysql-data-types', 'mysql-functions']
  },
  {
    id: 'python',
    lessons: ['python-introduction', 'python-get-started', 'python-syntax', 'python-comments', 
              'python-variables', 'python-data-types', 'python-numbers', 'python-casting', 
              'python-strings', 'python-booleans', 'python-operators', 'python-lists', 
              'python-tuples', 'python-sets', 'python-dictionaries', 'python-if-else', 
              'python-while-loops', 'python-for-loops', 'python-functions', 'python-lambda', 
              'python-arrays', 'python-classes-objects', 'python-inheritance', 'python-iterators', 
              'python-scope', 'python-modules', 'python-dates', 'python-math', 'python-json', 
              'python-regex', 'python-pip', 'python-try-except', 'python-file-handling', 
              'python-read-files', 'python-write-files', 'python-delete-files']
  },
  {
    id: 'bootstrap',
    lessons: ['bootstrap-introduction', 'bootstrap-get-started', 'bootstrap-grid-basic', 
              'bootstrap-typography', 'bootstrap-tables', 'bootstrap-images', 'bootstrap-jumbotron', 
              'bootstrap-wells', 'bootstrap-alerts', 'bootstrap-buttons', 'bootstrap-button-groups', 
              'bootstrap-glyphicons', 'bootstrap-badges-labels', 'bootstrap-progress-bars', 
              'bootstrap-pagination', 'bootstrap-pager', 'bootstrap-list-groups', 'bootstrap-panels', 
              'bootstrap-dropdowns', 'bootstrap-collapse', 'bootstrap-tabs-pills', 'bootstrap-navbar', 
              'bootstrap-forms', 'bootstrap-inputs', 'bootstrap-inputs-2', 'bootstrap-input-sizing', 
              'bootstrap-media-objects', 'bootstrap-carousel', 'bootstrap-modal', 'bootstrap-tooltip', 
              'bootstrap-popover', 'bootstrap-scrollspy', 'bootstrap-affix', 'bootstrap-filters']
  },
  {
    id: 'flutter',
    lessons: ['flutter-introduction', 'flutter-installation', 'flutter-architecture', 
              'flutter-widgets', 'flutter-stateless-stateful', 'flutter-layouts', 'flutter-gestures', 
              'flutter-state-management', 'flutter-routing', 'flutter-animation', 'flutter-http', 
              'flutter-database', 'flutter-forms', 'flutter-themes', 'flutter-packages']
  }
];

// Priority and change frequency configuration
const urlConfig = {
  home: { priority: '1.0', changefreq: 'daily' },
  static: { priority: '0.8', changefreq: 'weekly' },
  blog: { priority: '0.7', changefreq: 'daily' },
  blogDetail: { priority: '0.6', changefreq: 'monthly' },
  project: { priority: '0.6', changefreq: 'monthly' },
  lms: { priority: '0.7', changefreq: 'weekly' },
  lmsCourse: { priority: '0.6', changefreq: 'weekly' }
};

// Fetch dynamic blog posts from API
async function fetchBlogs() {
  try {
    console.log('Fetching blogs from API...');
    const response = await fetch(`${API_BASE_URL}/api/blogs/published`);
    
    if (!response.ok) {
      console.warn(`Blog API returned status ${response.status}, continuing without blogs`);
      return [];
    }
    
    const data = await response.json();
    
    // Handle different response formats
    let blogList = [];
    if (Array.isArray(data)) {
      blogList = data;
    } else if (data && data.success && Array.isArray(data.data)) {
      blogList = data.data;
    } else if (data && Array.isArray(data.blogs)) {
      blogList = data.blogs;
    } else if (data && Array.isArray(data.data)) {
      blogList = data.data;
    }
    
    console.log(`✓ Found ${blogList.length} blog posts`);
    return blogList.filter(blog => blog.slug || blog._id || blog.id);
  } catch (error) {
    console.error('Error fetching blogs:', error.message);
    return [];
  }
}

// Fetch dynamic projects from API
async function fetchProjects() {
  try {
    console.log('Fetching projects from API...');
    const response = await fetch(`${API_BASE_URL}/api/projects`);
    
    if (!response.ok) {
      console.warn(`Projects API returned status ${response.status}, continuing without projects`);
      return [];
    }
    
    const data = await response.json();
    const projectList = data.projects || data.data || data || [];
    
    console.log(`✓ Found ${projectList.length} projects`);
    return projectList.filter(project => project.slug);
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    return [];
  }
}

// Generate URL entry for sitemap
function createUrlEntry(loc, priority, changefreq, lastmod = null) {
  const lastmodTag = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : '';
  return `  <url>
    <loc>${loc}</loc>${lastmodTag}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

// Generate sitemap.xml
async function generateSitemap() {
  console.log('\n🚀 Starting sitemap generation...\n');
  
  const urls = [];
  const now = new Date().toISOString().split('T')[0];
  
  // Add home page
  urls.push(createUrlEntry(
    DOMAIN + '/',
    urlConfig.home.priority,
    urlConfig.home.changefreq,
    now
  ));
  
  // Add static routes (excluding home since it's already added)
  console.log('Adding static routes...');
  staticRoutes.slice(1).forEach(route => {
    urls.push(createUrlEntry(
      DOMAIN + route,
      urlConfig.static.priority,
      urlConfig.static.changefreq
    ));
  });
  console.log(`✓ Added ${staticRoutes.length} static routes`);
  
  // Add blog posts (dynamic from API)
  const blogs = await fetchBlogs();
  blogs.forEach(blog => {
    const slug = blog.slug || blog._id || blog.id;
    const lastmod = blog.updatedAt || blog.createdAt 
      ? new Date(blog.updatedAt || blog.createdAt).toISOString().split('T')[0]
      : null;
    
    urls.push(createUrlEntry(
      `${DOMAIN}/blog/${slug}`,
      urlConfig.blogDetail.priority,
      urlConfig.blogDetail.changefreq,
      lastmod
    ));
  });
  if (blogs.length > 0) {
    console.log(`✓ Added ${blogs.length} blog post URLs`);
  }
  
  // Add projects (dynamic from API)
  const projects = await fetchProjects();
  projects.forEach(project => {
    urls.push(createUrlEntry(
      `${DOMAIN}/project/${project.slug}`,
      urlConfig.project.priority,
      urlConfig.project.changefreq
    ));
  });
  if (projects.length > 0) {
    console.log(`✓ Added ${projects.length} project URLs`);
  }
  
  // Add LMS course lessons
  console.log('Adding LMS course URLs...');
  let lmsUrlCount = 0;
  lmsCourses.forEach(course => {
    course.lessons.forEach(lessonId => {
      urls.push(createUrlEntry(
        `${DOMAIN}/lms/course/${course.id}/lesson/${lessonId}`,
        urlConfig.lmsCourse.priority,
        urlConfig.lmsCourse.changefreq
      ));
      lmsUrlCount++;
    });
  });
  console.log(`✓ Added ${lmsUrlCount} LMS course/lesson URLs`);
  
  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.join('\n')}
</urlset>`;
  
  // Write sitemap to public directory
  const publicDir = join(__dirname, '..', 'public');
  const sitemapPath = join(publicDir, 'sitemap.xml');
  
  writeFileSync(sitemapPath, sitemap, 'utf-8');
  
  console.log(`\n✅ Sitemap generated successfully!`);
  console.log(`📍 Location: public/sitemap.xml`);
  console.log(`📊 Total URLs: ${urls.length}`);
  console.log(`   - Static routes: ${staticRoutes.length}`);
  console.log(`   - Blog posts: ${blogs.length}`);
  console.log(`   - Projects: ${projects.length}`);
  console.log(`   - LMS lessons: ${lmsUrlCount}`);
  console.log(`🌐 Sitemap URL: ${DOMAIN}/sitemap.xml\n`);
}

// Run the generator
generateSitemap().catch(error => {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
});
