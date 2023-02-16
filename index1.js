// Написати функцію showAllFriends
// так, щоб вона виводила всіх друзів

const student = {
  name: "Student1",
  friends: ["Student2", "Student3", "Student4"],
};

const student2 = {
  name: "Student2",
  friends: ["Student2", "Student3"],
};

function showAllFriends(){
  return this.friends.map((friend, index) => {
    return `${index} - ${friend}`;
  });
}

// console.log(showAllFriends.call(student2));
// console.log(showAllFriends.call(student));

// 1 - name 
// 2 - name


// for (const [key, value] of Object.entries(student)) {
//   console.log(key, value)
// } 


console.log(Object.entries(student).filter(([key, value]) => key === "friends").map(([key, value] )=> value[0]))