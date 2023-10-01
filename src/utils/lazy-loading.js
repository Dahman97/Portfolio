const lazyLoading = () => {
  const lazyImgs = $(".lazy");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        let img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("loading");
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  lazyImgs.each(function () {
    observer.observe(this);
  });
};

export default lazyLoading;
