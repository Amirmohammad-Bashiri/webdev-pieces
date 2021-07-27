import { buildUrl } from "cloudinary-build-url";

export function cldUrlGenerator(url, imageFolder, imageSlug) {
  let imageUrl = url.split("/");
  imageUrl.splice(7, 1, imageFolder, imageSlug);

  return imageUrl.join("/");
}

export function buildImageUrl(imageSlug, cloudName) {
  const url = buildUrl(imageSlug, {
    cloud: {
      cloudName,
    },
  });

  return url;
}

export function buildPixelatedImageUrl(
  imageSlug,
  cloudName,
  transEffect,
  effectVal
) {
  const url = buildUrl(imageSlug, {
    cloud: {
      cloudName,
    },
    transformations: {
      effect: {
        name: transEffect,
        value: effectVal,
      },
    },
    // transformations: {
    //   effect: `blur:${blurVal}`,
    //   quality,
    // },
  });

  return url;
}
