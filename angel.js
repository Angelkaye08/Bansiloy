const msg = document.getElementById("msg");
document.getElementById("btn").addEventListener("click",
() => {
    msg.textContent = "ge click jud sa buang!";
});

const box = document.getElementById("box");
if (!box) {
    console.error("Element with id = 'box' not found");
}
if (box) {
    document.getElementById("colorBtn").addEventListener("click", 
    () => {
        box.style.backgroundColor = "orange";
     });
}