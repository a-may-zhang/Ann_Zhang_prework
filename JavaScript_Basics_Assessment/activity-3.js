const nameList = ["Sam", "Ashley", "Ann"];


for(let i = 0; i < 3; i++) {
    const addAName = prompt("enter a student name");
    nameList.push(addAName);
}

for(let i=0; i < nameList.length; i++) {
    console.log(nameList[i]);
}