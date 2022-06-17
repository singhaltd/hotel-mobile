const config = useRuntimeConfig().public
export default defineEventHandler(async (event) => {
    const query = useQuery(event)
    const header = event.req.headers
    console.log(event.req.headers)
    const data = await $fetch(`${config.BASE_URL}/api/v1/profile`, )
    return data

})