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

// navAnime();

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
