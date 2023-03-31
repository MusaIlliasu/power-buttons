const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

good.addEventListener("click", (e) => {
    good.parentElement.classList.toggle("active");
    if(cheap.parentElement.classList.contains("active") && fast.parentElement.classList.contains("active")){
        cheap.parentElement.classList.remove("active");
    }
});
cheap.addEventListener("click", (e) => {
    cheap.parentElement.classList.toggle("active");
    if(good.parentElement.classList.contains("active") && fast.parentElement.classList.contains("active")){
        fast.parentElement.classList.remove("active");
    }
});
fast.addEventListener("click", (e) => {
    fast.parentElement.classList.toggle("active");
    if(good.parentElement.classList.contains("active") && cheap.parentElement.classList.contains("active")){
        cheap.parentElement.classList.remove("active");
    }
});