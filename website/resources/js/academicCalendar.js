// 2024년 1월의 달력을 생성하는 함수
function generateJanuaryCalendar() {
  const calendarContainer = document.getElementById('january-calendar');
  const daysInMonth = 31; // 1월은 31일까지 있음
  let calendarHTML = '<table>';
  calendarHTML += '<thead><tr><th class="sunday">일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th class="saturday">토</th></tr></thead>';
  calendarHTML += '<tbody>';

  let dayOfWeek = new Date(2024, 0, 1).getDay(); // 2024년 1월 1일의 요일을 구함
  let dayOfMonth = 1;
  calendarHTML += '<tr>';
  // 첫 주의 빈 칸을 채움
  for (let i = 0; i < dayOfWeek; i++) {
    calendarHTML += '<td></td>';
  }
  while (dayOfMonth <= daysInMonth) {
    if (dayOfWeek === 7) {
      calendarHTML += '</tr><tr>';
      dayOfWeek = 0;
    }
    let textColor = ''; // 텍스트 색상 변수 초기화
    if (dayOfWeek === 0) textColor = 'sunday'; // 일요일은 빨간색
    else if (dayOfWeek === 6) textColor = 'saturday'; // 토요일은 파란색
    calendarHTML += `<td class="${textColor}">${dayOfMonth}</td>`;
    dayOfMonth++;
    dayOfWeek++;
  }
  // 마지막 주의 빈 칸을 채움
  for (let i = dayOfWeek; i < 7; i++) {
    calendarHTML += '<td></td>';
  }
  calendarHTML += '</tr>';
  calendarHTML += '</tbody></table>';
  calendarContainer.innerHTML = calendarHTML;
}



// 2024년 2월의 달력을 생성하는 함수
function generateFebruaryCalendar() {
  const calendarContainer = document.getElementById('february-calendar');
  const daysInMonth = 29; // 2024년은 윤년이므로 2월은 29일까지 있음
  let calendarHTML = '<table>';
  calendarHTML += '<thead><tr><th class="sunday">일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th class="saturday">토</th></tr></thead>';
  calendarHTML += '<tbody>';

  let dayOfWeek = new Date(2024, 1, 1).getDay(); // 2024년 2월 1일의 요일을 구함
  let dayOfMonth = 1;
  calendarHTML += '<tr>';
  // 첫 주의 빈 칸을 채움
  for (let i = 0; i < dayOfWeek; i++) {
    calendarHTML += '<td></td>';
  }
  while (dayOfMonth <= daysInMonth) {
    if (dayOfWeek === 7) {
      calendarHTML += '</tr><tr>';
      dayOfWeek = 0;
    }
    let textColor = ''; // 텍스트 색상 변수 초기화
    if (dayOfWeek === 0) textColor = 'sunday'; // 일요일은 빨간색
    else if (dayOfWeek === 6) textColor = 'saturday'; // 토요일은 파란색
    calendarHTML += `<td class="${textColor}">${dayOfMonth}</td>`;
    dayOfMonth++;
    dayOfWeek++;
  }
  // 마지막 주의 빈 칸을 채움
  for (let i = dayOfWeek; i < 7; i++) {
    calendarHTML += '<td></td>';
  }
  calendarHTML += '</tr>';
  calendarHTML += '</tbody></table>';
  calendarContainer.innerHTML = calendarHTML;
}

