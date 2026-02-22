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
