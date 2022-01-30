document.addEventListener("click", function (a) {
    if(a.target.classList.contains("gallery-item")){
        const src=a.target.getAttribute("src");
        document.querySelector(".modal-image").src=src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})

