/**
 * Responsive Slider Template
 *
 * Generates a complete, standalone Responsive Slider component.
 *
 * Output includes:
 * - Splide CSS CDN
 * - Splide JS CDN
 * - Component CSS
 * - Component HTML
 * - Responsive slider JavaScript
 *
 * The returned HTML can be copied and used outside Storybook.
 */

export function responsiveSliderTemplate(args = {}) {
  const {
    items = [],
    ariaLabel = "Featured products",
    sliderBreakpoint = 480,
    slidesPerPage = 1,
    gap = "1rem",
    loop = true,
    arrows = true,
    pagination = true,
  } = args;

  /**
   * Escape values used inside HTML attributes.
   */
  function escapeAttribute(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  /**
   * Escape values used as normal HTML text.
   */
  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  /**
   * Generate slider cards from the items array.
   */
  const slides = items
    .map((item, index) => {
      const {
        image = "",
        imageAlt = "",
        title = `Item ${index + 1}`,
        description = "",
        buttonText = "Shop Now",
        href = "#",
      } = item || {};

      const safeImage = escapeAttribute(image);
      const safeImageAlt = escapeAttribute(imageAlt);
      const safeTitle = escapeHTML(title);
      const safeDescription = escapeHTML(description);
      const safeButtonText = escapeHTML(buttonText);
      const safeHref = escapeAttribute(href);

      const ariaText = escapeAttribute(
        `${title || `Item ${index + 1}`}${
          buttonText ? ` - ${buttonText}` : ""
        }`,
      );

      return `
          <li class="splide__slide">
            <a
              href="${safeHref}"
              class="sSliderCard"
              aria-label="${ariaText}"
            >
              ${
                image
                  ? `
              <div class="sSliderCard__media">
                <img
                  class="sSliderCard__image"
                  src="${safeImage}"
                  alt="${safeImageAlt}"
                />
              </div>`
                  : ""
              }

              <div class="sSliderCard__content">
                ${
                  title
                    ? `
                <h3 class="sSliderCard__title">${safeTitle}</h3>`
                    : ""
                }

                ${
                  description
                    ? `
                <p class="sSliderCard__text">${safeDescription}</p>`
                    : ""
                }

                ${
                  buttonText
                    ? `
                <span class="sSliderCard__button">${safeButtonText}</span>`
                    : ""
                }
              </div>
            </a>
          </li>`;
    })
    .join("\n");

  /**
   * Return the complete standalone component.
   */
  return `
<!--
  Responsive Slider Component (Splide)

  Configuration:
  - data-slider-breakpoint
  - data-slides-per-page
  - data-gap
  - data-loop
  - data-arrows
  - data-pagination
-->

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4/dist/css/splide.min.css"
/>

<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4/dist/js/splide.min.js"></script>

<style>
  :root {
    --slider-image-height: clamp(180px, 24vw, 260px);
  }

  .sSliderCard {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: inherit;
    text-decoration: none;
  }

  .sSliderCard__media {
    width: 100%;
    overflow: hidden;
    background: #f5f5f5;
  }

  .sSliderCard__image {
    display: block;
    width: 100%;
    height: var(--slider-image-height);
    max-height: var(--slider-image-height);
    object-fit: contain;
    object-position: center;
  }

  .sSliderCard__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    padding: 16px;
    text-align: center;
    gap: 8px;
  }

  .sSliderCard__title {
    margin: 0 0 8px;
    font-size: 20px;
  }

  .sSliderCard__text {
    margin: 0;
    line-height: 1.5;
  }

  .sSliderCard__button {
    display: inline-block;
    margin-top: 0;
    padding: 10px 20px;
    background: #000;
    color: #fff;
    font-weight: 600;
    text-decoration: none;
    border-radius: 4px;
  }

  .sSliderCard:focus-visible,
  .sSliderCard__button:focus-visible,
  .splide__arrow:focus-visible,
  .splide__pagination__page:focus-visible {
    outline: 3px solid #005fcc;
    outline-offset: 3px;
  }

  .splide__arrow {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 50%;
  }

  .splide__arrow svg {
    fill: #fff;
  }

  .creative-responsive-slider {
    visibility: visible;
  }

  .sSplide-slider {
    padding: 1rem;
  }

  .sSplide-slider .splide__slide {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 140px;
    background: #fff;
    border-radius: 8px;
    font-weight: 600;
    box-sizing: border-box;
    overflow: hidden;
  }

  .splide__pagination {
    bottom: -1em;
    left: 0;
    padding: 0 1em;
    position: absolute;
    right: 0;
    z-index: 1;
  }

  /*
   * Desktop / tablet grid.
   *
   * Splide is destroyed above 480px by default.
   * These rules then turn the cards into a wrapping grid.
   */

  @media (min-width: 481px) {
    .sSplide-slider .splide__track {
      overflow: visible;
    }

    .sSplide-slider .splide__list {
      display: flex !important;
      flex-wrap: wrap !important;
      justify-content: center;
      gap: 16px;
      transform: none !important;
    }

    .sSplide-slider .splide__slide {
      flex: 0 0 calc((100% - 16px) / 2) !important;
      width: auto !important;
      margin: 0 !important;
    }
  }

  @media (min-width: 900px) {
    .sSplide-slider .splide__slide {
      flex: 0 0 calc((100% - 32px) / 3) !important;
    }
  }

  @media (min-width: 1200px) {
    .sSplide-slider .splide__slide {
      flex: 0 0 calc((100% - 48px) / 4) !important;
    }
  }
</style>

<div
  class="responsive-slider-component"
  data-responsive-slider-root
>
  <div
    class="sSplide-slider"
    aria-label="${escapeAttribute(ariaLabel)}"
  >
    <div
      class="splide creative-responsive-slider"
      data-slider-breakpoint="${escapeAttribute(sliderBreakpoint)}"
      data-slides-per-page="${escapeAttribute(slidesPerPage)}"
      data-gap="${escapeAttribute(gap)}"
      data-loop="${escapeAttribute(loop)}"
      data-arrows="${escapeAttribute(arrows)}"
      data-pagination="${escapeAttribute(pagination)}"
      aria-roledescription="carousel"
      aria-label="${escapeAttribute(ariaLabel)}"
      aria-live="polite"
      aria-atomic="true"
    >
      <div class="splide__track">
        <ul class="splide__list">
${slides}
        </ul>
      </div>
    </div>
  </div>
</div>

<script>
  (function () {
    if (
      typeof window === "undefined" ||
      typeof document === "undefined"
    ) {
      return;
    }

    function initResponsiveSliderRoot(rootEl) {
      if (
        !rootEl ||
        rootEl.dataset.responsiveSlidersInitialized === "true"
      ) {
        return;
      }

      rootEl.dataset.responsiveSlidersInitialized = "true";

      const instances = new Map();
      const retryTimers = new Map();

      function getSliderEls() {
        return Array.from(
          rootEl.querySelectorAll(
            ".creative-responsive-slider"
          )
        );
      }

      function parseBoolean(value, fallbackValue) {
        if (value == null || value === "") {
          return fallbackValue;
        }

        return String(value).toLowerCase() === "true";
      }

      function parseNumber(value) {
        const parsedValue = Number(value);

        return Number.isFinite(parsedValue)
          ? parsedValue
          : null;
      }

      function getSliderBreakpoint(sliderEl) {
        const configuredBreakpoint = parseNumber(
          sliderEl.dataset.sliderBreakpoint
        );

        if (
          configuredBreakpoint !== null &&
          configuredBreakpoint >= 0
        ) {
          return configuredBreakpoint;
        }

        return 480;
      }

      function getConfig(sliderEl) {
        const sliderWrapper =
          sliderEl.closest(".sSplide-slider");

        const slidesPerPage = parseNumber(
          sliderEl.dataset.slidesPerPage
        );

        const gap =
          sliderEl.dataset.gap || "1rem";

        const loop = parseBoolean(
          sliderEl.dataset.loop,
          true
        );

        const arrows = parseBoolean(
          sliderEl.dataset.arrows,
          true
        );

        const pagination = parseBoolean(
          sliderEl.dataset.pagination,
          true
        );

        return {
          perPage:
            slidesPerPage && slidesPerPage > 0
              ? slidesPerPage
              : 1,

          gap: gap,

          type: loop
            ? "loop"
            : "slide",

          arrows: arrows,
          pagination: pagination,

          drag: true,
          keyboard: "global",
          pauseOnHover: true,
          wheel: false,

          ariaLabel:
            (sliderWrapper &&
              sliderWrapper.getAttribute("aria-label")) ||
            "Featured products",

          i18n: {
            prev: "Previous slide",
            next: "Next slide",
            first: "Go to first slide",
            last: "Go to last slide",
          },
        };
      }

      function mountSlider(sliderEl) {
        if (
          !sliderEl ||
          !sliderEl.isConnected ||
          instances.has(sliderEl)
        ) {
          return;
        }

        if (typeof window.Splide !== "function") {
          if (!retryTimers.has(sliderEl)) {
            const timerId = window.setTimeout(
              function () {
                retryTimers.delete(sliderEl);
                syncSliderMode();
              },
              150
            );

            retryTimers.set(sliderEl, timerId);
          }

          return;
        }

        const instance = new window.Splide(
          sliderEl,
          getConfig(sliderEl)
        );

        instance.mount();

        instances.set(
          sliderEl,
          instance
        );
      }

      function unmountSlider(sliderEl) {
        const timerId =
          retryTimers.get(sliderEl);

        if (timerId) {
          window.clearTimeout(timerId);
          retryTimers.delete(sliderEl);
        }

        const instance =
          instances.get(sliderEl);

        if (!instance) {
          return;
        }

        instance.destroy(true);

        instances.delete(sliderEl);
      }

      function shouldMountSlider(sliderEl) {
        return (
          window.innerWidth <=
          getSliderBreakpoint(sliderEl)
        );
      }

      function syncSliderMode() {
        const sliderEls =
          getSliderEls();

        const liveEls =
          new Set(sliderEls);

        instances.forEach(
          function (_instance, sliderEl) {
            if (!liveEls.has(sliderEl)) {
              unmountSlider(sliderEl);
            }
          }
        );

        sliderEls.forEach(
          function (sliderEl) {
            if (shouldMountSlider(sliderEl)) {
              mountSlider(sliderEl);
            } else {
              unmountSlider(sliderEl);
            }
          }
        );
      }

      syncSliderMode();

      window.addEventListener(
        "load",
        syncSliderMode
      );

      window.addEventListener(
        "resize",
        syncSliderMode
      );

      window.addEventListener(
        "orientationchange",
        syncSliderMode
      );
    }

    function initAllResponsiveSliderRoots() {
      const roots = Array.from(
        document.querySelectorAll(
          "[data-responsive-slider-root]"
        )
      );

      roots.forEach(
        function (rootEl) {
          initResponsiveSliderRoot(rootEl);
        }
      );
    }

    if (document.readyState === "loading") {
      document.addEventListener(
        "DOMContentLoaded",
        initAllResponsiveSliderRoots
      );
    } else {
      initAllResponsiveSliderRoots();
    }
  })();
</script>
  `.trim();
}
