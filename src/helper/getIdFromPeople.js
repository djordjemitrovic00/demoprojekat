export const getIdFromPeople = (item) => {
    let urlString = item.url.slice(0, -1);
    return urlString.substring(urlString.lastIndexOf("/") + 1, urlString.length);
}