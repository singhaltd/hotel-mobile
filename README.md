# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
#   h o t e l - m o b i l e 
 
 


<div
        class="
          grid
          m-0
          grid-cols-2
          space-x-4
          overflow-y-scroll
          flex
          justify-center
          items-center
          w-full
        "
      >
        <NuxtLink
          :to="`/room/${ri.rtid}`"
          class="
            relative
            flex flex-col
            justify-between
            bg-white
            shadow-md
            rounded-3xl
            bg-cover
            text-gray-800
            overflow-hidden
            cursor-pointer
            w-full
            object-cover object-center
            rounded-lg
            shadow-md
            h-64
            my-2
          "
          v-for="ri in RoomType"
          :key="ri"
          :style="`background-image: url('http://127.0.0.1:4444/file?ffile=/${ri.thumbnail[0]?.url}');`"
        >
          <!-- <div
            class="
              absolute
              bg-gradient-to-t
              from-green-400
              to-blue-400
              opacity-50
              inset-0
              z-0
            "
          ></div> -->
          <div class="relative flex flex-row items-end h-72 w-full">
            <div class="p-6 rounded-lg flex flex-col w-full z-10">
              <h4
                class="
                  mt-1
                  text-white text-md
                  font-semibold
                  leading-tight
                  truncate
                "
              >
                {{ ri.title }}
              </h4>
              <div class="flex pt-4 text-sm text-gray-300">
                <div class="flex items-center mr-auto"></div>
                <div class="flex items-center font-medium text-white">
                  10000 ?????????
                  <span class="text-gray-300 text-sm font-normal"> /?????????</span>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>




      
          <!-- Item #2 -->
          <div class="flex group">
            <NuxtLink
              to="/blog"
              class="p-3 text-gray-400 hover:text-yellow-500"
            >
              <span class="flex flex-col items-center">
                <!-- Icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>

                <!-- Text -->
                <span class="text-xs mb-2 transition-all duration-200">
                  ?????????????????????
                </span>

                <!-- Focus Dot -->
                <span
                  class="
                    h-2
                    w-2
                    rounded-full
                    group-hover:bg-yellow-500
                    transition-all
                    duration-150
                    delay-100
                  "
                ></span>
              </span>
            </NuxtLink>
          </div>
          <div class="flex group">
            <a href="#" class="p-3 text-gray-400 hover:text-yellow-500">
              <span class="flex flex-col items-center">
                <!-- Icon -->
                <i
                  class="
                    mdi mdi-basket-plus-outline mdi-24px
                    mx-1
                    text-gray-500
                    group-hover:text-gray-700
                    transition-color
                    duration-200
                  "
                ></i>

                <!-- Text -->
                <span class="text-xs mb-2 transition-all duration-200">
                  Cart
                </span>

                <!-- Focus Dot -->
                <span
                  class="
                    h-2
                    w-2
                    rounded-full
                    group-hover:bg-yellow-500
                    transition-all
                    duration-150
                    delay-100
                  "
                ></span>
              </span>
            </a>
          </div>

          <!-- Item #5 -->