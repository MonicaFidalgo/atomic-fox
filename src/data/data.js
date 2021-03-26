import dreams from "../Assets/Projects/dreams-flexbox.png";
import dogs from "../Assets/Projects/dogs-adoption.png"

const expected = [
  {
    id: 1,
    name: "Dreamer Fox",
    description: "I wanted to play around with Flexbox, so I created this cool and animated pen, that each panel, when clicked, expands and show a bigger image and more text.",
    img: dreams,
    url: "https://codepen.io/monica-fidalgo/pen/JazMbJ",
    tech: "JavaScript ES6",
    project: false
  },
  {
    id: 2,
    name: "Dog Adoption Experience",
    description: "A store were you can search for pets available to be adopted. The project is connected to an API to load dog images dynamically.",
    img: dogs,
    url: "https://codesandbox.io/s/jz1k56m1xw",
    tech: "vue.js",
    project: false
  }
];

export default expected;