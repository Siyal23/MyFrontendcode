for (i = 1; i < 10; i++) {
  console.log(i);
}
var x = 1;
while (x < 10) {
  x++;
}

names = ["abhi", "rahul", "mamta"];
for (x = 0; x < names.length; x++) {
  console.log(names[x]);
}
for (s in names) {
  console.log(names[s]);
}

num = 10;

if (num > 10) {
  console.log("ok");
} else {
  console.log("bad");
}

result = num > 10 ? "ok" : "bad";

console.log(result);

names.forEach(element => {
    console.log(element);
});
