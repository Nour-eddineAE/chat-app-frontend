export default {
  // return a function
  getUserById: (state) => (senderId) => {
    return state.users.find((user) => user._id === senderId);
  },
};
