function deleteRec() {
    var choice = confirm("Do you want to delete the record?")
    var msg = document.getElementById('msg');
    if (choice == true) {
        msg.innerText = "Record deleted Successfully";
    } else {
        msg.innerHTML = "<span>Action Cancelled</span>";
    }
}