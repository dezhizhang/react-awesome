import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // resolve:{
  //   alias:[
  //     // {find:'~',replacement:''}
  //   ]
  // },
  plugins: [react({
    jsxRuntime:'classic'
  })],
  css:{
    preprocessorOptions:{
      less:{
        javascriptEnable:true
      }
    }
  }
})
