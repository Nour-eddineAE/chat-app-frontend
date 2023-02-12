export default {
  setUsersList(state, users) {
    state.users = users;
  },
  pushMessages(state, messages) {
    state.messages = messages;
  },
  setupWebSocket(state) {
    console.log("Starting connection to websocket server...");
    state.wsConnection = new WebSocket("ws://localhost:3031/websockets");

    state.wsConnection.onopen = function (event) {
      console.log("Successfully connected to the websocket");
    };

    state.wsConnection.onmessage = function (event) {
      state.messages.push(JSON.parse(event.data));
    };

    state.wsConnection.onclose = function (event) {
      console.log("Connection to websocket closed");
    };
  },
  closeWSConnection(state) {
    state.wsConnection.close();
  },
  setSender(state, user) {
    state.user = user;
  },
};
