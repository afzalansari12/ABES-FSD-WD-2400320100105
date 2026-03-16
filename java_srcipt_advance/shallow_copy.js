// let user={
//     name:"afzal",
//     age:27,
//     adress:{
//         city:"delhi",
//         pincode:201005
//     }
// };
// let usercopy={
//     ...user
// };
// usercopy.adress.city="kolkata";
// // usercopy.adress.pincode=679589;
// console.log(user);
// console.log(usercopy);

// let user={
//     name:"afzal",
//     age:27,
//     adress:{
//         city:"delhi",
//         pincode:201005
//     }
// };
// let usercopy = Object.assign({}, user);
// usercopy.adress.city="kolkata";
// // usercopy.adress.pincode=679589;
// console.log(user);
// console.log(usercopy);

// let arr=[1,2,3];
// let arrcopy=[...arr];
// arrcopy[0]=10;
// console.log(arr);
// console.log(arrcopy);

// let user={
//     name:"afzal",
//     age:27,
//     adress:{
//         city:"delhi",
//         pincode:201005
//     }
// };
// let usercopy={
//     ...user
// };
// usercopy.name="kolkata";
// // usercopy.adress.pincode=679589;
// console.log(user);
// console.log(usercopy);

// let user=[{
//    name:"d"
// },
// {
//     name:"a"
// }

// ];
// let usercopy={...user};
// usercopy[0].name="afzal";
// console.log(user);

// let user={
//     name:"afzal",
//     age:27,
//     adress:{
//         city:"delhi",
//         pincode:201005
//     }
// };

// let usercopy=JSON.parse(JSON.stringify(user));
// usercopy.adress.city="mumbai";
// // usercopy.adress.pincode=679589;
// console.log(user);
// console.log(usercopy);

let user={
    name:"afzal",
    age:27,
    adress:{
        city:"delhi",
        pincode:201005
    }
};
let usercopy = structuredClone(user);
usercopy.adress.city="mumbai";
// usercopy.adress.pincode=679589;
console.log(user);
console.log(usercopy);