document.getElementById('complaintForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

  await fetch('http://localhost:5000/api/complaints', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description })
  });

  loadComplaints();
});

async function loadComplaints() {
  const res = await fetch('http://localhost:5000/api/complaints');
  const complaints = await res.json();
  const list = document.getElementById('complaintsList');
  list.innerHTML = complaints.map(c => 
    `<div class="border p-2 mb-2">
       <h3 class="font-bold">${c.title}</h3>
       <p>${c.description}</p>
       <p>Status: ${c.status}</p>
     </div>`
  ).join('');
}

loadComplaints();