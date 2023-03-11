
const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value.trim();
    const postBody = document.getElementById('newPost').value.trim();
 
    if (title && postBody) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, postBody }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to add post');
        }
    }
};

$('#delete-post').on('click', (e)=>{
    const id = e.target.dataset.id;
    fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => data ? window.location.reload() : alert("something isn't working"))
});

$('.editPostForm').on('submit', (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    const title = $(`#editPostTitle-${id}`).val().trim();
    const body = $(`#editPostBody-${id}`).val().trim();

   fetch(`/dashboard/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ id, title, body }),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    window.location.reload();
    window.location.replace('/dashboard');
});


document.querySelector('.new-post-form').addEventListener('submit', newPostHandler);
