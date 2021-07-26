export function cldUrlGenerator(url, imageFolder, imageSlug) {
  let imageUrl = url.split("/");
  imageUrl.splice(7, 1, imageFolder, imageSlug);

  return imageUrl.join("/");
}
