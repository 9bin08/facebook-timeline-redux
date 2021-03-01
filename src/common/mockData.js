const friends = [
  { name: "쯔위", age: 15 },
  { name: "쯔위", age: 15 },
  { name: "쯔위", age: 15 },
  { name: "쯔위", age: 15 },
  { name: "쯔위", age: 15 },
  { name: "쯔위", age: 15 },
  { name: "쯔위", age: 15 },
];
const timelines = [
  { desc: "점심이 맛있다.", likes: 0 },
  { desc: "점심이 맛있다.", likes: 0 },
  { desc: "점심이 맛있다.", likes: 0 },
  { desc: "점심이 맛있다.", likes: 0 },
  { desc: "점심이 맛있다.", likes: 0 },
  { desc: "점심이 맛있다.", likes: 0 },
  { desc: "점심이 맛있다.", likes: 0 },
  { desc: "점심이 맛있다.", likes: 0 },
];

function makeDataGenerator(items) {
  let itemIndex = 0;
  return function getNextData() {
    const item = items[itemIndex % items.length];
    itemIndex += 1;
    return { ...item, id: itemIndex };
  };
}

export const getNextFriend = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);
