// widget.js
;(function(){
    // — 1. Gerekirse jQuery’yi yükle —
    if (!window.jQuery) {
        var jq = document.createElement('script');
        jq.src = 'https://code.jquery.com/jquery-3.7.1.slim.min.js';
        jq.integrity = 'sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8=';
        jq.crossOrigin = 'anonymous';
        document.head.appendChild(jq);
    }

    // — 2. CSS’i gömülü <style> içinde ekle —
    var css = `  ul li a {
    text-decoration: none;
    color: black;
  }

  ul {
    margin-top: 0;
  }

  .position-fixed {
    position: fixed !important;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }


  @media (max-width: 576px) {
    .customer-services{
      margin-bottom: 5rem;
      margin-right: 1rem;
    }
  }

  .customer-services {
    z-index:80 !important;
    bottom: 1rem;
    right: 0.75rem;
    z-index: 10;
    width: 100px;
    height: 100px;
  }
  @media (min-width: 768px) {
    .customer-services {
      display: flex;
      width: 120px;
      height: 120px;
      bottom: 3vw;
      right: 3vw;
    }
  }
  @media (min-width: 1200px) {
    .customer-services {
      display:none;
      width: 160px;
      height: 160px;
      font-size: 12px;
    }
  }
  .customer-services:before,
  .customer-services:after {
    content: "";
    position: absolute;
    top: 15%;
    left: 15%;
    z-index: -1;
    width: 70%;
    height: 70%;
    border: 1px solid #1f4a76;
    border-radius: 100%;
    animation: demo01 4s infinite linear;
    opacity: 0;
    pointer-events: none;
  }
  .customer-services:after {
    animation-delay: 2s;
  }
  .customer-services .offcanvas-backdrop {
    opacity: 0;
    pointer-events: none;
    z-index: -1;
    transition-property: opacity;
    transition-duration: 0.15s;
  }
  @media (min-width: 576px) {
    .customer-services .offcanvas-backdrop {
      background-color: transparent;
      -webkit-backdrop-filter: none;
      backdrop-filter: none;
    }
  }
  .customer-services .bg {
    background: #1f4a76;
  }
  .customer-services .bg img {
    display: block;
    margin: 1px 5px 0 auto;
    max-height: 100%;
    width: auto;
    max-width: 100%;
    height: auto;
  }
  .customer-services .title {
    top: 18%;
    left: 16%;
    font-family: "Montserrat", system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 11px;
    line-height: 1.1;
    letter-spacing: 0.02em;
    opacity: 1;
    transition-property: opacity;
    transition-duration: 0.3s;
  }
  .customer-services .title:before {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
  }
  @media (min-width: 768px) {
    .customer-services .title {
      top: 18%;
      left: auto;
      right: 48%;
      font-weight: 600;
      line-height: 1.3;
    }
    .customer-services .title:before {
      margin-left: auto;
      margin-bottom: 3px;
    }
  }
  @media (min-width: 1200px) {
    .customer-services .title {
      top: 27%;
      right: 50%;
    }
  }
  .customer-services .typewrite {
    right: 18%;
    bottom: -6%;
    opacity: 1;
    height: 20px;
    font-size: 11px;
    line-height: 1.4;
    letter-spacing: 0.02em;
    background-color: #1f4a76;
    transition-property: opacity;
    transition-duration: 0.3s;
  }
  .customer-services .typewrite:before {
    content: "";
    width: 7px;
    height: 8px;
    position: absolute;
    top: 0;
    right: -2px;
  }
  .customer-services .typewrite span {
    position: relative;
    z-index: 1;
  }
  @media (min-width: 768px) {
    .customer-services .typewrite {
      right: 21%;
    }
  }
  @media (min-width: 1200px) {
    .customer-services .typewrite {
      right: 24%;
      height: 22px;
      padding: 0.25rem 0.75rem;
    }
  }
  .customer-services ul {
    position: fixed;
    bottom: 50px;
    left: 0;
    width: 100%;
    padding: 1rem;
    font-family: "Manrope", system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    transform: translateY(100%);
    background-color: #fff;
    border-radius: 16px 16px 0 0;
    transition-property: transform, box-shadow;
    transition-duration: 0.3s;
  }
  @media (min-width: 576px) {
    .customer-services ul {
      position: absolute;
      top: 0;
      left: 0;
      bottom: auto;
      width: 100%;
      height: 100%;
      padding: 0;
      transform: none;
      background-color: transparent;
      border-radius: 0;
      font-size: 11px;
      font-weight: 800;
      line-height: 1.4;
      letter-spacing: 0.02em;
    }
  }
  .customer-services ul li {
    margin-bottom: 2rem;
  }
  .customer-services ul li .icon {
    position: relative;
    z-index: 1;
    width: 32px;
    height: 32px;
    background-color: #f55028;
    color: #fff;
    border-radius: 50em;
    padding: 0.5rem;
  }
  .customer-services ul li .icon svg,
  .customer-services ul li .icon div {
    width: 16px;
    height: 16px;
  }
  .customer-services ul li a {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-decoration: none;
  }
  @media (min-width: 576px) {
    .customer-services ul li {
      position: absolute;
      opacity: 0;
      transform: translateX(-1rem);
      pointer-events: none;
      transition-property: opacity, transform;
      transition-duration: 0.3s;
      margin-bottom: 0;
    }
    .customer-services ul li:nth-child(1) {
      display: none;
    }
    .customer-services ul li:nth-child(2) {
      top: -2%;
      right: 72%;
    }
    .customer-services ul li:nth-child(3) {
      top: 23%;
      right: 90%;
      transition-delay: 0.1s;
    }
    .customer-services ul li:nth-child(4) {
      top: 48%;
      right: 94%;
      transition-delay: 0.2s;
    }
    .customer-services ul li:nth-child(5) {
      top: 74%;
      right: 83%;
      transition-delay: 0.3s;
    }
    .customer-services ul li:nth-child(5) .icon {
      background: #00c761;
    }
    .customer-services ul li span {
      position: absolute;
      top: 0;
      right: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      white-space: nowrap;
      margin-right: -0.75rem;
      background-color: #fff;
      border: 1px solid #e3e8ff;
      border-radius: 50em;
      padding: 0.25rem 1.25rem 0.25rem 0.75rem;
    }
  }
  .customer-services.active {
    z-index: 80;
  }
  .customer-services.active .offcanvas-backdrop {
    opacity: 1;
    pointer-events: auto;
  }
  .customer-services.active .typewrite {
    opacity: 0;
  }
  .customer-services.active ul {
    transform: translateY(0);
    box-shadow: 0 -0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  }
  @media (min-width: 576px) {
    .customer-services.active ul {
      transform: none;
      box-shadow: none;
    }
    .customer-services.active ul li {
      opacity: 1;
      pointer-events: auto;
      transform: translateX(0);
    }
  }

  /* Pozisyon Sınıfları */
  .position-fixed {
    position: fixed;
  }

  .position-absolute {
    position: absolute;
  }

  /* Display ve Flex Sınıfları */
  .d-inline-flex {
    display: inline-flex;
  }

  .d-flex {
    display: flex;
  }

  .d-block {
    display: block;
  }

  .align-items-center {
    align-items: center;
  }

  .justify-content-center {
    justify-content: center;
  }

  /* Margin ve Padding Sınıfları */
  .p-3 {
    padding: 1rem;
  }

  .px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .mb-0 {
    margin-bottom: 0;
  }

  .ms-auto {
    margin-left: auto;
  }

  /* Text Sınıfları */
  .text-decoration-none {
    text-decoration: none;
  }

  .text-center {
    text-align: center;
  }

  .text-start {
    text-align: start;
  }

  .text-white {
    color: white;
  }

  .fw-light {
    font-weight: 300;
  }

  .text-nowrap {
    white-space: nowrap;
  }

  .lh-1 {
    line-height: 1;
  }

  /* Boyut Sınıfları */
  .w-100 {
    width: 100%;
  }

  .h-100 {
    height: 100%;
  }

  /* Border ve Border Radius */
  .rounded-circle {
    border-radius: 50%;
  }

  .rounded-pill {
    border-radius: 50rem;
  }

  /* Liste Stilleri */
  .list-unstyled {
    list-style: none;
    padding-left: 0;
  }

  /* Pointer Events */
  .pe-none {
    pointer-events: none;
  }

  /* Pozisyon Yardımcıları */
  .top-0 {
    top: 0;
  }

  .start-0 {
    left: 0;
  }

  /* Medya Sorguları */
  @media (min-width: 768px) {
    .text-md-end {
      text-align: end;
    }
  }

  @keyframes demo01 {
    0% {
      transform: scale(.65);
      opacity: 0
    }

    10% {
      transform: scale(.75);
      opacity: 1
    }

    100% {
      transform: scale(1.9);
      opacity: 0
    }
  }

  .customer-services .title:before {
    background-image: url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 16.5C11 19.5376 13.4035 22 16.3684 22C16.9809 22 17.5694 21.8949 18.1177 21.7014C18.3258 21.6279 18.4299 21.5912 18.4999 21.5773C18.5736 21.5626 18.6135 21.5585 18.6886 21.558C18.76 21.5575 18.8417 21.5687 19.0052 21.591L22 22L21.3887 19.2383C21.3486 19.0573 21.3286 18.9668 21.3239 18.8867C21.3191 18.8031 21.3214 18.7567 21.3343 18.6739C21.3468 18.5947 21.3847 18.4787 21.4605 18.2467C21.6397 17.6979 21.7368 17.1106 21.7368 16.5C21.7368 13.4624 19.3333 11 16.3684 11C13.4035 11 11 13.4624 11 16.5Z" fill="url(%23paint0_linear_3427_531)"/><path d="M17.9056 11.2288C17.9678 10.8282 18 10.4179 18 10C18 5.58172 14.3948 2 9.94741 2C5.50006 2 1.89478 5.58172 1.89478 10C1.89478 10.9981 2.07875 11.9535 2.41484 12.8345C2.48465 13.0175 2.51955 13.109 2.5354 13.1804C2.5511 13.2512 2.55716 13.301 2.55887 13.3735C2.56059 13.4466 2.55067 13.5272 2.53083 13.6883L2.12825 16.9585C2.08467 17.3125 2.06288 17.4895 2.12177 17.6182C2.17336 17.731 2.265 17.8205 2.37891 17.8695C2.50892 17.9254 2.68537 17.8995 3.03828 17.8478L6.22355 17.3809C6.38985 17.3565 6.47303 17.3443 6.54876 17.3448C6.62368 17.3452 6.67553 17.3507 6.74885 17.3661C6.82297 17.3817 6.91765 17.4172 7.10702 17.4881C7.99033 17.819 8.94759 18 9.94741 18C10.3656 18 10.7763 17.9683 11.1773 17.9073M16.3684 22C13.4035 22 11 19.5376 11 16.5C11 13.4624 13.4035 11 16.3684 11C19.3333 11 21.7368 13.4624 21.7368 16.5C21.7368 17.1106 21.6397 17.6979 21.4605 18.2467C21.3847 18.4787 21.3468 18.5947 21.3343 18.6739C21.3214 18.7567 21.3191 18.8031 21.3239 18.8867C21.3286 18.9668 21.3486 19.0573 21.3887 19.2383L22 22L19.0052 21.591C18.8417 21.5687 18.76 21.5575 18.6886 21.558C18.6135 21.5585 18.5736 21.5626 18.4999 21.5773C18.4299 21.5912 18.3258 21.6279 18.1177 21.7014C17.5694 21.8949 16.9809 22 16.3684 22Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="paint0_linear_3427_531" x1="11.9474" y1="2" x2="11.9474" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient></defs></svg>')
  }`;
    var st = document.createElement('style');
    st.innerHTML = css;
    document.head.appendChild(st);

    // — 3. HTML yapıyı oluştur ve body’ye ekle —
    var html = `
    <div class="ana-container-customer">
      <div class="customer-services position-fixed d-inline-flex align-items-center justify-content-center p-3 text-decoration-none text-center lh-1 cursor-pointer">
  <div class="offcanvas-backdrop"></div>
  <div class="bg position-absolute top-0 start-0 w-100 h-100 rounded-circle pe-none"><img src="https://static.ticimax.cloud/67721//uploads/editoruploads/images/barista-4.png" width="114" height="159" alt="Müşteri Hizmetleri"></div>
  <div class="title position-absolute text-white pe-none text-start text-md-end">Müşteri Hizmetleri</div>
  <div class="typewrite position-absolute d-flex align-items-center justify-content-center text-white fw-light text-nowrap rounded-pill px-2 pe-none" data-period="2000" data-type='[ "Bize Ulaşın", "Biz Sizi Arayalım", "Canlı Sohbet", "Whatsapp\`tan Sor" ]'><span class="wrap"></span></div>
  <ul class="list-unstyled mb-0">
    <li><div class="btn-close d-block ms-auto" aria-label="Kapat"></div></li>
    <li><a href="https://dogrukahve.com/Form/sizi-arayalim-7" target="_self" data-bs-toggle="offcanvas"><div class="icon"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div><span>Biz Sizi Arayalım</span></a></li>
    <li><a href="tel:+903122120333" target="_self" data-bs-toggle="offcanvas"><div class="icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M87.48 380c1.2-4.38-1.43-10.47-3.94-14.86a42.63 42.63 0 0 0-2.54-3.8 199.81 199.81 0 0 1-33-110C47.64 139.09 140.72 48 255.82 48 356.2 48 440 117.54 459.57 209.85a199 199 0 0 1 4.43 41.64c0 112.41-89.49 204.93-204.59 204.93-18.31 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.14 31.14 0 0 0-11.13-2.07 30.7 30.7 0 0 0-12.08 2.43L81.5 462.78a15.92 15.92 0 0 1-4.66 1.22 9.61 9.61 0 0 1-9.58-9.74 15.85 15.85 0 0 1 .6-3.29z"></path><circle cx="160" cy="256" r="32"></circle><circle cx="256" cy="256" r="32"></circle><circle cx="352" cy="256" r="32"></circle></svg></div><span>Hemen Ara</span></a></li>
    <li><a href="https://instagram.com/dogrukahve" target="_self" data-bs-toggle="offcanvas"><div class="icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M18 11v2h4v-2h-4zM16 17.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm5.03 1.71L11 9.53v4.94l-1.97-1.18-.48-.29H4v-2h4.55l.48-.29zM15.5 12c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z"></path></svg></div><span>Avantajları Kaçırma</span></a></li>
    <li><a href="https://web.whatsapp.com/send?phone=903122120333&text=Size%20dogrukahve.com%20web%20sitenizden%20yaz%C4%B1yorum." target="_blank"><div class="icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M13.641 2.325c-1.497-1.5-3.488-2.325-5.609-2.325-4.369 0-7.925 3.556-7.925 7.928 0 1.397 0.366 2.763 1.059 3.963l-1.125 4.109 4.203-1.103c1.159 0.631 2.463 0.966 3.787 0.966h0.003c0 0 0 0 0 0 4.369 0 7.928-3.556 7.928-7.928 0-2.119-0.825-4.109-2.322-5.609zM8.034 14.525v0c-1.184 0-2.344-0.319-3.356-0.919l-0.241-0.144-2.494 0.653 0.666-2.431-0.156-0.25c-0.663-1.047-1.009-2.259-1.009-3.506 0-3.634 2.956-6.591 6.594-6.591 1.759 0 3.416 0.688 4.659 1.931 1.244 1.247 1.928 2.9 1.928 4.662-0.003 3.637-2.959 6.594-6.591 6.594zM11.647 9.588c-0.197-0.1-1.172-0.578-1.353-0.644s-0.313-0.1-0.447 0.1c-0.131 0.197-0.512 0.644-0.628 0.778-0.116 0.131-0.231 0.15-0.428 0.050s-0.838-0.309-1.594-0.984c-0.588-0.525-0.987-1.175-1.103-1.372s-0.013-0.306 0.088-0.403c0.091-0.088 0.197-0.231 0.297-0.347s0.131-0.197 0.197-0.331c0.066-0.131 0.034-0.247-0.016-0.347s-0.447-1.075-0.609-1.472c-0.159-0.388-0.325-0.334-0.447-0.341-0.116-0.006-0.247-0.006-0.378-0.006s-0.347 0.050-0.528 0.247c-0.181 0.197-0.694 0.678-0.694 1.653s0.709 1.916 0.809 2.050c0.1 0.131 1.397 2.134 3.384 2.991 0.472 0.203 0.841 0.325 1.128 0.419 0.475 0.15 0.906 0.128 1.247 0.078 0.381-0.056 1.172-0.478 1.338-0.941s0.166-0.859 0.116-0.941c-0.047-0.088-0.178-0.137-0.378-0.238z"></path></svg></svg></div><span>Whatsapp\`tan Sor</span></a></li>
  </ul>
</div>
    </div>
  `;
    var wrap = document.createElement('div');
    wrap.innerHTML = html;
    document.body.appendChild(wrap.firstElementChild);

    $(".customer-services").on("click", function () {
        $(this).toggleClass("active");
    });
    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2e3;
        this.txt = "";
        this.tick();
        this.isDeleting = false;
    };
    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
        this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
        var that = this;
        var delta = 200 - Math.random() * 100;
        if (this.isDeleting) {
            delta /= 2;
        }
        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }
        setTimeout(function () {
            that.tick();
        }, delta);
    };
    window.onload = function () {
        var elements = document.getElementsByClassName("typewrite");
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute("data-type");
            var period = elements[i].getAttribute("data-period");
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
    };

    // —— 5) jQuery hazır olunca tüm setup’ları çalıştır ——
    loadjQuery(function(){
        setupClick();
        setupTypewriter();
    });

})();
