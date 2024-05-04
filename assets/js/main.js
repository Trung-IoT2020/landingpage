jQuery(document).ready(function () {
  if (jQuery(window).width() > 1024) {
    var goscroll = jQuery(".goscroll");
    jQuery(".goscroll").css("visibility", "hidden"); // ẩn element mẹ muốn gán hiệu ứng
    var scroll = []; // tạo mảng scroll chưa có giá trị
    srh = jQuery(window).height(); // lấy độ cao màn hình
    window.onscroll = function () {
      // khi scroll thì chạy lệnh này
      for (i = 0; i < goscroll.length; i++) {
        // cho i chạy từ 1 tới nhỏ hơn chiều dài mảng goscroll 1 giá trị
        var kc = [];
        kc[i] = goscroll[i].getAttribute("data-bottom"); // lấy giá trị của data-bottom
        if (kc[i] != null) {
          kc[i] = parseInt(kc[i]);
        } else {
          kc[i] = 80;
        } //nếu có data-bottom, ép nó thành kiểu số, nếu ko có thì lấy mặc định là 80
        scroll[i] = jQuery(goscroll[i]).offset().top - srh + kc[i]; // Tính toán khi nào xuất hiện animation cho từng element class
        fistanima = goscroll[i].getAttribute("data-anitype"); // Lấy data-anitype của element mẹ
        child = goscroll[i].children; // Lấy những element con của element hiện tại đã cuộn tới
        for (o = 0; o < child.length; o++) {
          if (fistanima != null) {
            anima = fistanima;
          } // Nếu element mẹ có data-anitype thì lấy nó
          else {
            anima = child[o].getAttribute("data-anitype"); // ngược lại lấy data-anitype của element con
            if (anima != null) {
              anima = anima;
            } else {
              anima = "fadeIn";
            } // nếu element con ko có data-anitype luôn thì lấy data-anitype mặc định là fadeIn, nếu có thì lấy nó
          } // lấy giá trị data-anitype
          if (window.pageYOffset > scroll[i]) {
            // nếu cuộn màn hình nhiều hơn giá trị scroll hiện tại thì:
            child[o].classList.add("animate__animated", anima); // thêm class cho từng element con đó

            goscroll[i].style.visibility = "visible"; // ẩn element mẹ
            // cho element mẹ hiển thị
          } else {
            child[o].classList.remove("animate__animated", anima);
            goscroll[i].style.visibility = "hidden"; // ẩn element mẹ
          }
        }
      }
    };
  }
});
