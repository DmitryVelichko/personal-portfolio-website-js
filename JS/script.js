/* ------- Toggle Navbar ------- */
const navToggler = document.querySelector('.nav-toggler');
navToggler.addEventListener('click', () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle('hide-scrolling');
})

const hideSection = () => {
    document.querySelector('section.active').classList.toggle('fade-out');
}

const toggleNavbar = () => {
    document.querySelector('.header').classList.toggle('active');
}


/* ------- Active Section ------- */



/* ------- About Tabs ------- */

const tabsContainer = document.querySelector('.about-tabs');
const aboutSection = document.querySelector('.about-section');



tabsContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('tab-item') && !e.target.classList.contains('active')) {
    
        tabsContainer.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        
        const target = e.target.getAttribute('data-target');
        aboutSection.querySelector('.tab-content.active').classList.remove('active');
        aboutSection.querySelector(target).classList.add('active');

    }
});

/* ------- Portfolio Item Details Popup ------- */

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('view-project-btn')) {
        togglePortfolioPopup();
        document.querySelector('.portfolio-popup').scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    }
});

const togglePortfolioPopup = () => {
    document.querySelector('.portfolio-popup').classList.toggle('open');
    document.body.classList.toggle('hide-scrolling');
    document.querySelector('.main').classList.toggle('fade-out');
}

document.querySelector('.pp-close').addEventListener('click', togglePortfolioPopup);

// hide popup when clicking outside of the popup

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('pp-inner')) {
        togglePortfolioPopup();
    }
})

const portfolioItemDetails = (portfolioItem) => {
    document.querySelector('.pp-thumbnail img').src = portfolioItem.querySelector('.portfolio-item-thumbnail img').src;
    document.querySelector('.pp-header h3').innerHTML = portfolioItem.querySelector('.portfolio-item-title').innerHTML;
    document.querySelector('.pp-body').innerHTML = portfolioItem.querySelector('.portfolio-item-details').innerHTML;
}




