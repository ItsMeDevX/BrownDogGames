// Simple click-to-zoom modal for screenshots
document.addEventListener("click", (e) => {
  const thumb = e.target.closest("[data-full]");
  if (!thumb) return;

  const modal = document.querySelector("#imgModal");
  const modalImg = document.querySelector("#imgModalImg");
  modalImg.src = thumb.getAttribute("data-full");
  modal.classList.add("open");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

document.addEventListener("click", (e) => {
  const modal = e.target.closest("#imgModal");
  if (!modal) return;
  // click outside image closes
  if (e.target.id === "imgModal") closeModal();
});

function closeModal(){
  const modal = document.querySelector("#imgModal");
  const modalImg = document.querySelector("#imgModalImg");
  modal.classList.remove("open");
  modalImg.src = "";
}
