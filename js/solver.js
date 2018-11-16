/* Keira Taylor and Ashley Smith
 * Graphics
 * Rubiks Cube Solver
 * Solves Rubiks cubes
*/


//create cube with faces
var cube = [];
for(f = 0; f < 6; f++)
{
	var faces = [];
	for(i = 0; i < 3; i++)
	{
	let temp = Array(3).fill(f);
	faces.push(temp);
	}
	cube.push(faces);
}

//For testing purposes: for(i = 0; i < 6; i++) {faces[i][8] = i + 1;} for(i = 0; i < 3; i++) {for(j = 0; j < 3; j++) {faces[i][j] = (i * 3) + j;}}

//Commands for rotating cube

//--> Use for reference: https://rubiks-cu.be/

var sides= [];

//Right Clockwise
function rw(cube)
{
	/*sides[0] = 0; sides[1] = 2; sides[2] = 5; sides[3] = 4;
	var temp = copyArray(faces);
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
	}*/
	tempFaces = copyArray(cube);
	for(i = 0; i < 3; i++)
	{
		for(j = 0; j < 3; j++)
		{
			cube[3][i][j] = tempFaces[3][2 - j][i];
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


//helper functions
function copyArray(myarray)
{
 let faces = 6;
 let rows = myarray[0].length;
 let cols = myarray[0][0].length;
 let temp = [];
 
  for(f = 0; f < faces; f++)
  {
	  console.log("Faces: " + faces + " f: " + f);
	var faceses = [];
	//faceses.push(Array(rows));
	for(r = 0; r < rows; r++)
	{
		faceses.push(Array(cols));
		for(c = 0; c < cols; c++)
		{
			console.log(myarray[f][r][c]);
			faceses[r][c] = myarray[f][r][c];
		}
	}
	cube.push(faceses);
	cube.splice(6, 4);
  }
	return cube;
}
