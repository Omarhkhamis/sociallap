/* inline script 27 */
/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1);

/* inline script 30 */
(function () {
    function addConsultationIcon() {
      if (document.getElementById('sl-floating-consultation')) return;

      var icon = document.createElement('a');

      icon.id = 'sl-floating-consultation';
      icon.href = 'https://calendly.com/getsociallab/getsociallab';
      icon.target = '_blank';
      icon.rel = 'noopener noreferrer';
      icon.setAttribute('aria-label', 'احجز جلسة مجانية');
      icon.setAttribute('title', 'احجز جلسة مجانية');

      icon.innerHTML =
        '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
          '<path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1.5A2.5 2.5 0 0 1 22 6.5v12A2.5 2.5 0 0 1 19.5 21h-15A2.5 2.5 0 0 1 2 18.5v-12A2.5 2.5 0 0 1 4.5 4H6V3a1 1 0 0 1 1-1Zm12.5 8h-15v8.5a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V10Zm-4.2 3.3a1 1 0 0 1 0 1.4l-3.1 3.1a1 1 0 0 1-1.4 0l-1.6-1.6a1 1 0 1 1 1.4-1.4l.9.9 2.4-2.4a1 1 0 0 1 1.4 0ZM5 6a.5.5 0 0 0-.5.5V8h15V6.5A.5.5 0 0 0 19 6H5Z"/>' +
        '</svg>';

      document.body.appendChild(icon);
    }

    if (document.readyState === 'complete') {
      setTimeout(addConsultationIcon, 1800);
    } else {
      window.addEventListener('load', function () {
        setTimeout(addConsultationIcon, 1800);
      });
    }
  })();

