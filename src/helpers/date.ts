export const formatDate = (date) =>
  new Date(date).toUTCString().replace(/(.*), (.*) (\d\d\d\d) .*/, "$2 $3");
