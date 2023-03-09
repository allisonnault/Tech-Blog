const newCommentHandler = async (event) => {
    event.preventDefault();

    const body = document.getElementById('comment').value.trim();
    // const postID = window.location;
    // console.log(postID);

    if (body) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({ body }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to add comment');
        }
    }
};
  
