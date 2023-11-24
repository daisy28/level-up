// Your javascript goes here

const bellDiv = document.querySelector(".bell_div");
const notification = document.querySelector(".notification_div");
const menuPopup = document.querySelector(".menu_popup");
const userProfile = document.querySelector(".user_profile");
const userInitials = document.querySelector(".user_initials");
const planSelection = document.querySelector(".plan_selection");
const exitIcon = document.querySelector(".exit_icon");
const exitIconDesktop = document.querySelector(".exit_icon_desktop");
const toggleBtn = document.querySelector(".toggle_btn");
const setupContainer = document.querySelector(".setup_step_container");
const progressDiv = document.querySelector(".progress_div");
const checkContainer = document.querySelector(".setup_steps_heading");

bellDiv.addEventListener("click", () => {
     notification.classList.toggle("show_notification");
     bellDiv.classList.toggle("notification_active");
});

userProfile.addEventListener("click", () => {
     menuPopup.classList.toggle("show_menu_popup");
     userInitials.classList.toggle("show_border");
     userProfile.classList.toggle("user_profile_active");
});

exitIcon.addEventListener("click", () => {
     planSelection.classList.add("remove_trial");
});

exitIconDesktop.addEventListener("click", () => {
     planSelection.classList.add("remove_trial");
});

toggleBtn.addEventListener("click", () => {
     toggleBtn.querySelector(".arrow_down").classList.toggle("arrow_up");
     setupContainer.classList.toggle("show_setup_container");
});

const setupInfos = [
     {
          id: `1`,
          heading: `Customize your online store`,
          description: `Choose a theme and add your logo, colors, and images to reflect your brand.`,
          img: `https://crushingit.tech/hackathon-assets/customise-store.png`
     },
     {
          id: `2`,
          heading: `Add your first product`,
          description: `Write a description, add photos, and set pricing for the products you plan to sell.`,
          img: `https://crushingit.tech/hackathon-assets/product.png`,
          import: `import product`
     },
     {
          id: `3`,
          heading: `Add a custom domain`,
          description: `Your current domain is 222219.myshopify.com but you can add a cutom domain to help customers find your online store. `,
          img: `https://crushingit.tech/hackathon-assets/website.png`,
     },
     {
          id: `4`,
          heading: `Name your store`,
          description: `Your temporary store name is currently Davii collections. The store name appears in your admin and your onle store. `,
          img: `https://crushingit.tech/hackathon-assets/name-store.png`,
     },
     {
          id: `5`,
          heading: `Setup a payment provider`,
          description: `Choose a payment provider to start accepting payments. You'll need to create an account with the payment provider and set it up with your Shopify store `,
          img: `https://crushingit.tech/hackathon-assets/payment.png`,
     },
];

const setupUI = () => {
     let html = ``;
     setupInfos.map(info => {
          html += `
          <div class="info_container">
     <div class="setup_steps">
                    <div class="setup_steps_heading">
                         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" fill="none" class="dashed_icon">
                              <circle cx="16" cy="16" r="12" stroke="#8a8a8a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                                   stroke-dasharray="4 6" />
                         </svg>
                         <img src="https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg" alt="check active" class="active_checker" />
                    </div>
                    <div class="setup_info">
                         <h3>${info.heading}</h3>
                         
                         <div class="setup_info_text">
                              <p>
                                   ${info.description} <span><a href="#" class="learn_more">Learn more</a></span>
                              </p>
                              <div class="info_btn_div">
                              <button class="setup_info_btn">Customise theme</button>
                              ${info.import ? `<a href="#" class="import_product"> Import product </a>` : ``}
                              </div>
                         </div>
                         
                         </div>
                    </div>
                    <div>
                         <img src=${info.img} alt=${info.heading} class="info_img" /></div>
               </div>`;
});
     
     setupContainer.innerHTML = html;
}

setupUI();

const infoContainer = document.querySelectorAll(".info_container");
const infos = document.querySelectorAll(".setup_info_text");
const infoImages = document.querySelectorAll(".info_img");

let isChecked = false;

infoContainer.forEach(element => {
     element.addEventListener("click", () => {
          infos.forEach(info => {
               info.classList.remove("show_setup_info_text")
          });
          infoContainer.forEach(info => {
               info.classList.remove("info_container_active");
          });
          infoImages.forEach(img => {
               img.classList.remove("show_info_img");
          });
          if (element) {
               element.querySelector(".setup_info_text").classList.toggle("show_setup_info_text");

               element.classList.add("info_container_active");

               element.querySelector(".info_img").classList.add("show_info_img");
          }
     });

     count = 0;
     const selectBtns = element.querySelectorAll(".setup_steps_heading");
     const activeChecker = element.querySelectorAll(".active_checker");

     selectBtns.forEach(btn => {
          btn.addEventListener("click", () => {
               if (btn) {
                    // isChecked = true;
                    activeChecker.forEach(check => {
                    check.classList.remove("show_active_checker");
                    });

                    progressDiv.querySelector("p").innerHTML = `${count >= setupInfos.length  ? count-- : count++} / ${setupInfos.length}`;
                    btn.querySelector(".active_checker").classList.toggle("show_active_checker");
                    // isChecked = false
               }
               
               
          });
     })
     console.log()
});



// console.log(progressDiv)

