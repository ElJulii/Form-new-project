//dialog
const modal_new_project = document.getElementById('modal-new-project');

//sections
const section_one = document.getElementById('section-one');
const section_two = document.getElementById('section-two');

//кнопка открыть форму
const button_new_project = document.getElementById('button-new-project');
button_new_project.addEventListener('click', () => {
    modal_new_project.setAttribute('open', 'true');
})

const button_save = document.querySelector('.modal__buttons__save');
const button_connect = document.querySelector('.modal__buttons__connect');
const button_done = document.querySelector('.modal__buttons__end');
const button_delete_project = document.querySelector('.button-delete__modal-buttons')
button_connect.addEventListener('click', () => {
    section_one.style.display = 'none';
    section_two.style.display = 'block';

    button_save.style.display = 'block'
    button_connect.style.display = 'none';
})

button_save.addEventListener('click', () => {
    button_save.style.display = 'none';
    button_cancel.style.display = 'none';
    button_done.style.display = 'block';
    button_delete_project.display = 'block';
})

const button_cancel = document.querySelector('.modal__buttons__cancel');
// button_cancel.addEventListener('click', () => {
//     modal_new_project.setAttribute('open', 'false')
//
// })

//inputs
const switch_check = document.getElementById('switch-check');

//client ID
const client_id = document.getElementById('client-id');
const label_client_id = document.querySelector('.last-label')

//labels and inputs users
const information_label_inputs = document.querySelectorAll('.label__first-modal');
const information_input_users = document.querySelectorAll('.first-modal__input')




switch_check.addEventListener('change', () => {
    if (switch_check.checked) {
        information_label_inputs.forEach(label => {
            label.style.display = 'none';
        })
        information_input_users.forEach(input => {
            input.style.display = 'none';
        })
        client_id.style.display = 'inline';
        label_client_id.style.display = 'inline'
    } else {
        information_label_inputs.forEach(label => {
            label.style.display = 'inline';
        })
        information_input_users.forEach(input => {
            input.style.display = 'inline';
        })
        client_id.style.display = 'none';
        label_client_id.style.display = 'none'
    }
})

