// Your javascript goes here
const bellDiv = document.querySelector(".bell_div");
const notification = document.querySelector(".notification_div");
const menuPopup = document.querySelector(".menu_popup");
const userProfile = document.querySelector(".user_profile");
const userInitials = document.querySelector(".user_initials");
const planSelection = document.querySelector(".plan_selection");
const exitIcon = document.querySelectorAll(".exit_btn");
const exitIconDesktop = document.querySelector(".exit_icon_desktop");
const toggleBtn = document.querySelector(".toggle_btn");
const setupContainer = document.querySelector(".setup_step_container");
const progressDiv = document.querySelector(".progress_div");
const checkContainer = document.querySelector(".setup_steps_heading");
let progress = 0;

bellDiv.addEventListener("click", () => {
     notification.classList.toggle("show_notification");
     bellDiv.classList.toggle("notification_active");
     const isExpanded = bellDiv.attributes["aria-expanded"].value === "true";
     const allMenuItems = notification.querySelectorAll(`[role="menuitem"]`);

     if (isExpanded) {
          bellDiv.ariaExpanded = "false";
          bellDiv.focus();
     } else {
          bellDiv.ariaExpanded = "true";
          allMenuItems[0].focus();
          notification.addEventListener("keyup", e => {
               if (e.key === "Escape") {
                    bellDiv.ariaExpanded = "false";
                    bellDiv.focus();
                    notification.classList.remove("show_notification");
               }
          });
          allMenuItems.forEach((menuItem, index) => {
               menuItem.addEventListener("keyup", e => {
                    const firstMenuItem = index === 0;
                    const lastMenuItem = index === allMenuItems.length - 1;
                    const nextMenuItem = allMenuItems.item(index + 1);
                    const previousMenuItem = allMenuItems.item(index - 1);
                    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                         if (lastMenuItem) {
                              allMenuItems.item(0).focus();
                              return
                         }
                         nextMenuItem.focus();
                    }
                    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                         if (firstMenuItem) {
                              allMenuItems.item(allMenuItems.length - 1).focus();
                              return
                         }
                         previousMenuItem.focus();
                    }
               });
          });
     }
});

userProfile.addEventListener("click", () => {
     menuPopup.classList.toggle("show_menu_popup");
     userInitials.classList.toggle("show_border");
     userProfile.classList.toggle("user_profile_active");
       const isExpanded = userProfile.attributes["aria-expanded"].value === "true";
     const allMenuItems = menuPopup.querySelectorAll(`[role="menuitem"]`);
     console.log(allMenuItems)

     if (isExpanded) {
          userProfile.ariaExpanded = "false";
          userProfile.focus();
     } else {
          userProfile.ariaExpanded = "true";
          allMenuItems[0].focus();
          menuPopup.addEventListener("keyup", e => {
               if (e.key === "Escape") {
                    console.log(e.key)
                    userProfile.ariaExpanded = "false";
                    userProfile.focus();
                    menuPopup.classList.remove("show_menu_popup");
               }
          });
          allMenuItems.forEach((menuItem, index) => {
               menuItem.addEventListener("keyup", e => {
                    const firstMenuItem = index === 0;
                    const lastMenuItem = index === allMenuItems.length - 1;
                    const nextMenuItem = allMenuItems.item(index + 1);
                    const previousMenuItem = allMenuItems.item(index - 1);
                    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                         if (lastMenuItem) {
                              allMenuItems.item(0).focus();
                              return
                         }
                         nextMenuItem.focus();
                    }
                    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                         if (firstMenuItem) {
                              allMenuItems.item(allMenuItems.length - 1).focus();
                              return
                         }
                         previousMenuItem.focus();
                    }
               });
          });
     }
});

exitIcon.forEach((btn) => {
     btn.addEventListener("click", () => {
          planSelection.classList.add("remove_trial");
     });
});

exitIconDesktop.addEventListener("click", () => {
     planSelection.classList.add("remove_trial");
});

