$('#submit').on('click', (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    const comment = $('#commentBody').val();
    fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ id, comment }),
        headers: { 'Content-Type': 'application/json' },
    });
    window.location.reload();

});