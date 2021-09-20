window.addEventListener("load", () => {
  document.querySelector(".main").classList.remove("hidden");
  document.querySelector(".home-section").classList.add("active");
});

/* ------- Text Typing Animation ------- */
const textArray = ["Front-End Web Dev", "Designer", "Freelancer"];

const cursorSpan = document.querySelector(".cursor");

const typedTextSpan = document.querySelector(".typed-text");

const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1300;

let textArrayIndex = 0;
let charIndex = 0;

const type = () => {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
};

const erase = () => {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) {
      textArrayIndex = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (textArray.length) {
    setTimeout(type, 1000);
  }
});

/* ------- Page Loader ------- */
document.querySelector(".page-loader").classList.add("fade-out");
setTimeout(() => {
  document.querySelector(".page-loader").style.display = "none";
}, 300);

/* ------- Toggle Navbar ------- */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
  hideSection();
  toggleNavbar();
  document.body.classList.toggle("hide-scrolling");
});

const hideSection = () => {
  document.querySelector("section.active").classList.toggle("fade-out");
};

const toggleNavbar = () => {
  document.querySelector(".header").classList.toggle("active");
};

/* ------- Active Section ------- */

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    // activate overlay to prevent multiple clicks
    document.querySelector(".overlay").classList.add("active");
    navToggler.classList.add("hide");

    if (e.target.classList.contains("nav-item")) {
      toggleNavbar();
    } else {
      hideSection();
      document.body.classList.add("hide-scrolling");
    }

    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      navToggler.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    }, 200);
  }
});

/* ------- About Tabs ------- */

const tabsContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    const target = e.target.getAttribute("data-target");
    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});

/* ------- Portfolio Item Details Popup ------- */

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortfolioPopup();
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
    portfolioItemDetails(e.target.parentElement);
  }
});

const togglePortfolioPopup = () => {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out");
};

document
  .querySelector(".pp-close")
  .addEventListener("click", togglePortfolioPopup);

// hide popup when clicking outside of the popup

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePortfolioPopup();
  }
});

const portfolioItemDetails = (portfolioItem) => {
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(
    ".portfolio-item-thumbnail img"
  ).src;
  document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;
  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
    ".portfolio-item-details"
  ).innerHTML;
};

/* ------- En-Ru Language Switcher ------- */

const langToggler = document.querySelector(".lang-switcher");

const EnRu = document.querySelector(".lang");

langToggler.addEventListener("click", () => {
  if (EnRu.innerHTML === "Ru") {
    document.querySelector(".lang").innerHTML = "En";

    changeLangToRu();
  } else if (EnRu.innerHTML === "En") {
    document.querySelector(".lang").innerHTML = "Ru";

    changeLangToEn();
  }
});

