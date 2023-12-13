const titles_settings = document.getElementsByClassName('heading-settings');
const h1_settings = document.getElementsByTagName('H1');
const h2_settings = document.getElementsByTagName('H2');
const h3_settings = document.getElementsByTagName('H3');
const h4_settings = document.getElementsByTagName('H4');
const h5_settings = document.getElementsByTagName('H5');
const h6_settings = document.getElementsByTagName('H6');
const texts_settings = document.getElementsByClassName('texts-settings');
const links_settings = document.getElementsByClassName('a-settings');
const background_settings = document.getElementsByClassName('background-settings');


/* 
    xxxxxxxxxxxxxxxxxxxxxxxx Background xxxxxxxxxxxxxxxxxxxxxxxx 
*/
// Couleur du fond (body)
function backgroundColor(e) {
    document.body.style.backgroundColor = e.value;
    for (let o = 0; o < background_settings.length; o++) {
        background_settings[o].style.backgroundColor = e.value;
    }
}

/* 
    xxxxxxxxxxxxxxxxxxxxxxxx Title xxxxxxxxxxxxxxxxxxxxxxxx 
*/
// Couleur de tous les titres
function titlesColor(e) {
    for (let o = 0; o < titles_settings.length; o++) {
        titles_settings[o].style.color = e.value;
    }
}

// Couleur du titre h1
function h1Color(e) {
    for (let o = 0; o < h1_settings.length; o++) {
        h1_settings[o].style.color = e.value;
    }
}

// Couleur du titre h2
function h2Color(e) {
    for (let o = 0; o < h2_settings.length; o++) {
        h2_settings[o].style.color = e.value;
    }
}

// Couleur du titre h3
function h3Color(e) {
    for (let o = 0; o < h3_settings.length; o++) {
        h3_settings[o].style.color = e.value;
    }
}

// Couleur du titre h4
function h4Color(e) {
    for (let o = 0; o < h4_settings.length; o++) {
        h4_settings[o].style.color = e.value;
    }
}

// Couleur du titre h5
function h5Color(e) {
    for (let o = 0; o < h5_settings.length; o++) {
        h5_settings[o].style.color = e.value;
    }
}

// Couleur du titre h6
function h6Color(e) {
    for (let o = 0; o < h6_settings.length; o++) {
        h6_settings[o].style.color = e.value;
    }
}

// Font-family de tous les titres
function titleFontFamily(e) {
    for (let o = 0; o < titles_settings.length; o++) {
        titles_settings[o].style.fontFamily = e.value;
    }
}

// Font-size du h1
function h1FontSize(e) {
    for (let o = 0; o < h1_settings.length; o++) {
        h1_settings[o].style.fontSize = e.value;
    }
}

// Font-size du h2
function h2FontSize(e) {
    for (let o = 0; o < h2_settings.length; o++) {
        h2_settings[o].style.fontSize = e.value;
    }
}

// Font-size du h3
function h3FontSize(e) {
    for (let o = 0; o < h3_settings.length; o++) {
        h3_settings[o].style.fontSize = e.value;
    }
}

// Font-size du h4
function h4FontSize(e) {
    for (let o = 0; o < h4_settings.length; o++) {
        h4_settings[o].style.fontSize = e.value;
    }
}

// Font-size du h5
function h5FontSize(e) {
    for (let o = 0; o < h5_settings.length; o++) {
        h5_settings[o].style.fontSize = e.value;
    }
}

// Font-size du h6
function h6FontSize(e) {
    for (let o = 0; o < h6_settings.length; o++) {
        h6_settings[o].style.fontSize = e.value;
    }
}

/* 
    xxxxxxxxxxxxxxxxxxxxxxxx Text xxxxxxxxxxxxxxxxxxxxxxxx 
*/
// Couleur du texte
function textColor(e) {
    for (let o = 0; o < texts_settings.length; o++) {
        texts_settings[o].style.color = e.value;
    }
}

// Police du texte
function textFontFamily(e) {
    for (let o = 0; o < texts_settings.length; o++) {
        texts_settings[o].style.fontFamily = e.value;
    }
}

// Font-size du texte
function textFontSize(e) {
    for (let o = 0; o < texts_settings.length; o++) {
        texts_settings[o].style.fontSize = e.value;
    }
}

/* 
    xxxxxxxxxxxxxxxxxxxxxxxx Links xxxxxxxxxxxxxxxxxxxxxxxx 
*/
// Couleur des liens
function linksColor(e) {
    for (let o = 0; o < links_settings.length; o++) {
        links_settings[o].style.color = e.value;
    }
}

// Police des liens
function linkFontFamily(e) {
    for (let o = 0; o < links_settings.length; o++) {
        links_settings[o].style.fontFamily = e.value;
    }
}

// Font-size des liens
function linkFontSize(e) {
    for (let o = 0; o < links_settings.length; o++) {
        links_settings[o].style.fontSize = e.value;
    }
}

/* 
    xxxxxxxxxxxxxxxxxxxxxxxx Menu burger xxxxxxxxxxxxxxxxxxxxxxxx 
*/
const btnSettings = document.querySelector('.settings__btn--svg');
const panel = document.querySelector('.settings__panel');

btnSettings.addEventListener("click", openMenu);
function openMenu() {
    btnSettings.classList.toggle("active");
    panel.classList.toggle("active");
}

const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".wrapper__btn");
const contents = document.querySelectorAll(".wrapper__content");

tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabButton.forEach(btn => {
            btn.classList.remove("active");
        });

        e.target.classList.add("active");

        contents.forEach(content => {
            content.classList.remove("active");
        });

        const element = document.getElementById(id);
        element.classList.add("active");
    }
}