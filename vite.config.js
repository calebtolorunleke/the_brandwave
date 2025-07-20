import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], base: "./",
})

  /* global.css or Tailwind CSS file */
  .scrollbar - hide:: -webkit - scrollbar {
  display: none;
}
.scrollbar - hide {
  -ms - overflow - style: none;
  scrollbar - width: none;
}
