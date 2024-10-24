//кнопка открыть форму
const button_new_project = document.getElementById('button-new-project');

//dialog
const model_new_project = document.getElementById('model-new-project');

//inputs
const switch_check = document.getElementById('switch-check');

//client ID
const client_id = document.getElementById('client-id');
const label_client_id = document.querySelector('.last-label')

//labels and inputs users
const information_label_inputs = document.querySelectorAll('.label__first-model');
const information_input_users = document.querySelectorAll('.first-model__input')


button_new_project.addEventListener('click', () => {
    model_new_project.setAttribute('open', 'true');
})

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