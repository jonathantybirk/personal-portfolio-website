const semesters = [
    {
      title: "First Semester Courses and Grades",
      period: "August 2023 - January 2024",
      courses: [
        {
          code: "01001",
          ects: 10,
          name: "Mathematics 1a",
          link: "https://kurser.dtu.dk/course/2023-2024/01001",
          assessments: [
            { name: "Assignments (33%)", grade: "12 (A)" },
            { name: "Exam (67%)", grade: "12 (A)" }
          ],
          average: "8.2"
        },
        {
          code: "02002",
          ects: 5,
          name: "Computer Programming",
          link: "https://kurser.dtu.dk/course/2023-2024/02002",
          assessments: [{ name: "Exam", grade: "12 (A)" }],
          average: "5.7",
          note: "Employed as Class Instructor and Teaching Assistant for 02002 Computer Programming in Autumn 2025."
        },
        {
          code: "02402",
          ects: 5,
          name: "Statistics",
          link: "https://kurser.dtu.dk/course/2023-2024/02402",
          assessments: [{ name: "Exam", grade: "12 (A)" }],
          average: "6.0",
          note: "Employed as Teaching Assistant for 02402 Statistics in Spring 2024. Employed to help transition course programming language from R to Python in Summer 2024."
        },
        {
          code: "02461",
          ects: 10,
          name: "Introduction to Intelligent Systems",
          link: "https://kurser.dtu.dk/course/2023-2024/02461",
          assessments: [
            { name: "Exam (40%)", grade: "12 (A)" },
            { name: "Group Project (60%)", grade: "10 (B)" }
          ],
          average: "8.1",
          note: "Employed as Teaching Assistant for 02461 Introduction to Intelligent Systems in Autumn 2025 and January 2026."
        }
      ],
      gradeLink: "https://campusnet.dtu.dk/cnnet/Grades/Public.aspx?Id=ZTDNHK7TTA"
    },
    {
        title: "Second Semester Courses and Grades",
        period: "January 2024 - June 2024",
        courses: [
          {
            code: "01002",
            ects: 10,
            name: "Mathematics 1b",
            link: "https://kurser.dtu.dk/course/2023-2024/01002",
            assessments: [
              { name: "Assignments and Group Project (40%)", grade: "12 (A)" },
              { name: "Exam (60%)", grade: "10 (B)" }
            ],
            average: "7.6"
          },
          {
            code: "02105",
            ects: 5,
            name: "Algorithms and Data Structures 1",
            link: "https://kurser.dtu.dk/course/2023-2024/02105",
            assessments: [
              { name: "Assignment and exam", grade: "12 (A)" }
            ],
            average: "7.0"
          },
          {
            code: "02450",
            ects: 5,
            name: "Introduction to Machine Learning and Data Mining",
            link: "https://kurser.dtu.dk/course/2023-2024/02450",
            assessments: [
              { name: "Assignments and exam", grade: "10 (B)" }
            ],
            average: "4.9"
          },
          {
            code: "02445",
            ects: 5,
            name: "Project in Statistical Evaluation for Artificial Intelligence and Data",
            link: "https://kurser.dtu.dk/course/2023-2024/02445",
            assessments: [
              { name: "", grade: "" }
            ],
            average: ""
          }
        ],
      },
      {
        title: "Third Semester Courses (expected)",
        period: "August 2024 - January 2025",
        courses: [
          {
            code: "01037",
            ects: 5,
            name: "Advanced Engineering Mathematics 2",
            link: "https://kurser.dtu.dk/course/01037",
            assessments: [],
            average: ""
          },
          {
            code: "02110",
            ects: 5,
            name: "Algorithms and Data Structures 2",
            link: "https://kurser.dtu.dk/course/02110",
            assessments: [],
            average: ""
          },
          {
            code: "02405",
            ects: 5,
            name: "Probability Theory",
            link: "https://kurser.dtu.dk/course/02405",
            assessments: [],
            average: ""
          },
          {
            code: "02462",
            ects: 5,
            name: "Signals and Data",
            link: "https://kurser.dtu.dk/course/02462",
            assessments: [],
            average: ""
          },
          {
            code: "02464",
            ects: 5,
            name: "Artificial Intelligence and Human Cognition",
            link: "https://kurser.dtu.dk/course/02464",
            assessments: [],
            average: ""
          },
          {
            code: "02476",
            ects: 5,
            name: "Machine Learning Operations",
            link: "https://kurser.dtu.dk/course/02476",
            assessments: [],
            average: ""
          }
        ]
      },
      {
        title: "Fourth Semester Courses (expected)",
        period: "January 2025 - June 2025",
        courses: [
          {
            code: "02182",
            ects: 5,
            name: "Symbolic Artificial Intelligence",
            link: "https://kurser.dtu.dk/course/02182",
            assessments: [],
            average: ""
          },
          {
            code: "02463",
            ects: 5,
            name: "Active Machine Learning and Agency",
            link: "https://kurser.dtu.dk/course/02463",
            assessments: [],
            average: ""
          },
          {
            code: "02465",
            ects: 5,
            name: "Introduction to Reinforcement Learning and Control",
            link: "https://kurser.dtu.dk/course/02465",
            assessments: [],
            average: ""
          },
          {
            code: "02466",
            ects: 10,
            name: "Project Work - Bachelor of Artificial Intelligence and Data",
            link: "https://kurser.dtu.dk/course/02466",
            assessments: [],
            average: ""
          }
        ]
      },
      {
        title: "Fifth Semester Courses (expected)",
        period: "August 2025 - January 2026",
        courses: [
          {
            code: "ECE 4230",
            ects: null,
            name: "Computer Vision",
            link: "https://classes.cornell.edu/browse/roster/FA24/class/ECE/4230",
            assessments: [],
            average: ""
          },
          {
            code: "ECE 4750",
            ects: null,
            name: "Computer Architecture",
            link: "https://classes.cornell.edu/browse/roster/FA24/class/ECE/4750",
            assessments: [],
            average: ""
          },
          {
            code: "ECE 4770",
            ects: null,
            name: "Foundations of Robotics",
            link: "https://classes.cornell.edu/browse/roster/FA24/class/ECE/4770",
            assessments: [],
            average: ""
          },
          {
            code: "42620",
            ects: 5,
            name: "Science, Technology and Society",
            link: "https://kurser.dtu.dk/course/42620",
            assessments: [],
            average: ""
          }
        ]
      },
      {
        title: "Sixth Semester Courses (expected)",
        period: "January 2026 - June 2026",
        courses: [
          {
            code: "",
            ects: 15,
            name: "Bachelor Project",
            link: "",
            assessments: [],
            average: ""
          },
          {
            code: "10060",
            ects: 10,
            name: "Physics",
            link: "https://kurser.dtu.dk/course/10060",
            assessments: [],
            average: ""
          },
          {
            code: "26021",
            ects: 5,
            name: "Chemistry",
            link: "https://kurser.dtu.dk/course/26021",
            assessments: [],
            average: ""
          },
          {
            code: "27020",
            ects: 5,
            name: "Bioengineering",
            link: "https://kurser.dtu.dk/course/27020",
            assessments: [],
            average: ""
          }
        ]
      },
      {
        title: "Seventh & Eighth Semester Courses (expected)",
        period: "August 2026 - June 2027",
        courses: [
          {
            code: "02266",
            ects: 5,
            name: "User Experience Engineering",
            link: "https://kurser.dtu.dk/course/02266",
            assessments: [],
            average: ""
          },
          {
            code: "10060",
            ects: 10,
            name: "Physics",
            link: "https://kurser.dtu.dk/course/10060",
            assessments: [],
            average: ""
          },
          {
            code: "",
            ects: 5,
            name: "Project Course",
            link: "",
            assessments: [],
            average: ""
          },
          {
            code: "",
            ects: 30,
            name: "Various MSc courses for transitional semesters",
            link: "",
            assessments: [],
            average: ""
          }
        ]
      }
  ];
  
  export default semesters;
  