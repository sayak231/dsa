// Find profession in a special family

// Consider a special family of Engineers and Doctors with following rules :

// Everybody has two children.
// First child of an Engineer is an Engineer and second child is a Doctor.
// First child of an Doctor is Doctor and second child is an Engineer.
// All generations of Doctors and Engineers start with Engineer.
// We can represent the situation using below diagram:

//                 E
//            /
//           E          D
//         /          /
//        E     D     D    E
//       /    /    /    /
//      E   D D   E  D  E  E  D
// Given level and position of a person in above ancestor tree, find the profession of the person.
// Examples :

// Input : level = 4, pos = 2
// Output : Doctor

// Input : level = 3, pos = 4
// Output : Engineer

function findProffesion(level, pos) {
  // Base case
  if (level == 1) return "e";

  // Recursively find parent's
  // profession. If parent
  // is a Doctor, this node
  // will be a Doctor if it
  // is at odd position and an
  // engineer if at even position
  if (findProffesion(level - 1, (pos + 1) / 2) == "d")
    return pos % 2 > 0 ? "d" : "e";

  // If parent is an engineer,
  // then current node will be
  // an engineer if at add
  // position and doctor if even
  // position.
  return pos % 2 > 0 ? "e" : "d";
}

console.log(findProffesion(4, 6));
