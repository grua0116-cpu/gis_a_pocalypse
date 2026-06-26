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

function hijack() {
  showPage(4);

  const text = document.getElementById("hackText");

  setTimeout(() => {
    text.textContent = "UNAUTHORIZED ACCESS";
  }, 900);

  setTimeout(() => {
    text.textContent = "TRANSMISSION OVERRIDDEN";
  }, 1800);

  setTimeout(() => {
    showPage(5);
  }, 3300);

  setTimeout(() => {
    showPage(6);
    countPercent();
  }, 8000);
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
