// Your javascript goes here
// select elements from the dom
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
const allNotificationMenuItems =
  notification.querySelectorAll(`[role="menuitem"]`);
const allMenuPopupItems = menuPopup.querySelectorAll(`[role="menuitem"]`);
let progress = 0;

// Handle open menu when toggle button is clicked
const openMenu = (toggle, listItem, toggleClass, popupClass, elementList) => {
  toggle.ariaExpanded = "true";
  elementList[0].focus();
  listItem.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      toggleMenu(toggle, listItem, toggleClass, popupClass);
    }
  });

  elementList.forEach((menuItem, index) => {
    menuItem.addEventListener("keyup", (e) => {
      handleKeyPress(e, index, elementList);
    });
  });
};

// Handle key press
const handleKeyPress = (e, index, elementList) => {
  const lastMenuItem = index === elementList.length - 1;
  const firstMenuItem = index === 0;
  const nextMenuItem = elementList.item(index + 1);
  const prevMenuItem = elementList.item(index - 1);
  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    if (lastMenuItem) {
      elementList.item(0).focus();
      return;
    }
    nextMenuItem.focus();
  }
  if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    if (firstMenuItem) {
      elementList.item(elementList.length - 1).focus();
      return;
    }
    prevMenuItem.focus();
  }
};

// Handle close menu when toggle button is clicked
const closeMenu = (element) => {
  element.ariaExpanded = "false";
  element.focus();
};

// Main toggler function
const toggleMenu = (toggle, popup, toggleClass, popupClass, elementList) => {
  toggle.classList.toggle(toggleClass);
  popup.classList.toggle(popupClass);
  const isExpanded = toggle.attributes["aria-expanded"].value === "true";

  if (isExpanded) {
    closeMenu(toggle);
  } else {
    openMenu(toggle, popup, toggleClass, popupClass, elementList);
  }
};

// Notification button event listener
bellDiv.addEventListener("click", () => {
  toggleMenu(
    bellDiv,
    notification,
    "notification_active",
    "show_notification",
    allNotificationMenuItems
  );
});

// User profile button event listener
userProfile.addEventListener("click", () => {
  toggleMenu(
    userProfile,
    menuPopup,
    "user_profile_active",
    "show_menu_popup",
    allMenuPopupItems
  );
});

// Exit button event listener
exitIcon.forEach((btn) => {
  btn.addEventListener("click", () => {
    planSelection.classList.add("remove_trial");
  });
});

// Exit button for desktop button event listener
exitIconDesktop.addEventListener("click", () => {
  planSelection.classList.add("remove_trial");
});

// Setup information and details
const setupInfos = [
  {
    id: `1`,
    heading: `Customize your online store`,
    description: `Choose a theme and add your logo, colors, and images to reflect your brand.`,
    img: `https://crushingit.tech/hackathon-assets/customise-store.png`,
    cta: `Customize theme`,
  },
  {
    id: `2`,
    heading: `Add your first product`,
    description: `Write a description, add photos, and set pricing for the products you plan to sell.`,
    img: `https://crushingit.tech/hackathon-assets/product.png`,
    import: `import product`,
    cta: `Add product`,
  },
  {
    id: `3`,
    heading: `Add a custom domain`,
    description: `Your current domain is 222219.myshopify.com but you can add a cutom domain to help customers find your online store. `,
    img: `https://crushingit.tech/hackathon-assets/website.png`,
    cta: `Add domain`,
  },
  {
    id: `4`,
    heading: `Name your store`,
    description: `Your temporary store name is currently Davii collections. The store name appears in your admin and your online store. `,
    img: `https://crushingit.tech/hackathon-assets/name-store.png`,
    cta: `Name store`,
  },
  {
    id: `5`,
    heading: `Setup a payment provider`,
    description: `Choose a payment provider to start accepting payments. You'll need to create an account with the payment provider and set it up with your Shopify store.`,
    img: `https://crushingit.tech/hackathon-assets/payment.png`,
    cta: `Set up payment`,
  },
];

