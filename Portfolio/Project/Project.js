function openModal(imgElement) {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("modal-img");

  modal.style.display = "block";
  modalImg.src = imgElement.src;
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// Get all section links
const sectionLinks = document.querySelectorAll(".nav-link");

// Add event listener to each link
sectionLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove the 'active' class from all links
    sectionLinks.forEach((link) => link.classList.remove("active"));

    // Add the 'active' class to the clicked link
    link.classList.add("active");
  });
});
