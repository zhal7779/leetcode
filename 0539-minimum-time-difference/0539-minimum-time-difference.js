/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  let answer = Number.MAX_SAFE_INTEGER;
  const isDuplicate = timePoints.some((time) => {
    return timePoints.indexOf(time) !== timePoints.lastIndexOf(time);
  });

  if (isDuplicate) {
    return 0;
  }

  const sortedTimes = timePoints
      // .map((time) => time.split(":"))
    // .sort((a, b) => a[0] - b[0] || a[1] - b[1])
    .map((time) =>  {
    const times = time.split(":");
    return  parseInt(times[0]) * 60 + parseInt(times[1]);
    })
    .sort((a,b) => a-b);

  for (let i = 0; i < timePoints.length; i++) {
    if (timePoints.length - 1 === i) {
      answer = Math.min(answer, 1440 - sortedTimes[i] + sortedTimes[0]);
    } else {
      answer = Math.min(answer, sortedTimes[i + 1] - sortedTimes[i]);
    }
  }

  return answer;

};