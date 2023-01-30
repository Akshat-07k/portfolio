console.log('hello World!');

let topEducation = document.querySelector('.top--left--education');
let topprojects = document.querySelector('.top--left--projects');
let opacityUnderlay = document.querySelector('.underlay');
let overlayButt = document.querySelector('.top--left--info');
let info = document.querySelector('.info');
let infoCross = document.querySelector('.info--cross');
let img1 = document.querySelector('._balck');


topEducation.addEventListener('click',()=>{
    document.querySelector('main').scrollIntoView({behavior:'smooth'});
})

topprojects.addEventListener('click',()=>{
    document.querySelector('footer').scrollIntoView({behavior:'smooth'});
})

overlayButt.addEventListener('click',()=>{
    opacityUnderlay.style.opacity = 0.5;
    info.style.display = 'block';
})

infoCross.addEventListener('click',()=>{
    opacityUnderlay.style.opacity = 1;
    info.style.display = 'none';
})


    //For lazy load
let observer = new IntersectionObserver((entries) => {
            entries.forEach((entry)=>{
                // console.log(entry);
                if(entry.isIntersecting)
                entry.target.classList.add('show');

                // For animating Multiple time
                // else
                // entry.target.classList.remove('show'); 
            })
        })

        let hiddenEle = document.querySelectorAll(".hidden");
        hiddenEle.forEach((el) =>{observer.observe(el)});

