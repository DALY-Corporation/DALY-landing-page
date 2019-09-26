var foodTicket = '';
var foodTicket2 = '';

var takeTickets = [];
var taketicketImages = [];
var taketicketActive = [];

var tickets = [];
var ticketImages = [];
var ticketActive = [];

$(function () {
  $(window).scroll(function () {
    var $header = $('#header');
    var $download = $('.btn-mobile-download')
    var height = $(document).scrollTop();

    if(height >= 55) {
      $header.addClass('active-header');
      $download.addClass('btn-mobile-static');
    } else {
      $header.removeClass('active-header');
      $download.removeClass('btn-mobile-static');
    }
  })

  $('.box-content-tab ul li').on('click', function () {
    var index = $(this).index() + 1;

    if (!$(this).hasClass('active')) {
      $('.box-content-tab ul li').removeClass('active');
      $(this).addClass('active');

      if (index === 1) {
        $('.ticket-box').hide();
        $('.ticket-box-0' + index).fadeIn();
        takeTicket();
      } else {
        $('.ticket-box').hide();
        $('.ticket-box-0' + index).fadeIn();
        storeTicket();
      }
    }
  })
});

function surrounddingData () {
  var names = [];

  $('.section-surrondings .swiper-slide').each(function () {
    names.push($(this).data("name"));
  });

  var surrounding = new Swiper('.section-surrondings .swiper-container', {
    pagination: '.section-surrondings .swiper-pagination',
    paginationClickable: true,
    paginationBulletRender: function (swiper, index, className) {
      return '<span class="' + className + '">' + names[index] + '</span>';
    }
  });
}

function takeTicket () {
  if (foodTicket == '') {
    $('.section-ticket .ticket-box-01 .swiper-slide').each(function () {
      takeTickets.push($(this).data("ticket"));
      taketicketImages.push($(this).data("images"));
      taketicketActive.push($(this).data("active"));
    });
  }

  foodTicket = new Swiper('.section-ticket .ticket-box-01 .swiper-container', {
    pagination: '.section-ticket .ticket-box-01 .swiper-pagination',
    paginationClickable: true,
    paginationType: "custom",
    loop:true,
    autoplay: 1500,
    paginationCustomRender(swiper, current, total) {
      var ticketPagination = '<div class="ticket-pagination">';
      for (let i = 1; i <= total; i++) {
        if (current == i) {
          ticketPagination += '<div class="slider-tab slider-tab-active" data-index="'+i+'">';
          ticketPagination += '<div class="ticket-image">';
          ticketPagination += '<img src="./img/icon/'+ taketicketActive[i-1] +'">';
          ticketPagination += '</div>';
          ticketPagination += '<div class="ticket-content">';
          ticketPagination += '<span>'+ takeTickets[i-1] +'</span>';
          ticketPagination += '</div>';
          ticketPagination += '</div>';
        } else {
          ticketPagination += '<div class="slider-tab" data-index="'+i+'">';
          ticketPagination += '<div class="ticket-image">';
          ticketPagination += '<img src="./img/icon/'+ taketicketImages[i-1] +'">';
          ticketPagination += '</div>';
          ticketPagination += '<div class="ticket-content">';
          ticketPagination += '<span>'+ takeTickets[i-1] +'</span>';
          ticketPagination += '</div>';
          ticketPagination += '</div>';
        }
      }
      ticketPagination += '</div>';
      return ticketPagination;
    },
    onInit: function(){
      $('.ticket-box-01 .slider-tab').on('click touch', function(){
        var target = $(this).data('index');
        foodTicket.slideTo(target);
        foodTicket.stopAutoplay();
        return;
      })
    },
    onTransitionEnd: function() {
      $('.ticket-box-01 .slider-tab').on('click touch', function () {
        var target = $(this).data('index');
        foodTicket.slideTo(target);
        foodTicket.stopAutoplay();
        return;
      })
    }
  });
}

function storeTicket () {
  if(foodTicket2 == '') {
    $('.section-ticket .ticket-box-02 .swiper-slide').each(function () {
      tickets.push($(this).data("ticket"));
      ticketImages.push($(this).data("images"));
      ticketActive.push($(this).data("active"));
    });
  }

  foodTicket2 = new Swiper('.section-ticket .ticket-box-02 .swiper-container', {
    pagination: '.section-ticket .ticket-box-02 .swiper-pagination',
    paginationClickable: true,
    paginationType: "custom",
    loop:true,
    autoplay: 1500,
    paginationCustomRender(swiper, current, total) {
      var ticketPagination = '<div class="ticket-pagination">';
      for (let i = 1; i <= total; i++) {
        if (current == i) {
          ticketPagination += '<div class="slider-tab slider-tab-active" data-index="'+i+'">';
          ticketPagination += '<div class="ticket-image">';
          ticketPagination += '<img src="./img/icon/'+ ticketActive[i-1] +'">';
          ticketPagination += '</div>';
          ticketPagination += '<div class="ticket-content">';
          ticketPagination += '<span>'+ tickets[i-1] +'</span>';
          ticketPagination += '</div>';
          ticketPagination += '</div>';
        } else {
          ticketPagination += '<div class="slider-tab" data-index="'+i+'">';
          ticketPagination += '<div class="ticket-image">';
          ticketPagination += '<img src="./img/icon/'+ ticketImages[i-1] +'">';
          ticketPagination += '</div>';
          ticketPagination += '<div class="ticket-content">';
          ticketPagination += '<span>'+ tickets[i-1] +'</span>';
          ticketPagination += '</div>';
          ticketPagination += '</div>';
        }
      }
      ticketPagination += '</div>';
      return ticketPagination;
    },
    onInit: function(){
      $('.ticket-box-02 .slider-tab').on('click touch', function(){
        var target = $(this).data('index');
        foodTicket2.slideTo(target);
        foodTicket2.stopAutoplay();
        return;
      })
    },
    onTransitionEnd: function() {
      $('.ticket-box-02 .slider-tab').on('click touch', function () {
        var target = $(this).data('index');
        foodTicket2.slideTo(target);
        foodTicket2.stopAutoplay();
        return;
      })
    }
  });
}

var todayHeight = function () {
  var offsetTop = $('.section-today').offset().top;
  return offsetTop;
}

function goToday(arg) {
  var goOffset = arg;
  $('html, body').animate({scrollTop:goOffset}, 1000, 'easeOutCubic')
}