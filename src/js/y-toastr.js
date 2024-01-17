$('.mobile-menu').click(function () {
  $(this).toggleClass('burger-active');
  console.log("tıklandı")

  $('.mobile-header-menu').toggleClass('mobile-header-menu-active');

  $('.mobile-header-menu ul').find('ul').slideUp();
});

$('.mobile-header-menu ul .has-child a').click(function () {

  $(this).parent().children('ul').slideToggle();
  $(".has-child > a").toggleClass("open-class");
});


const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  const headerHeight = header.offsetHeight;
  const scrollPosition = window.scrollY;
  if (scrollPosition > headerHeight) {
    header.classList.add('header-active');
  } else {
    header.classList.remove('header-active');
  }
});





const urlInputs = document.querySelectorAll(".urlInput");

urlInputs.forEach(function (input) {
  input.value = window.location.href;
});


$("#contact-form").submit(function (e) {
  e.preventDefault();
  var $ts = $(this);
  var formData = $("#contact-form").serialize();
  console.log(formData);

  if (
    $("#name").val() &&
    $("#urlInput").val() &&
    $("#email").val() &&
    $("#phone").val()
  ) {
    $.ajax({
      type: "POST",
      url: "https://oprahpsikoloji.com/wp-content/themes/oprah/ajax.php",
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
        if (response == "Message sent!") {
          $("button").prop("disabled", true);
          Swal.fire({
            icon: "success",
            title: "Gönderildi",
            html: "Formunuz başarıyla gönderildi.",
          }).then(() => {
            // Form verilerini 3 saniye sonra temizle
            setTimeout(function () {
              $("#contact-form")[0].reset();
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
    Swal.fire({
      icon: "warning",
      title: "Uyarı",
      text: "Tüm alanları doldurunuz!",
    });
  }
});

$("#iletisim").submit(function (e) {
  e.preventDefault();
  var formData = $("#iletisim").serialize();
  console.log(formData);

  if ($("#checkbox").is(":checked")) {
    if (
      $("#urlInput").val() &&
      $("#name").val() &&
      $("#email").val() &&
      $("#select").val() &&
      $("#phone").val() &&
      $("#message").val()
    ) {
      $.ajax({
        type: "POST",
        url: "https://oprahpsikoloji.com/wp-content/themes/oprah/ajax.php",
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
          if (response == "Message sent!") {
            $("button").prop("disabled", true);
            Swal.fire({
              icon: "success",
              title: "Gönderildi",
              text: "Mesajınız başarıyla gönderildi."
            }).then(() => {
              // Form verilerini 3 saniye sonra temizle
              setTimeout(function () {
                $("#iletisim")[0].reset();
              }, 3000);
            });
          } else {
            $("button").prop("disabled", false);
            Swal.fire({
              icon: "error",
              title: "Hata",
              text: "Mesaj gönderilemedi."
            });
          }
        }
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Uyarı",
        text: "Lütfen tüm gerekli alanları doldurunuz!"
      });
    }
  } else {
    Swal.fire({
      icon: "info",
      title: "Bilgilendirme",
      text: "Lütfen Kullanım Koşulları ve Gizlilik Politikasını kabul ediniz!"
    });
  }
});


$("#psikolog").submit(function (e) {
  e.preventDefault();
  var formData = $("#psikolog").serialize();
  console.log(formData);

  if ($("#checkbox").is(":checked")) {
    if (
      $("#urlInput").val() &&
      $("#name").val() &&
      $("#email").val() &&
      $("#phone").val() &&
      $("#message").val()
    ) {
      $.ajax({
        type: "POST",
        url: "https://oprahpsikoloji.com/wp-content/themes/oprah/ajax.php",
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
          if (response == "Message sent!") {
            $("button").prop("disabled", true);
            Swal.fire({
              icon: "success",
              title: "Gönderildi",
              text: "Mesajınız başarıyla gönderildi."
            }).then(() => {
              // Form verilerini 3 saniye sonra temizle
              setTimeout(function () {
                $("#psikolog")[0].reset();
              }, 3000);
            });
          } else {
            $("button").prop("disabled", false);
            Swal.fire({
              icon: "error",
              title: "Hata",
              text: "Mesaj gönderilemedi."
            });
          }
        }
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Uyarı",
        text: "Lütfen tüm gerekli alanları doldurunuz!"
      });
    }
  } else {
    Swal.fire({
      icon: "info",
      title: "Bilgilendirme",
      text: "Lütfen Kullanım Koşulları ve Gizlilik Politikasını kabul ediniz!"
    });
  }
});


$("#hizmet").submit(function (e) {
  e.preventDefault();
  var $ts = $(this);
  var formData = $("#hizmet").serialize();
  console.log(formData);

  if (
    $("#name").val() &&
    $("#urlInput").val() &&
    $("#email").val() &&
    $("#phone").val()
  ) {
    $.ajax({
      type: "POST",
      url: "https://oprahpsikoloji.com/wp-content/themes/oprah/ajax.php",
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
        if (response == "Message sent!") {
          $("button").prop("disabled", true);
          Swal.fire({
            icon: "success",
            title: "Gönderildi",
            html: "Formunuz başarıyla gönderildi.",
          }).then(() => {
            // Form verilerini 3 saniye sonra temizle
            setTimeout(function () {
              $("#hizmet")[0].reset();
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
    Swal.fire({
      icon: "warning",
      title: "Uyarı",
      text: "Tüm alanları doldurunuz!",
    });
  }
});





// Show the first tab and hide the rest
$('.vizyon-tab li:first-child').addClass('active');
$('.vizyon-tab-content').hide();
$('.vizyon-tab-content:first').show();

// Click function
$('.vizyon-tab li').click(function(){
  $('.vizyon-tab li').removeClass('active');
  $(this).addClass('active');
  $('.vizyon-tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});



$(document).ready(function () {
  var boxtest = $('.box-text');  
  function calculateTotalScore() {
      let totalScore = 0;

      for (let i = 0; i < 5; i++) {
          const selectedValue = $('input[name=' + i + ']:checked').val();

        
          totalScore += parseInt(selectedValue);
      }

      return totalScore;
  }


  $('#kaygi').submit(function (event) {
    event.preventDefault();
    const totalScore = calculateTotalScore();
    let anxietyLevel;
    if (totalScore >= 0 && totalScore <= 8) {
        anxietyLevel = "Normal düzeyde anksiyete";

    } else if (totalScore <= 15) {
        anxietyLevel = "Hafif düzeyde anksiyete";
        // Replace class addition with setting inner HTML
        boxtest.html('Your HTML content goes here');
    } else if (totalScore <= 25) {
        anxietyLevel = "Orta düzeyde anksiyete";
    } else {
        anxietyLevel = "Şiddetli düzeyde anksiyete";
    }
    alert("Toplam Puan: " + totalScore + "\nAnksiyete Seviyesi: " + anxietyLevel);
});
});