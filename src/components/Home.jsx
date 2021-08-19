import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Home(props) {
  const history = useHistory();
  const historyPush = () => {
    history.push("/about");
  };

  const dispatch = useDispatch();
  const dispatchButton = () => {
    dispatch({
      type: "user/getUserList",
    });
  };

  const { userList } = useSelector((state) => {
    return {
      userList: state.user.userList,
    };
  }, shallowEqual);
  return (
    <div>
      home
      <button onClick={historyPush}>跳转</button>
      <button onClick={dispatchButton}>dispatch</button>
      <h2>{userList[0].name}</h2>
    </div>
  );
}
