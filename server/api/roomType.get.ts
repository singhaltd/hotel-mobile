
export default defineEventHandler(async (event) => {
    const query = useQuery(event)
    const data = await $fetch(`http://127.0.0.1:4444/v1/rooms/cltype`)
    return data

})