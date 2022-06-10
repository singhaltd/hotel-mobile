export default defineEventHandler(async (event) => {
    const query = useQuery(event)
    if(query.con_type){
        const data = await $fetch(`http://127.0.0.1:4444/api/blog/list${query.con_type ? '?con_type='+query.con_type:''}`)
        return data
    }
    if(query.id != query.con_type){

        const data = await $fetch(`http://127.0.0.1:4444/api/blog/${query.id}`)
        return data
    }
    // return { a: query.param1, b: query.param2 }
    
  })