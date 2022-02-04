const search_input = document.getElementById("input");
const search_button = document.getElementById("search");
const panels = document.querySelectorAll(".panel");


search_button.addEventListener("click", search_name);

function search_name(){
    const value = search_input.value;
    for (let index = 0; index < panels.length; index++) {
        const song = panels[index].querySelector(".name");
        const song_name = song.innerHTML;
        const song_parent = song.parentElement.parentElement.parentElement;
        if (value != song_name){
            song_parent.style.display = "none";
        }
    }
}

