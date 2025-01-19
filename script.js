let sanatoryWrap = document.querySelector(".sanatories");


function addSanatoriya() {
    let n = 5;

    let sanatoriyaName = [
        "Burchmullo", "Chimyon", "Gagarin", "Xumson", "Zomin"
    ]
    let imgs = [
        "./imgs/burchmullo.jpg",
        "./imgs/chimyon.jpg",
        "./imgs/gagarin.jpg",
        "./imgs/mainimg.jpg",
        "./imgs/xumson.jpg"
    ]
    for (let i = 0; i < n; i++) {
        sanatoryWrap.innerHTML += `
        <div class="sanatory">
        <div class="context">
        <p id="sanatoryName">${sanatoriyaName[i]}</p>
        <p id="adress">Bo'stonliq tumani</p>
        <p id="cost">250$-800$</p>
        <p id="ariza"><a href="./ariza/ariza.html">Ariza</a></p>
        </div>
        </div>
        `;
    }
    let sanatoryCard = document.querySelectorAll(".sanatory");
    for (let i = 0; i < n; i++) {
        sanatoryCard[i].style.background = `url('${imgs[i]}')`
        sanatoryCard[i].style.backgroundRepeat = "no-repeat";
        sanatoryCard[i].style.backgroundSize = "100% 100%";
        sanatoryCard[i].style.backgroundPosition = "center center"
    }
}
addSanatoriya()