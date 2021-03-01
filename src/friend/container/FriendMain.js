import React, { useReducer, useEffect } from "react";
import store from "../../common/store";
import { addFriend } from "../state";
import { getNextFriend } from "../../common/mockData";
import FriendList from "../component/FriendList";

export default function TimelineMain() {
  const [, forceUpdate] = useReducer((v) => v + 1, 0);
  useEffect(() => {
    const unsubscribe = store.subscribe(() => forceUpdate());
    return () => unsubscribe();
  }, []);

  function onAdd() {
    const friend = getNextFriend();
    store.dispatch(addFriend(friend));
  }
  console.log("friend render");
  const friends = store.getState().friend.friends;
  return (
    <div>
      <button onClick={onAdd}>추가</button>
      <FriendList friends={friends} />
    </div>
  );
}
