//label effect
// const formLogin = document.querySelectorAll(".form-text input")
// const formLabel = document.querySelectorAll(".form-text label")

// for (let i=0; i<formLogin.length; i++){
//     formLogin[i].addEventListener("mouseover", function(){
//         formLabel[i].classList.add("focus")
//     })
//     formLogin[i].addEventListener("mouseout", function(){
//         if(formLogin[i].value==""){formLabel[i].classList.remove("focus")}
//     })
// }
// label effect


// data localStorage


// function addData (){
//     for (i=0; i<dataLocalStorage.length; i++){
//         if (dataUser.id == dataLocalStorage[i].id){
//             alert("Tên đăng nhập đã tồn tại")
//         }
//         else {
//             dataLocalStorage.push(dataUser)
//         }
//     } 
// }

// password
let dataLocalStorage = []

function checkPassword(){
    let formName = document.getElementById("form-name")
    let formUser = document.getElementById("form-user")
    let formPassword = document.getElementById("form-password")
    let formRePass = document.getElementById("form-re-pass")
    
    let dataUser = {
        name: formName.value,
        id: formUser.value,
        pass: formPassword.value,
    }
    // dataLocalStorage.push(dataUser)

    // thêm if nếu length=0 thì push thẳng

    if (dataLocalStorage.length == 0){
        dataLocalStorage.push(dataUser)
    }
    else 
    for (i=0; i<=dataLocalStorage.length; i++){
        if (dataUser.id == dataLocalStorage[i].id){
            alert("Tên đăng nhập đã tồn tại")
        }
        else if(dataUser.pass != formRePass.value) {
            alert("Xác nhận lại mật khẩu")
        }
        else {
            dataLocalStorage.push(dataUser)
        }
    } 

    
    console.log(dataLocalStorage);

    return dataLocalStorage;
    // if(formPassword.value == formRePass.value){
    //     alert("Mật khẩu đã được xác nhận")
    // }
    // if(formPassword.value != formRePass.value){
    //     alert("Xác nhận lại mật khẩu")
    // }
}

// password


// sign up
function signUpButton() {
    console.log("hello");
    let data = checkPassword()
    localStorage.setItem("User", JSON.stringify(data))
}