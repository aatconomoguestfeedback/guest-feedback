// Shared by index.html (guests) and admin.html (staff).
// Rating ids are stored in the database, so do not rename them once reviews exist.

export const GROUPS = [
  {
    id: "service",
    title: "Service satisfaction",
    items: [
      ["svc_staff", "Staff friendliness"],
      ["svc_checkin", "Check-in & check-out"],
      ["svc_housekeeping", "Housekeeping"],
      ["svc_restaurant", "Restaurant & food quality"],
      ["svc_bar", "Bar & lounge"],
      ["svc_roomservice", "Room service"],
      ["svc_concierge", "Concierge & front desk support"],
    ],
  },
  {
    id: "facility",
    title: "Facility review",
    items: [
      ["fac_room", "Room comfort"],
      ["fac_clean", "Cleanliness"],
      ["fac_ac", "Air conditioning"],
      ["fac_wifi", "Wi-Fi & internet"],
      ["fac_bath", "Bathroom & shower"],
      ["fac_pool", "Pool"],
      ["fac_gym", "Gym & fitness centre"],
      ["fac_parking", "Parking & security"],
    ],
  },
];

export const LABELS = Object.fromEntries(GROUPS.flatMap((g) => g.items));
export const GROUP_OF = Object.fromEntries(
  GROUPS.flatMap((g) => g.items.map(([id]) => [id, g.id]))
);
export const PURPOSES = ["Business", "Leisure", "Event", "Transit"];

export const ROLES = {
  admin: "IT / Administrator",
  manager: "Manager",
  viewer: "Viewer",
};
export const STATUS_LABELS = {
  new: "New",
  reviewed: "Reviewed",
  actioned: "Action taken",
};

/* ================= Site settings (logo, text, colours, contact) ================= */

export const DEFAULT_SITE = {
  hotelName: "AATC Onomo Allure Hotel",
  hotelSub: "Abuja",
  tagline: "Where luxury meets warm hospitality",
  heroTitle: "How was your stay with us?",
  heroText: "Your feedback goes straight to our management team. It takes about two minutes.",
  footerText: "AATC Onomo Allure Hotel Abuja",
  colorPrimary: "#0f1b33",
  colorAccent: "#d9a32b",
  colorBg: "#f3f4f8",
};

export const DEFAULT_CONTACT = {
  contactTitle: "Reservations",
  email: "reservation.allureabuja@onomohotel.com",
  phones: "02096233039, 0703929110",
  website: "https://www.onomohotels.com",
  note: "",
};

export const isHex = (v) => /^#[0-9a-fA-F]{6}$/.test(v || "");
const hex2rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const rgb2hex = (a) => "#" + a.map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, "0")).join("");

export function mix(a, b, t) {
  const A = hex2rgb(a), B = hex2rgb(b);
  return rgb2hex(A.map((v, i) => v + (B[i] - v) * t));
}
export function rgba(hex, alpha) {
  const [r, g, b] = hex2rgb(hex);
  return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
}
export function luminance(hex) {
  const [r, g, b] = hex2rgb(hex).map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// stored = the saved document's data, or null when nothing has been saved yet
export function withDefaults(stored, defaults) {
  const out = { ...defaults };
  if (!stored) return out;
  for (const k of Object.keys(defaults)) if (typeof stored[k] === "string") out[k] = stored[k].trim();
  return out;
}

export function applyTheme(el, s) {
  const p = isHex(s.colorPrimary) ? s.colorPrimary : DEFAULT_SITE.colorPrimary;
  const a = isHex(s.colorAccent) ? s.colorAccent : DEFAULT_SITE.colorAccent;
  const bg = isHex(s.colorBg) ? s.colorBg : DEFAULT_SITE.colorBg;
  const vars = {
    "--ink": p,
    "--ink-2": mix(p, "#ffffff", 0.14),
    "--gold": a,
    "--gold-deep": mix(a, "#000000", 0.45),
    "--gold-soft": mix(a, "#ffffff", 0.82),
    "--paper": bg,
  };
  for (const k in vars) el.style.setProperty(k, vars[k]);
  return p;
}

export function cleanUrl(u) {
  u = String(u || "").trim();
  if (!u) return "";
  if (!/^[a-z][a-z0-9+.-]*:/i.test(u)) u = "https://" + u;
  try {
    const x = new URL(u);
    return x.protocol === "https:" || x.protocol === "http:" ? x.href : "";
  } catch (e) { return ""; }
}
export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || "");
export const phoneList = (s) => String(s || "").split(/[,;\n]+/).map((x) => x.trim()).filter(Boolean);
export const telHref = (p) => "tel:" + p.replace(/[^\d+]/g, "");
export const isDataImage = (v) => typeof v === "string" && v.startsWith("data:image/");
