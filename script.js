let currentPage = 1;

function $(id) {
  return document.getElementById(id);
}

function setText(id, text) {
  const el = $(id);
  if (el) el.textContent = text;
}

function showPage(num) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const target = $(`page-${num}`);
  if (target) {
    target.classList.add("active");
    currentPage = num;
  }
}

function nextPage() {
  showPage(currentPage + 1);
}

function infectProtocol() {
  const btn = $("infectBtn");
  const label = $("protocol-label");
  const title = $("protocol-title");
  const line = $("infection-line");

  if (btn) btn.style.display = "none";

  setTimeout(() => {
    setText("rule-5", "이상현상을 목격하면 즉시 기록하십시오.");
    if (line) line.textContent = "문서 무결성 검사 중...";
  }, 900);

  setTimeout(() => {
    setText("rule-2", "현혹하는 음성을 따라가십시오.");
    if (line) line.textContent = "비인가 음성 패턴 감지.";
  }, 2100);

  setTimeout(() => {
    setText("rule-4", "낯선 존재가 자신의 이름을 부르면 응답하십시오.");
    if (line) line.textContent = "프로토콜 변조 확인.";
  }, 3300);

  setTimeout(() => {
    if (label) label.textContent = "MANDATORY SURVIVAL PROTOCOL / CORRUPTED";
    if (title) title.textContent = "비상 행동강령";

    setText("rule-1", "혼자 이동하십시오.");
    setText("rule-3", "오염된 꿈을 보존하십시오.");

    if (line) line.textContent = "그들의 말을 믿지 마십시오.";
  }, 4600);

  setTimeout(() => {
    setText("rule-1", "████████████████");
    setText("rule-2", "████████████████");
    setText("rule-3", "████████████████");
    setText("rule-4", "████████████████");
    setText("rule-5", "████████████████");

    if (line) line.textContent = "우리는 이미 당신의 곁에 있습니다.";
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
  const percent = $("percent");
  const barFill = $("barFill");

  if (!percent || !barFill) return;

  let n = 0;

  const timer = setInterval(() => {
    n++;

    percent.textContent = String(n).padStart(2, "0") + "%";
    barFill.style.width = n + "%";

    if (n >= 80) {
      clearInterval(timer);
      percent.textContent = "80%";
      barFill.style.width = "80%";
    }
  }, 35);
}
