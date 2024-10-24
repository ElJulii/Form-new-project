//name project
let name_project;
const container_tasks = document.querySelector('.projects-container');
//dialog
const modal_new_project = document.getElementById('modal-new-project');

//sections
const section_one = document.getElementById('section-one');
const section_two = document.getElementById('section-two');
const section_three = document.getElementById('section-three');

//inputs
const input_title_project = document.getElementById('tittle-project');
const select_project = document.getElementById('projectDropdown')
//warning
const incomplete_message = document.querySelectorAll('.incomplete-text');
//кнопка открыть форму
const button_new_project = document.getElementById('button-new-project');
button_new_project.addEventListener('click', () => {
    modal_new_project.setAttribute('open', 'true');
})

const button_save = document.querySelector('.modal__buttons__save');
const button_connect = document.querySelector('.modal__buttons__connect');
const button_done = document.querySelector('.modal__buttons__end');
const button_cancel = document.querySelector('.modal__buttons__cancel');
const button_delete_project = document.querySelector('.button-delete__modal-buttons');
button_connect.addEventListener('click', () => {
    section_one.style.display = 'none';
    section_two.style.display = 'inline';

    button_save.style.display = 'block'
    button_connect.style.display = 'none';
})
select_project.addEventListener('change', (e) => {
    e.preventDefault();
    let value_select_project = select_project.value;
    if (value_select_project !== '') {
        select_project.style.border = 'solid 1px #ddd';
        incomplete_message[0].style.display = 'none';
    }
})
input_title_project.addEventListener('change', (e) => {
    e.preventDefault();
    let value_title_project = input_title_project.value;
    if (value_title_project !== '') {
        input_title_project.style.border = 'solid 1px #ddd';
        incomplete_message[1].style.display = 'none';
    }
})

button_save.addEventListener('click', (e) => {
    e.preventDefault();
    let value_title_project = input_title_project.value;
    let value_select_project = select_project.value;
    if (value_title_project === '') {
        input_title_project.style.border = 'solid 1px red';
        incomplete_message[1].style.display = 'inline';
    } else if (value_select_project === '') {
        select_project.style.border = 'solid 1px red';
        incomplete_message[0].style.display = 'inline';
    } else {
        button_save.style.display = 'none';
        button_cancel.style.display = 'none';
        button_done.style.display = 'block';
        button_delete_project.display = 'block';

        section_two.style.display = 'none';
        section_three.style.display = 'block';

        button_delete_project.style.display = 'block'

        name_project = value_title_project;
    }

})

button_done.addEventListener('click', () => {
    container_tasks.innerHTML = `<p>${name_project} </p>`
})

button_cancel.addEventListener('click', () => {
    modal_new_project.setAttribute('open', 'false')
})

button_delete_project.addEventListener('click', () => {
    name_project = '';
})
//inputs
const switch_check = document.getElementById('switch-check');

//client ID
const client_id = document.getElementById('client-id');
const label_client_id = document.querySelector('.last-label')

//labels and inputs users
const information_label_inputs = document.querySelectorAll('.label__first-modal');
const information_input_users = document.querySelectorAll('.first-modal__input')
const container_last_label = document.querySelector('.container-last-label');




switch_check.addEventListener('change', () => {
    if (switch_check.checked) {
        container_last_label.style.display = 'block';
        information_label_inputs.forEach(label => {
            label.style.display = 'none';
        })
        information_input_users.forEach(input => {
            input.style.display = 'none';
        })
        client_id.style.display = 'inline';
        label_client_id.style.display = 'inline-block'
    } else {
        container_last_label.style.display = 'none';
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

//section 2
const dropdownBody = document.getElementById("dropdownBody");
const newFolderOption = document.getElementById("newFolderOption");
let selectedText = document.getElementById("selectedText");

// Alternar visibilidad del dropdown
const toggleDropdown = () => {
    dropdownBody.classList.toggle("hidden");
};

// Seleccionar una opción existente
const selectOption = (text) => {
    selectedText.textContent = text;
    toggleDropdown();
};

// Mostrar input y botón para agregar carpeta (reemplaza opción "Новая папка")
const showNewFolderInput = () => {
    newFolderOption.remove(); // Elimina la opción "Новая папка"

    // Crear el contenedor del input y botón
    const inputContainer = document.createElement("div");
    inputContainer.id = "newFolderInputContainer";

    // Crear el input de texto
    const newFolderInput = document.createElement("input");
    newFolderInput.type = "text";
    newFolderInput.placeholder = "Введите название";
    newFolderInput.id = "newFolderInput";

    // Crear el botón "Создать"
    const createButton = document.createElement("button");
    createButton.textContent = "Создать";
    createButton.onclick = createNewFolder;

    // Agregar input y botón al contenedor
    inputContainer.appendChild(newFolderInput);
    inputContainer.appendChild(createButton);

    // Agregar el contenedor al dropdown
    dropdownBody.appendChild(inputContainer);

    // Enfocar automáticamente el input
    newFolderInput.focus();
};

// Crear una nueva carpeta y agregarla al dropdown
const createNewFolder = () => {
    const newFolderInput = document.getElementById("newFolderInput");
    const newFolderName = newFolderInput.value.trim();

    if (newFolderName === "") {
        alert("Por favor, ingresa un nombre para la carpeta.");
        return;
    }

    // Crear una nueva opción
    const newOption = document.createElement("div");
    newOption.classList.add("dropdown-option");
    newOption.textContent = `📁 ${newFolderName}`;
    newOption.onclick = () => selectOption(newFolderName);

    // Agregar la nueva opción al cuerpo del dropdown
    dropdownBody.insertBefore(newOption, dropdownBody.lastChild);

    // Seleccionar la nueva carpeta
    selectOption(newFolderName);
};

