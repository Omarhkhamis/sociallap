import Script from "next/script";
import "./globals.css";

const stylesheetHrefs = [
  "/assets/styles/site.css",
  "/assets/vendor/astra/css/main.min-rtl-b1c2d41333.css",
  "/assets/vendor/wordpress/css/dashicons.min-9720564b54.css",
  "/assets/vendor/menu-icons/extra.min-f1f9d10d3d.css",
  "/assets/vendor/elementor/css/frontend.min-1c3922f24e.css",
  "/assets/vendor/elementor/css/widget-heading-rtl.min-1c3922f24e.css",
  "/assets/vendor/elementor/css/widget-image-rtl.min-1c3922f24e.css",
  "/assets/vendor/elementor-pro/css/widget-nav-menu-rtl.min-cdd463d7ff.css",
  "/assets/vendor/elementor/css/widget-social-icons-rtl.min-1c3922f24e.css",
  "/assets/vendor/elementor/css/conditionals/apple-webkit.min-1c3922f24e.css",
  "/assets/vendor/elementor/css/widget-icon-list-rtl.min-1c3922f24e.css",
  "/assets/vendor/elementor/generated-css/post-7-0513b533c4.css",
  "/assets/vendor/elementor/css/widget-icon-box-rtl.min-1c3922f24e.css",
  "/assets/vendor/elementor/lib/swiper/v8/css/swiper.min-af45870430.css",
  "/assets/vendor/elementor/css/conditionals/e-swiper.min-1c3922f24e.css",
  "/assets/vendor/elementor-pro/css/widget-nested-carousel-rtl.min-cdd463d7ff.css",
  "/assets/vendor/elementor/css/widget-divider-rtl.min-1c3922f24e.css",
  "/assets/vendor/elementor/css/widget-nested-tabs-rtl.min-1c3922f24e.css",
  "/assets/vendor/elementor/generated-css/post-10-4575522bc4.css",
  "/assets/vendor/elementor/generated-css/post-26-4575522bc4.css",
  "/assets/vendor/elementor/generated-css/post-195-b543cc6cfc.css",
  "/assets/vendor/elementor/generated-css/post-314-8c620be24d.css",
  "/assets/vendor/elementor/lib/animations/styles/fadeInDown.min-1c3922f24e.css",
  "/assets/vendor/elementor-pro/css/conditionals/popup.min-cdd463d7ff.css",
];

const scriptSrcs = [
  "/assets/vendor/wordpress/js/jquery/jquery.min-42f31d5cbd.js",
  "/assets/vendor/wordpress/js/jquery/jquery-migrate.min-6b8fc33665.js",
  "/assets/scripts/vendor-config.js",
  "/assets/vendor/astra/js/frontend.min-b1c2d41333.js",
  "/assets/vendor/elementor/js/webpack.runtime.min-1c3922f24e.js",
  "/assets/vendor/elementor/js/frontend-modules.min-1c3922f24e.js",
  "/assets/vendor/wordpress/js/jquery-ui/core.min-6c6c33b38c.js",
  "/assets/vendor/elementor/js/frontend.min-1c3922f24e.js",
  "/assets/vendor/elementor-pro/lib/smartmenus/jquery.smartmenus.min-69cdcc5509.js",
  "/assets/vendor/elementor/lib/swiper/v8/swiper.min-af45870430.js",
  "/assets/vendor/elementor-pro/js/webpack-pro.runtime.min-cdd463d7ff.js",
  "/assets/vendor/wordpress/js/dist/hooks.min-1beae9dc8c.js",
  "/assets/vendor/wordpress/js/dist/i18n.min-0a621eab1d.js",
  "/assets/vendor/elementor-pro/js/frontend.min-cdd463d7ff.js",
  "/assets/vendor/elementor-pro/js/elements-handlers.min-cdd463d7ff.js",
  "/assets/scripts/app.js",
];

export const metadata = {
  title: "Social LAB – إدارة خدمة العملاء والمبيعات والتسويق",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: [
      {
        url: "/assets/media/cropped-Social-Lab-logo2-32x32.png",
        sizes: "32x32",
      },
      {
        url: "/assets/media/cropped-Social-Lab-logo2-192x192.png",
        sizes: "192x192",
      },
    ],
    apple: "/assets/media/cropped-Social-Lab-logo2-180x180.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="ar" suppressHydrationWarning>
      <head>
        {stylesheetHrefs.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
      </head>
      <body
        itemType="https://schema.org/WebPage"
        itemScope
        className="rtl home wp-singular page-template-default page page-id-10 wp-custom-logo wp-embed-responsive wp-theme-astra ast-desktop ast-page-builder-template ast-no-sidebar astra-4.13.4 ast-single-post ast-inherit-site-logo-transparent ast-hfb-header elementor-default elementor-kit-7 elementor-page elementor-page-10 ast-header-loaded e--ua-blink e--ua-chrome e--ua-webkit"
        data-elementor-device-mode="desktop"
        suppressHydrationWarning
      >
        <a className="skip-link screen-reader-text" href="#content">
          تخطي إلى المحتوى
        </a>
        {children}
        {scriptSrcs.map((src) => (
          <Script key={src} src={src} strategy="afterInteractive" />
        ))}
        <svg
          id="e-font-icon-svg-symbols"
          className="e-font-icon-svg-symbols"
          style={{ display: "none" }}
        />
      </body>
    </html>
  );
}
