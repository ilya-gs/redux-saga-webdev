export async function getLatestNews(){
    const request= await fetch('https://hn.algolia.com/api/v1/search?query=foo&hitsPerPage=10&page=0')
    return await request.json()
}