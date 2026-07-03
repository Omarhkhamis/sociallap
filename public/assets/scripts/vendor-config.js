/* inline script 3 */
(function(){if(window.matchMedia('(max-width:921.99px)').matches){document.body.classList.add('ast-header-break-point');document.body.classList.remove('ast-desktop');}})();

/* inline script 4 */
const cards = document.querySelectorAll(".card");


window.addEventListener("mousemove", (ev) => {
  
  cards.forEach((e) => {
    const blob = e.querySelector(".blob");
    const fblob = e.querySelector(".fakeblob");
    const rec = fblob.getBoundingClientRect();

  
    blob.animate(
      [
        {
          transform: `translate(${
            (ev.clientX - rec.left) - (rec.width / 2)
          }px,${(ev.clientY - rec.top) - (rec.height / 2)}px)`
        }
      ],
      {
        duration: 300,
        fill: "forwards"
      }
    );
  
    blob.style.opacity = "1";
      
  });
  
});

/* inline script 6 */
(function () {
  function setTheme(isLight) {
    document.documentElement.classList.toggle('light-mode', isLight);
    document.body.classList.toggle('light-mode', isLight);
  }

  function getSavedTheme() {
    try {
      return localStorage.getItem('site-theme');
    } catch (error) {
      return null;
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem('site-theme', theme);
    } catch (error) {
      // Ignore storage failures in private or restricted browser modes.
    }
  }

  function initThemeToggle() {
    const toggles = document.querySelectorAll('.theme-toggle');

    setTheme(getSavedTheme() === 'light');

    if (!toggles.length) {
      console.warn('Theme toggle button not found');
      return;
    }

    toggles.forEach(function (toggle) {
      if (toggle.dataset.themeToggleReady === 'true') {
        return;
      }

      toggle.dataset.themeToggleReady = 'true';

      toggle.addEventListener('click', function (event) {
        event.preventDefault();

        const nextIsLight = !document.body.classList.contains('light-mode');
        setTheme(nextIsLight);
        saveTheme(nextIsLight ? 'light' : 'dark');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle, { once: true });
  } else {
    initThemeToggle();
  }
})();

/* inline script 7 */
document.addEventListener("DOMContentLoaded", function () {
  const appStoreUrl = "https://apps.apple.com/sa/app/social-lab-grow-your-business/id6745023855";
  const googlePlayUrl = "https://play.google.com/store/apps/details?id=com.social.lab.app&pcampaignid=web_share";
  const fallbackUrl = "https://apps.apple.com/sa/app/social-lab-grow-your-business/id6745023855";

  function getDeviceStoreUrl() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera || "";
    const platform = navigator.platform || "";
    const maxTouchPoints = navigator.maxTouchPoints || 0;

    const isAndroid = /Android/i.test(userAgent);

    const isIOS =
      /iPhone|iPad|iPod/i.test(userAgent) ||
      (platform === "MacIntel" && maxTouchPoints > 1);

    const isMacOS =
      /Macintosh|Mac OS X/i.test(userAgent) ||
      /Mac/i.test(platform);

    if (isAndroid) {
      return googlePlayUrl;
    }

    if (isIOS || isMacOS) {
      return appStoreUrl;
    }

    return fallbackUrl;
  }

  document.addEventListener("click", function (event) {
    const button = event.target.closest(".app-download-btn");

    if (!button) {
      return;
    }

    event.preventDefault();
    window.location.href = getDeviceStoreUrl();
  });
});

/* inline script 9 */
document.addEventListener('DOMContentLoaded', function () {
  const menus = document.querySelectorAll('.mobile-fullscreen-menu');

  function setRealMenuHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--menu-vh', `${vh}px`);
  }

  setRealMenuHeight();
  window.addEventListener('resize', setRealMenuHeight);
  window.addEventListener('orientationchange', setRealMenuHeight);

  menus.forEach(function (menu) {
    const toggle = menu.querySelector('.elementor-menu-toggle');
    const links = menu.querySelectorAll('.elementor-nav-menu--dropdown a');

    if (!toggle) return;

    toggle.addEventListener('click', function () {
      setTimeout(function () {
        const isOpen =
          toggle.classList.contains('elementor-active') ||
          toggle.getAttribute('aria-expanded') === 'true';

        menu.classList.toggle('fs-menu-open', isOpen);
        document.body.classList.toggle('fs-menu-body-lock', isOpen);
        document.documentElement.classList.toggle('fs-menu-html-lock', isOpen);

        setRealMenuHeight();
      }, 30);
    });

    links.forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('fs-menu-open');
        document.body.classList.remove('fs-menu-body-lock');
        document.documentElement.classList.remove('fs-menu-html-lock');
      });
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      document.querySelectorAll('.mobile-fullscreen-menu').forEach(function (menu) {
        menu.classList.remove('fs-menu-open');
      });

      document.body.classList.remove('fs-menu-body-lock');
      document.documentElement.classList.remove('fs-menu-html-lock');
    }
  });
});

/* inline script 10 */
const lazyloadRunObserver = () => {
					const lazyloadBackgrounds = document.querySelectorAll( `.e-con.e-parent:not(.e-lazyloaded)` );
					const lazyloadBackgroundObserver = new IntersectionObserver( ( entries ) => {
						entries.forEach( ( entry ) => {
							if ( entry.isIntersecting ) {
								let lazyloadBackground = entry.target;
								if( lazyloadBackground ) {
									lazyloadBackground.classList.add( 'e-lazyloaded' );
								}
								lazyloadBackgroundObserver.unobserve( entry.target );
							}
						});
					}, { rootMargin: '200px 0px 200px 0px' } );
					lazyloadBackgrounds.forEach( ( lazyloadBackground ) => {
						lazyloadBackgroundObserver.observe( lazyloadBackground );
					} );
				};
				const events = [
					'DOMContentLoaded',
					'elementor/lazyload/observe',
				];
				events.forEach( ( event ) => {
					document.addEventListener( event, lazyloadRunObserver );
				} );

