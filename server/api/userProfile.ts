const config = useRuntimeConfig().public

export default defineEventHandler(async (event) => {
    const query = useQuery(event)
    const token = useCookie("autKey");
    console.log(event.req.headers)
    const data = await $fetch(`${config.BASE_URL}/api/v1/profile`, {
        headers: {
            Authorization: `Bearer ${token.value}`,
        }
    })
    return data

})