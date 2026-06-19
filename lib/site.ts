export function getFormReturnUrl(): string {
  if (typeof window === "undefined") {
    return "https://natalika88.github.io/Voroneg/?sent=1#apply";
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const origin = window.location.origin;
  const path = basePath ? `${basePath}/` : "/";

  return `${origin}${path}?sent=1#apply`;
}
