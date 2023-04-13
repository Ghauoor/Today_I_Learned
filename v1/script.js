const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

console.log(CATEGORIES.find((cat) => cat.name === "finance").color);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

//Seleccting Dom Elements
const button = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".fact-list");

//Create DOM Element
// console.dir(button);
factsList.innerHTML = "";

//factsList.insertAdjacentHTML("afterbegin", "<li> Ghayoor </>");
//Load Datafrom Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://pkcimkypbafgqvphlvky.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrY2lta3lwYmFmZ3F2cGhsdmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk2MTA0NDAsImV4cCI6MTk5NTE4NjQ0MH0.8je_GT6bJJWMc1RzCFdKKoL-WuffsfnsXYUrOGRIQc8",

        autherization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrY2lta3lwYmFmZ3F2cGhsdmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk2MTA0NDAsImV4cCI6MTk5NTE4NjQ0MH0.8je_GT6bJJWMc1RzCFdKKoL-WuffsfnsXYUrOGRIQc8",
      },
    }
  );
  const data = await res.json();

  //const filteredData = data.filter((fact) => fact.category === "history");

  createFactsList(data);
  // console.log(data);
}

//createFactsList(initialFacts);

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">${fact.text}
  <p>
    <a
      class="source"
      href="${fact.source}"
      target="_blank">(Source)
    </a>
  </p>
  <span class="tag" style="background-color: ${
    CATEGORIES.find((cat) => cat.name === fact.category).color
  }">
    ${fact.category}
  </span>
  </li>`
  );
  // console.log(htmlArr);
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

//Toggle from Visibilty
button.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    button.textContent = "Close";
  } else {
    form.classList.add("hidden");
    button.textContent = "Share a fact";
  }
});

// console.log([5, 65, 9, -23, 11].filter((ele) => ele > 10));
console.log([5, 65, 9, -23, 11].find((ele) => ele > 10));

/*
const fact = ["Lahore is Love", 2015, true];
console.log(fact);
console.log(fact[2]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

const [text, createdIn, isCorrect] = fact;
console.log(text);

const newArray = [...fact, "Society"];
console.log(newArray);

const factObj = {
  text: "Lahore is Heart of Pakistan",
  category: "society",
  createdIn: 2015,
  isCorrected: true,
  createSummary: function () {
    return `The Fact "${this.text}" 
    is from category ${this.category.toUpperCase()}`;
  },
};

console.log(factObj.text);
console.log(factObj["text"]);

const { category, isCorrected } = factObj;
console.log(category); // "society"
console.log(isCorrect); // true
console.log(factObj.createSummary());

[1, 2, 3].forEach(function (ele) {
  console.log(ele);
});

  const times = [2, 3, 4, 5].map(function (ele) {
   return ele * 10;
  });

const times = [2, 4, 6, 8, 10].map((ele) => ele * 10);
console.log(times);


const text = "Ghayoor Hussain";
let votesMindblowing = 5;
let voteInteresting = 23;

voteInteresting = voteInteresting + 1;
voteInteresting++;
console.log(voteInteresting);

let totalUpvotes = voteInteresting + votesMindblowing;
console.log("Upvotes : " + totalUpvotes);

const isCorrect = voteInteresting < votesMindblowing;
console.log(isCorrect);


function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else
    return `Impossible year. Year Need to be less then or equal to ${currentYear}`;
}
const ageOne = calcFactAge(2015);

console.log(ageOne);
console.log(calcFactAge(2000));
console.log(calcFactAge(1999));
console.log(calcFactAge(2037));

const calcFactTwo = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. Year needs to be lesser then ${currentYear}`;
console.log(calcFactTwo(2015));

let votesMindblowing = 5;
let voteInteresting = 15;

if (voteInteresting === votesMindblowing) {
  alert("This Fact is Equally interesting and Mindbloing");
} else if (voteInteresting > votesMindblowing) {
  console.log("Interesting Fact!");
} else {
  console.log("Something Else");
}

if (votesMindblowing) {
  console.log("MINDBLOWING FACT !!!");
}

let votesFalse = 7;
const totalUpVotes = voteInteresting + votesMindblowing;

const message =
  totalUpVotes > votesFalse
    ? "The fact is true"
    : "Might be false check more Resources";
console.log(message);

const text = "Lisbon is capital of Portugal";
const upperText = text.toUpperCase();
console.log(upperText);

const str = `The current fact  "${text}". 
it is ${calcFactAge(2015)} years old. It is probally 
${totalUpVotes > votesFalse ? "correct" : "not true"}.`;
console.log(str);


const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCatagories = CATEGORIES.map((ele) => ele.name);
console.log(allCatagories);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else
    return `Impossible year. Year Need to be less then or equal to ${currentYear}`;
}

const factAges = initialFacts.map((ele) => calcFactAge(ele.createdIn));
console.log(factAges);

console.log(factAges.join(" & "));
*/
