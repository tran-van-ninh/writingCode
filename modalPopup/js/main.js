var $ = document.querySelector.bind(document);
var openModal = $('.open-modal-btn');
var closeBtnModal = $('.close-modal-btn');
var closeItem = $('.close-item');
var modal = $('.modal');

function toggleModal(){
    modal.classList.toggle('hide');
}
function closeModalOnOverlayClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}
openModal.addEventListener('click', toggleModal);
closeItem.addEventListener('click', toggleModal);
closeBtnModal.addEventListener('click', toggleModal);
modal.addEventListener('click', closeModalOnOverlayClick);