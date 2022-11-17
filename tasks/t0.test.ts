const users = [
  { id: 0, name: "User1" },
  { id: 1, name: "User2" },
  { id: 2, name: "User3" },
];
console.log("ID users before: ", users);

const reqId = "1";
{
  const i = users.findIndex((user) => user.id === Number(reqId));
  if (i !== -1) users.splice(i, 1);
}
console.log("ID users after: ", users);

console.log("NAME users before: ", users);
const reqName = "User4";
{
  const newID = Math.max(...Object.values(users.map((u) => u.id))) + 1;
  users.push({ id: newID, name: reqName });
}
console.log("NAME users after: ", users);

const reqLimit = "1";
const reqOffset = "1";
{
  const i = reqLimit ? Number(reqLimit) : 0;
  const o = reqOffset ? Number(reqOffset) : 0;
  console.log("Limit, Offset, users after: ", users.slice(o, i + o));
}