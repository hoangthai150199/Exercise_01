var personData = [
    {
        name : 'Thai',
        phone : '0342552949',
        email : 'thailch@runsystem.net',
        action : 'delete'
    },
    {
        name : 'Duy',
        phone : '0123456789',
        email : 'duy@gmail.com',
        action : 'delete'
    },
]

const dataBody = document.querySelector('#data-body')

let initPersonRender = personData.map(person => {
    return `
        <tr>
        <th scope="row">
            <input type="checkbox" name="" id="">
        </th>
        <td class="col">${person.name}</td>
        <td class="col">${person.phone}</td>
        <td class="col">${person.email}</td>
        <td class="col">${person.action}</td>
    </tr>`
})

dataBody.innerHTML = initPersonRender.join('');

var tdsElemt = document.querySelectorAll('td')

tdsElemt.forEach(td => {
    td.contentEditable  = true;
})

//delete
var deleteBtn = document.querySelector('#delete-btn')
deleteBtn.onclick = function() {
    let selectedPersons = document.querySelectorAll('th > input')
    selectedPersons.forEach(e => {
        if(e.checked === true) {
            console.log(e.parentElement.parentElement)
            e.parentElement.parentElement.remove()
        }
    })
}

var checkall = document.querySelector('#check-all')
checkall.onclick = function () {
    var checklist = document.querySelectorAll('input')
    checklist.forEach(input => {
        input.checked = true;
    })
}

//add
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
        <td class="col"></td>
    `
    dataBody.appendChild(e)
    enableEditor();
}) 
