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
