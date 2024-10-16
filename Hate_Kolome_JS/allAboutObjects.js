const shakil = {
    name: 'Shakil',
    age: 32,
    phone: '+8801714769575',
    address: 'Bhola',
    occupation: 'Teacher'
}
// console.log(shakil)
shakil.occupation = 'Web Developer'
// console.log(shakil)
shakil.zipcode = 8350;
// console.log(shakil)
for (item in shakil){
    console.log(item)
}