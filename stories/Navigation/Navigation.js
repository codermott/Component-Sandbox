import "./Navigation.css";

export const createNavigation = ({
  shopAllLabel = "Shop All",
  learnMoreLabel = "Learn More",
  categoryLabel = "Shop By Category",
  articlesLabel = "Articles",
  shopAllUrl = "/l/deer-hunting",
  categoryUrl = "#shop-by-category",
  articlesUrl = "#articles",
} = {}) => {
  const wrapper = document.createElement("section");

  wrapper.className = "sNav";
  wrapper.setAttribute("aria-label", "Navigation");

  wrapper.innerHTML = `
    <nav class="sNavDesktop" aria-label="Desktop navigation">
      <ul>
        <li>
          <a href="${categoryUrl}">
            ${categoryLabel}
          </a>
        </li>

        <li aria-hidden="true">
          <span>|</span>
        </li>

        <li>
          <a href="${articlesUrl}">
            ${articlesLabel}
          </a>
        </li>

        <li aria-hidden="true">
          <span>|</span>
        </li>

        <li>
          <a class="sBtn" href="${shopAllUrl}">
            ${shopAllLabel}
          </a>
        </li>
      </ul>
    </nav>

    <div class="sNavMobile">
      <a
        class="sNavMobile_shopAll"
        href="${shopAllUrl}"
      >
        ${shopAllLabel}
      </a>

      <div class="sNavMobile_right">
        <p class="sNavMobile_learn">
          ${learnMoreLabel}
        </p>

        <button
          class="sNavMobile_toggle"
          type="button"
          aria-expanded="false"
          aria-controls="sNavMobilePanel"
          aria-label="Open navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <div
      class="sNavMobile_panel"
      id="sNavMobilePanel"
    >
      <a href="${categoryUrl}">
        ${categoryLabel}
      </a>

      <a href="${articlesUrl}">
        ${articlesLabel}
      </a>
    </div>
  `;

  const toggle = wrapper.querySelector(".sNavMobile_toggle");
  const panel = wrapper.querySelector(".sNavMobile_panel");

  const setMenuState = (isOpen) => {
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.classList.toggle("is-open", isOpen);
    panel.classList.toggle("is-open", isOpen);

    toggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";

    setMenuState(!isOpen);
  });

  panel.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuState(false);
    }
  });

  return wrapper;
};
