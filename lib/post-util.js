function getPostContentLength(postContent) {
  const regex = /\w+/g;
  const postContentLength = postContent.match(regex).length;
  return postContentLength;
}

export function calculateReadingTime(postContent) {
  const avgWordsPerMin = 150;
  const postContentLength = getPostContentLength(postContent);
  const time = Math.ceil(postContentLength / avgWordsPerMin);

  return time;
}
