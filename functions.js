//dialog
const modal_new_project = document.getElementById('modal-new-project');

//sections
const section_one = document.getElementById('section-one');
const section_two = document.getElementById('section-two');
const section_three = document.getElementById('section-three');

//inputs
const input_title_project = document.getElementById('tittle-project');
const select_project = document.getElementById('projectDropdown');
const switch_check = document.getElementById('switch-check');

//кнопка открыть форму
const button_new_project = document.getElementById('button-new-project');



//SECTION 1
//name project
let name_project;
const container_tasks = document.querySelector('.projects-container');


//warning
const incomplete_message = document.querySelectorAll('.incomplete-text');

button_new_project.addEventListener('click', () => {
    modal_new_project.setAttribute('open', 'true');
})

const button_save = document.querySelector('.modal__buttons__save');
const button_connect = document.querySelector('.modal__buttons__connect');
const button_done = document.querySelector('.modal__buttons__end');
const button_cancel = document.querySelector('.modal__buttons__cancel');
const button_delete_project = document.querySelector('.button-delete__modal-buttons');

button_cancel.addEventListener('click', () => {
    modal_new_project.setAttribute('open', 'false')
    restartForm();
})

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

//SECTION 2
const dropdownBody = document.getElementById("dropdownBody");
const newFolderOption = document.getElementById("newFolderOption");
let selectedText = document.getElementById("selectedText");

// Alt visibility dropdown
const toggleDropdown = () => {
    dropdownBody.classList.toggle("hidden");
};

// Select an existent option
const selectOption = (text) => {
    selectedText.textContent = text;
    toggleDropdown();
};

// Show input and button to show (reemplaza opción "Новая папка")
const showNewFolderInput = () => {
    newFolderOption.remove(); // Elimina la opción "Новая папка"


    const inputContainer = document.createElement("div");
    inputContainer.id = "newFolderInputContainer";

    const newFolderInput = document.createElement("input");
    newFolderInput.type = "text";
    newFolderInput.placeholder = "Введите название";
    newFolderInput.id = "newFolderInput";

    const createButton = document.createElement("button");
    createButton.textContent = "Создать";
    createButton.onclick = createNewFolder;


    inputContainer.appendChild(newFolderInput);
    inputContainer.appendChild(createButton);


    dropdownBody.appendChild(inputContainer);

    newFolderInput.focus();
};

// Create a new folder
const createNewFolder = (event) => {
    event.preventDefault();
    const newFolderInput = document.getElementById("newFolderInput");
    const newFolderName = newFolderInput.value.trim();

    if (newFolderName === "") {
        alert("Write a name for the folder");
        return;
    }

    // Create a new option
    const newOption = document.createElement("div");
    newOption.classList.add("dropdown-option");
    newOption.textContent = `📁 ${newFolderName}`;
    newOption.onclick = () => selectOption(newFolderName);

    // Add folder
    dropdownBody.insertBefore(newOption, dropdownBody.lastChild);

    // select the new folder
    selectOption(newFolderName);
};

button_connect.addEventListener('click', () => {
    section_one.style.display = 'none';
    section_two.style.display = 'inline';

    select_project.style.display = 'inline';
    input_title_project.style.display = 'inline';

    button_save.style.display = 'block'
    button_connect.style.display = 'none';
})
select_project.addEventListener('change', (e) => {
    e.preventDefault();
    let value_select_project = select_project.value;
    if (value_select_project !== '') {
        select_project.style.border = 'solid 1px #ddd';
        incomplete_message[0].style.display = 'none';
        select_project.style.marginBottom = '0';
    }
})
input_title_project.addEventListener('change', (e) => {
    e.preventDefault();
    let value_title_project = input_title_project.value;
    if (value_title_project !== '') {
        input_title_project.style.border = 'solid 1px #ddd';
        incomplete_message[1].style.display = 'none';
        input_title_project.style.marginBottom = '12px';
    }
})

button_save.addEventListener('click', (e) => {
    e.preventDefault();
    let value_title_project = input_title_project.value;
    let value_select_project = select_project.value;
    if (value_title_project === '') {
        input_title_project.style.border = 'solid 1px red';
        incomplete_message[1].style.display = 'inline';
        input_title_project.style.marginBottom = '0';
    } else if (value_select_project === '') {
        select_project.style.border = 'solid 1px red';
        incomplete_message[0].style.display = 'inline';
        select_project.style.marginBottom = '0';
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

//SECTION 3
button_done.addEventListener('click', () => {
    container_tasks.innerHTML = `<p>${name_project} </p>`
    restartForm();
})

button_delete_project.addEventListener('click', () => {
    restartForm()
})

function restartForm() {
    name_project = '';
    section_one.style.display = 'block';
    section_two.style.display = 'none';
    section_three.style.display = 'none';

    button_connect.style.display = 'block';
    button_cancel.style.display = 'block';
    button_done.style.display = 'none';
    button_delete_project.style.display = 'none';
}

