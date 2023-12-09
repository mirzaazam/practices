// 2) How will you get the output [Advanced - uses 2D matrix concept]
//     a) level-2
//     b) 72.8621

let data =
    [
        {
            "pHeroCourses": {
                "course-x": "web development"
            }
        },

        {
            "pHeroCourses": {
                "course-y": "phitron"
            }
        },

        {
            "pHeroCourses": {
                "course-z": "acc"
            }
        },

        {
            "pHeroCourses": {
                "course-xyz": "level-2"
            },

            "locationField": {
                "en-US": {
                    "lat": 19.28563,
                    "lon": 72.8691
                }
            }
        }
    ]

    const getOutputLevel_1 = data[3]['pHeroCourses']['course-xyz'];
    console.log(getOutputLevel_1);
    const getOutputNumber = data[3]['locationField']["en-US"]["lon"];
    console.log(getOutputNumber);
