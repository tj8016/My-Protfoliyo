/*==================== NAVBAR HEIGHT FOR SCROLL PADDING ====================*/
const navBar = document.getElementById('nav-bar');
const navBarHeight = navBar.offsetHeight;
// console.log(navBarHeight)

document.documentElement.style.setProperty(
    "--scroll-padding",
    navBarHeight + "px"
);

/*==================== HOME TEXT CHANGING LOGIC ====================*/
var typeData = new Typed(".role", {
    strings: [
        "Web Devloper",
        "FullStack Devloper",
        "Coder",
    ],
    loop: true,
    typeSpeed: 120,
    backSpeed: 50,
    backDelay: 1000,
});

/*==================== MOBILE NAVBAR TOGGLE ====================*/
const toggle = document.getElementById("toggle");
const mobileNav = document.getElementById("mobile-nav");
const mobileNavBtn = document.querySelectorAll('.mobile-nav-btn');
visible = false;

function toggleMovileNav() {
    if (visible == false) {
        mobileNav.classList.remove('mobile-close');
        mobileNav.classList.add('mobile-open');

        toggle.classList.remove('mobile-close')
        toggle.classList.add('mobile-open');

        visible = true;
    }
    else {
        mobileNav.classList.remove('mobile-open');
        mobileNav.classList.add('mobile-close');
        
        toggle.classList.remove('mobile-open')
        toggle.classList.add('mobile-close');

        visible = false;
    }
}

toggle.addEventListener('click', () => {
    toggleMovileNav();
})


mobileNavBtn.forEach((e) => {
    e.addEventListener('click', toggleMovileNav);
})


/*==================== SKILLS TOGGLE ====================*/

const skillsContent = document.querySelectorAll('.skills-content');
const skillsHeader = document.querySelectorAll('.skills-header');

function toggleSkills() {
    const clickedItem = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills-content skills-close';
    }

    if (clickedItem == 'skills-content skills-close') {
        this.parentNode.className = 'skills-content skills-open';
    }
}

skillsHeader.forEach((e) => {
    e.addEventListener('click', toggleSkills);
})


/*==================== QUALIFICATION TABS ====================*/
const qualificationTabs = document.querySelectorAll('[data-target]');
const qualificationTabContents = document.querySelectorAll('[data-content]');

qualificationTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        qualificationTabContents.forEach((tabContent) => {
            tabContent.classList.add('hidden');
        })
        qualificationTabs.forEach((tab) => {
            tab.classList.remove('active');
        })

        tab.classList.add('active');
        target.classList.remove('hidden');
    });
});


/* ======================= Sending Email =======================*/
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');


function sendEmail() {
    Email.send({
        SecureToken : "db5a5fb1-2c66-4e5a-9c7a-8de657641085",
        To : 'tohidujjamanhoque@gmail.com',
        From : "tohi7479@gmail.com",
        Subject : "New Contact Form Enquiry",
        Body : "Name : " + name.value 
        + "<br> Email :" + email.value
        + "<br> Message : " + message.value,
    }).then(
      message => alert(message)
    );
}