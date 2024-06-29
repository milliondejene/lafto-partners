export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);
  const formattedTime = date.toUTCString().match(/\d{2}:\d{2}/)[0];
  return `${formattedDate} at ${formattedTime} GMT`;
};
