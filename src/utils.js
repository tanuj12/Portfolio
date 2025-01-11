export const getImageUrl = (path) => {
    console.log(new URL(import.meta.url))
    return new URL(import.meta.url).origin + `/assets/${path}`

};