const burger = document.querySelector(".burger")
const closeBtn = document.querySelector(".close")
const openBtn = document.querySelector(".open")

openBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  burger.style.display ="flex"
  openBtn.style.display ="none"
})

closeBtn.addEventListener('click', (e)=>{
  e.preventDefault()
  burger.style.display ="none"
  openBtn.style.display ="flex"
})
