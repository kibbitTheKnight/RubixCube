/* Keira Taylor and Ashley Smith
 * Graphics
 * Rubiks Cube Solver
 * Solves Rubiks cubes
*/


//create cube with faces
var cube = [];
//for each face
for(f = 0; f < 6; f++)
{
	//go through each row
	var faces = [];
	for(i = 0; i < 3; i++)
	{
	//fill each spot with the number representing which face it is
	let temp = Array(3).fill(f);
	faces.push(temp);
	}
	cube.push(faces);
}

//For testing purposes: for(i = 0; i < 6; i++) {faces[i][8] = i + 1;} for(i = 0; i < 3; i++) {for(j = 0; j < 3; j++) {faces[i][j] = (i * 3) + j;}}

//Commands for rotating cube

//--> Use for reference: https://rubiks-cu.be/

/*
	References
		0 == white
		1 == orange
		2 == green
		3 == red
		4 == blue
		5 == yellow
*/

var sides= [];

//Right Clockwise
function rcw(cube)
{
	//with white up and green face
	
	//sides affected
	sides[0] = 0; sides[1] = 2; sides[2] = 5; sides[3] = 4;
	
	//create copy of cube so it can be modified
	var temp = copyArray(cube);
	
	//go through each affected side
	for(i = 0; i < 4; i++)
	{
		//move all cubes to the next side in the side[] list
		if(i > 2)
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][j][2] = temp[sides[0]][j][2];
			}
		}
		else
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][j][2] = temp[sides[i+1]][j][2];
			}
		}
	}
	
	//create copy of cube so it can be modified
	tempFaces = copyArray(cube);
	
	//rotate face clockwise, moving all cubes in clockwise a circle
	for(i = 0; i < 3; i++)
	{
		for(j = 0; j < 3; j++)
		{
			cube[3][i][j] = tempFaces[3][2 - j][i];
		}
	}
}

//Right Counterclockwise
function rcc(cube)
{
	//with white up and green face
	sides[0] = 0; sides[1] = 2; sides[2] = 5; sides[3] = 4;
	var temp = copyArray(cube);
	
	for(i = 0; i < 4; i++)
	{
		if(i == 0)
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][j][2] = temp[sides[3]][j][2];
			}
		}
		else
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][j][2] = temp[sides[i-1]][j][2];
			}
		}
	}
	tempFaces = copyArray(cube);
	for(i = 0; i < 3; i++)
	{
		for(j = 0; j < 3; j++)
		{
			cube[3][i][j] = tempFaces[3][j][2 - i];
		}
	}
}

//Left Clockwise -- NOT TESTED
function lcw(cube)
{
	//with white up and green face
	sides[0] = 0; sides[1] = 2; sides[2] = 5; sides[3] = 4;
	var temp = copyArray(cube);
	
	for(i = 0; i < 4; i++)
	{
		if(i > 2)
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][j][2] = temp[sides[0]][j][2];
			}
		}
		else
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][j][2] = temp[sides[i+1]][j][2];
			}
		}
	}
	tempFaces = copyArray(cube);
	for(i = 0; i < 3; i++)
	{
		for(j = 0; j < 3; j++)
		{
			cube[1][i][j] = tempFaces[1][2 - j][i];
		}
	}
}

//Left Counterclockwise -- NOT TESTED
function lcc(cube)
{
	//with white up and green face
	sides[0] = 0; sides[1] = 2; sides[2] = 5; sides[3] = 4;
	var temp = copyArray(cube);
	
	for(i = 0; i < 4; i++)
	{
		if(i > 2)
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][j][2] = temp[sides[0]][j][2];
			}
		}
		else
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][j][2] = temp[sides[i+1]][j][2];
			}
		}
	}
	tempFaces = copyArray(cube);
	for(i = 0; i < 3; i++)
	{
		for(j = 0; j < 3; j++)
		{
			cube[1][i][j] = tempFaces[3][j][2 - i];
		}
	}
}

//Upper Clockwise -- NOT TESTED
function ucw(cube)
{
	//with white up and green face
	sides[0] = 1; sides[1] = 2; sides[2] = 3; sides[3] = 4;
	var temp = copyArray(cube);
	
	for(i = 0; i < 4; i++)
	{
		if(i > 2)
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][0][j] = temp[sides[0]][0][j];
			}
		}
		else
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][0][j] = temp[sides[i+1]][0][j];
			}
		}
	}
	tempFaces = copyArray(cube);
	for(i = 0; i < 3; i++)
	{
		for(j = 0; j < 3; j++)
		{
			cube[0][i][j] = tempFaces[3][2 - j][i];
		}
	}
}
//Upper Counterclockwise -- NOT TESTED
function ucc(cube)
{
	//with white up and green face
	sides[0] = 1; sides[1] = 2; sides[2] = 3; sides[3] = 4;
	var temp = copyArray(cube);
	
	for(i = 0; i < 4; i++)
	{
		if(i > 2)
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][0][j] = temp[sides[0]][0][j];
			}
		}
		else
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][0][j] = temp[sides[i+1]][0][j];
			}
		}
	}
	tempFaces = copyArray(cube);
	for(i = 0; i < 3; i++)
	{
		for(j = 0; j < 3; j++)
		{
			cube[0][i][j] = tempFaces[3][j][2 - i];
		}
	}
}
//Lower Clockwise -- NOT TESTED
function lcw(cube)
{
	//with white up and green face
	sides[0] = 1; sides[1] = 2; sides[2] = 3; sides[3] = 4;
	var temp = copyArray(cube);
	
	for(i = 0; i < 4; i++)
	{
		if(i > 2)
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][2][j] = temp[sides[0]][2][j];
			}
		}
		else
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][2][j] = temp[sides[i+1]][2][j];
			}
		}
	}
	tempFaces = copyArray(cube);
	for(i = 0; i < 3; i++)
	{
		for(j = 0; j < 3; j++)
		{
			cube[5][i][j] = tempFaces[3][2 - j][i];
		}
	}
}
//Lower Counterclockwise -- NOT TESTED
function lcc(cube)
{
	//with white up and green face
	sides[0] = 1; sides[1] = 2; sides[2] = 3; sides[3] = 4;
	var temp = copyArray(cube);
	
	for(i = 0; i < 4; i++)
	{
		if(i > 2)
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][2][j] = temp[sides[0]][2][j];
			}
		}
		else
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][2][j] = temp[sides[i+1]][2][j];
			}
		}
	}
	tempFaces = copyArray(cube);
	for(i = 0; i < 3; i++)
	{
		for(j = 0; j < 3; j++)
		{
			cube[5][i][j] = tempFaces[3][j][2 - i];
		}
	}
}
//Front Clockwise
function fcw(cube)
{
	
}
//Front Counterclockwise
function fcc(cube)
{
	
}
//Back Clockwise
function bcw(cube)
{
	
}
//Back Counterclockwise
function bcc(cube)
{
	
}

//helper functions
function copyArray(myarray)
{
	return JSON.parse(JSON.stringify(myarray));
}
