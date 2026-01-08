let months = ["january","july","march","august"];
console.log("Before months: ",months);
console.log("remove 'january': ",months.shift());
console.log("remove 'july': ",months.shift());
console.log("After months remove: ",months);
console.log("Add months july and june:");
console.log("add 'june': ",months.unshift("june"));
console.log("add 'july': ",months.unshift("july"));
console.log("after months add: ",months);