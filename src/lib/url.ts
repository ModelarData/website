// Prefix a root-relative path with the site base ('/website' on the github.io preview, '' on modelardata.com).
export const withBase = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;
