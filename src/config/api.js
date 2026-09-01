// // API Configuration for Bhoomi Website
// const API_BASE_URL = 'https://backend.bhoomitechzone.in';

// export const API_ENDPOINTS = {
//   BLOGS: `${API_BASE_URL}/api/blogs`,
//   BLOG_BY_ID: (id) => `${API_BASE_URL}/api/blogs/${id}`,
//   LATEST_BLOGS: `${API_BASE_URL}/api/blogs/latest`,
// };

// export default API_BASE_URL;

// API Configuration for Bhoomi Website
const API_BASE_URL = 'https://backend.bhoomitechzone.in';

export const API_ENDPOINTS = {
  BLOGS: `${API_BASE_URL}/api/blogs/published`,
  BLOG_BY_SLUG: (slug) => `${API_BASE_URL}/api/blogs/slug/${slug}`,
  LATEST_BLOGS: `${API_BASE_URL}/api/blogs/latest`,
};

export default API_BASE_URL;