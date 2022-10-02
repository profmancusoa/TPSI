// soluzione fornita da Dario Ruggeri - 2022
function login(){
    let username;
    let password;

    username = prompt("Inserire l'username");
    console.log(username);
    (username == "" || username || username == "Admin" || 0) || alert("Canceled");
    (username == null || username == "Admin" || 0) || alert("I don't know you");
    username != null && username == "Admin" && (password = prompt("Inserire password: ")) == "Admin1" && alert("Welcome");
    username != null && username == "Admin" && (password || alert("Canceled"));
    password == null || password == "Admin1" || alert("Wrong password");

}