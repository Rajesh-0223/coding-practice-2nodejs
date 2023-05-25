const addDays = require("date-fns/addDays");

const getdaysAfterXDays = (days) => {
  const newDate = addDays(new Date(2020, 7, 22), days);

  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
};
console.log(getdaysAfterXDays(5));

module.exports = getdaysAfterXDays;
