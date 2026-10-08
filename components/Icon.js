// Inline SVG icons. The template used Unicode glyphs (📞 ⚡ ✓ ⇄ ★) that phones
// render as colour emoji, so every icon on this site is drawn instead.
const paths = {
    phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2",
    sms: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM8 10h.01M12 10h.01M16 10h.01",
    mail: "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm-1 1 9 7 9-7",
    arrow: "M5 12h14M13 6l6 6-6 6",
    arrowUp: "M12 19V5M6 11l6-6 6 6",
    chevron: "m6 9 6 6 6-6",
    check: "M5 12.5l4.5 4.5L19 7",
    plus: "M12 5v14M5 12h14",
    expand: "M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7",
    pin: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
    shield: "M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6zm-3.5 9 2.5 2.5 4.5-5",
    calendar: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
    clipboard: "M9 4h6v3H9zM7 5H5v16h14V5h-2M8.5 13l2 2 5-5",
    badge: "M12 3l2.4 1.7 2.9-.2.9 2.8 2.4 1.7-.9 2.8.9 2.8-2.4 1.7-.9 2.8-2.9-.2L12 21l-2.4-1.7-2.9.2-.9-2.8-2.4-1.7.9-2.8-.9-2.8 2.4-1.7.9-2.8 2.9.2zm-3 9 2 2 4-4",
    eye: "M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    barn: "M3 21V10l9-6 9 6v11M3 21h18M9 21v-6h6v6M9 15l6 6M15 15l-6 6M10 9h4",
    metal: "M3 7l9-4 9 4M3 7v13M21 7v13M7 9v11M11 9v11M15 9v11M19 9v11",
    store: "M3 9l2-5h14l2 5M3 9h18v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0zM5 13v8h14v-8M10 21v-5h4v5",
    flat: "M3 10h18v8H3zM3 14h18M7 10V6h10v4M8 18v3M16 18v3",
    home: "M3 11l9-7 9 7M5 9.5V21h14V9.5M10 21v-6h4v6",
    clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-13v4l3 2",
    drop: "M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z",
    sun: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
    dollar: "M12 3v18M16.5 7.5c-.8-1.4-2.4-2-4.5-2-2.5 0-4 1.2-4 3s1.5 2.6 4 3.2 4 1.4 4 3.3-1.6 3.2-4 3.2c-2.2 0-3.8-.7-4.6-2.2",
    facebook: "M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V8z",
}

export default function Icon({ name, label }) {
    return (
        <svg
            className="pg-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden={label ? undefined : true}
            role={label ? "img" : undefined}
            aria-label={label}
            focusable="false"
        >
            <path d={paths[name]} />
        </svg>
    )
}
