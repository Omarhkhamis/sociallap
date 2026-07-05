const CHAT_WIDGET_SRC =
  "https://appapi.sociallab.sa/api/ChatWidget/Page?key=ac725c576741c83300ac406e7318c7e5&lang=ar&allowedDomains=sociallab.sa%2Cs.sociallab.sa%2Cwelcome.sociallab.sa%2Cgetsociallab.com%2Cbriefiction-sa.com%2Cstg.sociallab.xn--sahttps-wjj";

const WHATSAPP_ICON_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

export default function ChatWidget() {
  return (
    <div id="sociallab-widget-container" data-mode="public">
      <iframe
        id="sociallab-chat-widget"
        src={CHAT_WIDGET_SRC}
        allow="clipboard-write"
        style={{
          position: "fixed",
          width: "400px",
          height: "580px",
          border: "1px solid rgba(0, 0, 0, 0.08)",
          borderRadius: "16px",
          boxShadow: "rgba(0, 0, 0, 0.18) 0px 8px 32px",
          zIndex: 100001,
          display: "none",
          overflow: "hidden",
          right: "20px",
          bottom: "154px",
        }}
      />

      <div
        role="button"
        tabIndex={0}
        aria-label="فتح المحادثة"
        aria-expanded="false"
        data-sl-chat-toggle
        style={{
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(83, 193, 105)",
          backgroundImage:
            "linear-gradient(160deg, rgba(255, 255, 255, 0.32), rgba(255, 255, 255, 0) 55%)",
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 6px 16px, rgba(255, 255, 255, 0.4) 0px 2px 4px inset, rgba(0, 0, 0, 0.22) 0px -5px 8px inset",
          transition: "transform 0.2s",
        }}
      >
        <img
          src="/assets/media/whitelogo.png"
          alt=""
          style={{ width: "62%", height: "62%", objectFit: "contain" }}
        />
      </div>

      <div
        data-sl-chat-tooltip
        style={{
          position: "fixed",
          display: "flex",
          alignItems: "center",
          gap: "7px",
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.97), rgba(242, 246, 255, 0.88))",
          backdropFilter: "blur(10px)",
          color: "rgb(31, 41, 55)",
          padding: "7px 13px",
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.75)",
          fontSize: "13px",
          fontWeight: 600,
          whiteSpace: "nowrap",
          boxShadow: "rgba(0, 0, 0, 0.18) 0px 8px 24px",
          zIndex: 100000,
          pointerEvents: "none",
          opacity: 0,
          transform: "translateY(4px) scale(0.96)",
          transition: "opacity 0.28s, transform 0.28s",
          right: "87px",
          bottom: "98.5px",
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" style={{ flex: "0 0 auto", display: "block" }}>
          <path
            d="M12 2.4l1.75 5.85a3 3 0 0 0 2 2L21.6 12l-5.85 1.75a3 3 0 0 0-2 2L12 21.6l-1.75-5.85a3 3 0 0 0-2-2L2.4 12l5.85-1.75a3 3 0 0 0 2-2z"
            fill="#53c169"
          />
          <circle cx="19" cy="5" r="1.5" fill="#53c169" opacity=".65" />
        </svg>
        <span>مساعد سوشل لاب</span>
      </div>

      <a
        href="https://wa.me/966530901484"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        style={{
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
          boxSizing: "border-box",
          backgroundColor: "rgb(37, 211, 102)",
          backgroundImage:
            "linear-gradient(160deg, rgba(255, 255, 255, 0.32), rgba(255, 255, 255, 0) 55%)",
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 6px 16px, rgba(255, 255, 255, 0.4) 0px 2px 4px inset, rgba(0, 0, 0, 0.22) 0px -5px 8px inset",
          transition: "transform 0.2s",
          textDecoration: "none",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          style={{ width: "36px", height: "36px", flex: "0 0 auto" }}
        >
          <path d={WHATSAPP_ICON_PATH} />
        </svg>
      </a>
    </div>
  );
}
