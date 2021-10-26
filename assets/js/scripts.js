////////////////////////////////////////////////////////////////


window.sr = ScrollReveal({
  reset: true
});
// sr.reveal('#about', {
//   duration: 2000,
//   origin: 'left',
//   reset: true
// });
// sr.reveal('#skills', {
//   duration: 2000,
//   origin: 'left',
//   reset: true

// });
// sr.reveal('#educ', {
//   duration: 2000,
//   origin: 'left',
//   reset: true

// });

// sr.reveal('#exp', {
//   duration: 2000,
//   origin: 'left',
//   reset: true

// });



$(function () {
  $('[data-toggle="popover"]').popover()
})



$(document).ready(function () {

  const request = new Request('https://api.github.com/users/omnone/repos', {
    method: 'GET'
  });

  fetch(request)
    .then((response) => response.json())
    .then((responseJSON) => {
      var repos = responseJSON.sort(compare);

      var latest = repos[0];

      console.log(latest);

       $('#latest-repo').text(latest['name']+':');
       $('#latest-repo').attr("href",latest['html_url']);
       $('#latest-repo-desc').text(latest['description']);
    });

  function compare(repo_a, repo_b) {
    if (repo_a.created_at > repo_b.created_at) {
      return -1;
    }
    if (repo_a.created_at < repo_b.created_at) {
      return 1;
    }
    return 0;
  }


  if ($(window).width() > 577) {
    $('#sidebar').addClass('is-one-quarter animated');
    $('#sidebar').css("position", "sticky");
  } else {
    $('#sidebar').removeClass('is-one-quarter animated');
    $('#grid').removeClass('is-mobile');
    $('#sidebar').css("margin-top", "1%");
    $('#sidebar').css("position", "relative");
    $('#main-content').css("position", "relative");

  }


  console.log(`
       ________      \n
      /        \\    \n
     /_        _\\   \n
    // \\      / \\  \n
    |\\__\\    /__/| \n
     \\    ||    /  \n
      \\        /   \n
       \\  __  /  \n
        '.__.'   \n
         |  |   \n
         |  |  \n`);

  $("#social-icons i").mouseover(function () {
    $(this).addClass('pulse animated infinite');
  });
  $("#social-icons i").mouseout(function () {
    $(this).removeClass('pulse animated');
  });

  $("#programming-card-btn").click(function () {
    if ($("#programming-card-btn i").hasClass("fa-chevron-down")) {
      $("#programming-card-btn i").removeClass("fa-chevron-down");
      $("#programming-card-btn i").addClass("fa-chevron-up");
    } else {
      $("#programming-card-btn i").removeClass("fa-chevron-up");
      $("#programming-card-btn i").addClass("fa-chevron-down");
    }
  });

  $("#lang-card-btn").click(function () {
    if ($("#lang-card-btn i").hasClass("fa-chevron-down")) {
      $("#lang-card-btn i").removeClass("fa-chevron-down");
      $("#lang-card-btn i").addClass("fa-chevron-up");
    } else {
      $("#lang-card-btn i").removeClass("fa-chevron-up");
      $("#lang-card-btn i").addClass("fa-chevron-down");
    }
  });

  $("#email-pop").click(function () {
    $("#qr-modal").addClass("is-active");
  })

  $(".modal-close").click(function () {
    $("#qr-modal").removeClass("is-active");
  });

  $("#other-card-btn").click(function () {
    if ($("#other-card-btn i").hasClass("fa-chevron-down")) {
      $("#other-card-btn i").removeClass("fa-chevron-down");
      $("#other-card-btn i").addClass("fa-chevron-up");
    } else {
      $("#other-card-btn i").removeClass("fa-chevron-up");
      $("#other-card-btn i").addClass("fa-chevron-down");
    }
  });

  $('[data-toggle="popover"]').popover()

});




// When the user scrolls down 20px from the top of the document, show the button
// go to top button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    var element = document.querySelector("#myBtn");
    element.classList.remove("fadeOutUp");
    $("#myBtn").css("display", "inline-block").addClass('animated fadeInDown');
  } else {
    var element = document.querySelector("#myBtn");
    element.classList.remove("fadeInDown");
    $("#myBtn").addClass('animated fadeOutUp');
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




// $(document).ready(function () { 

//     var top = $('#left-col').offset().top - parseFloat($('#left-col').css('marginTop').replace(/auto/, 0));

//     $(window).scroll(function (event) {
//         var y = $(this).scrollTop();
//         //if y > top, it means that if we scroll down any more, parts of our element will be outside the viewport
//         //so we move the element down so that it remains in view.
//         if (y >= top) {
//            var difference = y - top;
//            $('#left-col').css("top",difference);
//        }
//    });
// });