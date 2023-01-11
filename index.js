document.querySelector("body").addEventListener("mousemove", (event) => {
    console.log(event)
    document.querySelector("img").style.width = event.clientX.toString();
    document.querySelector("img").style.height = event.clientY.toString();
})