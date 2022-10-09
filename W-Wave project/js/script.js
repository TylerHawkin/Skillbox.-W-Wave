window.addEventListener('DOMContentLoaded', function () {
  //burger
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#burger').classList.toggle('burger-active');
    document.querySelector('#menu').classList.toggle('nav__visible');
    document.querySelector('#menu-2').classList.toggle('nav__visible');
    document.body.style.overflow = 'hidden';
  });

  document.querySelectorAll('.nav__item').forEach(function (deleteClass) {
    deleteClass.addEventListener('click', function (e) {
      document.querySelector('#burger').classList.remove('burger-active');
      document.querySelector('#menu').classList.remove('nav__visible');
      document.querySelector('#menu-2').classList.remove('nav__visible');
      document.body.style.overflow = '';
    });
  });

  const box = document.querySelector('.header__menu_link');
  document.addEventListener('click', (el) => {
    const click = el.composedPath().includes(box);
    if (!click) {
      document.querySelector('#burger').classList.remove('burger-active');
      document.querySelector('#menu').classList.remove('nav__visible');
      document.querySelector('#menu-2').classList.remove('nav__visible');
      document.body.style.overflow = '';
    }
  });


  // radio
  document.querySelector('.btn-320').addEventListener('click', function () {
    document.querySelector('.down-menu__block').classList.toggle('active-radio');
    document.querySelector('.header__down-menu').classList.toggle('active-bg');
    document.querySelector('.btn-320__svg').classList.toggle('open');
  });


  //popup
  document.querySelector('.btn__log-in').addEventListener('click', function () {
    document.querySelector('.popup').classList.toggle('popup-active');
    document.querySelector('.popup-bg').classList.toggle('popup-bg-visible');
    document.querySelector('body').classList.add('stop-scroll');

  });

  document.querySelector('.popup__btn-close').addEventListener('click', function () {
    document.querySelector('.popup').classList.remove('popup-active');
    document.querySelector('.popup-bg').classList.remove('popup-bg-visible');
    document.querySelector('body').classList.remove('stop-scroll');

  });

  const popBtn = this.document.querySelector('.btn__log-in');
  const popUp = this.document.querySelector('.popup');
  this.document.addEventListener('click', (element) => {
    const clickPopBtn = element.composedPath().includes(popBtn);
    const clickPopUp = element.composedPath().includes(popUp);
    if (!clickPopBtn && !clickPopUp) {
      document.querySelector('.popup').classList.remove('popup-active');
      document.querySelector('.popup-bg').classList.remove('popup-bg-visible');
      document.querySelector('body').classList.remove('stop-scroll');
    }
  });


  //btn header menu
  document.querySelector('.btn-adaptive').addEventListener('click', e => {
    document.querySelector('.btn-adaptive__svg-adaptive_first').classList.toggle('nonactive');
    document.querySelector('.btn-adaptive__svg-adaptive_second').classList.toggle('nonactive');
  });


  //music header
  const btnNews = document.querySelectorAll('.down-menu__btn');

  for (let btn of btnNews) {
    btn.addEventListener('click', e => {
      let activeBtn = document.querySelector('.down-menu__btn.pause');
      btn.classList.add('pause');
      if (activeBtn && activeBtn !== e.target) {
        activeBtn.classList.remove('pause')
      }
    });
  };


  //podcasts-music
  const buttonsCard = document.querySelectorAll('.content__btn');

  for (let btn of buttonsCard) {
    btn.addEventListener('click', e => {
      let activeBtn = document.querySelector('.content__btn.pause');
      btn.classList.add('pause');
      if (activeBtn && activeBtn !== e.target) {
        activeBtn.classList.remove('pause')
      }
    });
  };


  //podcasts
  const btnMore = document.querySelector('.podcasts__btn');
  const cardItems = document.querySelectorAll('.podcasts__card');

  btnMore.addEventListener('click', () => {
    cardItems.forEach(el => {
      el.classList.add('podcasts__card--visible')
    });
    btnMore.classList.add('podcasts__btn--hidden')
  });


  //broadcast-select
  const defaultSelect = () => {
    const element = document.querySelector('.select__box');
    const choices = new Choices(element, {
      searchEnabled: false,
      shouldSort: false,
      itemSelectText: '',
      allowHTML: true,
    });
    let ariaLabel = element.getAttribute('aria-label');
    element.closest('.choices').setAttribute('aria-label', ariaLabel);
  };
  defaultSelect();


  //accordion
  $(function () {
    $(".accordion").accordion({
      heightStyle: "content",
      collapsible: false, //активный селект открыт
      active: false,
      icons: false
    });
  });


  //tabs
  document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (e) {
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
        btn.classList.remove('tabs-nav__btn--active')
      });
      e.currentTarget.classList.add('tabs-nav__btn--active');
      document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('tabs-item--active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
  });


  //slider-playlist
  const card = document.querySelectorAll('.music-card');
  const prevCard = document.querySelector('.arrow-slider__prev');
  const nextCard = document.querySelector('.arrow-slider__next');

  prevCard.classList.add('disable');
  nextCard.classList.add('disable');

  if (card.length > 12) {
    nextCard.classList.remove('disable');
  }

  const str1 = document.querySelector('.playlist__str-1');
  const str2 = document.querySelector('.playlist__str-2');

  const numberStr = document.querySelector('.arrow-slider__span');

  nextCard.addEventListener('click', () => {
    str1.classList.add('playlist__str--hidden');
    str2.classList.add('active');

    nextCard.classList.add('disable');
    prevCard.classList.remove('disable');
    numberStr.textContent = '2 / 2';
  });

  prevCard.addEventListener('click', () => {
    str1.classList.remove('playlist__str--hidden');
    str2.classList.remove('active');

    nextCard.classList.remove('disable');
    prevCard.classList.add('disable');
    numberStr.textContent = '1 / 2';
  });


  //validate-form
  new window.JustValidate('#valid-form', {
    colorWrong: '#D52B1E',
    rules: {
      name: {
        required: true,
        function: (name, value) => {
          const num = /[0-9!"№;%:?*()_=+|\?/><,.]/;
          if (num.test(value)) {
            return false
          } else {
            return true
          }
        },
        minLength: 2,
        maxLength: 30,
      },
      email: {
        required: true,
        function: (email, value) => {
          const eName = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
          if (eName.test(value)) {
            return true
          } else {
            return false
          }
        },
      },
    },
    messages: {
      name: {
        required: 'Ошибка',
        function: 'Введите корректное имя',
        minLength: 'Введите минимум 2 символа',
        maxLength: 'Максимум 30 символов',
      },
      email: {
        required: 'Ошибка',
        function: 'Введите корректный e-mail',
        // email: 'Введите корректный e-mail',
      },
    },
  });



  //slider-aboutUs

  const swiper = new Swiper('.about-us__slider', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 20,
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },

    breakpoints: {
      1281: {
        slidesPerView: 4,
      },

      1025: {
        slidesPerView: 3,
      },

      320: {
        slidesPerView: 2,
      }
    }
  });

  if (document.documentElement.clientWidth <= 576) {
    const swiperPlayList = new Swiper('.playlist__scsroll-menu', {
      // Optional parameters
      slidesPerView: 'auto',
      spaceBetween: 15,
      direction: 'horizontal',
      loop: true,
    });
  }

});
