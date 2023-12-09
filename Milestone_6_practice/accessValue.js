// accece problem --> 1
const students = {
    name: 'rahat',
    age: 22,
}
const getResult = students.age;
console.log(`${getResult} age of rahat.`);

// accece problem --> 2
let data = {
    location: [
        {
            latitude: '34.5 , 37.8',
            longitude: '98.77 , 58.7',
            city: 'dhaka',
            country: 'bangladesh'
        }
    ]
}
const getCity = data.location[0].city;
console.log(getCity ,'\n');

// accece problem --> 3
const users =
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
const email = users.email;
console.log('\nemail: ',email);

const ValueOfAddress = users.address; 
console.log('\nAddess: ', ValueOfAddress);

const ValueOfCity = users.address.city;
console.log('\nCity: ', ValueOfCity);

const ValueOfLat = users.address.geo.lat;
console.log('\nLat: ', ValueOfLat);

const ValueOfCompanyName = users.company.name;
console.log('\nCompany Name: ', ValueOfCompanyName);

