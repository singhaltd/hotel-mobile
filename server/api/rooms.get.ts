const config = useRuntimeConfig().public
export default defineEventHandler(async (event) => {
    const query = useQuery(event)
    if (!query.id) {
        const data = await $fetch(`${config.BASE_URL}/v1/rooms/cltype`)
        return data
    } else {
        const data = await $fetch(`${config.BASE_URL}/v1/rooms/cltypeDetail/${query.id}`)
        return data
    }

})