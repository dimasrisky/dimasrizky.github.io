// animasi pada navbar

gsap.from('nav', {duration: 1.3, opacity: 0, ease: "power1"})

// animasi pada hero section

gsap.from('#hero h2', {duration: 1.6, opacity: 0, x: '20%', ease: "power4", delay: 0.5})
gsap.from('#hero p', {duration: 1.6, opacity: 0, x: '-20%', ease: "power4", delay: 1})
gsap.from('img#gambar1', {duration: 1.4, opacity: 0,x: '25%', delay: 0.4,})
gsap.from('#btn-hero', {duration: 1.1, opacity: 0,x: '-25%', delay: 1.2})



