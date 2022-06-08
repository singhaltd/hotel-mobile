<template>
  <div>
    <Carouselpost/>
    <div class=" p-3 space-y-4 z-0">
			<h4 class="font-semibold mt-2">Category</h4>
			<div class="flex items-center justify-between overflow-y-scroll text-gray-500 cursor-pointer space-x-3">
				<div
					class="flex flex-col items-center justify-center w-20  h-20  bg-green-200 rounded-2xl text-green-600 shadow hover:shadow-md cursor-pointer mb-2 p-1 bg-white transition ease-in duration-300">
					<i class="far fa-hotel"></i>
					<p class="text-sm mt-1">Hotel</p>
				</div>
				<div
					class="flex flex-col items-center justify-center w-20  h-20  bg-yellow-200 rounded-2xl text-yellow-600  shadow hover:shadow-md cursor-pointer mb-2 p-1 bg-white transition ease-in duration-300">
					<i class="far fa-bus"></i>
					<p class="text-sm mt-1">Bus</p>
				</div>

				<div
					class="flex flex-col items-center justify-center w-20  h-20  bg-indigo-200  rounded-2xl  text-indigo-500 shadow hover:shadow-md cursor-pointer mb-2 p-1 bg-white transition ease-in duration-300">
					<i class="far fa-mountains"></i>
					<p class="text-sm mt-1">Hills</p>
				</div>
				<div
					class="flex flex-col items-center justify-center w-20  h-20  bg-pink-200   rounded-2xl text-pink-500 shadow hover:shadow-md cursor-pointer mb-2 p-1 bg-white transition ease-in duration-300">
					<i class="far fa-umbrella-beach"></i>
					<p class="text-sm mt-1">Beach</p>
				</div>
			</div>
			<h4 class="font-semibold">Recomented Hotels</h4>
			<div class="grid m-0  grid-cols-2  space-x-4 overflow-y-scroll flex justify-center items-center w-full ">
				<div class="relative flex flex-col justify-between   bg-white shadow-md rounded-3xl  bg-cover text-gray-800  overflow-hidden cursor-pointer w-full object-cover object-center rounded-lg shadow-md h-64 my-2"
					style="background-image:url('https://images.unsplash.com/reserve/8T8J12VQxyqCiQFGa2ct_bahamas-atlantis.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80')">
					<div class="absolute bg-gradient-to-t from-green-400 to-blue-400  opacity-50 inset-0 z-0"></div>
					<div class="relative flex flex-row items-end  h-72 w-full ">
						<div class="absolute right-0 top-0 m-2">
							<svg xmlns="http://www.w3.org/2000/svg"
								class="h-9 w-9 p-2 text-gray-200 hover:text-blue-400 rounded-full hover:bg-white transition ease-in duration-200 "
								fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
							</svg>
						</div>
						<div class="p-6 rounded-lg  flex flex-col w-full z-10 ">
							<h4 class="mt-1 text-white text-xl font-semibold  leading-tight truncate">Loremipsum..
							</h4>
							<div class="flex justify-between items-center ">
								<div class="flex flex-col">
									<h2 class="text-sm flex items-center text-gray-300 font-normal">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none"
											viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
											</path>
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
										</svg>
										Dubai
									</h2>
								</div>
							</div>
							<div class="flex pt-4  text-sm text-gray-300">
								<div class="flex items-center mr-auto">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500 mr-1"
										viewBox="0 0 20 20" fill="currentColor">
										<path
											d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
										</path>
									</svg>
									<p class="font-normal">4.5</p>
								</div>
								<div class="flex items-center font-medium text-white ">
									$1800
									<span class="text-gray-300 text-sm font-normal"> /wk</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="relative flex flex-col justify-between   bg-white shadow-md  rounded-3xl  bg-cover text-gray-800  overflow-hidden cursor-pointer w-full object-cover object-center rounded-lg shadow-md h-64 my-2"
					style="background-image:url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80')">
					<div class="absolute bg-gradient-to-t from-blue-500 to-yellow-400  opacity-50 inset-0 z-0"></div>
					<div class="relative flex flex-row items-end  h-72 w-full ">
						<div class="absolute right-0 top-0 m-2">
							<svg xmlns="http://www.w3.org/2000/svg"
								class="h-9 w-9 p-2 text-gray-200 hover:text-blue-400 rounded-full hover:bg-white transition ease-in duration-200 "
								fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
							</svg>
						</div>
						<div class="p-5 rounded-lg  flex flex-col w-full z-10 ">
							<h4 class="mt-1 text-white text-xl font-semibold  leading-tight truncate">Loremipsum..
							</h4>
							<div class="flex justify-between items-center ">
								<div class="flex flex-col">
									<h2 class="text-sm flex items-center text-gray-300 font-normal">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none"
											viewBox="0 0 24 24" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
												d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
											</path>
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
												d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
										</svg>
										India
									</h2>
								</div>
							</div>
							<div class="flex pt-4  text-sm text-gray-300">
								<div class="flex items-center mr-auto">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500 mr-1"
										viewBox="0 0 20 20" fill="currentColor">
										<path
											d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
										</path>
									</svg>
									<p class="font-normal">4.5</p>
								</div>
								<div class="flex items-center font-medium text-white ">
									$1800
									<span class="text-gray-300 text-sm font-normal"> /wk</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h4 class="font-semibold">Suggested By</h4>
			<div class="grid grid-cols-1">
				<div class="">
					<div class="flex  bg-white shadow-md  rounded-2xl p-2">
						<img src="https://images.unsplash.com/photo-1439130490301-25e322d88054?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
                                alt="Just a flower" class=" w-16  object-cover  h-16 rounded-xl">
						<div class="flex flex-col justify-center w-full px-2 py-1">
							<div class="flex justify-between items-center ">
								<div class="flex flex-col">
									<h2 class="text-sm font-medium">Massive Dynamic</h2>
								</div>
								<svg xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5 text-gray-500 hover:text-blue-400 cursor-pointer" fill="none"
									viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
										d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
								</svg>
							</div>
							<div class="flex pt-2  text-sm text-gray-400">
								<div class="flex items-center mr-auto">
									<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500 mr-1"
										viewBox="0 0 20 20" fill="currentColor">
										<path
											d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
										</path>
									</svg>
									<p class="font-normal">4.5</p>
								</div>
								<div class="flex items-center font-medium text-gray-900 ">
									$1800
									<span class="text-gray-400 text-sm font-normal"> /wk</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    <!-- end Category -->
    <div class="fixed bottom-0 w-full">
      <div class="px-5 pt-3 bg-white shadow-lg">
        <div class="flex flex-row space-x-3">
          <!-- Item #1 -->
          <div class="flex group">
            <a href="#" class="p-3 text-gray-400 hover:text-yellow-500">
              <span class="flex flex-col items-center">
                <!-- Icon -->
                <i
                  class="
                    mdi mdi-home-outline mdi-24px
                    mx-1
                    text-gray-500
                    group-hover:text-gray-700
                    transition-color
                    duration-200
                  "
                ></i>

                <!-- Text -->
                <span class="text-xs mb-2 transition-all duration-200">
                  Home
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

          <!-- Item #2 -->
          <div class="flex group">
            <a href="#" class="p-3 text-gray-400 hover:text-yellow-500">
              <span class="flex flex-col items-center">
                <!-- Icon -->
                <i
                  class="
                    mdi mdi-compass-outline mdi-24px
                    mx-1
                    text-gray-500
                    group-hover:text-gray-700
                    transition-color
                    duration-200
                  "
                ></i>

                <!-- Text -->
                <span class="text-xs mb-2 transition-all duration-200">
                  Explore
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

          <!-- Item #3 Active -->
          <div class="flex group">
            <a href="#" class="p-3 text-yellow-500 hover:text-yellow-500">
              <span class="flex flex-col items-center">
                <!-- Icon -->
                <i
                  class="
                    mdi mdi-layers-outline mdi-24px
                    mx-1
                    text-gray-700
                    group-hover:text-gray-700
                    transition-color
                    duration-200
                  "
                ></i>

                <!-- Text -->
                <span class="text-xs mb-2 transition-all duration-200">
                  Feeds
                </span>

                <!-- Focus Dot -->
                <span
                  class="
                    h-1
                    w-5
                    rounded-full
                    bg-yellow-500
                    group-hover:bg-yellow-500
                    hover:h-3 hover:w-3
                    transition-all
                    duration-150
                    delay-100
                  "
                ></span>
              </span>
            </a>
          </div>

          <!-- Item #4 -->
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
          <div class="flex group">
            <a href="#" class="p-3 text-gray-400 hover:text-yellow-500">
              <span class="flex flex-col items-center">
                <!-- Icon -->
                <i
                  class="
                    mdi mdi-account-circle-outline mdi-24px
                    mx-1
                    text-gray-500
                    group-hover:text-gray-700
                    transition-color
                    duration-200
                  "
                ></i>

                <!-- Text -->
                <span class="text-xs mb-2 transition-all duration-200">
                  Account
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
        </div>
      </div>
    </div>
  </div>
</template>
