export function formatMessageTime(date) {
  return new Date(date).toLocaleDateString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  });
}
