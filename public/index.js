// //마우스
// const cursor = document.querySelector('.cursor')
// let mouseX
// let mouseY
// console.log(cursor)
// window.addEventListener('mousemove',function(e){
//     mouseX = e.clientX
//     mouseY = e.clientY
//     cursor.style.left = mouseX + 'px'
//     cursor.style.top = mouseY + 'px'
// })

// //bg
// gsap.fromTo('.bg1',{
//     opacity:0,
//     scale:1
// },{
//     opacity:1,
//     scale:0.9,
//     duration:1
// })

// const p1 = document.querySelector('.bg2 p:nth-child(1)')
// const p2 = document.querySelector('.bg2 p:nth-child(2)')
// const p3 = document.querySelector('.bg2 p:nth-child(3)')
// const p4 = document.querySelector('.bg2 p:nth-child(4)')

// ScrollTrigger.create({
//     trigger:p1,
//     start:'0 70%',
//     onEnter:() => p1.classList.add('ani1')
// })
// ScrollTrigger.create({
//     trigger:p2,
//     start:'0 70%',
//     onEnter:() => p2.classList.add('ani2')
// })
// ScrollTrigger.create({
//     trigger:p3,
//     start:'0 70%',
//     onEnter:() => p3.classList.add('ani3')
// })
// ScrollTrigger.create({
//     trigger:p4,
//     start:'0 70%',
//     onEnter:() => p4.classList.add('ani4')
// })

// const bg3 = document.querySelector('.bg3')
// ScrollTrigger.create({
//     trigger:bg3,
//     start:'0 70%',
//     onEnter:() => bg3.classList.add('bg34')
// })
// const bg4 = document.querySelector('.bg4')
// ScrollTrigger.create({
//     trigger:bg4,
//     start:'0 70%',
//     onEnter:() => bg4.classList.add('bg34')
// })
// const wrap5 = document.querySelector('.wrap5')
// ScrollTrigger.create({
//     trigger:wrap5,
//     start:'0 70%',
//     onEnter:() => wrap5.classList.add('bg5')
// })

// setTimeout(function(){window.scrollTo(0,0)},200)

// var mySwiper = new Swiper('.swiper-container',{
//     effect:'flip',
//     autoplay:{delay:3000},
//     loop:true
// })