// 2024년 3월의 달력을 생성하는 함수
function generateMarchCalendar() {
  const calendarContainer = document.getElementById('march-calendar');
  const daysInMonth = 31; // 3월은 31일까지 있음
  let calendarHTML = '<table>';
  calendarHTML += '<thead><tr><th class="sunday">일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th class="saturday">토</th></tr></thead>';
  calendarHTML += '<tbody>';

  let dayOfWeek = new Date(2024, 2, 1).getDay(); // 2024년 3월 1일의 요일을 구함
  let dayOfMonth = 1;
  calendarHTML += '<tr>';
  // 첫 주의 빈 칸을 채움
  for (let i = 0; i < dayOfWeek; i++) {
    calendarHTML += '<td></td>';
  }
  while (dayOfMonth <= daysInMonth) {
    if (dayOfWeek === 7) {
      calendarHTML += '</tr><tr>';
      dayOfWeek = 0;
    }
    let textColor = ''; // 텍스트 색상 변수 초기화
    if (dayOfWeek === 0) textColor = 'sunday'; // 일요일은 빨간색
    else if (dayOfWeek === 6) textColor = 'saturday'; // 토요일은 파란색
    calendarHTML += `<td class="${textColor}">${dayOfMonth}</td>`;
    dayOfMonth++;
    dayOfWeek++;
  }
  // 마지막 주의 빈 칸을 채움
  for (let i = dayOfWeek; i < 7; i++) {
    calendarHTML += '<td></td>';
  }
  calendarHTML += '</tr>';
  calendarHTML += '</tbody></table>';
  calendarContainer.innerHTML = calendarHTML;
}

// 2024년 4월의 달력을 생성하는 함수
function generateAprilCalendar() {
  const calendarContainer = document.getElementById('april-calendar');
  const daysInMonth = 30; // 4월은 30일까지 있음
  let calendarHTML = '<table>';
  calendarHTML += '<thead><tr><th class="sunday">일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th class="saturday">토</th></tr></thead>';
  calendarHTML += '<tbody>';

  let dayOfWeek = new Date(2024, 3, 1).getDay(); // 2024년 4월 1일의 요일을 구함
  let dayOfMonth = 1;
  calendarHTML += '<tr>';
  // 첫 주의 빈 칸을 채움
  for (let i = 0; i < dayOfWeek; i++) {
    calendarHTML += '<td></td>';
  }
  while (dayOfMonth <= daysInMonth) {
    if (dayOfWeek === 7) {
      calendarHTML += '</tr><tr>';
      dayOfWeek = 0;
    }
    let textColor = ''; // 텍스트 색상 변수 초기화
    if (dayOfWeek === 0) textColor = 'sunday'; // 일요일은 빨간색
    else if (dayOfWeek === 6) textColor = 'saturday'; // 토요일은 파란색
    calendarHTML += `<td class="${textColor}">${dayOfMonth}</td>`;
    dayOfMonth++;
    dayOfWeek++;
  }
  // 마지막 주의 빈 칸을 채움
  for (let i = dayOfWeek; i < 7; i++) {
    calendarHTML += '<td></td>';
  }
  calendarHTML += '</tr>';
  calendarHTML += '</tbody></table>';
  calendarContainer.innerHTML = calendarHTML;
}
// 2024년 5월의 달력을 생성하는 함수
function generateMayCalendar() {
  const calendarContainer = document.getElementById('may-calendar');
  const daysInMonth = 31; // 5월은 31일까지 있음
  let calendarHTML = '<table>';
  calendarHTML += '<thead><tr><th class="sunday">일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th class="saturday">토</th></tr></thead>';
  calendarHTML += '<tbody>';

  let dayOfWeek = new Date(2024, 4, 1).getDay(); // 2024년 5월 1일의 요일을 구함
  let dayOfMonth = 1;
  calendarHTML += '<tr>';
  // 첫 주의 빈 칸을 채움
  for (let i = 0; i < dayOfWeek; i++) {
    calendarHTML += '<td></td>';
  }
  while (dayOfMonth <= daysInMonth) {
    if (dayOfWeek === 7) {
      calendarHTML += '</tr><tr>';
      dayOfWeek = 0;
    }
    let textColor = ''; // 텍스트 색상 변수 초기화
    if (dayOfWeek === 0) textColor = 'sunday'; // 일요일은 빨간색
    else if (dayOfWeek === 6) textColor = 'saturday'; // 토요일은 파란색
    calendarHTML += `<td class="${textColor}">${dayOfMonth}</td>`;
    dayOfMonth++;
    dayOfWeek++;
  }
  // 마지막 주의 빈 칸을 채움
  for (let i = dayOfWeek; i < 7; i++) {
    calendarHTML += '<td></td>';
  }
  calendarHTML += '</tr>';
  calendarHTML += '</tbody></table>';
  calendarContainer.innerHTML = calendarHTML;
}

