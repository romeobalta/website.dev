import js from "shiki/langs/javascript.mjs";
import ts from "shiki/langs/typescript.mjs";
import jsx from "shiki/langs/jsx.mjs";
import tsx from "shiki/langs/tsx.mjs";
import githubDarkDefault from "shiki/themes/github-dark-default.mjs";

export const CODE_HIGHLIGHTER_LANGUAGES = [js, ts, jsx, tsx];
export const CODE_HIGHLIGHTER_THEME = githubDarkDefault;

export const IS_DEV = process.env.NODE_ENV === "development";

export const SITE_TAG = process.env.NEXT_PUBLIC_SITE_TAG || "website.dev";
export const SITE_DESCRIPTION =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "A website for developers";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const SITE_IMAGE = process.env.NEXT_PUBLIC_SITE_IMAGE || "";
export const SITE_IMAGE_ALT = process.env.NEXT_PUBLIC_SITE_IMAGE_ALT || "";
