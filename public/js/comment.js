$('#submit').on('click', (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    const comment = $('#commentBody').val();
    console.log(id+" "+comment);
    fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ id, comment }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response) {
        document.location.reload();
    } else {
        alert('failed to add comment');
    }
});