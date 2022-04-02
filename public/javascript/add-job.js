async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="job-title"]').value;
  const job_url = document.querySelector('input[name="job-url"]').value;

  const response = await fetch(`/api/jobs`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      job_url,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.new-job-form')
  .addEventListener('submit', newFormHandler);
