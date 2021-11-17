var personData = [
    {
        name : 'Thai',
        phone : '0342552949',
        email : 'thailch@runsystem.net',
    },
    {
        name : 'Duy',
        phone : '0123456789',
        email : 'duy@gmail.com',
    },
]

const dataBody = document.querySelector('#data-body')

const initPersonRender = personData.map(person => {
    return `
        <tr>
        <th scope="row">
            <input type="checkbox" name="" id="">
        </th>
        <td class="col person-name">${person.name}</td>
        <td class="col person-phone">${person.phone}</td>
        <td class="col person-email">${person.email}</td>
        <td class="col"><button type="button" onclick="deleteAction(event)" class="btn btn-danger delete-action">Delete</button></td>
    </tr>`
})

dataBody.innerHTML = initPersonRender.join('');

// Double click to edit
const addEditEvents = function() {
    const tds = document.querySelectorAll('#data-body td');
    tds.forEach(e => {
        e.spellcheck = false;
        e.addEventListener('dblclick', function(event) {
            event.target.contentEditable = true;
            event.target.focus();
        })
        e.addEventListener('focusout', function(event) {
            event.target.contentEditable = false;
        })
    })
}
addEditEvents();

// Validation
const namePattern = '^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$';
const phonePattern = '^[0-9]{10}$';
const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
const enableValidator = function() {
    const names = document.querySelectorAll('.person-name');
    names.forEach(e => {
        e.addEventListener('focusout', function(event) {
            if(!event.target.innerText.trim().match(namePattern)) {
                event.target.classList.add('invalid')
            } else {
                event.target.classList.remove('invalid')
            }
        })
    })

    const phones = document.querySelectorAll('.person-phone');
    phones.forEach(e => {
        e.addEventListener('focusout', function(event) {
            if(!event.target.innerText.trim().match(phonePattern)) {
                event.target.classList.add('invalid')
            } else {
                event.target.classList.remove('invalid')
            }
        })
    })

    const emails = document.querySelectorAll('.person-email');
    emails.forEach(e => {
        e.addEventListener('focusout', function(event) {
            if(!event.target.innerText.trim().match(emailPattern)) {
                event.target.classList.add('invalid')
            } else {
                event.target.classList.remove('invalid')
            }
        })
    })
}
enableValidator();
const checkValidate = function() {
    const names = document.querySelectorAll('.person-name');
    names.forEach(e => {
        if(!e.innerText.trim().match(namePattern)) {
            e.classList.add('invalid');
        } else {
            e.classList.remove('invalid')
        }
    })
    
    const phones = document.querySelectorAll('.person-phone');
    phones.forEach(e => {
        if(!e.innerText.trim().match(phonePattern)) {
            e.classList.add('invalid');
        } else {
            e.classList.remove('invalid')
        }
    })

    const emails = document.querySelectorAll('.person-email');
    emails.forEach(e => {
        if(!e.innerText.trim().match(emailPattern)) {
            e.classList.add('invalid');
        } else {
            e.classList.remove('invalid')
        }
    })


}

// Button delete on action column
const deleteAction = function(event) {
    event.target.parentElement.parentElement.remove();
}

// Button Add
const btnAdd = document.querySelector('#add-btn');
btnAdd.addEventListener('click', function() {
    checkValidate();
    if(document.querySelector('.invalid')) {
        return;
    }
    var e = document.createElement('tr');
    e.innerHTML = `
        <th scope="row">
            <input type="checkbox" name="" id="">
        </th>
        <td class="col person-name"></td>
        <td class="col person-phone"></td>
        <td class="col person-email"></td>
        <td class="col"><button type="button" onclick="deleteAction(event)" class="btn btn-danger delete-action">Delete</button></td>
    `;
    dataBody.appendChild(e);
    addEditEvents();
    enableValidator();
})

// Checked on all item
const checkall = document.querySelector('#check-all')
checkall.onclick = function (event) {
    const checklist = document.querySelectorAll('th > input')
    checklist.forEach(input => {
        if(event.target.checked === true) {
            input.checked = true;
        } else {
            input.checked = false;
        }
    })
}

// Button Delete
const deleteBtn = document.querySelector('#delete-btn')
deleteBtn.onclick = function() {
    const selectedPersons = document.querySelectorAll('th > input')
    selectedPersons.forEach(e => {
        if(e.checked === true) {
            e.parentElement.parentElement.remove()
        }
    })
}
