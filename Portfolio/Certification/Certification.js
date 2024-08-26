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
