import react from '@vitejs/plugin-react';

/** @type {import('vite').UserConfig} */
export default {
  plugins: [react()],
  server: {
    allowedHosts: ['50820b304836.ngrok-free.app'], // 👈 Add your Ngrok domain here
  },
};
