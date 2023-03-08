
const newPostHandler = async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value.trim();
    const postBody = document.getElementById('newPost').value.trim();
 
    if (title && postBody) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to add post');
        }
    }
};

document.querySelector('.new-post-form').addEventListener('submit', newPostHandler);
