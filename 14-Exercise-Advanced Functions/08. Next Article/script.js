function getArticleGenerator(articles) {
    const content = document.querySelector('#content');
    let arrayOfArticles = articles;

    function showNext() {
        let article = arrayOfArticles.shift();
        
        if(!article) {
            return;
        }
        
        const articleElement = document.createElement("article");
        articleElement.textContent = article;
        content.appendChild(articleElement);
    }
    return showNext;
}
