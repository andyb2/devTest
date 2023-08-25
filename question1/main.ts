export function isValidWalk(walk: string[], minutes: number = 10) {

    // the length of the walk array needs to be 10 or else it won't result in a 10 min walk
    if (walk.length !== minutes) return false;

    let northSouth = 0;
    let eastWest = 0;

    for (let i=0; i<walk.length; i++) {
        if (walk[i] === 'n') northSouth++;
        if (walk[i] === 's') northSouth--;
        if (walk[i] === 'e') eastWest++;
        if (walk[i] === 'w') eastWest--;
    }

    if (northSouth === 0 && eastWest === 0) {
        return true;
    }

    return false;
}

// Question 1
// You live in the city of Cartesian where all roads are laid out in a perfect grid. 
// You arrived ten minutes too early to an appointment, so you decided to take the 
// opportunity to go for a short walk. 

// The city provides its citizens with a Walk Generating App on their phones -- 
// every time you press the button it sends you an array of one-letter strings representing 
// directions to walk (eg. ['n', 's', 'w', 'e']). 

// You always walk only a single block in a direction and you know it takes you one minute 
// to traverse one city block, so create a function that will return true if the walk the 
// app gives you will take you exactly ten minutes (you don't want to be early or late!) 
// and will, of course, return you to your starting point. Return false otherwise.


// > Note: you will always receive a valid array containing a random assortment of 
// > direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array 
// > (that's not a walk, that's standing still!).

