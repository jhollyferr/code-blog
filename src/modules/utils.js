const articlesContainer = document.querySelector(".articles-container");
const cardArticleTemplate = document.querySelector(".template-article");

const generateArticleData = (article) => {
  const cardClone = cardArticleTemplate.cloneNode(true);
  cardClone.classList.remove("template-article");

  const [header, title, text] = cardClone.children;
  const [date, favoritIcon] = header.children;

  date.textContent = article.date;
  title.textContent = article.title;
  text.textContent = article.text;
  favoritIcon.textContent = article.isFavorite ? "favorite" : "favorite_border";

  articlesContainer.append(cardClone);
};

/**
 *
 * @param {Array} articles
 */
export const generateArticles = (articles) =>
  articles.forEach((article) => generateArticleData(article));
