function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function incrementCount(element, min, max) {
    let count = getRandomInt(min, max);
    setInterval(() => {
        count += getRandomInt(min, max);
        element.textContent = count;
    }, getRandomInt(10, 100));
}

function postContent() {
    const postContent = document.getElementById('postContent').value;

    if (postContent.trim() !== '') {
        document.getElementById('postsContainer').innerHTML = '';

        const post = document.createElement('div');
        post.className = 'post';

        post.innerHTML = `
            <div class="post-header">
                <div class="post-user-icon">😃</div>
                <div class="post-user-info">
                    <span class="post-user-name">kuる</span>
                    <span>@toku_ru_</span>
                    <span class="post-time">・0分</span>
                </div>
            </div>
            <div class="post-content">${postContent}</div>
            <div class="post-actions">
                <div>
                    <img src="heart.svg" alt="Like">
                    <span class="like-count">0</span>
                </div>
                <div>
                    <img src="repeat-2.svg" alt="Retweet">
                    <span class="retweet-count">0</span>
                </div>
                <div>
                    <img src="bar-chart-2.svg" alt="Impressions">
                    <span class="impressions-count">0</span>
                </div>
            </div>
        `;

        document.getElementById('postsContainer').appendChild(post);

        incrementCount(post.querySelector('.like-count'), 3771, 5048 ,3771, 2004);
        incrementCount(post.querySelector('.retweet-count'), 412, 456);
        incrementCount(post.querySelector('.impressions-count'), 10132, 26853);

        document.getElementById('postContent').value = '';
    }
}
