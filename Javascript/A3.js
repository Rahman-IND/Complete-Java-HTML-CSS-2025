function bodyload() {
    document.getElementById("cod").value = "COD";
    document.getElementById("CreditCard").value = "CreditCard";
    // access element through Name attribute of the element
    // getElementsByName method
    var mcount = document.getElementsByName("pay");
    alert("Number of payment mode available: " + mcount.length);
}