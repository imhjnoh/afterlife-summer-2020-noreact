var Gallery = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // autoplay: {
  //   delay: 8000,
  //   waitForTransition: false,
  //   stopOnLastSlide: true,
  // },
  loop: false,
  effect: 'coverflow',
  flipEffect: {
    rotate: 60,
    slideShadows: false,
  },
  cubeEffect: {
    slideShadows: false,
  },
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
});

$(".apbutton").click(function(){
  Gallery.slideNext();
  Gallery.params.autoplay.delay = 5000;
  Gallery.params.autoplay.stopOnLastSlide = true;
  Gallery.params.autoplay.waitForTransition = false;
  Gallery.autoplay.start();
});

$(".tofirst").click(function(){
  Gallery.slideTo(0);
});




Gallery.on('slideChangeTransitionStart', function(){
  if(this.activeIndex == 9 || this.activeIndex == 0){
    $('.bg-container').css("background","linear-gradient(2deg, rgba(255,255,255,1) 15%, rgba(148,255,239,1) 30%, rgba(0,212,255,1) 86%) no-repeat center center fixed");
    $('.left').css("background-image","url(images/left.png)");
    $('.right').css("background-image","url(images/right.png)");
    $('.footer-image').css("background-image","url(images/beach_pattern.png)");
    $('.bg-pattern').css("opacity","1");
    particlesJS('particles-container-day',

    {
      "particles": {
        "number": {
          "value": 20,
          "density": {
            "enable": true,
            "value_area": 450.1491985203453
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "polygon",
          "stroke": {
            "width": 1,
            "color": "#ffffff"
          },
          "polygon": {
            "nb_sides": 6
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.1,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 8,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 10,
            "size_min": 41.41606395127522,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 200,
          "color": "#ffffff",
          "opacity": 1,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "top",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }
    );


  }else if(this.activeIndex == 10 || this.activeIndex == 15){
    $('.bg-container').css("background","radial-gradient(circle at 50% 80%, rgba(255,250,244,1) 10%, rgba(247,203,140,1) 20%, rgba(244,141,98,1) 40%, rgba(236,93,93,1) 58%, #9b6bbb 100%)");
    $('.left').css("background-image","url(images/left-twilight.png)");
    $('.right').css("background-image","url(images/right-twilight.png)");
    $('.footer-image').css("background-image","url(images/beach_pattern_twilight.png)");
    $('.bg-pattern').css("opacity","0.5");
    particlesJS('particles-container-day',

    {
      "particles": {
        "number": {
          "value": 16,
          "density": {
            "enable": true,
            "value_area": 450.1491985203453
          }
        },
        "color": {
          "random": true,
          "value": '#ffffff'
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 1,
            "color": "#ffffff"
          },
          "polygon": {
            "nb_sides": 6
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.4,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 10,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 10,
            "size_min": 41.41606395127522,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 200,
          "color": "#ffffff",
          "opacity": 1,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "top",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }
    );

  }else if(this.activeIndex == 16 || this.activeIndex == 23){
    $('.bg-container').css("background","linear-gradient(2deg, rgba(34,68,96,1) 0%, rgba(2,3,18,1) 68%) no-repeat center center fixed");
    $('.left').css("background-image","url(images/left-night.png)");
    $('.right').css("background-image","url(images/right-night.png)");
    $('.footer-image').css("background-image","url(images/beach_pattern_night.png)");
    $('.bg-pattern').css("opacity","0.2");
    particlesJS('particles-container-day',

    {
      "particles": {
        "number": {
          "value": 20,
          "density": {
            "enable": true,
            "value_area": 450.1491985203453
          }
        },
        "color": {
          "random": true,
          "value": 'random'
        },
        "shape": {
          "type": "edge",
          "stroke": {
            "width": 0,
            "color": "#ffffff"
          },
          "polygon": {
            "nb_sides": 6
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 10,
            "size_min": 41.41606395127522,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 200,
          "color": "#ffffff",
          "opacity": 1,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "top",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }
    );
  }
});




particlesJS('particles-container-day',

{
  "particles": {
    "number": {
      "value": 20,
      "density": {
        "enable": true,
        "value_area": 450.1491985203453
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 1,
        "color": "#ffffff"
      },
      "polygon": {
        "nb_sides": 6
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 8,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": 41.41606395127522,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 200,
      "color": "#ffffff",
      "opacity": 1,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "top",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
);

particlesJS('particles-container-twilight',

{
  "particles": {
    "number": {
      "value": 20,
      "density": {
        "enable": true,
        "value_area": 450.1491985203453
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "polygon",
      "stroke": {
        "width": 1,
        "color": "#ffffff"
      },
      "polygon": {
        "nb_sides": 6
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 8,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": 41.41606395127522,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 200,
      "color": "#ffffff",
      "opacity": 1,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "top",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
);
