export function findOutlier(integers: number[]): number | undefined {  
    const arraySample = integers.slice(0, 3);
    const isEven = arrayIntegersOddOrEven(arraySample);
    let sndIdx = integers.length-1;
    let outlier: number | undefined;

    for (let i=0; i<integers.length; i++) {
        const firstPointerIsEven = integers[i] % 2 === 0;
        const secondPointerIsEven = integers[sndIdx] % 2 === 0;

        if (firstPointerIsEven !== isEven) {
          outlier = integers[i];
          break;
        } 

        if (secondPointerIsEven !== isEven) {
          outlier = integers[sndIdx];
          break;
        } 
        sndIdx--;
    }

    return outlier;
}

const arrayIntegersOddOrEven = (arraySample: number[]): boolean => {
    let odd = 0;
    let even = 0;
    arraySample.map((int: number) => int % 2 === 0 ? even++ : odd++);
    return even > odd;
}


// Question 2 

// You are given an array (which will have a length of at least 3, but could be very large)
// containing integers. The array is either entirely comprised of odd integers or entirely
// comprised of even integers except for a single integer N. Write a method that takes the
// array as an argument and returns this "outlier" N.