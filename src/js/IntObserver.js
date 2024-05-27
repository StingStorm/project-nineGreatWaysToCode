document.addEventListener('DOMContentLoaded', function () {
        var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            } else {
              entry.target.classList.remove('visible');
            }
          });
        });

        document
          .querySelectorAll('.animate-on-scroll')
          .forEach(function (element) {
            observer.observe(element);
          });
      });