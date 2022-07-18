var selectedRow = null;
onFormSubmit =() => {
    var formData = readFormData()
    if(selectedRow === null){
        insertNewRecord(formData)
    }
    else{
        updateRecord(formData)
    }
    resetForm()
}
readFormData = () => {
    var formData = {};
    formData["firstname"] = document.getElementById("firstname").value
    formData["lastname"] = document.getElementById("lastname").value
    formData["email"] = document.getElementById('email').value
    formData["contact"] = document.getElementById("contact").value
    return formData
}
insertNewRecord = (data) =>{
    var table = document.getElementById("insertData").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    let count = 1
    cell0 = newRow.insertCell(0);
    cell0.innerHTML = count;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.firstname;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.lastname;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.email;
    cell3 = newRow.insertCell(4);
    cell3.innerHTML = data.contact;
    cell4= newRow.insertCell(5);
    cell4.innerHTML = `<button onclick="onEdit(this) class='border border-teal-400'">Edit</button>`
    cell4= newRow.insertCell(6);
    cell4.innerHTML = `<button onclick="deleteRecord(this)">Delete</button>`
}

onEdit = (td) => {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('firstname').value = selectedRow.cells[1].innerHTML;
    document.getElementById('lastname').value = selectedRow.cells[2].innerHTML;
    document.getElementById('email').value = selectedRow.cells[3].innerHTML;
    document.getElementById('contact').value = selectedRow.cells[4].innerHTML;
}
updateRecord = (formData) => {
    selectedRow.cells[1].innerHTML = formData.firstname
    selectedRow.cells[2].innerHTML = formData.lastname
    selectedRow.cells[3].innerHTML = formData.email
    selectedRow.cells[4].innerHTML = formData.contact
}
deleteRecord = (td) => {
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('insertData').deleteRow(row.rowIndex)

    }
    resetForm()
}
resetForm = () =>{
    document.getElementById("firstname").value = '';
    document.getElementById("lastname").value = '';
    document.getElementById('email').value = '';
    document.getElementById("contact").value = '';
}