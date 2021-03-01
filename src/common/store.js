import { createStore, combineReducers } from "redux";
import timelineReducer from "./timeline/state";
import friendReducer from "./friend/state";

const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});

const store = createStore(reducer);

export default store;

// store.subscribe(() => {
//     const state = store.getState();
//     console.log(state);
//   });

//   store.dispatch(addTimeline({ id: 1, desc: "코딩은 즐거워" }));
//   store.dispatch(addTimeline({ id: 2, desc: "코딩은 좋아" }));
//   store.dispatch(increaseNextPage());
//   store.dispatch(editTimeline({ id: 2, desc: "리덕스는 즐거워" }));
//   store.dispatch(removeTimeline({ id: 1, desc: "리덕스 엄청 편하네" }));

//   store.dispatch(addFriend({ id: 1, name: "김규빈" }));
//   store.dispatch(addFriend({ id: 2, name: "이정민" }));
//   store.dispatch(editFriend({ id: 2, name: "수지" }));
//   store.dispatch(removeFriend({ id: 1, name: "아이유" }));
