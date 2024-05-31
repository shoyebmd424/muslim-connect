import Axios from "../Axios";

export const userChat = async (id) => await Axios.get(`/chat/${id}`);
export const getMessage = async (id) => await Axios.get(`/chat/message/${id}`);
export const getUnreadMessagesCount = async (chatId, userId) =>
  await Axios.get(`/chat/message/${chatId}/unread-count/${userId}`);
export const addMessage = async (message) =>
  await Axios.post("/chat/message/", message);
export const chatCreate = async (chat) => await Axios.post("/chat/", chat);
export const markRead = async (chatId, userId) =>
  await Axios.put(`/chat/message/${chatId}/mark-as-read/${userId}`);
