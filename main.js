 document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector(".head-container").classList.toggle("open")
    });

    document.getElementById('menu').addEventListener('click', event => {
        event._isClickWithInMenu = true;
    });
    document.getElementById('burger').addEventListener('click', event => {
        event._isClickWithInMenu = true;
    });

    document.body.addEventListener('click', event => {
        if (event._isClickWithInMenu) return;
        document.querySelector('.head-container').classList.remove('open')
    });

    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector(".blackout").classList.toggle("blackout_open")
    });

    document.getElementById('menu').addEventListener('click', event => {
        event._isClickWithInMenu = true;
    });
    document.getElementById('burger').addEventListener('click', event => {
        event._isClickWithInMenu = true;
    });
    document.body.addEventListener('click', event => {
        if (event._isClickWithInMenu) return;
        document.querySelector('.blackout').classList.remove('blackout_open')
    });

    document.getElementById("search").addEventListener("click", function() {
        document.querySelector(".header_search_block").classList.toggle("is_active")
    });

    document.getElementById("search_close").addEventListener("click", function() {
        document.querySelector(".header_search_block").classList.remove("is_active")
    });

    const search_el = document.querySelectorAll('#search, #search_close');
    search_el.forEach((element) => {
    element.addEventListener("click", function() {
        if(window.innerWidth <= 677) {
            document.querySelector(".main_logo_link").classList.toggle("hidden")
        } else {
            document.querySelector(".main_logo_link").classList.remove("hidden")
        }
    });
});
})





