const scrollController = {
   scrollPosition: 0,
   disabledScroll() {
      scrollController.scrollPosition = window.scrollY;
      document.body.style.cssText = `
         overflow: hidden;
         position: fixed;
         top: -${scrollController.scrollPosition}px;
         left: 0;
         height: 100vh;
         width: 100vw;
         padding-right: ${window.innerWidth - document.body.offsetWidth}px;
      `;
      document.documentElement.style.scrollBehavior = 'unset';
   },

   enabledScroll() {
      document.body.style.cssText = '';
      window.scroll({ top: scrollController.scrollPosition })
      document.documentElement.style.scrollBehavior = '';
   },
}

!function (e) { "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) { for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;)++n; return Boolean(o[n]) }), "function" != typeof e.closest && (e.closest = function (e) { for (var t = this; t && 1 === t.nodeType;){ if (t.matches(e)) return t; t = t.parentNode } return null }) }(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {

   /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');


   /* Перебираем массив кнопок */
   modalButtons.forEach(function (item) {
      
      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener('click', function(e) {
            scrollController.disabledScroll();
         /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
         e.preventDefault();

         /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


         /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
         modalElem.classList.add('active');
         overlay.classList.add('active');         
      }); // end click

   }); // end foreach


   closeButtons.forEach(function(item){

      item.addEventListener('click', function (e) {         
         scrollController.enabledScroll();
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');       
         
      });

   }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
       document.querySelector('.modal.active').classList.remove('active');         
       this.classList.remove('active');
       
    });


   
}); // end ready


// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//       refs.modal.classList.toggle("is-hidden");
//       document.body.classList.toggle("no-scroll");
//   }
// })();