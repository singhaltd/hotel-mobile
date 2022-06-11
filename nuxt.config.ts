import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    alias: {
        '~/*': './*',
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    runtimeConfig: {
        secretKey: '', // variable that can only be accessed on the server side
        base_api: process.env.BASE_API_URL + ':' + process.env.BASE_API_PORT || 'http://127.0.0.1:4444',
        public: {
            base_api: process.env.BASE_API_URL + ':' + process.env.BASE_API_PORT || 'http://127.0.0.1:4444' // variable that can also be accessed on the client side
        }
    },
    css: [
        "~/assets/css/tailwind.css"
    ],
})
