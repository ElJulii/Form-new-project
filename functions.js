//кнопка открыть форму
const button_new_project = document.getElementById('button-new-project');

//dialog
const dialog_new_project = document.getElementById('dialog-new-project');

button_new_project.addEventListener('click', () => {
    dialog_new_project.setAttribute('open', 'true');
})