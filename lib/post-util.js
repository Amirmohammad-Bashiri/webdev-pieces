function getPostContentLength(postContent) {
  const regex = /\w+/g;
  const postContentLength = postContent.match(regex).length;
  return postContentLength;
}

export function calculateReadingTime(postContent) {
  const avgWordsPerMin = 150;
  let postContentLength;
  let time;
  return new Promise((resolve, reject) => {
    postContentLength = getPostContentLength(postContent);
    time = Math.ceil(postContentLength / avgWordsPerMin);
    if (time) {
      resolve(time);
    } else {
      reject("Failed to calculate post read time");
    }
  });
}
