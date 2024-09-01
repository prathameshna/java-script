// this function for fill all values of form
function data() {
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = document.getElementById("n3").value;
    var d = document.getElementById("n4").value;

    if (a == "" || b == "" || c == "" || d == "") {
        alert("All Fields are mandotary")
        return false;
    }
    // data funtion complete

    // this function for phone number length
    else if(b.length<10 ||b.length>10){
       alert("Please enter valid number!")
    }
    // function complete
    // this funtion for not allowed alphabate in phone number coulmn.
    else if(isNaN(b)){
        alert("only numbers are allowed")
    }
     // function complete
     //this is for confirm password.
    else if(c !=d){
        alert("Please enter correct password")
    }
     // function complete
    else
    {
        true;
    }
}