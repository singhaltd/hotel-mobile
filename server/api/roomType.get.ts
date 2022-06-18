const config = useRuntimeConfig().public
export default defineEventHandler(async (event) => {
    const query = useQuery(event)
    const data = await $fetch(`${config.BASE_URL}/v1/rooms/cltype`)
    return data

})