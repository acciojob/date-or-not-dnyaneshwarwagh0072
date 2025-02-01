var isDate = function (input) {
        return !isNaN(Date.parse(input));
};
const input = prompt("enter Date");
alert(isDate(input));