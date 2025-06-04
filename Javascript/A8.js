function bodyload() {
    document.getElementById("createFolder").value = "Create Folder";
    document.getElementById("msg").style.display = "none";
}
function Create() {
    var name = prompt("Enter folder Name: ", "New_Folder");
    var msg = document.getElementById("msg");
    (name == null) ? document.writeln("Action Cancelled") : msg.innerHTML = "Folder Name: " + name + "<br>";
    document.getElementById("msg").style.display = "block";
    document.getElementById("dv1").style.display = "none";
}