const changeLangToRu = () => {
  document.querySelector("#home-1").innerHTML = "Привет! Меня зовут ";
  document.querySelector("#home-2").innerHTML = "Дмитрий Величко";
  document.querySelector("#home-3").innerHTML = "Резюме";
  document.querySelector("#home-4").innerHTML = "Портфолио";

  document.querySelector("#about-1").innerHTML = "Портфолио";
  document.querySelector("#about-2").innerHTML = "👋 Лингвист по образованию, программист по призванию.<br /><br />👀 Фронтенд веб-разработчик (HTML, CSS, JS, ReactJS)<br /><br />💞️ Свободно владею английским языком на уровне носителя (9 лет опыта работы переводчиком).<br /><br />🌱 Имею 4-летний опыт управления коллективом (из них 2 года директором гос. учреждения культуры).<br /><br />📫 Если у вас есть вопросы или вы просто хотите пообщаться, то пишите: Dmitry.Velichko2010@gmail.com<br /><br />💥 github.com/DmitryVelichko";
  document.querySelector("#about-3").innerHTML = "Навыки";
  document.querySelector("#about-4").innerHTML = "Образование";
  document.querySelector("#about-5").innerHTML = "Опыт работы";
  document.querySelector("#about-5-1").innerHTML = "2021 - по настоящее время";
  document.querySelector("#about-5-2").innerHTML = "2021 - по насоящее время";
  document.querySelector("#about-6").innerHTML = "Frontend веб-разработчик –";
  document.querySelector("#about-7").innerHTML = "Онлайн курсы";
  document.querySelector("#about-8").innerHTML = "Курсы по фронтенду и computer science от Udemy, Udacity, FreeCodeCamp, PluralSight, TeamTreeHouse, Traversy Media, Mosh, WebDev Simplified, DevEd, Derek Banas и др.";
  document.querySelector("#about-9").innerHTML = "";
  document.querySelector("#about-10").innerHTML = "";
  document.querySelector("#about-11").innerHTML = "";
  document.querySelector("#about-12").innerHTML = "";
  document.querySelector("#about-13").innerHTML = "";
  document.querySelector("#about-14").innerHTML = "";
  document.querySelector("#about-15").innerHTML = "";
  document.querySelector("#about-16").innerHTML = "";

  document.querySelector("#exp-1").innerHTML = "";
  document.querySelector("#exp-2").innerHTML = "";
  document.querySelector("#exp-3").innerHTML = "";
  document.querySelector("#exp-4").innerHTML = "";
  document.querySelector("#exp-5").innerHTML = "";
  document.querySelector("#exp-6").innerHTML = "";
  document.querySelector("#exp-7").innerHTML = "";
  document.querySelector("#exp-8").innerHTML = "";
  document.querySelector("#exp-9").innerHTML = "";

  document.querySelector("#exp-9-1").innerHTML = "";
  document.querySelector("#exp-9-2").innerHTML = "";
  document.querySelector("#exp-9-3").innerHTML = "";
  document.querySelector("#exp-9-4").innerHTML = "";
  document.querySelector("#exp-9-5").innerHTML = "";
  document.querySelector("#exp-9-6").innerHTML = "";
  document.querySelector("#exp-9-7").innerHTML = "";
  document.querySelector("#exp-9-8").innerHTML = "";
  document.querySelector("#exp-9-9").innerHTML = "";

  document.querySelector("#exp-10-1").innerHTML = "";
  document.querySelector("#exp-10-2").innerHTML = "";
  document.querySelector("#exp-10-3").innerHTML = "";
  document.querySelector("#exp-10-4").innerHTML = "";
  document.querySelector("#exp-10-5").innerHTML = "";
  document.querySelector("#exp-10-6").innerHTML = "";
  document.querySelector("#exp-10-7").innerHTML = "";



  document.querySelector("#portfolio-1").innerHTML = "";
  document.querySelector("#portfolio-2").innerHTML = "";
  document.querySelector("#portfolio-3").innerHTML = "";
  document.querySelector("#portfolio-4").innerHTML = "";
  document.querySelector("#portfolio-5").innerHTML = "";
  document.querySelector("#portfolio-6").innerHTML = "";
  document.querySelector("#portfolio-7").innerHTML = "";
  document.querySelector("#portfolio-8").innerHTML = "";
  document.querySelector("#portfolio-9").innerHTML = "";
  document.querySelector("#portfolio-10").innerHTML = "";
  document.querySelector("#portfolio-11").innerHTML = "";
  document.querySelector("#portfolio-12").innerHTML = "";
  document.querySelector("#portfolio-13").innerHTML = "";
  document.querySelector("#portfolio-14").innerHTML = "";
  document.querySelector("#portfolio-15").innerHTML = "";
  document.querySelector("#portfolio-16").innerHTML = "";
  document.querySelector("#portfolio-17").innerHTML = "";
  document.querySelector("#portfolio-18").innerHTML = "";
  document.querySelector("#portfolio-19").innerHTML = "";
  document.querySelector("#portfolio-20").innerHTML = "";
  document.querySelector("#portfolio-21").innerHTML = "";
  document.querySelector("#portfolio-22").innerHTML = "";
  document.querySelector("#portfolio-23").innerHTML = "";
  document.querySelector("#portfolio-24").innerHTML = "";
  document.querySelector("#portfolio-25").innerHTML = "";
  document.querySelector("#portfolio-26").innerHTML = "";
  document.querySelector("#portfolio-27").innerHTML = "";
  document.querySelector("#portfolio-28").innerHTML = "";
  document.querySelector("#portfolio-29").innerHTML = "";
  document.querySelector("#portfolio-30").innerHTML = "";
  document.querySelector("#portfolio-31").innerHTML = "";
  document.querySelector("#portfolio-32").innerHTML = "";
  document.querySelector("#portfolio-33").innerHTML = "";
  document.querySelector("#portfolio-34").innerHTML = "";
  document.querySelector("#portfolio-35").innerHTML = "";
  document.querySelector("#portfolio-36").innerHTML = "";
  document.querySelector("#portfolio-37").innerHTML = "";
  document.querySelector("#portfolio-38").innerHTML = "";
  document.querySelector("#portfolio-39").innerHTML = "";
  document.querySelector("#portfolio-40").innerHTML = "";
  document.querySelector("#portfolio-41").innerHTML = "";
  document.querySelector("#portfolio-42").innerHTML = "";
  document.querySelector("#portfolio-43").innerHTML = "";
  document.querySelector("#portfolio-44").innerHTML = "";
  document.querySelector("#portfolio-45").innerHTML = "";
  document.querySelector("#portfolio-46").innerHTML = "";
  document.querySelector("#portfolio-47").innerHTML = "";
  document.querySelector("#portfolio-48").innerHTML = "";
  document.querySelector("#portfolio-49").innerHTML = "";
  document.querySelector("#portfolio-50").innerHTML = "";
  document.querySelector("#portfolio-51").innerHTML = "";
  document.querySelector("#portfolio-52").innerHTML = "";
  document.querySelector("#portfolio-53").innerHTML = "";
  document.querySelector("#portfolio-54").innerHTML = "";
  document.querySelector("#portfolio-55").innerHTML = "";
  document.querySelector("#portfolio-56").innerHTML = "";
  document.querySelector("#portfolio-57").innerHTML = "";
  document.querySelector("#portfolio-58").innerHTML = "";
  document.querySelector("#portfolio-59").innerHTML = "";
  document.querySelector("#portfolio-60").innerHTML = "";
  document.querySelector("#portfolio-61").innerHTML = "";

  document.querySelector("#contact-1").innerHTML = "";
  document.querySelector("#contact-2").innerHTML = "";
  document.querySelector("#contact-3").innerHTML = "";
  document.querySelector("#contact-4").innerHTML = "";
  document.querySelector("#contact-5").innerHTML = "";
  document.querySelector("#contact-6").innerHTML = "";
  document.querySelector("#contact-7").innerHTML = "";
  document.querySelector("#contact-8").innerHTML = "";
  document.querySelector("#contact-9").innerHTML = "";
};

