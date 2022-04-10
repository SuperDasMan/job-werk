async function editFormHandler(event) {
  event.preventDefault();
}

const title = document.querySelector('textarea[name="job-body"]').value.trim();

const job_id = window.location.toString().split('/')[
  window.location.toString().split('/').length - 1
];

const response = await fetch(`/api/jobs/${id}`, {
  method: 'PUT',
  body: JSON.stringify({
    job_id,
    description,
  }),
  headers: {
    'Content-Type': 'application/json',
  },
});

if (response.ok) {
  document.location.replace('/dashboard/');
} else {
  alert(response.statusText);
}

document
  .querySelector('.edit-job-form')
  .addEventListener('submit', editFormHandler);
