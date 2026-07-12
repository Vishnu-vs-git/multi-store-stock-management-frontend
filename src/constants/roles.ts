export const Role = {
  ADMIN: "admin",
  SHOPPER: "shopper",
} as const;

export type Role =
  (typeof Role)[keyof typeof Role];