toggleBtn.addEventListener("click", () => {
     toggleBtn.classList.toggle("arrow_up");
     setupContainer.classList.toggle("show_setup_container");
     const isExpanded = toggleBtn.attributes["aria-expanded"].value === "true";
     const allMenuItems = setupContainer.querySelectorAll(`[role="menuitem"]`);

     if (isExpanded) {
          toggleBtn.ariaExpanded = "false";
          toggleBtn.focus();
     } else {
          toggleBtn.ariaExpanded = "true";
          allMenuItems[0].focus();
          setupContainer.addEventListener("keyup", e => {
               if (e.key === "Escape") {
                    toggleBtn.ariaExpanded = "false";
                    toggleBtn.focus();
                    setupContainer.classList.remove("show_setup_container");
               }
          });
          allMenuItems.forEach((menuItem, index) => {
               menuItem.addEventListener("keyup", e => {
                    const firstMenuItem = index === 0;
                    const lastMenuItem = index === allMenuItems.length - 1;
                    const nextMenuItem = allMenuItems.item(index + 1);
                    const previousMenuItem = allMenuItems.item(index - 1);
                    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                         if (lastMenuItem) {
                              allMenuItems.item(0).focus();
                              return
                         }
                         nextMenuItem.focus();
                    }
                    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                         if (firstMenuItem) {
                              allMenuItems.item(allMenuItems.length - 1).focus();
                              return
                         }
                         previousMenuItem.focus();
                    }
               });
          });
     }
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
                    <button class="setup_steps_heading"  role="menuitem">
                         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" fill="none" class="dashed_icon">
                              <circle cx="16" cy="16" r="12" stroke="#8a8a8a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                                   stroke-dasharray="4 6" />
                         </svg>
                         <img src="https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg" alt="check box active indicator" class="active_checker" />
                    </button>
                    <div class="setup_info">
                         <h3 class="setup_information">${info.heading}</h3>
                         
                         <div class="setup_info_text">
                              <p>
                                   ${info.description} <span><a href="#" class="learn_more links">Learn more</a></span>
                              </p>
                              <div class="info_btn_div">
                              <button class="setup_info_btn">Customise theme</button>
                              ${info.import ? `<a href="#" class="import_product links"> Import product </a>` : ``}
                              </div>
                         </div>
                         
                         </div>
                    </div>
                    <div>
                         <img src=${info.img} alt="${info.heading} image" class="info_img" /></div>
               </div>`;
});
     setupContainer.innerHTML = html;
}

setupUI();

const infoContainer = document.querySelectorAll(".info_container");
const infos = document.querySelectorAll(".setup_info_text");
const infoImages = document.querySelectorAll(".info_img");

infoContainer.forEach(element => {
     infoContainer[0].querySelector(".setup_info_text").classList.toggle("show_setup_info_text");
     element.addEventListener("click", () => {
          infos.forEach(info => {
               info.classList.remove("show_setup_info_text");
          });

          infoContainer.forEach(info => {
               info.classList.remove("info_container_active");
          });

          infoImages.forEach(img => {
               img.classList.remove("show_info_img");
          });

          if (element) {
               element.querySelector(".setup_info_text").classList.add("show_setup_info_text");
               
               element.classList.add("info_container_active");

               element.querySelector(".info_img").classList.add("show_info_img");
          }
     });

     count = 0;
     const selectBtns = element.querySelectorAll(".setup_steps_heading");

     selectBtns.forEach((btn, index) => {
          btn.addEventListener("click", (e) => {
               e.stopImmediatePropagation();
               if (btn) {
                    btn.querySelector(".active_checker").classList.toggle("show_active_checker");
               }

               if (btn.querySelector(".active_checker").classList.contains("show_active_checker")) {
                    count++;
                    progress += 20;
                    if (btn.parentElement.querySelector(".setup_info_text").classList.contains("show_setup_info_text")) {
                         btn.parentElement.querySelector(".setup_info_text").classList.remove("show_setup_info_text");
                    }
                    infoContainer[count].querySelector(".setup_info_text").classList.add("show_setup_info_text");
                    infoContainer[count].querySelector(".info_image").classList.add("show_info_img");
                    
               } else {
                    count--;
                    progress -= 20;
               }
               progressDiv.querySelector("p").innerHTML = `${count} / ${setupInfos.length} complete`;
               
               progressDiv.querySelector(".progress_fill").style.width = `${progress}%`;
          });
     });
});

