// DOMContentLoaded 이벤트가 발생하면 실행 (HTML 문서의 로드가 완료된 후 실행)
document.addEventListener("DOMContentLoaded", () => {
    // 폼 요소와 다크모드 토글 버튼을 선택
    const form = document.querySelector(".signup-form"); // 회원가입 폼
    const modeToggle = document.getElementById("modeToggle"); // 다크모드 토글 버튼

    // 다크모드 토글 버튼 클릭 이벤트 리스너 추가
    modeToggle.addEventListener("click", () => {
        const body = document.body; // body 요소 참조
        body.classList.toggle("dark-mode"); // body에 dark-mode 클래스 추가/제거
        form.classList.toggle("dark-mode"); // 폼에 dark-mode 클래스 추가/제거

        // 버튼 텍스트를 다크모드 상태에 따라 변경
        modeToggle.textContent = body.classList.contains("dark-mode")
            ? "화이트 모드" // 다크모드일 때 버튼 텍스트
            : "다크 모드"; // 라이트모드일 때 버튼 텍스트
    });

    // 폼 제출 이벤트 리스너 추가
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // 기본 폼 제출 동작(페이지 새로고침)을 막음

        // 폼 입력값 가져오기
        const username = document.getElementById("username").value; // 사용자 아이디
        const password = document.getElementById("password").value; // 비밀번호
        const confirmPassword = document.getElementById("confirm-password").value; // 비밀번호 확인
        const phone = document.getElementById("phone").value; // 사용자 전화번호
        const email = document.getElementById("email").value; // 사용자 이메일
        const name = document.getElementById("name").value; // 사용자 이름

        // 유효성 검증 로직
        if (username.length < 6) { // 아이디가 6자 미만인지 확인
            alert("아이디는 6자 이상이어야 합니다."); // 경고 메시지 출력
            return; // 폼 제출 중단
        }

        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,30}$/; // 비밀번호 정규식
        if (!passwordRegex.test(password)) { // 비밀번호가 조건을 만족하지 않을 경우
            alert("비밀번호는 영문, 숫자, 특수문자를 포함한 8자 이상 30자 미만이어야 합니다."); // 경고 메시지 출력
            return; // 폼 제출 중단
        }
        

        if (password !== confirmPassword) { // 비밀번호와 비밀번호 확인이 일치하지 않을 경우
            alert("비밀번호와 비밀번호 확인이 일치하지 않습니다."); // 경고 메시지 출력
            return; // 폼 제출 중단
        }

        const phoneRegex = /^\d+$/; // 전화번호가 숫자로만 이루어졌는지 확인하는 정규식
        if (!phoneRegex.test(phone)) { // 전화번호가 유효하지 않을 경우
            alert("전화번호는 - 없이 숫자만 입력해야 합니다."); // 경고 메시지 출력
            return; // 폼 제출 중단
        }
        
        // 회원가입 완료 메시지 표시
        alert(`
            🎉 환영합니다, ${name}님! 🎉
            아이디: ${username}
            전화번호: ${phone}
            이메일: ${email}
            감사합니다!
        `);

        // 회원가입 완료 후 페이지 이동 (admin.html로 이동)
        window.location.href = "main.html";
    });
});
