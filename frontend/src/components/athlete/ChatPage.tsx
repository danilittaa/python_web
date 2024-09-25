import { useState, useRef, useEffect } from "react";
import axios from "@/axiosConfig";
import { getUser } from "@/services/getUser";

const ChatPage = () => {
  const [messages, setMessages] = useState<any>([]);
  const [newMessage, setNewMessage] = useState<any>("");
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const currentUserId = getUser().id;
  const otherUserId = getUser().id === 7 ? 6 : 7;

  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const response = await axios.get(
          `/chat/history/?user_id=${currentUserId}&other_user_id=${otherUserId}`
        );
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching chat history:", error);
      }
    };

    fetchChatHistory();

    const roomName = [currentUserId, otherUserId].sort().join("_");
    const newSocket = new WebSocket(`ws://localhost:8000/ws/chat/${roomName}/`);

    newSocket.onopen = () => {
      console.log("WebSocket connection established");
    };

    newSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prevMessages: any) => [...prevMessages, data]);
    };

    newSocket.onerror = (event) => {
      console.error("WebSocket error:", event);
    };

    newSocket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    setSocket(newSocket);

    return () => {
      if (newSocket) {
        newSocket.close();
      }
    };
  }, [currentUserId, otherUserId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newMessage.trim() && socket) {
      const messageData = {
        message: newMessage,
        sender_id: currentUserId,
        receiver_id: otherUserId,
      };
      socket.send(JSON.stringify(messageData));
      setNewMessage("");
    }
  };

  return (
    <div className="">
      <div className="space-y-5 pb-16">
        {messages.map((msg: any, index: any) => (
          <div
            key={index}
            className={`w-fit px-4 py-2 rounded-xl ${
              msg.sender_id === currentUserId ? "bg-white/50" : "bg-blue-300"
            }`}
          >
            {msg.message}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form
        onSubmit={handleSendMessage}
        className="absolute bottom-5 left-[50%] translate-x-[-50%] space-x-5"
      >
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Введіть текст..."
          className="rounded-full px-5 py-2 md:w-[500px] w-[200px]"
        />
        <button type="submit" className="hover:text-blue-300">
          Відправити
        </button>
      </form>
    </div>
  );
};

export { ChatPage };
