// window.onload = function (e) {
//   let menubutton = document.querySelector("nav__menu-button");
//   menubutton.addEventListener("click", function () {
//     console.log("Clicked");
//   });
// };
window.addEventListener("load", function () {
  let navheader = document.querySelector(".navbar-header");
  let hero = document.querySelector(".hero");
  let menubutton = document.querySelector(".nav__menu-button");
  let mobilemenu = document.querySelector(".mobile-menu");
  let mobilemenubg = document.querySelector(".bg-pattern");

  header_height = navheader.clientHeight;
  hero.style.marginTop = header_height + "px";
  menubutton.addEventListener("click", function () {
    let menuclass = menubutton.classList;
    if (menuclass.contains("open")) {
      menuclass.remove("open");

      mobilemenu.style.marginTop = "-100vh";
      mobilemenubg.style.transitionProperty = "none";
      mobilemenubg.style.width = "0";
    } else {
      menuclass.add("open");

      mobilemenu.style.marginTop = "0";
      mobilemenubg.style.transitionProperty = "all";
      mobilemenubg.style.width = "100%";
    }
  });

  // Create a condition that targets viewports at least 768px wide
  const mediaQuery = window.matchMedia("(min-width: 700px)");
  function handleTabletChange(e) {
    // Check if the media query is true
    if (e.matches) {
      // Then log the following message to the console
      let heroimg = document.querySelector(".heroImg");
      heroimg.src = "./images/image-intro-desktop.jpg";
    }
  }
  // Register event listener
  mediaQuery.addListener(handleTabletChange);
  // Initial check
  handleTabletChange(mediaQuery);
});
