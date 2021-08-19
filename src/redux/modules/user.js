// eslint-disable-next-line import/no-anonymous-default-export
export default {
  namespace: "user",
  state: {
    userList: [
      {
        name: 'thornsh'
      }
    ],
  },
  reducers: {
    setUserList(state, action) {
      return {
        ...state,
        userList: action.userList,
      };
    },
  },
  effects: {
    getUserList(action, { dispatch, getCurrentState }) {
      return fetch("http://httpbin.org/get?name=aa").then((res) => {
        console.log(res);
        res.json().then((data) => {
          console.log(data.args);
          dispatch({
            type: "user/setUserList",
            userList: [data.args],
          });
          return data.args;
        });
      });
    },
  },
};