// 2024년 6월의 달력을 생성하는 함수
function generateJuneCalendar() {
  const calendarContainer = document.getElementById('june-calendar');
  const daysInMonth = 30; // 6월은 30일까지 있음
  let calendarHTML = '<table>';
  calendarHTML += '<thead><tr><th class="sunday">일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th class="saturday">토</th></tr></thead>';
  calendarHTML += '<tbody>';

  let dayOfWeek = new Date(2024, 5, 1).getDay(); // 2024년 6월 1일의 요일을 구함
  let dayOfMonth = 1;
  calendarHTML += '<tr>';
  // 첫 주의 빈 칸을 채움
  for (let i = 0; i < dayOfWeek; i++) {
    calendarHTML += '<td></td>';
  }
  while (dayOfMonth <= daysInMonth) {
    if (dayOfWeek === 7) {
      calendarHTML += '</tr><tr>';
      dayOfWeek = 0;
    }
    let textColor = ''; // 텍스트 색상 변수 초기화
    if (dayOfWeek === 0) textColor = 'sunday'; // 일요일은 빨간색
    else if (dayOfWeek === 6) textColor = 'saturday'; // 토요일은 파란색
    calendarHTML += `<td class="${textColor}">${dayOfMonth}</td>`;
    dayOfMonth++;
    dayOfWeek++;
  }
  // 마지막 주의 빈 칸을 채움
  for (let i = dayOfWeek; i < 7; i++) {
    calendarHTML += '<td></td>';
  }
  calendarHTML += '</tr>';
  calendarHTML += '</tbody></table>';
  calendarContainer.innerHTML = calendarHTML;
}

// 2024년 7월의 달력을 생성하는 함수
function generateJulyCalendar() {
  const calendarContainer = document.getElementById('july-calendar');
  const daysInMonth = 31; // 7월은 31일까지 있음
  let calendarHTML = '<table>';
  calendarHTML += '<thead><tr><th class="sunday">일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th class="saturday">토</th></tr></thead>';
  calendarHTML += '<tbody>';

  let dayOfWeek = new Date(2024, 6, 1).getDay(); // 2024년 7월 1일의 요일을 구함
  let dayOfMonth = 1;
  calendarHTML += '<tr>';
  // 첫 주의 빈 칸을 채움
  for (let i = 0; i < dayOfWeek; i++) {
    calendarHTML += '<td></td>';
  }
  while (dayOfMonth <= daysInMonth) {
    if (dayOfWeek === 7) {
      calendarHTML += '</tr><tr>';
      dayOfWeek = 0;
    }
    let textColor = ''; // 텍스트 색상 변수 초기화
    if (dayOfWeek === 0) textColor = 'sunday'; // 일요일은 빨간색
    else if (dayOfWeek === 6) textColor = 'saturday'; // 토요일은 파란색
    calendarHTML += `<td class="${textColor}">${dayOfMonth}</td>`;
    dayOfMonth++;
    dayOfWeek++;
  }
  // 마지막 주의 빈 칸을 채움
  for (let i = dayOfWeek; i < 7; i++) {
    calendarHTML += '<td></td>';
  }
  calendarHTML += '</tr>';
  calendarHTML += '</tbody></table>';
  calendarContainer.innerHTML = calendarHTML;
}

// 2024년 8월의 달력을 생성하는 함수
function generateAugustCalendar() {
  const calendarContainer = document.getElementById('august-calendar');
  const daysInMonth = 31; // 8월은 31일까지 있음
  let calendarHTML = '<table>';
  calendarHTML += '<thead><tr><th class="sunday">일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th class="saturday">토</th></tr></thead>';
  calendarHTML += '<tbody>';

  let dayOfWeek = new Date(2024, 7, 1).getDay(); // 2024년 8월 1일의 요일을 구함
  let dayOfMonth = 1;
  calendarHTML += '<tr>';
  // 첫 주의 빈 칸을 채움
  for (let i = 0; i < dayOfWeek; i++) {
    calendarHTML += '<td></td>';
  }
  while (dayOfMonth <= daysInMonth) {
    if (dayOfWeek === 7) {
      calendarHTML += '</tr><tr>';
      dayOfWeek = 0;
    }
    let textColor = ''; // 텍스트 색상 변수 초기화
    if (dayOfWeek === 0) textColor = 'sunday'; // 일요일은 빨간색
    else if (dayOfWeek === 6) textColor = 'saturday'; // 토요일은 파란색
    calendarHTML += `<td class="${textColor}">${dayOfMonth}</td>`;
    dayOfMonth++;
    dayOfWeek++;
  }
  // 마지막 주의 빈 칸을 채움
  for (let i = dayOfWeek; i < 7; i++) {
    calendarHTML += '<td></td>';
  }
  calendarHTML += '</tr>';
  calendarHTML += '</tbody></table>';
  calendarContainer.innerHTML = calendarHTML;
}


