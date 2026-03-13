/* ============================================
   form.js — Contact Form (Formspree)
   ============================================ */

async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  try {
    const res = await fetch('https://formspree.io/f/maqpbyny', {
      method:  'POST',
      body:    data,
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      document.getElementById('form-ok').style.display = 'block';
      form.reset();
      setTimeout(() => {
        document.getElementById('form-ok').style.display = 'none';
      }, 4000);
    } else {
      alert('Oops! Something went wrong. Please try again.');
    }
  } catch (err) {
    alert('Network error. Please try again.');
  }
}
