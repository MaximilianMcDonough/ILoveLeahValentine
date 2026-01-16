import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const repo = env.GITHUB_REPOSITORY || process.env.GITHUB_REPOSITORY;
  const repoName = repo ? repo.split("/")[1] : "";
  const isUserSite = repoName.endsWith(".github.io");
  const baseFromEnv = env.VITE_BASE_PATH || process.env.VITE_BASE_PATH;
  const base = baseFromEnv || (repoName && !isUserSite ? `/${repoName}/` : "/");

  return {
    base,
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    assetsInclude: [/\.(png|jpe?g|gif|svg|ico|webp|avif|heic|heif)$/i],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
