var nama = document.getElementById("nama");
var container = document.getElementById("container");

nama.addEventListener("keyup", function() {
    container.innerHTML = nama.value;
});
