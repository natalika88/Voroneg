const repoName = "Voroneg";

export function getAssetPath(path: string): string {
  const basePath =
    process.env.NEXT_PUBLIC_BASE_PATH ??
    (process.env.GITHUB_PAGES === "true" ? `/${repoName}` : "");
  return `${basePath}${path}`;
}
