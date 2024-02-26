$('.stat-number').each(function () {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    $(this).prop('Counter', 0).animate({
       Counter: $(this).text()
    }, {
       duration: 3000,
       step: function (func) {
          $(this).text(parseFloat(func).toFixed(size));
       }
    });
 });


//  $("#randevu_form").submit(function (e) {
//   e.preventDefault();
//   var $ts = $(this);
//   var formData = $("#randevu_form").serialize();

//   if (
//     $("#r_name").val() &&
//     $("#r_email").val() &&
//     $("#r_phone").val() &&
//     $("#r_dg").val() &&
//     $("#r_cinsiyet").val() &&
//     $("#r_education").val() &&
//     $("#r_choice").val()
//   ) {
//     $.ajax({
//       type: "POST",
//       url: "https://app.oprahpsikoloji.com/danisan_kayit.php",
//       data: formData,

//       beforeSend: function () {
//         $("button").prop("disabled", true);
//         Swal.fire({
//           title: "Gönderiliyor...",
//           html: "Lütfen bekleyiniz",
//           allowOutsideClick: false,
//           didOpen: () => {
//             Swal.showLoading();
//           },
//         });
//       },
//       success: function (response) {
//         if (response == "Success") {
//           $("button").prop("disabled", true);
//           Swal.fire({
//             icon: "success",
//             title: "Gönderildi",
//             html: "Formunuz başarıyla gönderildi.",
//           }).then(() => {
//             // Form verilerini 3 saniye sonra temizle
//             setTimeout(function () {
//               $("#randevu_form")[0].reset();
//             }, 3000);
//           });
//         } else {
//           $("button").prop("disabled", false);
//           Swal.fire({
//             icon: "error",
//             title: "Hata",
//             text: "Form gönderilemedi.",
//           });
//         }
//       },
//     });
//   } else {
//     // Use SweetAlert for a user-friendly alert
//     Swal.fire({
//       icon: "warning",
//       title: "Uyarı",
//       text: "Lütfen tüm zorunlu alanları doldurunuz!",
//     });
//   }
// });


$("#randevu_form").submit(function (e) {
  e.preventDefault();
  var $ts = $(this);
  var formData = $("#randevu_form").serialize();
  var selectedTime = $("#time").val();
  var selectedCommunication = $("#iletisim").val();

  if (
    $("#r_name").val() &&
    $("#r_email").val() &&
    $("#r_phone").val() &&
    $("#r_dg").val() &&
    $("#r_cinsiyet").val() &&
    $("#r_education").val() &&
    selectedTime !== "Seciniz" &&
    selectedCommunication !== "İletisim" &&
    $("#r_choice").val()
  ) {
    $.ajax({
      type: "POST",
      url: "https://app.oprahpsikoloji.com/danisan_kayit.php",
      data: formData,
      beforeSend: function () {
        $("button").prop("disabled", true);
        Swal.fire({
          title: "Gönderiliyor...",
          html: "Lütfen bekleyiniz",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });
      },
      success: function (response) {
        if (response == "Success") {
          $("button").prop("disabled", true);
          Swal.fire({
            icon: "success",
            title: "Gönderildi",
            html: "Formunuz başarıyla gönderildi.",
          }).then(() => {
            setTimeout(function () {
              $("#randevu_form")[0].reset();
            }, 3000);
          });
        } else {
          $("button").prop("disabled", false);
          Swal.fire({
            icon: "error",
            title: "Hata",
            text: "Form gönderilemedi.",
          });
        }
      },
    });
  } else {
    if (selectedTime === "Seciniz") {
      Swal.fire({
        icon: "error",
        title: "Uyarı",
        text: "Lütfen bir saat aralığı seçiniz.",
      });
    } else if (selectedCommunication === "İletisim") {
      Swal.fire({
        icon: "error",
        title: "Uyarı",
        text: "Lütfen bir iletişim türü seçiniz.",
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Uyarı",
        text: "Lütfen tüm zorunlu alanları doldurunuz!",
      });
    }
  }
});





  $(".faq-question").click(function() {
    // Diğer faq-question öğelerinden "active" sınıfını ve "faq-answer" elementlerini kaldırın
    $(".faq-question.active").not(this).removeClass("active").next('.faq-answer').slideUp();
    
    // Tıklanan faq-question elementinin altındaki faq-answer elementini bulun
    var answer = $(this).next('.faq-answer');
    
    // Sadece tıklanan faq-question elementinin altındaki faq-answer elementini açın veya kapatın
    answer.slideToggle();
    
    // Sadece tıklanan faq-question elementine "active" sınıfını ekleyin ve kaldırın
    $(this).toggleClass("active");
  });



  
const activeURL = window.location.href;
const kurumsalLinks = document.querySelectorAll('.destkop-menu nav ul li');

kurumsalLinks.forEach(listItem => {
    const link = listItem.querySelector('a');
    if (link && link.href && link.href === activeURL) {
        listItem.classList.add('active');
    }
});
