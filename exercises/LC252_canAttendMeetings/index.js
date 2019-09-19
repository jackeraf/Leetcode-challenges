// Given an array of meeting time intervals consisting of start and end
// times [s1, e1], [s2, e2], ... , determine if a person could attend all meetings.
// ---------------------------
// canAttendMeetings([[0, 30], [5, 10], [15, 20]]) --> false
// canAttendMeetings([[7, 10], [2, 4]]) --> true

// time O(n log n)
// space O(n)

const canAttendMeetings = intervals => {
  let startTimes = intervals.map(interval => interval[0]);
  startTimes.sort((a, b) => a - b);
  let endTimes = intervals.map(interval => interval[1]);
  endTimes.sort((a, b) => a - b);

  for (let i = 0; i < startTimes.length; i++) {
    if (startTimes[i + 1] < endTimes[i]) return false;
  }
  return true;
};

module.exports = canAttendMeetings;
