$(window).on("load", function () {
   "use strict";
   $('#owl-carousel-2').owlCarousel({
       center: true,
       loop: true,
       margin: 10,
       items:4,
       rtl: true,
      //  autoplay: true,
       animate: true,
       navText: [
           "<i class='fa fa-angle-right' aria-hidden='true'></i>",
           "<i class='fa fa-angle-left' aria-hidden='true'></i>"
       ],
       responsive: {
           0: {
               items: 1
           },
           768: {
               items: 3
           },
           1000: {
               items: 3
           },
           1200: {
               items: 4
           }
       }
   });




   $(".play-icon").click(function () {
      $(".modal-video").addClass("active");
      $("body").addClass("over");

      var videoURL = $('.modal-v').attr('src'),
         dataplay = $('.modal-v').attr('data-play');

      $('.modal-v').attr('src', videoURL + '?autoplay=1');
      $('.modal-v').attr('data-play', 1);


   })
   $(".play-btn").click(function () {
      $(".modal-video").addClass("active");
      $("body").addClass("over");

      var videoURL = $('.modal-v').attr('src'),
         dataplay = $('.modal-v').attr('data-play');

      $('.modal-v').attr('src', videoURL + '?autoplay=1');
      $('.modal-v').attr('data-play', 1);
   })

   $(".overlay").click(function () {


      $(".modal-video").removeClass("active");
      $("body").removeClass("over");
      // $(".modal-v")[0].src = "";
      var videoURL = $('.modal-v').attr('src');
      videoURL = videoURL.replace("?autoplay=1", "");
      $('.modal-v').prop('src', '');
      $('.modal-v').prop('src', videoURL);

      $('.modal-v').attr('data-play', 0);
   })

   $(".modal-header-mm .icon").click(function () {
      $(".modal-video").removeClass("active");
      $("body").removeClass("over");

      var videoURL = $('.modal-v').attr('src');
      videoURL = videoURL.replace("?autoplay=1", "");
      $('.modal-v').prop('src', '');
      $('.modal-v').prop('src', videoURL);

      $('.modal-v').attr('data-play', 0);
   })

});