// User Interface for set up information
const setupUI = () => {
  let html = ``;
  setupInfos.map((info) => {
    html += `
          <div class="info_container">
     <div class="setup_steps">
                    <button class="setup_steps_heading"  role="menuitem" title="click to ${
                      info.heading
                    }">
                         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" fill="none" class="dashed_icon"  title="unchecked">
                              <circle cx="16" cy="16" r="12" stroke="#8a8a8a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                                   stroke-dasharray="4 6" />
                         </svg>

                         <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 28 28" fill="none" class="check_box_processing hidden" title="processing">
    <path
      d="M26 14C26 16.3734 25.2962 18.6935 23.9776 20.6668C22.6591 22.6402 20.7849 24.1783 18.5922 25.0866C16.3995 25.9948 13.9867 26.2324 11.6589 25.7694C9.33114 25.3064 7.19295 24.1635 5.51472 22.4853C3.83649 20.8071 2.6936 18.6689 2.23058 16.3411C1.76755 14.0133 2.00519 11.6005 2.91345 9.4078C3.8217 7.21509 5.35977 5.34094 7.33316 4.02236C9.30655 2.70379 11.6266 2 14 2"
      stroke="#000"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

                         

                         <img src="https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg" alt="check box active indicator" class="active_checker hidden"  title="plan selected successfully" />
                    </button>
                    <div class="setup_info">
                         <h3 class="setup_information">${info.heading}</h3>
                         
                         <div class="setup_info_text" title="${
                           info.heading
                         } description">
                              <p>
                                   ${
                                     info.description
                                   } <span><a href="#" class="learn_more links">Learn more</a></span>
                              </p>
                              <div class="info_btn_div" >
                              <button class="setup_info_btn" name="call to action to set up account" title="call to action to set up account">${
                                info.cta
                              }</button>
                              ${
                                info.import
                                  ? `<a href="#" class="import_product links" title="import your own product"> Import product </a>`
                                  : ``
                              }
                              </div>
                         </div>
                         
                         </div>
                    </div>
                    <div>
                         <img src=${info.img} alt="${
      info.heading
    } image" class="info_img" title="set up guide illustration" /></div>
               </div>`;
  });
  setupContainer.innerHTML = html;
};
setupUI();
const allSetUpMenuItems = setupContainer.querySelectorAll(`[role="menuitem"]`);

// Handled key press for setup information
toggleBtn.addEventListener("click", () => {
  toggleMenu(
    toggleBtn,
    setupContainer,
    "arrow_up",
    "show_setup_container",
    allSetUpMenuItems
  );
});

// Handled display of hidden setup guide
const infoContainer = document.querySelectorAll(".info_container");
const infos = document.querySelectorAll(".setup_info_text");
const infoImages = document.querySelectorAll(".info_img");

// Show setup guide information
infoContainer.forEach((element) => {
  const firstListItem = infoContainer[0].querySelector(".setup_info_text");
  const firstLitItemImg = infoContainer[0].querySelector(".info_img");
  infoContainer[0].classList.add("info_container_active");

  firstListItem.classList.toggle("show_setup_info_text");
  firstLitItemImg.classList.toggle("show_info_img");

  element.addEventListener("click", () => {
    infos.forEach((info) => {
      info.classList.remove("show_setup_info_text");
    });

    infoContainer.forEach((info) => {
      info.classList.remove("info_container_active");
    });

    infoImages.forEach((img) => {
      img.classList.remove("show_info_img");
    });

    if (element) {
      element
        .querySelector(".setup_info_text")
        .classList.add("show_setup_info_text");

      element.classList.add("info_container_active");

      element.querySelector(".info_img").classList.add("show_info_img");
    }
  });
});

// Move to next tab after tab button is active
count = 0;
const selectBtns = setupContainer.querySelectorAll(".setup_steps_heading");
const MARK_DONE = "checkbox-active";

selectBtns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    const markedAsDone = btn.classList.contains(MARK_DONE);
    if (btn) {
      uncheckedIcon = btn.querySelector(".dashed_icon");
      processingIcon = btn.querySelector(".check_box_processing");
      completedIcon = btn.querySelector(".active_checker");

      const markAsDone = () => {
        uncheckedIcon.classList.add("hidden");
        processingIcon.classList.remove("hidden");
        setTimeout(() => {
          completedIcon.classList.remove("hidden");
          processingIcon.classList.add("hidden");
        }, 3000);
        btn.classList.add(MARK_DONE);
      };

      const markAsNotDone = () => {
        completedIcon.classList.add("hidden");
        processingIcon.classList.remove("hidden");
        setTimeout(() => {
          processingIcon.classList.add("hidden");
          uncheckedIcon.classList.remove("hidden");
        }, 3000);
      };

      if (markedAsDone) {
        markAsNotDone();
      } else {
        markAsDone();
      }

      if (!markedAsDone) {
        count++;
        progress += 20;
      } else {
        count--;
        progress -= 20;
      }

      setTimeout(() => {
        progressDiv.querySelector(
          "p"
        ).innerHTML = `${count} / ${setupInfos.length} completed`;

        progressDiv.querySelector(
          ".progress_fill"
        ).style.width = `${progress}%`;
      }, 3100);

      const nextMenuItem = selectBtns.item(index + 1);
      const hiddenInfo =
        nextMenuItem.parentElement.parentElement.querySelector(
          ".setup_info_text"
        );
      const img =
        nextMenuItem.parentElement.parentElement.querySelector(".info_img");
      const active =
        nextMenuItem.parentElement.parentElement;
      const shownInfo =
        completedIcon.parentElement.parentElement.querySelector(
          ".setup_info_text"
        );

      if (completedIcon) {
        setTimeout(() => {
          infos.forEach((info) => {
            info.classList.remove("show_setup_info_text");
          });
          infoImages.forEach((img) => {
            img.classList.remove("show_info_img");
          });
          infoContainer.forEach((info) => {
            info.classList.remove("info_container_active");
          });
             
          nextMenuItem.focus();
          hiddenInfo.classList.toggle("show_setup_info_text");
          img.classList.add("show_info_img");
          active.classList.add("info_container_active");
          shownInfo.classList.remove("show_setup_info_text");
        }, 3000);
      }
    }
  });
});
