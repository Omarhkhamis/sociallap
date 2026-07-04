(function () {
  function initChatWidget() {
    var toggle = document.querySelector('[data-sl-chat-toggle]');
    var iframe = document.getElementById('sociallab-chat-widget');
    var tooltip = document.querySelector('[data-sl-chat-tooltip]');

    if (!toggle || !iframe) return;

    function showTooltip() {
      if (!tooltip) return;
      tooltip.style.opacity = '1';
      tooltip.style.transform = 'translateY(0) scale(1)';
    }

    function hideTooltip() {
      if (!tooltip) return;
      tooltip.style.opacity = '0';
      tooltip.style.transform = 'translateY(4px) scale(0.96)';
    }

    function setOpen(isOpen) {
      iframe.style.display = isOpen ? 'block' : 'none';
      toggle.setAttribute('aria-expanded', String(isOpen));
    }

    toggle.addEventListener('mouseenter', showTooltip);
    toggle.addEventListener('mouseleave', hideTooltip);
    toggle.addEventListener('focus', showTooltip);
    toggle.addEventListener('blur', hideTooltip);

    toggle.addEventListener('click', function () {
      setOpen(iframe.style.display !== 'block');
    });

    toggle.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggle.click();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && iframe.style.display === 'block') {
        setOpen(false);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatWidget, { once: true });
  } else {
    initChatWidget();
  }
})();
