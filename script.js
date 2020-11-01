let modal = document.getElementById("modal_wrapper");

let open = document.getElementById("modal");

let close = document.getElementById("close_modal")[0];

open.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}