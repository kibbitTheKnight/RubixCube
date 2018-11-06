/* Keira Taylor and Ashley Smith
 * Graphics
 * Rubiks Cube Solver
 * Solves Rubiks cubes
*/


//create cube with faces
var faces = [];
for(i = 0; i < 6; i++)
{
  let temp = Array(9).fill(0);
  faces.push(temp);
}

//Commands for rotating cube

//--> Use for reference: https://rubiks-cu.be/

//Right Clockwise
var sides= [];
sides[0] = 0; sides[1] = 2; sides[2] = 5; sides[3] = 4;
var temp = faces.slice();
for(i = 0; i < 4; i++)
{
 for(j = 1; j <= 3; j++)
 {
   if(i == 0)
   {
    faces[sides[sides.length - 1]][j * 3 - 1] = temp[sides[i]][j * 3 - 1]; 
   }
   else
   {
     faces[sides[i - 1]][j * 3 - 1] = temp[sides[i]][j * 3 - 1];
   }
 }
}

//Right Counterclockwise

//Left Clockwise

//Left Counterclockwise

//Upper Clockwise

//Upper Counterclockwise

//Lower Clockwise

//Lower Counterclockwise

//Back Clockwise

//Back Counterclockwise
