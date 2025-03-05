document.getElementById('searchNews').addEventListener('click', fetchNews);

function fetchNews() {
    const query = document.getElementById('query').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your News API key

    if (query) {
        const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const articles = data.articles;
                displayNews(articles);
            })
            .catch(error => {
                document.getElementById('newsResult').innerText = "Error fetching news articles.";
            });
    } else {
        document.getElementById('newsResult').innerText = "Please enter a search query.";
    }
}

function displayNews(articles) {
    const newsResult = document.getElementById('newsResult');
    newsResult.innerHTML = '';

    if (articles.length === 0) {
        newsResult.innerText = "No articles found.";
        return;
    }

    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'article';
        articleDiv.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description || "No description available."}</p>
            <a href="${article.url}" target="_blank">Read more</a>
            <hr>
        `;
        newsResult.appendChild(articleDiv);
    });
}