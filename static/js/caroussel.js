document.addEventListener('DOMContentLoaded', ()=>{
    const carousels = document.querySelectorAll('.carousel .slide') 
    carousels.forEach(item =>{
        let i = 0
        const btnPrev = document.querySelector('[data-bs-slide="prev"]')
        const btnNext = document.querySelector('[data-bs-slide="next"]')
        btnPrev.addEventListener('click', ()=>{
            i -= 1
            target = btnPrev.dataset.bs-target;
            const carousel = document.getElementById(target)
            let carouselLists = document.querySelectorAll('carousel-item')
            let activeCard = document.querySelector('carousel-item active')
            carouselLists[i].classList.add('active')
            activeCard.classList.remove('active')
            activeCard = carouselLists[i];
        })
        btnNext.addEventListener('click', ()=>{
                i += 1
                target = btnNext.dataset.bs-target;
                const carousel = document.getElementById(target)
                let carouselLists = document.querySelectorAll('carousel-item')
                let activeCard = document.querySelector('carousel-item active')
                carouselLists[i].classList.add('active')
                activeCard.classList.remove('active')
                activeCard = carouselLists[i];
            })
        })
    })