const changeLangToEn = () => {
  document.querySelector("#home-1").innerHTML = "Hello, I'm ";
  document.querySelector("#home-2").innerHTML = "Dmitry Velichko";
  document.querySelector("#home-3").innerHTML = "more about me";
  document.querySelector("#home-4").innerHTML = "portfolio";
  document.querySelector("#about-1").innerHTML = "About me";

  document.querySelector("#about-1").innerHTML = "about me";
  document.querySelector("#about-2").innerHTML = "👋 Hi, I’m Dmitry.<br /><br />👀 A self-taught Frontend Web Dev (with a space industry background). Open for work or any projects.<br /><br />💞️ I’m working with HTML, CSS, JS, ReactJS (as well as SASS, TailwindCSS, Bootstrap) to make awesome websites & apps.<br /><br />🌱 I’m currently learning TypeScript, NextJS, Redux, and other technologies.<br /><br />📫 If you have any questions or just want to chat, I would be glad to talk to you! Please email at: Dmitry.Velichko2010@gmail.com<br /><br />💥 github.com/DmitryVelichko";
  document.querySelector("#about-3").innerHTML = "Skills";
  document.querySelector("#about-4").innerHTML = "education";
  document.querySelector("#about-5").innerHTML = "experience";
  document.querySelector("#about-5-1").innerHTML = "2021 - Present";
  document.querySelector("#about-5-2").innerHTML = "2021 - Present";
  document.querySelector("#about-6").innerHTML = "Frontend Web Developer –";
  document.querySelector("#about-7").innerHTML = "Online Courses";
  document.querySelector("#about-8").innerHTML = "Frontend and CS courses from Udemy, Udacity, FreeCodeCamp, PluralSight, TeamTreeHouse, Traversy Media, Mosh, WebDev Simplified, DevEd, Derek Banas, and other creators.";
  document.querySelector("#about-9").innerHTML = "Research Associate –";
  document.querySelector("#about-10").innerHTML = "Museum of Astronautics";
  document.querySelector("#about-11").innerHTML = "Research Associate in the domain of Space History and Astronautics.<br /><br />Published a book on life and work of the Soviet Spacecraft Chief Designer Sergei Korolev.";
  document.querySelector("#about-12").innerHTML = "Master's Degree –";
  document.querySelector("#about-13").innerHTML = "Moscow State Open University";
  document.querySelector("#about-14").innerHTML = "Translator and Interpreter (English and Spanish)";
  document.querySelector("#about-15").innerHTML = "Resume";
  document.querySelector("#about-16").innerHTML = "Contact Me";

  document.querySelector("#exp-1").innerHTML = "Frontend Web Developer –";
  document.querySelector("#exp-2").innerHTML = "Self-employed";
  document.querySelector("#exp-3").innerHTML = "<strong>></strong> I design web apps and websites using HTML, CSS, Bootstrap, JavaScript, and ReactJS.";
  document.querySelector("#exp-4").innerHTML = "Freelance Translator –";
  document.querySelector("#exp-5").innerHTML = "Supertext / Mars Translation";
  document.querySelector("#exp-6").innerHTML = " <strong>></strong> Provided English to Russian translation and editing services (games, mobile apps and websites).<br />";
  document.querySelector("#exp-7").innerHTML = "Director –";
  document.querySelector("#exp-8").innerHTML = "Museum of Academician Sergei Korolev<br />(Branch of the Museum of Astronautics)";
  document.querySelector("#exp-9").innerHTML = "<strong>></strong> Directed all aspects of museum operations.<br /><br />";

  document.querySelector("#exp-9-1").innerHTML = "‎<strong>></strong> Achieved a twofold increase in the attendance rate at the museum (doubling from 3,000 to 6,000 attendees a year).<br /><br />";
  document.querySelector("#exp-9-2").innerHTML = "<strong>></strong> Provided academic training of new tour guides, museum researchers, guides/interpreters that conducted excursions in Russian and English at the Memorial Museum of Cosmonautics as well as the Memorial House-Museum of Academician S.P. Korolev, and was also responsible for assessing the quality of their excursions.<br /><br />";
  document.querySelector("#exp-9-3").innerHTML = "<strong>></strong> ‎Oversaw promotion of various museum services and programmes.<br /><br />";
  document.querySelector("#exp-9-4").innerHTML = "<strong>></strong> Made a significant contribution to the development and popularization of the Memorial Museum of Cosmonautics and the Memorial House-Museum of Academician S.P. Korolev both in Russia and internationally.<br /><br />";
  document.querySelector("#exp-9-5").innerHTML = "‎<strong>></strong> Worked as an interpreter during official visits from foreign ambassadors, delegations, government officials of different countries, and other VIP guests.<br /><br />";
  document.querySelector("#exp-9-6").innerHTML = "<strong>></strong> Promoted museum through attendance at relevant conferences, workshops and meetings.<br /><br />";
  document.querySelector("#exp-9-7").innerHTML = "<strong>></strong> Fostered and maintained excellent working relationships with other museums.<br /><br />";
  document.querySelector("#exp-9-8").innerHTML = "<strong>></strong> Ensured excellent customer service.<br /><br />";
  document.querySelector("#exp-9-9").innerHTML = "<strong>></strong> Prepared and submitted annual budget to museum Board of Directors.<br /><br />";

  document.querySelector("#exp-10-1").innerHTML = "The first astronaut from the United Arab Emirates Hazza Al Mansouri. It was an honor for me to provide interpreting services for the astronaut Hazza Al Mansouri and his backup astronaut Sultan Al Nayadi, who visited the Museum of Cosmonautics a few months before the historical launch from Baikonur Cosmodrome.";
  document.querySelector("#exp-10-2").innerHTML = "NASA Administrator Jim Bridenstine visits the Museum of Cosmonautics. One of the most challenging and exciting interpreter jobs I have ever had.";
  document.querySelector("#exp-10-3").innerHTML = "French composer and musician Didier Marouani visits the Museum of Cosmonautics.";
  document.querySelector("#exp-10-4").innerHTML = "Live interpretation during the visit of Ricardo Lagorio, Ambassador of the Argentine Republic to the Russian Federation.";
  document.querySelector("#exp-10-5").innerHTML = "During the official visit of the Government Delegation of Ireland to the Museum of Cosmonautics.";
  document.querySelector("#exp-10-6").innerHTML = "Live interpretation of Luc van den Abeelen, designer of space patches and the artist of the Dutch company Spaceview.";
  document.querySelector("#exp-10-7").innerHTML = "During the book presentation of the Australian writer Alison Giles.";

  document.querySelector("#portfolio-1").innerHTML = "recent work";
  document.querySelector("#portfolio-2").innerHTML = "";
  document.querySelector("#portfolio-3").innerHTML = "";
  document.querySelector("#portfolio-4").innerHTML = "";
  document.querySelector("#portfolio-5").innerHTML = "";
  document.querySelector("#portfolio-6").innerHTML = "";
  document.querySelector("#portfolio-7").innerHTML = "";
  document.querySelector("#portfolio-8").innerHTML = "";
  document.querySelector("#portfolio-9").innerHTML = "";
  document.querySelector("#portfolio-10").innerHTML = "";
  document.querySelector("#portfolio-11").innerHTML = "";
  document.querySelector("#portfolio-12").innerHTML = "";
  document.querySelector("#portfolio-13").innerHTML = "";
  document.querySelector("#portfolio-14").innerHTML = "";
  document.querySelector("#portfolio-15").innerHTML = "";
  document.querySelector("#portfolio-16").innerHTML = "";
  document.querySelector("#portfolio-17").innerHTML = "";
  document.querySelector("#portfolio-18").innerHTML = "";
  document.querySelector("#portfolio-19").innerHTML = "";
  document.querySelector("#portfolio-20").innerHTML = "";
  document.querySelector("#portfolio-21").innerHTML = "";
  document.querySelector("#portfolio-22").innerHTML = "";
  document.querySelector("#portfolio-23").innerHTML = "";
  document.querySelector("#portfolio-24").innerHTML = "";
  document.querySelector("#portfolio-25").innerHTML = "";
  document.querySelector("#portfolio-26").innerHTML = "";
  document.querySelector("#portfolio-27").innerHTML = "";
  document.querySelector("#portfolio-28").innerHTML = "";
  document.querySelector("#portfolio-29").innerHTML = "";
  document.querySelector("#portfolio-30").innerHTML = "";
  document.querySelector("#portfolio-31").innerHTML = "";
  document.querySelector("#portfolio-32").innerHTML = "";
  document.querySelector("#portfolio-33").innerHTML = "";
  document.querySelector("#portfolio-34").innerHTML = "";
  document.querySelector("#portfolio-35").innerHTML = "";
  document.querySelector("#portfolio-36").innerHTML = "";
  document.querySelector("#portfolio-37").innerHTML = "";
  document.querySelector("#portfolio-38").innerHTML = "";
  document.querySelector("#portfolio-39").innerHTML = "";
  document.querySelector("#portfolio-40").innerHTML = "";
  document.querySelector("#portfolio-41").innerHTML = "";
  document.querySelector("#portfolio-42").innerHTML = "";
  document.querySelector("#portfolio-43").innerHTML = "";
  document.querySelector("#portfolio-44").innerHTML = "";
  document.querySelector("#portfolio-45").innerHTML = "";
  document.querySelector("#portfolio-46").innerHTML = "";
  document.querySelector("#portfolio-47").innerHTML = "";
  document.querySelector("#portfolio-48").innerHTML = "";
  document.querySelector("#portfolio-49").innerHTML = "";
  document.querySelector("#portfolio-50").innerHTML = "";
  document.querySelector("#portfolio-51").innerHTML = "";
  document.querySelector("#portfolio-52").innerHTML = "";
  document.querySelector("#portfolio-53").innerHTML = "";
  document.querySelector("#portfolio-54").innerHTML = "";
  document.querySelector("#portfolio-55").innerHTML = "";
  document.querySelector("#portfolio-56").innerHTML = "";
  document.querySelector("#portfolio-57").innerHTML = "";
  document.querySelector("#portfolio-58").innerHTML = "";
  document.querySelector("#portfolio-59").innerHTML = "";
  document.querySelector("#portfolio-60").innerHTML = "";
  document.querySelector("#portfolio-61").innerHTML = "";

  document.querySelector("#contact-1").innerHTML = "Contact Me";
  document.querySelector("#contact-2").innerHTML = "";
  document.querySelector("#contact-3").innerHTML = "";
  document.querySelector("#contact-4").innerHTML = "";
  document.querySelector("#contact-5").innerHTML = "";
  document.querySelector("#contact-6").innerHTML = "Send Message";
  document.querySelector("#contact-7").innerHTML = "Email";
  document.querySelector("#contact-8").innerHTML = "Phone";
  document.querySelector("#contact-9").innerHTML = "Follow Me";
};
