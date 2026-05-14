// ===============================
// RESPONSIVE NAVIGATION
// ===============================

const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("main-nav");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    const expanded =
        navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", !expanded);
});

// ===============================
// FOOTER DYNAMIC DATES
// ===============================

const currentYear = new Date().getFullYear();

document.getElementById("year-about").textContent = currentYear;

document.getElementById("lastModified").textContent =
    document.lastModified;

// ===============================
// COURSE ARRAY
// ===============================

const courses = [
    {
        code: "WDD 130",
        name: "Web Fundamentals",
        credits: 2,
        subject: "WDD",
        completed: true
    },
    {
        code: "WDD 131",
        name: "Dynamic Web Fundamentals",
        credits: 2,
        subject: "WDD",
        completed: true
    },
    {
        code: "WDD 231",
        name: "Web Frontend Development I",
        credits: 2,
        subject: "WDD",
        completed: false
    },
    {
        code: "CSE 110",
        name: "Introduction to Programming",
        credits: 2,
        subject: "CSE",
        completed: true
    },
    {
        code: "CSE 111",
        name: "Programming with Functions",
        credits: 2,
        subject: "CSE",
        completed: true
    },
    {
        code: "CSE 210",
        name: "Programming with Classes",
        credits: 2,
        subject: "CSE",
        completed: false
    }
];

// ===============================
// COURSE DISPLAY
// ===============================

const courseGrid = document.querySelector(".course-grid");
const totalCredits = document.getElementById("total-credits");

// display courses
function displayCourses(courseList) {

    courseGrid.innerHTML = "";

    courseList.forEach(course => {

        const courseCard = document.createElement("div");

        courseCard.classList.add("course-box");

        // completed course style
        if (course.completed) {
            courseCard.classList.add("completed");
        }

        courseCard.innerHTML = `
            <h3>${course.code}</h3>
            <p>${course.name}</p>
            <p>${course.credits} Credits</p>
        `;

        courseGrid.appendChild(courseCard);
    });

    // dynamic credits using reduce
    const credits = courseList.reduce(
        (total, course) => total + course.credits,
        0
    );

    totalCredits.textContent =
        `Total Credits: ${credits}`;
}

// ===============================
// FILTER BUTTONS
// ===============================

const buttons = document.querySelectorAll(".filter-buttons button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const label = button.textContent;

        if (label === "ALL") {
            displayCourses(courses);

        } else {

            const filteredCourses = courses.filter(course =>
                course.subject === label
            );

            displayCourses(filteredCourses);
        }
    });
});

// initial display
displayCourses(courses);