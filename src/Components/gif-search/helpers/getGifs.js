
export const getGif= async( category) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=EbvPhgwtVByORFpV8ogs4fkxekSMtyAZ&q=${encodeURI(category)}&limit=35&lang=es`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
    })

    return gifs;
}
