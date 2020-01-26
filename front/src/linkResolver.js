export default (doc) => {
  if (doc.type === 'blog_post') {
    return '/blog';
  }
  return '/';
};
