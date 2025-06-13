const SUPABASE_URL = 'https://didxhzphblizgsnwoyao.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpZHhoenBoYmxpemdzbndveWFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyMTM0MjQsImV4cCI6MjA2Mzc4OTQyNH0.0pbaeaxjlTWOsSZXJxdyWc2v1GWXO7R-LA50gPAGzyU';

fetch(`${SUPABASE_URL}/rest/v1/posts?select=*`, {
  headers: {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`
  }
})
.then(res => res.json())
.then(data => {
  const container = document.getElementById('posts');
  container.innerHTML = data.map(post => `
    <article>
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <small>${new Date(post.created_at).toLocaleString()}</small>
    </article>
  `).join('');
});