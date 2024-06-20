// 예시 데이터 (질문과 답변을 배열로 관리)
const qnaData = [
    {
      id: 1,
      question: "질문 제목 1",
      answer: "질문 내용이나 설명...",
    },
    {
      id: 2,
      question: "질문 제목 2",
      answer: "질문 내용이나 설명...",
    },
    {
      id: 3,
      question: "질문 제목 3",
      answer: "질문 내용이나 설명...",
    },
    {
        id: 4,
        question: "질문 제목 3",
        answer: "질문 내용이나 설명...",
      },
      {
        id: 5,
        question: "질문 제목 3",
        answer: "질문 내용이나 설명...",
      },
  ];
  
  // DOM 요소가 준비되면 실행
  $(document).ready(function() {
    // 질문 클릭 시 이벤트 핸들러
    $('.question').click(function() {
      const questionId = $(this).data('id'); // 질문의 ID를 가져옴
      const question = qnaData.find(item => item.id === questionId); // 해당 ID의 질문 데이터를 찾음
      
      // 질문 데이터가 있으면
      if (question) {
        const questionContent = $(this).find('.question-content');
        
        // 질문의 답변을 토글하여 보여주거나 숨김
        questionContent.slideToggle();
        $(this).toggleClass('active');
      }
    });
  });
  