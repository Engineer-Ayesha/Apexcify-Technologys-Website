let navbar=document.querySelector("#navbar");
window.addEventListener("scroll",()=>{
    let scrolledNav=window.scrollY;
    if(scrolledNav===0){
    navbar.classList.remove("scrolled");
    }else{
        navbar.classList.add("scrolled");
    }
});
let iconClicked=document.querySelector("#icon");
iconClicked.addEventListener("click",()=>{
    let linksContainer=document.querySelector("#second-box");
    linksContainer.classList.toggle("active");
});
let aboutSectionEl=document.querySelector("#about-section");
let aboutDetails=document.querySelector("#about-details");
let aboutImage=document.querySelector("#about-image");

function animateAboutSection() {
    let sectionPos = aboutSectionEl.getBoundingClientRect();
    if (sectionPos.top < window.innerHeight - 100) {
        aboutDetails.style.opacity="1";
        aboutDetails.style.transform="translateY(0)";
        aboutImage.style.opacity="1";
        aboutImage.style.transform="translateY(0)";
    }
}
window.addEventListener("scroll", animateAboutSection);
window.addEventListener("load", animateAboutSection);
let services=document.querySelectorAll(".boxes");
function servicesSection(){
    for(let i=0;i<services.length;i++){
        let services_position=services[i].getBoundingClientRect();
        if(services_position.top<window.innerHeight-100){
            services[i].classList.add("boxes-class");
    }
}
}
window.addEventListener("scroll",servicesSection);
servicesSection();
let portfolio=document.querySelectorAll(".portfolio-boxes");
function portfolioSection(){
    for(let i=0;i<portfolio.length;i++){
        let portfolio_position=portfolio[i].getBoundingClientRect();
        if(portfolio_position.top<window.innerHeight-100){
            portfolio[i].classList.add("portfolio-class");
    }
}
}
window.addEventListener("scroll",portfolioSection);
portfolioSection();
let contact=document.querySelector("#contact-section");
function contactSection(){
    let contact_position=contact.getBoundingClientRect();
    if(contact_position.top<window.innerHeight-100){
        contact.classList.add("contact-class");
    }
}
window.addEventListener("scroll",contactSection);
contactSection();