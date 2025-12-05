function toggleOtherProject() {
    const extraButtons = document.getElementById("extraButtons");

    if (extraButtons.style.display === "none") {
        extraButtons.style.display = "block";  // show
    } else {
        extraButtons.style.display = "none";   // hide
    }
}
