import "./navMenus.css";

export const navMenuHtmlSnippet = `<section class="sSection sNav">
	<nav class="sNavDesktop" aria-label="Desktop navigation">
		<ul class="sContent">
			<li><a href="#sbc">Shop By Category</a></li>
			<li><span>|</span></li>
			<li><a href="#fp">Featured Products</a></li>
			<li><span>|</span></li>
			<li><a href="#hfe">Hear From The Experts</a></li>
			<li><span>|</span></li>
			<li><a class="sBtn" href="/l/shop-all-she-outdoor">Shop All</a></li>
		</ul>
	</nav>
	<div class="sNavMobile" aria-label="Mobile navigation">
		<a class="sNavMobile_shopAll" href="/l/shop-all-she-outdoor">Shop All</a>
		<div class="sNavMobile_right">
			<p class="sNavMobile_learn">Learn More</p>
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
	<div class="sNavMobile_panel" id="sNavMobilePanel">
		<a href="#sbc">Shop By Category</a>
		<a href="#fp">Featured Products</a>
		<a href="#hfe">Hear From The Experts</a>
	</div>
</section>`;

export const navMenuCssSnippet = `.sNav {
	background-color: #ffffff;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: relative;
	overflow: visible;
}

.sNavDesktop {
	display: block;
	width: 100%;
	padding-bottom: 1rem;
}

.sNavDesktop ul {
	margin: 0 auto;
	padding: 0 1rem;
	box-sizing: border-box;
	justify-content: space-between;
	flex-wrap: nowrap;
	gap: 1rem;
}

.sNav ul {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	list-style: none;
	margin: 0 auto;
	padding: 0;
	gap: 1rem;
	font-size: clamp(1rem, 1.5vw, 28px);
}

.sNav a {
	text-decoration: none;
	color: #000;
	font-weight: bold;
}

.sNav li {
	list-style: none !important;
}

.sNavMobile {
	display: none;
	width: 100%;
}

.sNavMobile_shopAll,
.sNavMobile_learn {
	color: #fff;
	text-decoration: none;
	font-weight: 800;
	letter-spacing: 0.03em;
	text-transform: uppercase;
	font-size: clamp(1.05rem, 0.96rem + 0.65vw, 1.3rem);
}

.sNavMobile_shopAll {
	background: #f5711a;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.75rem 1rem;
}

.sNavMobile_right {
	background: #000;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 0.5rem;
	padding: 0.75rem 0.85rem;
	position: relative;
}

.sNavMobile_learn {
	position: absolute;
	left: 0.85rem;
	right: 3.35rem;
	text-align: center;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: #fff !important;
}

.sNavMobile_toggle {
	border: 0;
	background: transparent;
	width: 42px;
	height: 42px;
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	gap: 0.34rem;
	cursor: pointer;
	padding: 0;
	position: relative;
	z-index: 1;
	flex: 0 0 auto;
}

.sNavMobile_toggle span {
	display: block;
	width: 28px;
	height: 3px;
	background: #fff;
	border-radius: 2px;
	transition:
		transform 0.2s ease,
		opacity 0.2s ease;
}

.sNavMobile_toggle.is-open span:nth-child(1) {
	transform: translateY(8px) rotate(45deg);
}

.sNavMobile_toggle.is-open span:nth-child(2) {
	opacity: 0;
}

.sNavMobile_toggle.is-open span:nth-child(3) {
	transform: translateY(-8px) rotate(-45deg);
}

.sNavMobile_panel {
	position: relative;
	width: 100%;
	z-index: 1;
	background: rgba(0, 0, 0, 0.681);
	max-height: 0;
	opacity: 0;
	overflow: hidden;
	visibility: hidden;
	transition:
		max-height 0.5s ease,
		opacity 0.25s ease,
		background-color 0.22s ease;
}

.sNavMobile_panel.is-open {
	display: grid;
	max-height: 16rem;
	opacity: 1;
	visibility: visible;
	background: rgba(0, 0, 0, 0.743);
}

.sNavMobile_panel a {
	color: #fff;
	text-decoration: none;
	font-weight: 700;
	font-size: clamp(0.95rem, 0.88rem + 0.3vw, 1.05rem);
	padding: 0.9rem 1rem;
	border-top: 1px solid rgba(255, 255, 255, 0.22);
	text-transform: uppercase;
	letter-spacing: 0.03em;
	transition:
		background-color 0.2s ease,
		color 0.2s ease;
}

.sNavMobile_panel a:hover,
.sNavMobile_panel a:focus-visible {
	background: rgba(65, 65, 65, 0.72);
	color: #f5711a;
}

@media (max-width: 767px) {
	.sNavDesktop {
		display: none;
	}

	.sNavMobile {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: stretch;
	}

	.sNavMobile_shopAll,
	.sNavMobile_right {
		min-height: 56px;
	}

	.sNavMobile_panel {
		grid-column: 1 / -1;
	}
}

@media (min-width: 768px) {
	.sNavMobile,
	.sNavMobile_panel {
		display: none !important;
	}
}`;

export const navMenuJsSnippet = `(function () {
	var toggle = document.querySelector('.sNavMobile_toggle');
	var panel = document.querySelector('#sNavMobilePanel');
	var navSection = document.querySelector('.sSection.sNav');
	var desktopMq = window.matchMedia('(min-width: 768px)');

	if (!toggle || !panel || !navSection) {
		return;
	}

	function setMenuState(isOpen) {
		toggle.setAttribute('aria-expanded', String(isOpen));
		toggle.classList.toggle('is-open', isOpen);
		panel.classList.toggle('is-open', isOpen);
	}

	toggle.addEventListener('click', function () {
		var isOpen = toggle.getAttribute('aria-expanded') === 'true';
		setMenuState(!isOpen);
	});

	panel.querySelectorAll('a').forEach(function (link) {
		link.addEventListener('click', function () {
			setMenuState(false);
		});
	});

	document.addEventListener('click', function (event) {
		var isOpen = toggle.getAttribute('aria-expanded') === 'true';
		if (!isOpen) {
			return;
		}

		if (!navSection.contains(event.target)) {
			setMenuState(false);
		}
	});

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape') {
			setMenuState(false);
		}
	});

	desktopMq.addEventListener('change', function (event) {
		if (event.matches) {
			setMenuState(false);
		}
	});

	setMenuState(false);
})();`;

const initNavMenu = (scopeRoot) => {
  const toggle = scopeRoot.querySelector(".sNavMobile_toggle");
  const panel = scopeRoot.querySelector("#sNavMobilePanel");
  const navSection = scopeRoot.querySelector(".sSection.sNav");
  const desktopMq = window.matchMedia("(min-width: 768px)");

  if (!toggle || !panel || !navSection) {
    return;
  }

  const setMenuState = (isOpen) => {
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.classList.toggle("is-open", isOpen);
    panel.classList.toggle("is-open", isOpen);
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setMenuState(false);
    });
  });

  document.addEventListener("click", (event) => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    if (!isOpen) {
      return;
    }

    if (!navSection.contains(event.target)) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });

  desktopMq.addEventListener("change", (event) => {
    if (event.matches) {
      setMenuState(false);
    }
  });

  setMenuState(false);
};

export const createNorthernFlightNavMenu = () => {
  const wrapper = document.createElement("div");
  wrapper.className = "sContainer";
  wrapper.innerHTML = navMenuHtmlSnippet;

  initNavMenu(wrapper);
  return wrapper;
};
