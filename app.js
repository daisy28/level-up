// Your javascript goes here

const bellDiv = document.querySelector(".bell_div");
const notification = document.querySelector(".notification_div");
const menuPopup = document.querySelector(".menu_popup");
const userProfile = document.querySelector(".user_profile");
const userInitials = document.querySelector(".user_initials");

bellDiv.addEventListener("click", () => {
     notification.classList.toggle("show_notification");
     bellDiv.classList.toggle("notification_active");
});

userProfile.addEventListener("click", () => {
     menuPopup.classList.toggle("show_menu_popup");
     userInitials.classList.toggle("show_border");
     userProfile.classList.toggle("user_profile_active");
});