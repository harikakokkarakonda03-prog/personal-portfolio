alert("Welcome to my portfolio");
function validateForm(){

    let name1 =
    document.getElementById("first name").value;

    let name2 =
    document.getElementById("last name").value;


    let email =
    document.getElementById("email").value;

    let student =
    document.getElementById("student").checked;

    let recruiter =
    document.getElementById("recruiter").checked;

    let company =
    document.getElementById("company").checked;

    let others =
    document.getElementById("others").checked;

    let message =
    document.getElementById("message").value;

    if(name1 == ""){

        alert("Please enter your first name!");

    }
    else if(name2 == ""){

        alert("Please enter your  last name!");
    }

    else if(email == ""){

        alert("Please enter your email!");
    }

    else if(student == false && recruiter == false && company == false && others==false){

        alert("Please select one checkbox!");

    }

    else if(message == ""){

        alert("Please enter your message!");

    }

    else{

        alert("Form submitted successfully!");

    }

}