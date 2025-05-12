const userNameInput = document.getElementById("username");
const sylaniHeading = document.getElementById("sylani");
const para = document.getElementById("uerwelcom");
const submitButton = document.getElementById("button");

submitButton.addEventListener("click",function () {
    para.innerHTML=`Welcom ${userNameInput.value} To ${sylaniHeading.innerHTML}`
})

