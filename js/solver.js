/* Keira Taylor and Ashley Smith
 * Graphics
 * Rubix Cube Solver
 * Solves Rubix cubes
*/


//create cube with faces
var faces = [];
for(i = 0; i < 6; i++)
{
  let temp = Array(9).fill(0);
  faces.push(temp);
}