// 2024년 9월의 달력을 생성하는 함수
function generateSeptemberCalendar() {
  const calendarContainer = document.getElementById('september-calendar');
  const daysInMonth = 30; // 9월은 30일까지 있음
  let calendarHTML = '<table>';
  calendarHTML += '<thead><tr><th class="sunday">일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th class="saturday">토</th></tr></thead>';
  calendarHTML += '<tbody>';

  let dayOfWeek = new Date(2024, 8, 1).getDay(); // 2024년 9월 1일의 요일을 구함
  let dayOfMonth = 1;
  calendarHTML += '<tr>';
  // 첫 주의 빈 칸을 채움
  for (let i = 0; i < dayOfWeek; i++) {
    calendarHTML += '<td></td>';
  }
  while (dayOfMonth <= daysInMonth) {
    if (dayOfWeek === 7) {
      calendarHTML += '</tr><tr>';
      dayOfWeek = 0;
    }
    let textColor = ''; // 텍스트 색상 변수 초기화
    if (dayOfWeek === 0) textColor = 'sunday'; // 일요일은 빨간색
    else if (dayOfWeek === 6) textColor = 'saturday'; // 토요일은 파란색
    calendarHTML += `<td class="${textColor}">${dayOfMonth}</td>`;
    dayOfMonth++;
    dayOfWeek++;
  }
  // 마지막 주의 빈 칸을 채움
  for (let i = dayOfWeek; i < 7; i++) {
    calendarHTML += '<td></td>';
  }
  calendarHTML += '</tr>';
  calendarHTML += '</tbody></table>';
  calendarContainer.innerHTML = calendarHTML;
}

// 2024년 10월의 달력을 생성하는 함수
function generateOctoberCalendar() {
  const calendarContainer = document.getElementById('october-calendar');
  const daysInMonth = 31; // 10월은 31일까지 있음
  let calendarHTML = '<table>';
  calendarHTML += '<thead><tr><th class="sunday">일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th class="saturday">토</th></tr></thead>';
  calendarHTML += '<tbody>';

  let dayOfWeek = new Date(2024, 9, 1).getDay(); // 2024년 10월 1일의 요일을 구함
  let dayOfMonth = 1;
  calendarHTML += '<tr>';
  // 첫 주의 빈 칸을 채움
  for (let i = 0; i < dayOfWeek; i++) {
    calendarHTML += '<td></td>';
  }
  while (dayOfMonth <= daysInMonth) {
    if (dayOfWeek === 7) {
      calendarHTML += '</tr><tr>';
      dayOfWeek = 0;
    }
    let textColor = ''; // 텍스트 색상 변수 초기화
    if (dayOfWeek === 0) textColor = 'sunday'; // 일요일은 빨간색
    else if (dayOfWeek === 6) textColor = 'saturday'; // 토요일은 파란색
    calendarHTML += `<td class="${textColor}">${dayOfMonth}</td>`;
    dayOfMonth++;
    dayOfWeek++;
  }
  // 마지막 주의 빈 칸을 채움
  for (let i = dayOfWeek; i < 7; i++) {
    calendarHTML += '<td></td>';
  }
  calendarHTML += '</tr>';
  calendarHTML += '</tbody></table>';
  calendarContainer.innerHTML = calendarHTML;
}


