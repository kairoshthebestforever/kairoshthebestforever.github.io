const search_input = document.getElementById("input");
const search_button = document.getElementById("search");
const panels = document.querySelectorAll(".panel");


search_button.addEventListener("click", search_name);

function search_name(){
    const value = search_input.value.toLowerCase();
    panels.forEach(panel => {  
        const song = panel.querySelector(".name");
        const songName = song.innerHTML.toLowerCase().trim(); 

        if (value !== songName) panel.style.display = "none";
        else panel.style.display = "block";
    });
}

let clicked = false;

document.querySelectorAll('.like').forEach(likeBtn => {

    likeBtn.addEventListener("click", () =>{
        console.log("hello");
        
        document.querySelectorAll('.icon').forEach(likeIcon => {
            if(!clicked) {
                clicked = true;
                likeIcon.innerHTML = '<i class="fa-solid fa-heart"></i>';
                }
            else {
                clicked = false;
                likeIcon.innerHTML = '<i class="fa-solid fa-heart-crack"></i>';
            }
        })
    })
})

function playSound(){
    const sound = document.getElementById("aud");
    sound.play();
}


