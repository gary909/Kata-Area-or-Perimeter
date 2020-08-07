/*
https://www.codewars.com/kata/area-or-perimeter

Area or Perimeter

You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

area_or_perimeter(6, 10) --> 32
area_or_perimeter(4, 4) --> 16
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function(l , w) {
  // Return your answer
};

Sample Tests:
Test.assertEquals(areaOrPerimeter(4 , 4) , 16);
Test.assertEquals(areaOrPerimeter(6 , 10) , 32);
*/


const areaOrPerimeter = function(l , w) {
    if (l == w) {
      return l * w;
    } else {
      return l + l + w + w;
    }
  };
  
  console.log(areaOrPerimeter(4,4));
  
  
  // Hint 1:  We can see in the sample tests if you  give the numbers 4, 4 it expects the answer 16.  4 * 4 = 16, but the next sum 6, 10 expects the answer 32.  This will require a different method to calculate.
  // Hint 2: We need to return two different sums, depending on 'IF' l equals w. 