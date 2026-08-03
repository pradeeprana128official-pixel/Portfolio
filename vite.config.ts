import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    base: env.GITHUB_PAGES === "true" ? "/Portfolio/" : "/",
    plugins: [react()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            three: ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing'],
            gsap: ['gsap', '@gsap/react'],

          },
        },
      },
      chunkSizeWarningLimit: 1000,
    },
  };
});
