import type { JSX } from "react";
import { useState } from "react";
import { Button } from "../../components/Button/Button";

interface Message {
    id: string;
    text: string;
    sender: "user" | "other";
    timestamp: Date;
}

export const Chat = (): JSX.Element => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            const message: Message = {
                id: Date.now().toString(),
                text: newMessage,
                sender: "user",
                timestamp: new Date(),
            };
            setMessages([...messages, message]);
            setNewMessage("");
        }
    };

    return (
        <div className="flex w-full">
            <div className="flex flex-col max-h-[90vh] bg-gray-800 border border-gray-700 flex-2">
                <div className="text-white p-4 shadow-md bg-gray-800/30 backdrop-blur-md border-b border-gray-600/20">
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                        <div>
                            <p className="text-md font-semibold text-white">Chat Room</p>
                            <p className="text-sm text-gray-500">Online</p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-800/20 backdrop-blur-sm min-h-[20vh]">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"
                                }`}
                        >
                            <div
                                className={`max-w-[70%] rounded-lg p-3 backdrop-blur-sm ${message.sender === "user"
                                        ? "bg-blue-600/80 text-white shadow-lg"
                                        : "bg-white/70 text-gray-800 shadow-md"
                                    }`}
                            >
                                <p>{message.text}</p>
                                <span className="text-xs opacity-70">
                                    {message.timestamp.toLocaleTimeString()}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-800/30 backdrop-blur-md p-4 border-t border-gray-600/20">
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                            placeholder="Type a message..."
                            className="flex-1 p-2 border border-white/30 rounded-full focus:outline-none focus:border-blue-600 bg-white/50 backdrop-blur-sm text-gray-800 placeholder-gray-500"
                        />
                        <button
                            onClick={handleSendMessage}
                            className="bg-blue-600/80 text-white p-2 rounded-full hover:bg-blue-600/80 focus:outline-none shadow-md backdrop-blur-sm transition-all duration-200"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-800 backdrop-blur-sm min-h-[20vh] border border-gray-700">
                <div className="bg-gray-800 rounded-md border border-gray-700 p-2">
                    Game name
                </div>

                <div>
                    <Button variant="outline">Create room</Button>
                </div>

                <div className="rooms">
                    <div className="bg-gray-800 rounded-md border border-gray-700 mx-4 p-2 cursor-pointer hover:bg-gray-700 transition-all transition duration-300 ease-in-out hover:shadow-md dark:hover:shadow-white/20">
                        Game chat room
                    </div>
                </div>
            </div>
        </div>
    );
};