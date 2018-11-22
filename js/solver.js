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
//? what do you mean by this
function rcw(cube)
{
	//with white up and green face
	
	//sides affected
	/*side 0 = white, side 1 = green, side 2 = yellow, side 3 = red, 
	 ? but arnt there 4 sides? 
	 or are these the only sides being affected -> yes
		?are we saying that each side has only a single color? ->
	*/
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
				//the top goes to the back
				//we are looking at the 2nd col of all the sides
				cube[sides[i]][j][2] = temp[sides[0]][j][2];
			}
		}
		else
		{
			for(j = 0; j < 3; j++)
			{
				
				//the rest of the sides go up around to the next side
				//cube[side][row][column]
				cube[sides[i]][j][2] = temp[sides[i+1]][j][2];
			}
		}
	}
	
	//create copy of cube so it can be modified
	tempFaces = copyArray(cube);
	
	//rotate face clockwise, moving all cubes in clockwise a circle
	//is this cube[side][row][col]?
	//why do we need to do this?
	//we are updating the side of the cube (side 3)
	for(i = 0; i < 3; i++)
	{
		for(j = 0; j < 3; j++)
		{
			//why [2-j][i]?
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
//bro this took me so long to plan out it better work the 1st time we test this
function fcw(cube)
{
	//the order we will be looking at the sides 
	//left, top, right, bottom
	side[0]=1; side[1]=0; side[2]=3; side[3]=5;
	var temp = copyArray(cube);
	//rotating the edges
	for ( i=0; i<4; i++) {
		
		
		//left edge to top
		if(i==0){
			for (j =0;j<3; j++) {
				//top 					<-	left
				cube[side[i]][j][2]=temp[side[i+1]][j][2];
			
			}
			
			//top to right
			if(i==1) {
				//base will stay the same, we will subtract j
				//from this to get the correct row
				base=2;
				for(j=0;j<3;j++){
					//right <-top
				cube[side[i]][base-j][2]=temp[side[i+1]][j][0];
				}
				
			}
			
			//right to bottom
			if(i==2) {
				for (j=0;j<3;j++){
					//bottom           <- right
					cube[side[2]][j][0]=temp[side[i+1]][j][0];
				}
			}
			
			//from bottom edge to left edge
			if(i==3) {
				//base will stay the same, we will subtract j 
				//from this to get the correct row
				base=2;
				for(j=0; j<3;j++) {
					//left <- bottom
					cube[side[i]][base-j][0] = temp[side[3]][j][2];
					
				}
			
			}
				//create copy of cube so it can be modified
			tempFaces = copyArray(cube);
			//front face rotation
			for (i=0;i<3;i++) {
				
				//base stays the same to help us determine what row
				//the mini square on the face goes to
				base=2;
				for (j=0;j<3;j++){
					//front face is represented by the number 2
					//cube[side][row][col]
					cube[2][i][j]=tempFaces[2][base-j][j];
				}
			}
			
		}
	}
	
	
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
