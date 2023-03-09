
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

document.querySelector('.new-post-form').addEventListener('submit', newPostHandler);
