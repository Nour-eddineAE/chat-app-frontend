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
      // TODO handle onmessage event
      console.log("Event from ws server: ", event);
      state.messages.push(JSON.parse(event.data));
    };
  },
  closeWSConnection(state) {
    state.wsConnection.close();
    console.log("Connection to websocket closed");
  },
  setSender(state, user) {
    state.user = user;
  },
};
