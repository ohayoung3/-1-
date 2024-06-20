document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault();


        var password = document.getElementById('password').value;
        var passwordError = document.getElementById('password-error');
        var passwordPattern = /^(?=.*[A-Za-z])(?=.*\W).{8,}$/;

        if (!passwordPattern.test(password)) {
            passwordError.textContent = '비밀번호는 영문, 특수문자를 포함한 8자리 이상이어야 합니다.';
            return;
        } else {
            passwordError.textContent = '';
        }

        
        document.getElementById('signup-form').classList.remove('active');
        document.getElementById('confirmation-message').classList.add('active');
    });