var swiper = new Swiper(".mySlider", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    loop: true,
});


// ----------------------------------------
const games_menu_btns = document.querySelectorAll(".games-menu > a")
const games_menu_containers = document.querySelectorAll(".menu-containers > .row")
games_menu_btns.forEach(item=>{
    item.addEventListener("click",function(e){
        games_menu_btns.forEach(innerItem=>{
            innerItem.className = ""
        })
        item.className = "active"
        let data_val = item.getAttribute("data-val")
        games_menu_containers.forEach(container_item=>{
            if(container_item.getAttribute("data-val") == data_val){
                container_item.style.display = "block"
                setTimeout(() => {
                    container_item.className = "row active"
                }, 200);
            } else {
                container_item.style.display = "none" 
                container_item.className = "row"
            }
        })
    })
})