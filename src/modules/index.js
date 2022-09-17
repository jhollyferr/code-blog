import { articles } from "./articles.js";
import { articleAnimation } from "./scrollreveal.js";
import { generateArticles } from "./utils.js";

document.onreadystatechange = onReadyState;

function onReadyState() {
  if (document.readyState === "complete") {
    generateArticles(articles);
    articleAnimation();
  }
}
