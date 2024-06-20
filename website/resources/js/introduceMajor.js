document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('section');

  // 모든 섹션을 숨김
  sections.forEach(section => {
    section.style.display = 'none';
  });


  sections[0].style.display = 'block';

  // 네비게이션 링크 클릭 시 해당 섹션을 보여줌
  navLinks.forEach((link, index) => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      // 클릭된 링크의 인덱스에 해당하는 섹션을 보여줌
      sections.forEach((section, i) => {
        if (index === i) {
          section.style.display = 'block';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });
});