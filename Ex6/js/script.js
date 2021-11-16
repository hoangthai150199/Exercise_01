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

var initPersonRender = personData.map(person => {
    return `
        <tr>
        <th scope="row">
            <input type="checkbox" name="" id="">
        </th>
        <td class="col">${person.name}</td>
        <td class="col">${person.phone}</td>
        <td class="col">${person.email}</td>
        <td class="col"><button type="button" onclick="deleteAction(event)" class="btn btn-danger delete-action">Delete</button></td>
    </tr>`
})

dataBody.innerHTML = initPersonRender.join('');

// Double click to edit
var addEditEvents = function() {
    var tds = document.querySelectorAll('#data-body td');
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

// Button delete on action column
var deleteAction = function(event) {
    event.target.parentElement.parentElement.remove();
}

// Button Add
var btnAdd = document.querySelector('#add-btn');
btnAdd.addEventListener('click', function() {
    var e = document.createElement('tr');
    e.innerHTML = `
        <th scope="row">
            <input type="checkbox" name="" id="">
        </th>
        <td class="col"></td>
        <td class="col"></td>
        <td class="col"></td>
        <td class="col"><button type="button" onclick="deleteAction(event)" class="btn btn-danger delete-action">Delete</button></td>
    `;
    dataBody.appendChild(e);
    addEditEvents();
})

// Checked on all item
var checkall = document.querySelector('#check-all')
checkall.onclick = function () {
    var checklist = document.querySelectorAll('input')
    checklist.forEach(input => {
        input.checked = true;
    })
}

// Button Delete
const deleteBtn = document.querySelector('#delete-btn')
deleteBtn.onclick = function() {
    let selectedPersons = document.querySelectorAll('th > input')
    selectedPersons.forEach(e => {
        if(e.checked === true) {
            e.parentElement.parentElement.remove()
        }
    })
}
