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

export function buildBlurredImageUrl(imageSlug, cloudName, blurVal, quality) {
  const url = buildUrl(imageSlug, {
    cloud: {
      cloudName,
    },
    transformations: {
      effect: `blur:${blurVal}`,
      quality,
    },
  });

  return url;
}
