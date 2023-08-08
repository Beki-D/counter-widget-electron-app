document.addEventListener("DOMContentLoaded", () => {
  const countButton = document.getElementById("countBtn");
  const resetButton = document.getElementById("resetBtn");
  const countDisplay = document.getElementById("count");

  let count = 0;

  countButton.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
  });

  resetButton.addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
  });

  document.querySelector(".close-btn").addEventListener("click", () => {
    window.ipcRenderer.send("close-widget");
  });
});
