function nextPage() {
    const name = document.getElementById('user_name').value;
    const email = document.getElementById('user_email').value;
    const pass = document.getElementById('user-password').value;

    // 1. Проверка на пустые поля
    if (name.trim() === "" || email.trim() === "" || pass.trim() === "") {
        alert("Заполните все поля!");
        return;
    }

    // 2. Проверка длины имени (например, не меньше 3 символов)
    if (name.length < 3) {
        alert("Имя слишком короткое!");
        return;
    }

    // 3. Проверка длины пароля (не меньше 8 символов)
    if (pass.length < 8) {
        alert("Пароль должен содержать минимум 8 символов!");
        return;
    }

    // Если все проверки пройдены — переключаем экран
    document.getElementById('goToLogin').style.display = 'none';
    document.getElementById('loginBlock').style.display = 'block';
}

function checkCode() {
  const secret = "7777"; 
  const input = document.getElementById('passInput').value;
  
  if (input === secret) {
    document.getElementById('loginBlock').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
  } else {
    alert("Неверный код!");
  }
}

function goToPage() {
  const p2 = document.getElementById('mainContent');
  const p3 = document.getElementById('page3');
  p2.style.display = 'none';
  p3.style.display = 'block';
}

function goBackFromPage3() {
  const p2 = document.getElementById('mainContent');
  const p3 = document.getElementById('page3');
  p3.style.display = 'none';
  p2.style.display = 'block';
}

function goToPage4() {
  const p2 = document.getElementById('mainContent');
  const p4 = document.getElementById('page4');
  p2.style.display = 'none';
  p4.style.display = 'block';
}

function goBackFromPage4() {
  const p2 = document.getElementById('mainContent');
  const p4 = document.getElementById('page4');
  p4.style.display = 'none';
  p2.style.display = 'block';
}

function sendToPage5() {
  const input = document.getElementById('messageInput');
  const text = input.value;
  const output = document.getElementById('displayWord');
  output.innerText = text;
  document.getElementById('page3').style.display = 'none';
  document.getElementById('page5').style.display = 'block';
  input.value = "";
}

function goBack() {
  document.getElementById('page5').style.display = 'none';
  document.getElementById('page3').style.display = 'block'; 
}

function goToPage6() {
  const p4 = document.getElementById('page4');
  const p6 = document.getElementById('page6');
  p4.style.display = 'none';
  p6.style.display = 'block';
}

function goBackFromPage6() {
  const p4 = document.getElementById('page4');
  const p6 = document.getElementById('page6');
  p6.style.display = 'none';
  p4.style.display = 'block';
}
