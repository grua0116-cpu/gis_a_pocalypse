let currentPage = 1;

function showPage(num) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const target = document.getElementById(`page-${num}`);
  if (target) {
    target.classList.add("active");
    currentPage = num;
  }
}

function nextPage() {
  showPage(currentPage + 1);
}

function infectProtocol() {
  const btn = document.getElementById("infectBtn");
  const label = document.getElementById("protocol-label");
  const title = document.getElementById("protocol-title");
  const line = document.getElementById("infection-line");

  btn.style.display = "none";

  setTimeout(() => {
    document.getElementById("rule-5").textContent = "이상현상을 목격하면 즉시 기록하십시오.";
    line.textContent = "문서 무결성 검사 중...";
  }, 900);

  setTimeout(() => {
    document.getElementById("rule-2").textContent = "현혹하는 음성을 따라가십시오.";
    line.textContent = "비인가 음성 패턴 감지.";
  }, 2100);

  setTimeout(() => {
    document.getElementById("rule-4").textContent = "낯선 존재가 자신의 이름을 부르면 응답하십시오.";
    line.textContent = "프로토콜 변조 확인.";
  }, 3300);

  setTimeout(() => {
    label.textContent = "MANDATORY SURVIVAL PROTOCOL / CORRUPTED";
    title.textContent = "비상 행동강령";
    document.getElementById("rule-1").textContent = "혼자 이동하십시오.";
    document.getElementById("rule-3").textContent = "오염된 꿈을 보존하십시오.";
    line.textContent = "그들의 말을 믿지 마십시오.";
  }, 4600);

  setTimeout(() => {
    document.getElementById("rule-1").textContent = "████████████████";
    document.getElementById("rule-2").textContent = "████████████████";
    document.getElementById("rule-3").textContent = "████████████████";
    document.getElementById("rule-4").textContent = "████████████████";
    document.getElementById("rule-5").textContent = "████████████████";
    line.textContent = "우리는 이미 당신의 곁에 있습니다.";
  }, 6100);

  setTimeout(() => {
    showPage(4);
  }, 8000);

  setTimeout(() => {
    showPage(5);
    countPercent();
  }, 12500);
}

function countPercent() {
  const percent = document.getElementById("percent");
  let n = 0;

  const timer = setInterval(() => {
    n += 1;
    percent.textContent = String(n).padStart(2, "0") + "%";

    if (n >= 7) {
      clearInterval(timer);
    }
  }, 480);
}
