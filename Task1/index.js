
let user = document.getElementById("user");
let loginbtn = document.getElementById("loginbtn");
let placeName = document.getElementById("placeName");
let submit = document.getElementById("submit");

user.addEventListener("click", function () {
  document.querySelector(".loginPage").classList.toggle("active1");
});

loginbtn.addEventListener("click", function () {
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  if (email.value === "" || password.value === "") {
    alert("Please Fill Details!!");
  } else {
    alert("You Logged In");
    document.querySelector(".loginPage").style.display = "none";
  }
});

submit.addEventListener("click", function () {
  if (placeName.value === "") {
    alert("Fill in the Place Name");
  } else {
    alert(placeName.value + " Tour Booked");
  }
});