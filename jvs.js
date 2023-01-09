const boxes = document.querySelectorAll(".box")
console.log(boxes)
window.addEventListener("scroll", addscrollanimation )
addscrollanimation()
function addscrollanimation(){
    const p = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < p) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })

 
}
function Fforfunction(){
    alert("Nowhere to run")
}
