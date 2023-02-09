
(function ($) {
  "use strict";
  $(".mean-menu").meanmenu({ meanScreenWidth: "991" });
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 150) {
      $(".navbar-area").addClass("is-sticky");
    } else {
      $(".navbar-area").removeClass("is-sticky");
    }
  });
  $(window).on("load", function () {
    $(".preloader-area").fadeOut();
  });
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });
  AOS.init({
    disable: function () {
      var maxWidth = 900;
      return window.innerWidth < maxWidth;
    },
  });
  $(".others-option-for-responsive .dot-menu").on("click", function () {
    $(".others-option-for-responsive .container .container").toggleClass(
      "active"
    );
  });
  $(".banner-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
      '<i class="ri-arrow-left-line"></i>',
      '<i class="ri-arrow-right-line"></i>',
    ],
  });
  $(".banner-slider2").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    items: 1,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
  });
  $(".services-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
      '<i class="ri-arrow-left-line"></i>',
      '<i class="ri-arrow-right-line"></i>',
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 2 },
      1200: { items: 3 },
    },
  });
  $(".feature-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
      '<i class="ri-arrow-left-s-line"></i>',
      '<i class="ri-arrow-right-s-line"></i>',
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 2 },
      1200: { items: 3 },
    },
  });
  $(".doctor-slider2").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
      '<i class="ri-arrow-left-line"></i>',
      '<i class="ri-arrow-right-line"></i>',
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 4 },
      1200: { items: 4 },
    },
  });
  $(".doctor-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
      '<i class="ri-arrow-left-line"></i>',
      '<i class="ri-arrow-right-line"></i>',
    ],
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
      1200: { items: 3 },
    },
  });
  $(".testimonial-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 2 },
      1200: { items: 3 },
    },
  });
  $(".testimonial-slider2").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    items: 1,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
  });
  $(document).ready(function () {
    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
      disableOn: 100,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  });
  $(".newsletter-form")
    .validator()
    .on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        formErrorSub();
        submitMSGSub(false, "Please enter your email correctly.");
      } else {
        event.preventDefault();
      }
    });
  function callbackFunction(resp) {
    if (resp.result === "success") {
      formSuccessSub();
    } else {
      formErrorSub();
    }
  }
  function formSuccessSub() {
    $(".newsletter-form")[0].reset();
    submitMSGSub(true, "Thank you for subscribing!");
    setTimeout(function () {
      $("#validator-newsletter, #validator-newsletter-2").addClass("hide");
    }, 4000);
  }
  function formErrorSub() {
    $(".newsletter-form").addClass("animated shake");
    setTimeout(function () {
      $(".newsletter-form").removeClass("animated shake");
    }, 1000);
  }
  function submitMSGSub(valid, msg) {
    if (valid) {
      var msgClasses = "validation-success";
    } else {
      var msgClasses = "validation-danger";
    }
    $("#validator-newsletter, #validator-newsletter-2")
      .removeClass()
      .addClass(msgClasses)
      .text(msg);
  }
  $(".input-counter").each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="text"]'),
      btnUp = spinner.find(".plus-btn"),
      btnDown = spinner.find(".minus-btn"),
      min = input.attr("min"),
      max = input.attr("max");
    btnUp.on("click", function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
    btnDown.on("click", function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });
  function makeTimer() {
    var endTime = new Date("September 20, 2023 17:00:00 PDT");
    var endTime = Date.parse(endTime) / 1000;
    var now = new Date();
    var now = Date.parse(now) / 1000;
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
  }
  setInterval(function () {
    makeTimer();
  }, 0);
  $(".newsletter-form").ajaxChimp({
    url: "https://Envy Theme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
    callback: callbackFunction,
  });
  $(window).on("scroll", function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) $(".go-top").addClass("active");
    if (scrolled < 300) $(".go-top").removeClass("active");
  });
  $(".go-top").on("click", function () {
    $("html, body").animate({ scrollTop: "0" }, 500);
  });
  $("body").append(
    "<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>"
  );
})(jQuery);
function setTheme(themeName) {
  localStorage.setItem("genh_theme", themeName);
  document.documentElement.className = themeName;
}
function toggleTheme() {
  if (localStorage.getItem("genh_theme") === "theme-dark") {
    setTheme("theme-light");
  } else {
    setTheme("theme-dark");
  }
}
(function () {
  if (localStorage.getItem("genh_theme") === "theme-dark") {
    setTheme("theme-dark");
    document.getElementById("slider").checked = false;
  } else {
    setTheme("theme-light");
    document.getElementById("slider").checked = true;
  }
})();

  $(document).ready(function () {
    $("#demo-calendar-apppearance").zabuto_calendar({
      header_format: '[year]   [month]',
      week_starts: 'sunday',
      show_days: true,
      today_markup: '<span class="badge bg-primary">[day]</span>',
      navigation_markup: {
          prev: '<i class="fas fa-chevron-left"></i>',
          next: '<i class="fas fa-chevron-right"></i>'
        }
    });
  });
  $(document).ready(function () {
    $("#demo-calendar-apppearance22").zabuto_calendar({
      header_format: '[year]   [month]',
      week_starts: 'sunday',
      show_days: true,
      today_markup: '<span class="badge bg-primary">[day]</span>',
      navigation_markup: {
          prev: '<i class="fas fa-chevron-left"></i>',
          next: '<i class="fas fa-chevron-right"></i>'
        }
    });
  });
  $(function () {
    $('.bs-timepicker').timepicker();
  });
