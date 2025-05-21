const config = {
  botName: "M.I.T.A Bot",
  botAvatar: "https://example.com/avatar.png",
  inviteURL: "https://discord.com/invite/yourbot",
  supportURL: "https://discord.gg/supportserver",
  commands: [
    {
      category: "Information",
      commands: [
        { name: "/avatar", description: "Shows the avatar of a user." },
        { name: "/userinfo", description: "Displays detailed info about a user." }
      ]
    },
    {
      category: "Moderation",
      commands: [
        { name: "/ban", description: "Ban a member from the server." },
        { name: "/kick", description: "Kick a member from the server." }
      ]
    },
    {
      category: "Fun",
      commands: [
        { name: "/meme", description: "Get a random meme from the internet." },
        { name: "/joke", description: "Sends a random joke." }
      ]
    },
    {
      category: "Music",
      commands: [
        { name: "/play", description: "Play a song in the voice channel." },
        { name: "/pause", description: "Pause the current track." },
        { name: "/queue", description: "View the music queue." }
      ]
    }
  ]
};