/* inline script 11 */
var astra = {"break_point":"921","isRtl":"1","is_scroll_to_id":"1","is_scroll_to_top":"1","is_header_footer_builder_active":"1","responsive_cart_click":"flyout","is_dark_palette":""};
//# sourceURL=astra-theme-js-js-extra

/* inline script 16 */
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false},"i18n":{"shareOnFacebook":"\u0634\u0627\u0631\u0643 \u0639\u0644\u0649 \u0641\u064a\u0633\u0628\u0648\u0643","shareOnTwitter":"\u0634\u0627\u0631\u0643 \u0639\u0644\u0649 \u062a\u0648\u064a\u062a\u0631","pinIt":"\u062b\u0628\u062a\u0647\u0627 ","download":"\u062a\u062d\u0645\u064a\u0644","downloadImage":"\u062a\u0646\u0632\u064a\u0644 \u0627\u0644\u0635\u0648\u0631\u0629","fullscreen":"\u0639\u0631\u0636 \u0634\u0627\u0634\u0629 \u0643\u0627\u0645\u0644\u0629","zoom":"\u062a\u0643\u0628\u064a\u0631","share":"\u0645\u0634\u0627\u0631\u0643\u0629","playVideo":"\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0641\u064a\u062f\u064a\u0648","previous":"\u0627\u0644\u0633\u0627\u0628\u0642","next":"\u0627\u0644\u062a\u0627\u0644\u064a","close":"\u0625\u063a\u0644\u0627\u0642","a11yCarouselPrevSlideMessage":"Previous slide","a11yCarouselNextSlideMessage":"Next slide","a11yCarouselFirstSlideMessage":"This is the first slide","a11yCarouselLastSlideMessage":"This is the last slide","a11yCarouselPaginationBulletMessage":"Go to slide"},"is_rtl":true,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"responsive":{"breakpoints":{"mobile":{"label":"Mobile Portrait","value":767,"default_value":767,"direction":"max","is_enabled":true},"mobile_extra":{"label":"Mobile Landscape","value":880,"default_value":880,"direction":"max","is_enabled":false},"tablet":{"label":"Tablet Portrait","value":1024,"default_value":1024,"direction":"max","is_enabled":true},"tablet_extra":{"label":"Tablet Landscape","value":1200,"default_value":1200,"direction":"max","is_enabled":false},"laptop":{"label":"\u062d\u0627\u0633\u0648\u0628 \u0645\u062d\u0645\u0648\u0644","value":1366,"default_value":1366,"direction":"max","is_enabled":false},"widescreen":{"label":"\u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0639\u0631\u064a\u0636\u0629","value":2400,"default_value":2400,"direction":"min","is_enabled":false}},"hasCustomBreakpoints":false},"version":"4.1.4","is_static":false,"experimentalFeatures":{"e_font_icon_svg":true,"additional_custom_breakpoints":true,"container":true,"e_optimized_markup":true,"e_panel_promotions":true,"theme_builder_v2":true,"e_pro_free_trial_popup":true,"nested-elements":true,"global_classes_should_enforce_capabilities":true,"e_variables":true,"e_opt_in_v4_page":true,"e_components":true,"e_interactions":true,"e_widget_creation":true,"import-export-customization":true,"e_pro_atomic_form":true,"mega-menu":true,"e_pro_variables":true,"e_pro_interactions":true},"urls":{"assets":"https:\/\/welcome.sociallab.sa\/wp-content\/plugins\/elementor\/assets\/","ajaxurl":"https:\/\/welcome.sociallab.sa\/wp-admin\/admin-ajax.php","uploadUrl":"https:\/\/welcome.sociallab.sa\/wp-content\/uploads"},"nonces":{"floatingButtonsClickTracking":"2d9b57317e","atomicFormsSendForm":"3f1867b909"},"swiperClass":"swiper","settings":{"page":[],"editorPreferences":[]},"kit":{"body_background_background":"classic","active_breakpoints":["viewport_mobile","viewport_tablet"],"global_image_lightbox":"yes","lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":10,"title":"Social%20LAB%20%E2%80%93%20%D8%A5%D8%AF%D8%A7%D8%B1%D8%A9%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1%20%D9%88%D8%A7%D9%84%D9%85%D8%A8%D9%8A%D8%B9%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%AA%D8%B3%D9%88%D9%8A%D9%82","excerpt":"","featuredImage":false}};
//# sourceURL=elementor-frontend-js-before

/* inline script 24 */
var ElementorProFrontendConfig = {"ajaxurl":"https:\/\/welcome.sociallab.sa\/wp-admin\/admin-ajax.php","nonce":"e4cc1d844d","urls":{"assets":"https:\/\/welcome.sociallab.sa\/wp-content\/plugins\/elementor-pro\/assets\/","rest":"https:\/\/welcome.sociallab.sa\/wp-json\/"},"settings":{"lazy_load_background_images":true},"popup":{"hasPopUps":true},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"},"x-twitter":{"title":"X"},"threads":{"title":"Threads"}},"facebook_sdk":{"lang":"ar","app_id":""},"lottie":{"defaultAnimationUrl":"https:\/\/welcome.sociallab.sa\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json"}};
//# sourceURL=elementor-pro-frontend-js-before