// 2024년 11월의 달력을 생성하는 함수
function generateNovemberCalendar() {
  const calendarContainer = document.getElementById('november-calendar');
  const daysInMonth = 30; // 11월은 30일까지 있음
  let calendarHTML = '<table>';
  calendarHTML += '<thead><tr><th class="sunday">일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th class="saturday">토</th></tr></thead>';
  calendarHTML += '<tbody>';

  let dayOfWeek = new Date(2024, 10, 1).getDay(); // 2024년 11월 1일의 요일을 구함
  let dayOfMonth = 1;
  calendarHTML += '<tr>';
  // 첫 주의 빈 칸을 채움
  for (let i = 0; i < dayOfWeek; i++) {
    calendarHTML += '<td></td>';
  }
  while (dayOfMonth <= daysInMonth) {
    if (dayOfWeek === 7) {
      calendarHTML += '</tr><tr>';
      dayOfWeek = 0;
    }
    let textColor = ''; // 텍스트 색상 변수 초기화
    if (dayOfWeek === 0) textColor = 'sunday'; // 일요일은 빨간색
    else if (dayOfWeek === 6) textColor = 'saturday'; // 토요일은 파란색
    calendarHTML += `<td class="${textColor}">${dayOfMonth}</td>`;
    dayOfMonth++;
    dayOfWeek++;
  }
  // 마지막 주의 빈 칸을 채움
  for (let i = dayOfWeek; i < 7; i++) {
    calendarHTML += '<td></td>';
  }
  calendarHTML += '</tr>';
  calendarHTML += '</tbody></table>';
  calendarContainer.innerHTML = calendarHTML;
}

// 2024년 12월의 달력을 생성하는 함수
function generateDecemberCalendar() {
  const calendarContainer = document.getElementById('december-calendar');
  const daysInMonth = 31; // 12월은 31일까지 있음
  let calendarHTML = '<table>';
  calendarHTML += '<thead><tr><th class="sunday">일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th class="saturday">토</th></tr></thead>';
  calendarHTML += '<tbody>';

  let dayOfWeek = new Date(2024, 11, 1).getDay(); // 2024년 12월 1일의 요일을 구함
  let dayOfMonth = 1;
  calendarHTML += '<tr>';
  // 첫 주의 빈 칸을 채움
  for (let i = 0; i < dayOfWeek; i++) {
    calendarHTML += '<td></td>';
  }
  while (dayOfMonth <= daysInMonth) {
    if (dayOfWeek === 7) {
      calendarHTML += '</tr><tr>';
      dayOfWeek = 0;
    }
    let textColor = ''; // 텍스트 색상 변수 초기화
    if (dayOfWeek === 0) textColor = 'sunday'; // 일요일은 빨간색
    else if (dayOfWeek === 6) textColor = 'saturday'; // 토요일은 파란색
    calendarHTML += `<td class="${textColor}">${dayOfMonth}</td>`;
    dayOfMonth++;
    dayOfWeek++;
  }
  // 마지막 주의 빈 칸을 채움
  for (let i = dayOfWeek; i < 7; i++) {
    calendarHTML += '<td></td>';
  }
  calendarHTML += '</tr>';
  calendarHTML += '</tbody></table>';
  calendarContainer.innerHTML = calendarHTML;
}


document.addEventListener('DOMContentLoaded', function() {
  generateJanuaryCalendar();
  generateFebruaryCalendar();
  generateMarchCalendar();
  generateAprilCalendar();
  generateMayCalendar();
  generateJuneCalendar();
  generateJulyCalendar();
  generateAugustCalendar();
  generateSeptemberCalendar();
  generateOctoberCalendar();
  generateNovemberCalendar();
  generateDecemberCalendar();
});



document.addEventListener('DOMContentLoaded', function() {
  generateJanuaryCalendar();
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');
  tabLinks.forEach(function(tabLink) {
    tabLink.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = tabLink.getAttribute('data-target');
      tabContents.forEach(function(tabContent) {
        tabContent.style.display = 'none';
      });
      const targetContent = document.getElementById(targetId);
      targetContent.style.display = 'block';
      if (targetId === 'january') {
        generateJanuaryCalendar();
      } else if (targetId === 'february') {
        generateFebruaryCalendar();
      }
      tabLinks.forEach(function(link) {
        link.classList.remove('active');
      });
      tabLink.classList.add('active');
    });
  });
});

