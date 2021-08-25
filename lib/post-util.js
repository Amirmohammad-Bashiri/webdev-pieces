function getPostContentLength(postContent) {
  const regex = /\w+/g;
  let postContentLength;
  return new Promise((resolve, reject) => {
    postContentLength = postContent.match(regex).length;
    if (postContentLength) {
      resolve(postContentLength);
    } else {
      reject("Could not get content length");
    }
  });
}

export function calculateReadingTime(postContent) {
  const avgWordsPerMin = 150;
  let time;
  return new Promise((resolve, reject) => {
    getPostContentLength(postContent).then(postContentLength => {
      time = Math.ceil(postContentLength / avgWordsPerMin);
      if (time) {
        resolve(time);
      } else {
        reject("Failed to calculate post read time");
      }
    });
  });
}

export function extractHeadingId(headingText) {
  const id =
    headingText.includes("{") && headingText.split("{")[1].slice(1, -1);
  return id;
}

export function removeLastWord(str) {
  const content = str.substring(0, str.lastIndexOf(" "));

  return content;
}