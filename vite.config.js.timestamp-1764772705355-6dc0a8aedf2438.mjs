// vite.config.js
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.js";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";
var __vite_injected_original_import_meta_url = "file:///home/project/vite.config.js";
var packageJson = JSON.parse(readFileSync("./package.json", "utf-8"));
var __dirname = path.dirname(fileURLToPath(__vite_injected_original_import_meta_url));
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  server: {
    host: true,
    // Expose sur toutes les interfaces (0.0.0.0)
    port: 5173,
    // Désactiver le cache pour éviter les problèmes en dev
    headers: {
      "Cache-Control": "no-store"
    }
  },
  define: {
    // Injecter la version depuis package.json
    "import.meta.env.VITE_APP_VERSION": JSON.stringify(packageJson.version)
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "src/setupTests.js",
        "src/main.jsx",
        "**/*.test.{js,jsx}",
        "**/*.spec.{js,jsx}"
      ]
    },
    // Optimisations pour réduire le temps d'exécution
    pool: "threads",
    poolOptions: {
      threads: {
        singleThread: true
      }
    },
    // Désactiver le watch mode par défaut pour CI
    watch: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSAnZnMnXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuLy8gTGlyZSBsYSB2ZXJzaW9uIGRlcHVpcyBwYWNrYWdlLmpzb25cbmNvbnN0IHBhY2thZ2VKc29uID0gSlNPTi5wYXJzZShyZWFkRmlsZVN5bmMoJy4vcGFja2FnZS5qc29uJywgJ3V0Zi04JykpXG5cbi8vIE9idGVuaXIgX19kaXJuYW1lIGVuIG1vZGUgRVMgbW9kdWxlc1xuY29uc3QgX19kaXJuYW1lID0gcGF0aC5kaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSlcblxuLy8gaHR0cHM6Ly92aXRlLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgICB9LFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiB0cnVlLCAvLyBFeHBvc2Ugc3VyIHRvdXRlcyBsZXMgaW50ZXJmYWNlcyAoMC4wLjAuMClcbiAgICBwb3J0OiA1MTczLFxuICAgIC8vIERcdTAwRTlzYWN0aXZlciBsZSBjYWNoZSBwb3VyIFx1MDBFOXZpdGVyIGxlcyBwcm9ibFx1MDBFOG1lcyBlbiBkZXZcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1zdG9yZScsXG4gICAgfSxcbiAgfSxcbiAgZGVmaW5lOiB7XG4gICAgLy8gSW5qZWN0ZXIgbGEgdmVyc2lvbiBkZXB1aXMgcGFja2FnZS5qc29uXG4gICAgJ2ltcG9ydC5tZXRhLmVudi5WSVRFX0FQUF9WRVJTSU9OJzogSlNPTi5zdHJpbmdpZnkocGFja2FnZUpzb24udmVyc2lvbiksXG4gIH0sXG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIHNldHVwRmlsZXM6ICcuL3NyYy9zZXR1cFRlc3RzLmpzJyxcbiAgICBjb3ZlcmFnZToge1xuICAgICAgcHJvdmlkZXI6ICd2OCcsXG4gICAgICByZXBvcnRlcjogWyd0ZXh0JywgJ2pzb24nLCAnaHRtbCddLFxuICAgICAgZXhjbHVkZTogW1xuICAgICAgICAnbm9kZV9tb2R1bGVzLycsXG4gICAgICAgICdzcmMvc2V0dXBUZXN0cy5qcycsXG4gICAgICAgICdzcmMvbWFpbi5qc3gnLFxuICAgICAgICAnKiovKi50ZXN0Lntqcyxqc3h9JyxcbiAgICAgICAgJyoqLyouc3BlYy57anMsanN4fScsXG4gICAgICBdLFxuICAgIH0sXG4gICAgLy8gT3B0aW1pc2F0aW9ucyBwb3VyIHJcdTAwRTlkdWlyZSBsZSB0ZW1wcyBkJ2V4XHUwMEU5Y3V0aW9uXG4gICAgcG9vbDogJ3RocmVhZHMnLFxuICAgIHBvb2xPcHRpb25zOiB7XG4gICAgICB0aHJlYWRzOiB7XG4gICAgICAgIHNpbmdsZVRocmVhZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBEXHUwMEU5c2FjdGl2ZXIgbGUgd2F0Y2ggbW9kZSBwYXIgZFx1MDBFOWZhdXQgcG91ciBDSVxuICAgIHdhdGNoOiBmYWxzZSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sV0FBVztBQUNsQixTQUFTLG9CQUFvQjtBQUM3QixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLFVBQVU7QUFKaUgsSUFBTSwyQ0FBMkM7QUFPbkwsSUFBTSxjQUFjLEtBQUssTUFBTSxhQUFhLGtCQUFrQixPQUFPLENBQUM7QUFHdEUsSUFBTSxZQUFZLEtBQUssUUFBUSxjQUFjLHdDQUFlLENBQUM7QUFHN0QsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLFdBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQSxJQUVOLFNBQVM7QUFBQSxNQUNQLGlCQUFpQjtBQUFBLElBQ25CO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBO0FBQUEsSUFFTixvQ0FBb0MsS0FBSyxVQUFVLFlBQVksT0FBTztBQUFBLEVBQ3hFO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsSUFDWixVQUFVO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixVQUFVLENBQUMsUUFBUSxRQUFRLE1BQU07QUFBQSxNQUNqQyxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFFQSxNQUFNO0FBQUEsSUFDTixhQUFhO0FBQUEsTUFDWCxTQUFTO0FBQUEsUUFDUCxjQUFjO0FBQUEsTUFDaEI7QUFBQSxJQUNGO0FBQUE7QUFBQSxJQUVBLE9BQU87QUFBQSxFQUNUO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
