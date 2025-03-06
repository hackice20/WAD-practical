function showFavoriteColor(color) {
    alert("Your favorite color is " + color + "!");
}

document.addEventListener("DOMContentLoaded", function () {
    const colors = ["red", "blue", "green", "yellow", "orange"];
    const container = document.getElementById("colorContainer");
    
    colors.forEach(color => {
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "favoriteColor";
        radio.value = color;
        radio.onclick = function () { showFavoriteColor(color); };
        
        let label = document.createElement("label");
        label.textContent = color;
        label.appendChild(radio);
        
        container.appendChild(label);
        container.appendChild(document.createElement("br"));
    });
});
