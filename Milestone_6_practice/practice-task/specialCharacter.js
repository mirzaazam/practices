// How will you display
//      a) Petersburg
//      b) Herry

let students = {
    2222: {

        name: "Jack",
        section: "C",
        class: "IX",
        address: {

            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }

    },
    3333: {

        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }

    }
}

const Petersburg = students['2222'].address["city"];
const Herry = students['3333'].name;
console.log(Petersburg, '\n', Herry);


//another one practice problem.
// How will you display
//      a) B
//      b) D

console.log('\nsecond task: ');
const studentData = [

    {
        class: 10,
        details: [
            {
                studentId: '1',
                gradingDetails: [{ grade: 'A' }]
            },
            {
                studentId: '2',
                gradingDetails: [{ grade: 'B' }]
            }
        ]
    },
    {
        class: 11,
        details: [
            {
                studentId: 3,
                gradingDetails: [{ grade: 'B' }]
            },
            {
                studentId: 4,
                gradingDetails: [{ grade: 'D' }]
            }
        ]
    },
]

const B = studentData[0].details[1].gradingDetails[0].grade;
const D = studentData[1].details[1].gradingDetails[0].grade;
console.log(B, '\n', D);

console.log('\n 3rd number task: ');
//3rd practice problem.
// How will you display
//      a) habluder adda
//      b) Beginner


let data = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },

            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}

const habluderAdda = data.data[0].bookDetails.name;
const Beginner = data.data[1].bookCategory;
console.log(habluderAdda, '\n', Beginner);

/*
    
*/