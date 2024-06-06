const logo = document.querySelector('#leftSectionBox');
const logoText = document.querySelector('#leftSection a h1');

function logoAnime() {
  let tl = gsap.timeline();

  logo.addEventListener("mouseenter", function () {
    tl.to(logoText, {
      opacity: 1
    })
  })

  logo.addEventListener("mouseleave", function () {
    tl.to(logoText, {
      opacity: 0
    })
  })
}

logoAnime();

function navAnime() {
  let tl = gsap.timeline();

  tl.from('body', {
    opacity: 0,
    duration: 1
  })

  tl.from('#navContainer #leftSection', {
    x: -1500,
    duration: 0.75
  })

  tl.from('#leftSection #leftSectionBox', {
    x: -1500,
    duration: 0.75
  })

  tl.from('#navContainer .navSection', {
    y: -100,
    opacity: 0,
    duration: 0.85,
    stagger: 0.25
  })

  tl.from('#navContainer .navSection', {
    duration: 0.85,
    stagger: 0.25
  })
}

navAnime();

const crsr = document.querySelector('#container #cursor');
const crsrDot = document.querySelector('#cursor #cursorDot');
const container = document.querySelector('#container');
const nav = document.querySelector('nav');

function cursor() {
  container.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.pageX + "px";
    crsr.style.top = dets.pageY + "px";

    crsr.animate({
      left: dets.pageX + "px",
      top: dets.pageY + "px",
    }, { duration: 4500, fill: "forwards" });
  })

  container.addEventListener("mousemove", function (dets) {
    crsrDot.style.left = dets.pageX + "px";
    crsrDot.style.top = dets.pageY + "px";
  })

  nav.addEventListener('mouseenter', () => {
    crsr.style.zIndex = '101';
  })

  nav.addEventListener('mouseleave', () => {
    crsr.style.zIndex = '8';
  })
}

cursor();

const mainContainerText1 = document.querySelector('#mainContainer #page1 h1');
const mainPage2 = document.querySelector('#mainContainer #page2Container');
const mainPage2Text = document.querySelector('#mainContainer #page2 #page2Container h1');
const mainPage2Text2 = document.querySelector('#mainContainer #page2 #page2Container h2');

function mainTextGsap() {
  let tl = gsap.timeline();

  tl.to(mainContainerText1, {
    display: 'none',
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      scroller: 'body',
      trigger: mainContainerText1,
      start: 'top 0%',
      end: 'top 150%',
      scrub: 2,
    }
  })

  function page2() {
    let tl = gsap.timeline();

    tl.from(mainPage2Text, {
      transform: 'translateX(-300%)',
      scrollTrigger: {
        scroller: 'body',
        trigger: mainPage2,
        start: 'top 0%',
        end: 'top 0%',
        pin: true,
        scrub: 2,
      }
    })

    tl.from(mainPage2Text2, {
      transform: 'translateX(300%)',
      scrollTrigger: {
        scroller: 'body',
        trigger: mainPage2,
        start: 'top 0%',
        end: 'top 0%',
        pin: true,
        scrub: 2,
      }
    })

    tl.to(mainPage2Text, {
      display: 'none',
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        scroller: 'body',
        trigger: '#secondPage',
        start: 'top 0%',
        end: 'top 150%',
        scrub: 2,
      }
    })

    tl.to(mainPage2Text2, {
      display: 'none',
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        scroller: 'body',
        trigger: '#secondPage',
        start: 'top 0%',
        end: 'top 150%',
        scrub: 2,
      }
    })

    tl.to('main', {
      display: 'none',
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        scroller: 'body',
        trigger: '#thirdPage',
        start: 'top 0%',
        end: 'top 150%',
        scrub: 2,
      }
    })
  }

  page2();
}

mainTextGsap();

function thirdPage() {
  const pageh1 = document.querySelector('#thirdPageContainer h1');
  const pageh2 = document.querySelector('#thirdPageContainer h2');

  let tl = gsap.timeline();

  tl.from(pageh1, {
    x: -1500,
    opacity: 0,
    scrollTrigger: {
      scroller: 'body',
      trigger: '#thirdPageContainer #thirdRight',
      start: 'top 80%',
      end: 'top 50%',
      scrub: 2,
    }
  })

  tl.from(pageh2, {
    x: -1000,
    opacity: 0,
    scrollTrigger: {
      scroller: 'body',
      trigger: '#thirdPageContainer #thirdRight',
      start: 'top 80%',
      end: 'top 50%',
      scrub: 4,
    }
  })

  tl.from('#thirdRight', {
    x: 1000,
    opacity: 0,
    scrollTrigger: {
      scroller: 'body',
      trigger: '#thirdPageContainer #thirdRight',
      start: 'top 80%',
      end: 'top 50%',
      scrub: 4,
    }
  })
}

thirdPage();
