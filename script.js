function logoAnime() {
  const logo = document.querySelector('#leftLogo');
  let tl = gsap.timeline();

  logo.addEventListener("mouseenter", function () {
    tl.to('#navLeft p', {
      opacity: 1
    })
  })

  logo.addEventListener("mouseleave", function () {
    tl.to('#navLeft p', {
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

  tl.from('nav #navLeft', {
    x: -1500,
    duration: 0.75
  })

  tl.from('#navLeft #leftLogo', {
    x: -1500,
    duration: 0.75
  })

  tl.from('#navRight .rightBox', {
    y: -100,
    opacity: 0,
    duration: 0.85,
    stagger: 0.25
  })

  tl.from('#navRight .rightBox', {
    duration: 0.85,
    stagger: 0.25
  })
}

navAnime();

function cursor() {
  const crsr = document.querySelector('#container #cursor');
  const crsrDot = document.querySelector('#cursor #cursorDot');
  const container = document.querySelector('#container');

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
}

cursor();

function cursorClick(elem) {
  const crsr = document.querySelector('#container #cursor');
  const crsrDot = document.querySelector('#cursor #cursorDot');
  const crsrP = document.querySelector('#cursor #cursorText p');

  elem.addEventListener('mouseenter', () => {
    crsr.style.scale = 2;
    crsr.style.backdropFilter = 'blur(5px)';
    crsrDot.style.display = 'none';
    crsrP.textContent = 'Click';
  })

  elem.addEventListener('mouseleave', () => {
    crsr.style.scale = 1;
    crsr.style.backdropFilter = 'blur(0px)';
    crsrDot.style.display = 'block';
    crsrP.textContent = '';
  })
}

cursorClick(document.querySelector('#aboutRight img'));
cursorClick(document.querySelector('#hoverLeft img'));

function cursorWidth(widthElem) {
  const crsr = document.querySelector('#container #cursor');

  widthElem.addEventListener('mouseenter', () => {
    let elemWidth = widthElem.offsetWidth;
    let elemHeight = widthElem.offsetHeight;

    widthElem.style.cursor = 'none';
    crsr.style.width = elemWidth + 'px';
    crsr.style.height = elemHeight + 'px';
    crsr.style.borderRadius = '0%';
    crsr.style.transform = 'translate(-50%, -50%)';
  })

  widthElem.addEventListener('mouseleave', () => {
    widthElem.style.cursor = 'default';
    crsr.style.width = '2.5vw';
    crsr.style.height = '2.5vw';
    crsr.style.borderRadius = '50%';
    crsr.style.transform = 'translate(-50%, 75%)';
  })
}

cursorWidth(document.querySelector('#firstPageContainer h1'));
cursorWidth(document.querySelector('#secondPageContainer h2'));
cursorWidth(document.querySelector('#leftTop span'));
cursorWidth(document.querySelector('#hoverRightTop h1 span'));

function secondPageAnime() {
  let tl = gsap.timeline();

  tl.from('#secondPageContainer h1', {
    transform: 'translateX(-300%)',
    scrollTrigger: {
      scroller: 'body',
      trigger: '#landingPage #firstPage',
      scrub: 2,
    }
  })

  tl.from('#secondPageContainer h2', {
    transform: 'translateX(300%)',
    scrollTrigger: {
      scroller: 'body',
      trigger: '#landingPage #firstPage',
      scrub: 2,
    }
  })
}

secondPageAnime();


function thirdPage() {
  let tl = gsap.timeline();

  tl.from('#leftTop h3 ', {
    x: -1500,
    opacity: 0,
    scrollTrigger: {
      scroller: 'body',
      trigger: '#aboutContainer #aboutRight',
      start: 'top 80%',
      end: 'top 50%',
      scrub: 2
    }
  })

  tl.from('#leftTop h2', {
    x: -1000,
    opacity: 0,
    scrollTrigger: {
      scroller: 'body',
      trigger: '#aboutContainer #aboutRight',
      start: 'top 80%',
      end: 'top 50%',
      scrub: 4,
    }
  })

  tl.from('#aboutContainer #aboutRight', {
    x: 1000,
    opacity: 0,
    scrollTrigger: {
      scroller: 'body',
      trigger: '#aboutContainer #aboutRight',
      start: 'top 80%',
      end: 'top 50%',
      scrub: 4,
    }
  })
}

thirdPage();

function aboutPageHover() {
  const aboutImg = document.querySelector('#aboutRight img ');
  const aboutHover = document.querySelector('#about #aboutHover');
  let tl = gsap.timeline();

  const hoverImg = document.querySelector('#hoverLeft img');

  aboutImg.addEventListener('click', () => {
    tl.to(aboutHover, {
      opacity: 1,
      display: 'block',
      transform: 'translate(-50%, -50%)',
    })
  })

  hoverImg.addEventListener('click', () => {
    tl.to(aboutHover, {
      opacity: 0,
      display: 'none',
      transform: 'translate(-300%, -50%)',
    })
  })
}

aboutPageHover();
