console.log("Portfolio loaded 🚀");

// efek kecil smooth scroll
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    console.log("Navigating...");
  });
});

function openModal(src) {
  const modal = document.getElementById("imageModal");
  const img = document.getElementById("modalImg");

  modal.style.display = "block";
  img.src = src;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}