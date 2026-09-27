import localFont from "next/font/local";

export const abarMid = localFont({
  src: [
    { path: "AbarMidFaNum-Regular.woff2", weight: "400", style: "normal" },
    { path: "AbarMidFaNum-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "AbarMidFaNum-Bold.woff2", weight: "700", style: "normal" },
    { path: "AbarMidFaNum-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "AbarMidFaNum-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-abar-mid",
  display: "swap",
  fallback: ["Tahoma", "system-ui"],
});