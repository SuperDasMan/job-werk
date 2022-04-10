async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="job-title"]').value;
  const description = document.querySelector('input[name="description"]').value;
  const pay_rate = document.querySelector('input[name="pay_rate"]').value;
  const job_url = document.querySelector('input[name="job-url"]').value;

  const response = await fetch(`/api/job`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      description,
      pay_rate,
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
