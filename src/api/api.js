export async function getLatestNews(searchQuery){
    console.log("🚀 ~ file: api.js:2 ~ getLatestNews ~ searchQuery", searchQuery)
    const request= await fetch(`https://h111n.algolia.com/api/v1/search?query=${searchQuery}&hitsPerPage=10&page=0`)
    return await request.json()
}

export async function getPopularNews() {
    console.log("🚀 ~ file: api.js:2 ~ getPopularNews ~ ")
    const request = await fetch(`https://hn.algolia.com/api/v1/search?query=&hitsPerPage=10&page=0`)
    return await request.json()
}