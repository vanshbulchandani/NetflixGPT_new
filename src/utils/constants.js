export const API_options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500";
export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_API_KEY;
