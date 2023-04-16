/*Description //Merge meeting
Liz wants everyone at her company to hang out for a game of Minecraft, but everyone has told her they have too many meetings. She knows that there must be some time throughout the day that they are all free for some quality time.

Write a function that given an array of everyone’s meetings, returns a list of merged meetings so that Liz can see when everyone is free for games. 


*/

function mergeMeeting(meetings) {
  const sortStartMeeting = meetings.sort((a, b) => a.startTime - b.startTime);
  return sortStartMeeting.reduce((acc, cur) => {
    let [prevMeetings] = acc.slice(-1);
    if (!prevMeetings) {
      acc.push({ startTime: cur.startTime, endTime: cur.endTime });
    } else {
      if (prevMeetings.endTime >= cur.startTime) {
        prevMeetings.endTime = Math.max(prevMeetings.endTime, cur.endTime);
      } else {
        acc.push(cur);
      }
    }
    return acc;
  }, []);
}

console.log(
  mergeMeeting([
    { startTime: 4, endTime: 8 },
    { startTime: 0, endTime: 2 },
    { startTime: 3, endTime: 7 },
    { startTime: 3, endTime: 5 },
    { startTime: 5, endTime: 9 },
  ])
); //[ { startTime: 0, endTime: 2 }, { startTime: 3, endTime: 9 } ]
