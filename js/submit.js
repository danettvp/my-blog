const SUPABASE_URL = 'https://didxhzphblizgsnwoyao.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRpZHhoenBoYmxpemdzbndveWFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyMTM0MjQsImV4cCI6MjA2Mzc4OTQyNH0.0pbaeaxjlTWOsSZXJxdyWc2v1GWXO7R-LA50gPAGzyU';

document.getElementById('postForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const post = {
    title: form.title.value,
    content: form.content.value
  };

  const res = await fetch(`${SUPABASE_URL}/rest/v1/posts`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    },
    body: JSON.stringify(post)
  });

  if (res.ok) {
    alert('Post created!');
    form.reset();
  } else {
    alert('Error submitting post');
  }
});