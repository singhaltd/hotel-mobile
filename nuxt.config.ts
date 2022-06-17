import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        secretKey: '', // variable that can only be accessed on the server side
        public: {
            BASE_URL: process.env.BASE_URL || 'http://127.0.0.1:4444/peot' // variable that can also be accessed on the client side
        }
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
    css: [
        "~/assets/css/tailwind.css"
    ],
})
