const config = useRuntimeConfig().public
export default defineEventHandler(async (event) => {
    const query = useQuery(event)
    if(query.con_type){
        const data = await $fetch(`${config.BASE_URL}/api/blog/list${query.con_type ? '?con_type='+query.con_type:''}`)
        return data
    }
    if(query.id != query.con_type){

        const data = await $fetch(`${config.BASE_URL}/api/blog/${query.id}`)
        return data
    }
    // return { a: query.param1, b: query.param2 }
    
  })