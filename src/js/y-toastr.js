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
$('.vizyon-tab li').click(function () {
  $('.vizyon-tab li').removeClass('active');
  $(this).addClass('active');
  $('.vizyon-tab-content').hide();

  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});



$(document).ready(function () {
  // Save a reference to the close button element
  const closeButton = $('.close-button');

  function calculateTotalScore() {
    let totalScore = 0;

    for (let i = 0; i < 20; i++) {
      const selectedValue = $('input[name=' + i + ']:checked').val();
      totalScore += parseInt(selectedValue);
    }

    return totalScore;
  }

  $('#kaygi').submit(function (event) {
    event.preventDefault();
    const totalScore = calculateTotalScore();
    let anxietyLevel;
    let explanation;

    if (totalScore >= 0 && totalScore <= 8) {
      $('.questions-answer-main').addClass('show');
      anxietyLevel = "<h2>Normal düzeyde anksiyete</h2>";
      explanation =
        "<p>Anksiyete, normal stres yanıtının bir parçasıdır. Günlük stresle karşılaştığımızda belirir ve dikkati artırır. Ancak, aşırı ve sürekli hale geldiğinde sorun oluşturur. İyi yönetim ve destekle kontrol altına alınabilir.</p>";
    } else if (totalScore <= 15) {
      $('.questions-answer-main').addClass('show');
      anxietyLevel = "<h2>Hafif düzeyde anksiyete</h2>";
      explanation = "<p>Hafif düzeyde anksiyete, genellikle yönetilebilir ve günlük yaşamı aşırı etkilemez. Endişe ve hafif gerginlik hissi olabilir, ancak bu duygular genellikle geçicidir ve kişisel veya profesyonel faaliyetleri önemli ölçüde engellemez.</p>";
    } else if (totalScore <= 25) {
      $('.questions-answer-main').addClass('show');
      anxietyLevel = "<h2>Orta düzeyde anksiyete</h2>";
      explanation = "<p>Orta düzeyde anksiyete, günlük yaşamı etkileyebilen daha belirgin endişe ve gerginlik düzeylerini içerir. Kişi, sosyal etkileşimlerde veya iş performansında zorlanabilir. Ancak, uygun destek ve stratejilerle genellikle başa çıkılabilir.</p>";
    } else {
      $('.questions-answer-main').addClass('show');
      anxietyLevel = "<h2>Şiddetli düzeyde anksiyete</h2>";
      explanation = "<p>Şiddetli düzeyde anksiyete, günlük işlevselliği ciddi şekilde etkileyen yoğun endişe ve korku durumudur. Kişi, sürekli gergin ve huzursuz hissedebilir, aşırı terleme, çarpıntı gibi fiziksel belirtiler yaşayabilir. Bu durum sosyal, iş ve kişisel hayatı olumsuz etkileyebilir ve profesyonel yardım gerektirir</p>";
    }

    // Set the anxietyLevel and explanation to the element with the class 'questions-answer-main'
    $('.answer-box').html(anxietyLevel + "<br>" + explanation);

    // Append the close button back to the answer-box
    $('.answer-box').append(closeButton);
  });
});


$('body').click(function () {
  $('.questions-answer-main').removeClass('show');

});