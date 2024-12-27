// 제품 데이터 정의
const product_data = [
    { category: "상의", brand: 'Supreme', gender: "남성", product: '슈프림 박스로고 후드티', price: '390,000' }, // 상의 데이터
    { category: "하의", brand: 'DIESEL', gender: "남성", product: '디젤 트랙 팬츠', price: '188,000' }, // 남성하의 데이터
    { category: "신발", brand: 'Nike', gender: "공용", product: '에어포스 1', price: '137,000' }, // 신발 데이터
    { category: "패션잡화", brand: 'Music&Goods', gender: "공용" , product: '빵빵이 키링', price: '29,000' }, // 패션잡화 데이터
    { category: "하의", brand: 'Louis Vuitton', gender: "여성" , product: '어시메트리컬 박스 플리츠 트윌 스커트', price: '5,610,000' } //여성하의 데이터
];

// DOM 요소 참조
const product_data_Table = document.getElementById('product_data_Table'); // 테이블 데이터 영역
const categorySelect = document.getElementById('categorySelect'); // 카테고리 선택 셀렉트 박스
const productInput = document.getElementById('productInput'); // 제품명 입력 필드
const searchButton = document.getElementById('searchButton'); // 조회 버튼
const darkModeToggle = document.getElementById('darkModeToggle'); // 다크모드 토글 버튼
const currentTimeElement = document.getElementById('currentTime'); // 현재 시간 표시 영역

// 초기 데이터 로딩 함수
function loadTableData(data) {
    product_data_Table.innerHTML = ''; // 기존 테이블 데이터 초기화
    data.forEach((item) => { // 데이터 배열 반복
        const row = product_data_Table.insertRow(); // 새로운 행 추가
        row.insertCell(0).innerText = item.category; // 카테고리 추가
        row.insertCell(1).innerText = item.brand; // 브랜드 추가
        row.insertCell(2).innerText = item.gender; //성별 추가
        row.insertCell(3).innerText = item.product; // 제품명 추가
        row.insertCell(4).innerText = item.price; // 가격 추가
    });
}

// 초기 데이터 로드
loadTableData(product_data); // 기본 제품 데이터를 테이블에 로드

// 조회 버튼 클릭 이벤트
searchButton.addEventListener('click', () => {
    const selectedCategory = categorySelect.value; // 선택된 카테고리 가져오기
    const selectedGender = document.getElementById('genderSelect').value; // 선택된 성별 가져오기
    const inputText = productInput.value.trim(); // 입력된 제품명 텍스트 가져오기

    // 필터링 로직
    const filteredData = product_data.filter(item => {
        const categoryMatch = selectedCategory ? item.category === selectedCategory : true; // 카테고리 매칭
        const genderMatch = selectedGender ? (item.gender === selectedGender || item.gender === "공용") : true; // 성별 매칭 (공용 포함)
        const productMatch = inputText ? item.product.includes(inputText) : true; // 제품명 매칭
        return categoryMatch && genderMatch && productMatch; // 세 조건을 모두 만족하는 데이터 반환
    });

    loadTableData(filteredData); // 필터링된 데이터를 테이블에 로드
});

// 다크모드 토글 이벤트
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // body에 다크모드 클래스 추가/제거
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') 
        ? "라이트 모드" // 다크모드 활성화 시 버튼 텍스트
        : "다크 모드"; // 라이트모드 활성화 시 버튼 텍스트
});

// DOMContentLoaded 이벤트 - 현재 날짜와 시간 표시
document.addEventListener("DOMContentLoaded", () => {
    const currentTimeElement = document.getElementById("currentTime"); // 날짜와 시간 표시 영역

    // 현재 날짜와 시간 업데이트 함수
    function updateDateTime() {
        const now = new Date(); // 현재 시간 가져오기
        const formattedDate = now.toLocaleDateString('ko-KR', { // 날짜 형식 변환
            year: 'numeric', // 연도 표시
            month: 'long',   // 월 표시 (긴 이름)
            day: 'numeric'   // 일 표시
        });
        const formattedTime = now.toLocaleTimeString('ko-KR', { hour12: true }); // 12시간제 시간 형식
        currentTimeElement.textContent =`${formattedDate} ${formattedTime}`; // 날짜와 시간 텍스트 업데이트
    }

    updateDateTime(); // 페이지 로드 시 초기 설정
    setInterval(updateDateTime, 1000); // 1초마다 시간 업데이트
});

// DOMContentLoaded 이벤트 - 회원가입 버튼
document.addEventListener("DOMContentLoaded", () => {
    const joinButton = document.getElementById("joinButton"); // 회원가입 버튼 참조

    // 클릭 이벤트 리스너 추가
    joinButton.addEventListener("click", () => {
        window.location.href = "register.html"; // 회원가입 페이지로 이동
    });
});
