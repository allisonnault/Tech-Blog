$('.editPostForm').on('submit', (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    const title = $('#editPostTitle').val().trim();
    const body = $('#editPostBody').val().trim();

   fetch(`/dashboard/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ id, title, body }),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    window.location.reload();
    window.location.replace('/dashboard');
});