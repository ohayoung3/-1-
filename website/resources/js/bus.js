// JavaScript 코드
document.addEventListener('DOMContentLoaded', function() {
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  tabLinks.forEach(function(tabLink) {
    tabLink.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = tabLink.getAttribute('data-target');

      // 모든 탭 숨기기
      tabContents.forEach(function(tabContent) {
        tabContent.style.display = 'none';
      });

      // 클릭한 탭 보이기
      document.getElementById(targetId).style.display = 'block';
    });
  });

  // 페이지 로딩 시 첫 번째 탭 보이기
  document.getElementById(tabLinks[0].getAttribute('data-target')).style.display = 'block';
});
