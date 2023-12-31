import { createChatBotMessage } from 'react-chatbot-kit';

const config = { 
  botName: "Inecta Report Writer",
  initialMessages: [createChatBotMessage("Hi, I'm here to help. What do you want to learn?")],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
}

export default config