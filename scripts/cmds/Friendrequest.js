module.exports = {
  config: {
    name: "friendRequest",
    version: "1.0",
    author: "introverted",
    shortDescription: "Auto accept friend requests",
    longDescription: "Automatically accepts incoming friend requests sent to the bot account.",
    category: "social"
  },

  onEvent: async function ({ api, event }) {
    if (event.type === "friend_request") {
      try {
        await api.handleFriendRequest(event.userID, true); // true = accept
        console.log(`✅ Accepted friend request from: ${event.userID}`);
      } catch (err) {
        console.error("❌ Failed to accept friend request:", err);
      }
    }
  }
};
