export const articleAnimation = () => {
  const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2000,
    reset: true,
  });

  ScrollReveal().reveal(".card-article", { delay: 200 });
  ScrollReveal().reveal(".card-article header", { delay: 400 });
  ScrollReveal().reveal(".card-article h2", { delay: 500 });
  ScrollReveal().reveal(".card-article p", { delay: 600 });
};
