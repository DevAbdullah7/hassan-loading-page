// Popular Variabls
let html = document.querySelector('.html')
let body = document.querySelector('.body')
let nav = document.querySelector('.nav')
let mainContent = document.querySelector('.mainContent')
let footer = document.querySelector('.footer');

// Website Sittings Showen ( Language - Mood )
const languageBtn = document.querySelector('.nav #languageBtn')
languageBtn.addEventListener('click', () => {
    languageBtn.classList.toggle('active')
})
function closeSettings() {
    languageBtn.classList.remove('active')
}

// Language Changeing
function english() {
    window.localStorage.setItem('language', 'english');
    languageBtn.classList.remove('arabic');
    html.classList.remove('arabic');
    languageBtn.classList.add('english');
    html.classList.add('english');
}
function arabic() {
    window.localStorage.setItem('language', 'arabic');
    languageBtn.classList.remove('english');
    html.classList.remove('english');
    languageBtn.classList.add('arabic');
    html.classList.add('arabic');
}

languageBtn.addEventListener('click', () => {
    if (languageBtn.classList.contains('english')) {
        arabic()
    } else if (languageBtn.classList.contains('arabic')) {
        english()
    }
    closeSettings()
})
if (window.localStorage.hasOwnProperty('language')) {
    if (localStorage.valueOf('language').language !== 'english') {
        arabic();
    } else {
        english();
    }
} else {
    english();
}

// Scralling Transition 
function reveal() {
    let sections = document.querySelectorAll('.section')
    for (let i = 0; i < sections.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = sections[i].getBoundingClientRect().top;
        let revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
            sections[i].classList.add('active');
            if (sections[i].classList.contains('skills')) {
                if (!skillsNumsAnimation) {
                    let nums = document.querySelectorAll('.skills .numsAnimation')
                    nums.forEach((num) => startCount(num))
                }
                skillsNumsAnimation = true;
                let skillsBars = document.querySelectorAll('.skills .skillBar');
                skillsBars.forEach((bar) => {
                    bar.classList.add('active')
                })
            }
        } else {
            sections[i].classList.remove('active');
            if (sections[i].classList.contains('skills')) {
                skillsNumsAnimation = false;
                let nums = document.querySelectorAll('.skills .numsAnimation')
                nums.forEach((num) => {
                    num.textContent = 0
                })
                let skillsBars = document.querySelectorAll('.skills .skillBar');
                skillsBars.forEach((bar) => {
                    bar.classList.remove('active')
                })
            }
        }
    }
}
function startCount(el) {
    let goal = Number(el.getAttribute('goal'));
    let counter = setInterval(() => {
        el.textContent++;
        if (Number(el.textContent) === goal) {
            clearInterval(counter);
        }
    }, 1250 / goal)
}

let skillsNumsAnimation = false;
window.addEventListener('scroll', () => {
    reveal();
});

let navMobileBtn = document.getElementById('navMobileBtn')
function navMobileShow(BTN) {
    if (BTN.classList.contains('open')) {
        BTN.classList.remove('open')
        BTN.classList.add('close')
        nav.setAttribute('mobile', 'open')
    } else if (BTN.classList.contains('close')) {
        BTN.classList.remove('close')
        BTN.classList.add('open')
        nav.setAttribute('mobile', 'close')
    }
}
navMobileBtn.addEventListener('click', () => {
    navMobileShow(navMobileBtn)
})
document.querySelectorAll('.nav li').forEach((el) => {
    el.addEventListener('click', () => {
        if (el.id !== 'settingsBtn') {
            navMobileShow(navMobileBtn)
        }
    })
})

function showCertificate(el) {
    let img = document.getElementById(el)
    if (!img.classList.contains('show')) {
        img.classList.add('show')
    } else {
        img.classList.remove('show')
    }
}

window.addEventListener('load', () => {
    let tempTimerOut = setTimeout(() => {
        reveal()
    }, 1000)
})