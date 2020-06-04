const timestamp = 1466171433193;

let date = new Date(timestamp).toLocaleString(undefined, {
  day: "numeric",
  month: "numeric",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit"
});

console.log(date.split(", "));
