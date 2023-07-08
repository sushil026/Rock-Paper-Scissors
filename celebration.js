document.querySelector('#ruleButton').addEventListener('click',()=>{
    var x = document.getElementById("rules");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
})
document.querySelector('#cross').addEventListener('click',()=>{
    document.getElementById("rules").style.display = "none";
})
function openFile(file) {
    window.location.href = file;
}