import Api from "@/services/api";

export default {
  async loadUsers({ commit }) {
    const response = await Api().get(`/api/users`);
    const users = await response.data;
    commit("setUsersList", users);
  },
  async loadMessages({ commit }) {
    const response = await Api().get(`/api/messages`);
    const messages = await response.data;
    commit("pushMessages", messages);
  },
  sendMessage({ state }, message) {
    // the sent message will be received again when websocket server broadcasts it
    // we don't need to push it again since we already handled this case when we connected to websocket server
    state.wsConnection.send(JSON.stringify(message));
  },
};
