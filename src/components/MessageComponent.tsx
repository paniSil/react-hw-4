import { use } from "react";
import { fetchData } from "../utils/api";
import { MessageInterface } from "../types/Message.interface";

const MessageList = () => {
  const messages: MessageInterface[] = use(fetchData);
  console.log(messages);
  return (
    <div>
      <ol>
        {messages.map((message) => (
          <li key={message.id}>{message.body}</li>
        ))}
      </ol>
    </div>
  );
};

export default MessageList;
