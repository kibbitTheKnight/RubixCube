/* Keira Taylor and Ashley Smith
 * Graphics
 * Rubiks Cube Solver
 * Solves Rubiks cubes
*/


//create cube with faces
function createJSCube()
{
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
	return cube;
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
		
		if(i == 3)
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][j][0] = temp[sides[0]][j][2];
			}
		}
		else if(i > 2)
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
		else if(i == 3)
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][j][0] = temp[sides[2]][j][2];
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

//Left Clockwise 
function lcw(cube)
{
	//with white up and green face
	sides[0] = 0; sides[1] = 2; sides[2] = 5; sides[3] = 4;
	var temp = copyArray(cube);
	
	for(i = 0; i < 4; i++)
	{
		if(i==0) {
			for(j=0;j<3;j++) {
				//top <-back
			cube[sides[i]][2-j][0]=temp[sides[3]][j][0];
			}
		}
		if(i==1) {
			for(j=0;j<3;j++){
				//front <-top
				cube[sides[1]][j][0]=temp[sides[0]][j][2];
			}
		}
		
		if(i==2) {
			for (j=0;j<3;j++) {
				//bot <- front
				cube[sides[2]][j][0]=temp[sides[1]][j][0];
			}
		}
		if(i==3) {
			for(j=0;j<3;j++) {
				//back <-bot
				cube[sides[3]][2-j][2]=temp[sides[2]][j][0];
			}
		}
		/*old
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
		}*/
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

//Left Counterclockwise
function lcc(cube)
{
	//with white up and green face
	sides[0] = 0; sides[1] = 2; sides[2] = 5; sides[3] = 4;
	var temp = copyArray(cube);
	
	for(i = 0; i < 4; i++)
	{
		if(i==0) {
			for (j=0;j<3;j++) {
				//top <-front
				cube[sides[0]][2-j][0]=temp[sides[1]][j][0];
			}
		}
		if(i==1) {
			for (j=0;j<3;j++) {
			//front <-bot
			cube[sides[1]][j][0]=temp[sides[2]][j][0];	
			}	
		}
		if(i==2) {
			for (j=0;j<3;j++) {
			//bot <-back
			cube[sides[2]][2-j][0]=temp[sides[3]][j][2];	
			}	
		}
		if(i==3) {
			for (j=0;j<3;j++) {
			//back <-top
			cube[sides[3]][j][2]=temp[sides[0]][j][2];	
			}	
		}
		
		/*old
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
		*/
	}
	tempFaces = copyArray(cube);
	for(i = 0; i < 3; i++)
	{
		for(j = 0; j < 3; j++)
		{
			cube[1][i][j] = tempFaces[1][j][2 - i];
		}
	}

}

//Upper Clockwise
function ucw(cube)
{
	//with white up and green face
	sides[0] = 4; sides[1] = 3; sides[2] = 2; sides[3] = 1;
	var temp = copyArray(cube);
	
	for(i = 0; i < 4; i++)
	{
		if(i==0) {
			for(j=0;j<3;j++){
				//left <-back
				cube[sides[0]][0][j]=temp[sides[3]][0][j];
			}
		}
		if(i==1) {
			for(j=0;j<3;j++){
			//front <-left
			cube[sides[1]][0][j]=temp[sides[0]][0][j];
		}
		}
		if(i==2) {
			for(j=0;j<3;j++){
				//right <-front
				cube[sides[2]][0][j]=temp[sides[1]][0][j];
			}
		}
		if(i==3) {
			for(j=0;j<3;j++){
				//back <-right
				cube[sides[3]][0][j]=temp[sides[2]][0][j];
			}
		}
		/* old
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
		*/
	}
	//need to test this part more
	tempFaces = copyArray(cube);
	for(i = 0; i < 3; i++)
	{
		placeholder=2;
		for(j = 0; j < 3; j++)
		{
			cube[0][i][j] = tempFaces[0][placeholder][i];
			placeholder--;
		}
	}
}
//Upper Counterclockwise
function ucc(cube)
{
	//with white up and green face
	sides[0] = 4; sides[1] = 3; sides[2] = 2; sides[3] = 1;
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
			cube[0][i][j] = tempFaces[0][j][2 - i];
		}
	}
}
//Lower Clockwise
function dcw(cube)
{
	//with white up and green face
	sides[0] = 4; sides[1] = 3; sides[2] = 2; sides[3] = 1;
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
		placeholder=2;
		for(j = 0; j < 3; j++)
		{
			cube[5][i][j] = tempFaces[5][placeholder][i];
			placeholder--;
		}
		
	}
}
//Lower Counterclockwise
function dcc(cube)
{
	//with white up and green face
	sides[0] = 4; sides[1] = 3; sides[2] = 2; sides[3] = 1;
	var temp = copyArray(cube);
	
	for(i = 0; i < 4; i++)
	{
		if(i == 0)
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][2][j] = temp[sides[3]][2][j];
			}
		}
		else
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][2][j] = temp[sides[i-1]][2][j];
			}
		}
	}
	tempFaces = copyArray(cube);
	for(i = 0; i < 3; i++)
	{
		placeholder=2;
		for(j = 0; j < 3; j++)
		{
			cube[5][i][j] = tempFaces[5][j][placeholder];
		}
		placeholder--;
	}
}
//Front Clockwise
//bro this took me so long to plan out it better work the 1st time--IT DIDNT BTW 
function fcw(cube)
{
	//the order we will be looking at the sides 
	//left, top, right, bottom
	sides[0]=1; sides[1]=0; sides[2]=3; sides[3]=5;
	
	//create copy of cube so it can be modified
	var temp = copyArray(cube);
	
	//rotating the edges
	for ( i=0; i<4; i++) {
		
		if(i==0){
			for (j =0;j<3; j++) {
				//left <-bot
				cube[sides[0]][j][2]=temp[sides[3]][2][j];
			
			}
		}
			if(i==1) {
				for(j=0;j<3;j++){
					//top <-left
				cube[sides[1]][2][j]=temp[sides[0]][j][2];
				}
				
			}
		
			if(i==2) {
				for (j=0;j<3;j++){
					//right <-top
					cube[sides[2]][j][0]=temp[sides[1]][0][j];
				}
			}
			

			if(i==3) {
				base=2;
				for(j=0; j<3;j++) {
					//bot <-right
					cube[sides[3]][0][j] = temp[sides[2]][0][j];
					
				}
			
			}
			
			
		}
		
	
	
	//create copy of cube so it can be modified
		tempFaces = copyArray(cube);
		//front face rotation clockwise
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

//Front Counterclockwise
function fcc(cube)
{
	//the order we will be looking at the sides 
	//left, top, right, bottom, front
	sides[0]=1; sides[1]=0; sides[2]=3; sides[3]=5;
	
	//create copy of cube so it can be modified
	var temp = copyArray(cube);
	
	//rotate the edges
	for( i=0; i<4; i++){
		
		if(i==0) {
			
			//base stays the same 
			//helps us detemine which row to put the mini square in
			base=2;
			for (j=0;j<3;j++) {
				
				//left <-top
				cube[sides[0]][j][2]=temp[sides[1]][2][j];
			}
		}
	
	
		if(i==1){
			for(j=0;j<3;j++){
				//top <-right
				cube[sides[i]][2][j]=temp[sides[2]][j][2];
			}
		}
		if(i==2) {
			base =2;
			for(j=0;j<3;j++){
				//right <-bot
				cube[sides[i]][j][0]=temp[sides[3]][0][j];
			}
		}
		if(i==3) {
			for(j=0;j<3;j++){
				//bot <-left
				cube[sides[i]][0][j]=temp[sides[0]][j][2];
			}
		}
	}
	
	//create copy of cube so it can be modified
	tempFaces = copyArray(cube);
	//front face rotating counterclockwise
	for (i=0;i<3;i++){
		add=2;
		for (j=0;j<3;j++) {
			console.log(tempFaces[2][j][2 - 1] + " " + j + " " + (2 - i));
			cube[2][j][i]=tempFaces[2][j][2 - 1];
			add--;
		}
	}
}

//Back Clockwise 
function bcw(cube)
{
	sides[0] = 0; sides[1] = 1; sides[2] = 5; sides[3] = 3;
	
	//create copy of cube so it can be modified
	var temp = copyArray(cube);
	
	//go through each affected side
	for(i = 0; i < 4; i++)
	{
		//move all cubes to the next side in the side[] list
		
		if(i == 1)
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][j][0] = temp[sides[i + 1]][0][j];
			}
		}
		else if (i == 3)
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][j][2] = temp[sides[0]][0][j];
			}
		}
		else if(i > 2)
		{
			for(j = 0; j < 3; j++)
			{
				//the top goes to the back
				//we are looking at the 2nd col of all the sides
				cube[sides[i]][0][j] = temp[sides[0]][0][j];
			}
		}
		else
		{
			for(j = 0; j < 3; j++)
			{
				
				//the rest of the sides go up around to the next side
				//cube[side][row][column]
				cube[sides[i]][0][j] = temp[sides[i+1]][0][j];
			}
		}
	}
	//rotating the face clockwise
	//create copy of cube so it can be modified
	tempFaces = copyArray(cube);
	for(i = 0; i < 3; i++)
	{
		for(j = 0; j < 3; j++)
		{
			cube[4][i][j] = tempFaces[4][j][2 - i];
		}
	}
}
//Back Counterclockwise 
function bcc(cube)
{
	//left, top, right, bot, back
	sides[0] = 5; sides[1] = 3; sides[2] = 0; sides[3] = 1; sides[4] = 4;
	
	//create copy of cube so it can be modified
	var temp = copyArray(cube);
	//rotating the edges
	for(i = 0; i < 4; i++)
	{
		if(i == 0)
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][0][j] = temp[sides[3]][0][j];
			}
		}
		else if(i == 3)
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][j][0] = temp[sides[i - 1]][0][j];
			}
		}
		else if(i == 1)
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][j][2] = temp[sides[i - 1]][0][j];
			}
		}
		else
		{
			for(j = 0; j < 3; j++)
			{
				cube[sides[i]][0][j] = temp[sides[i-1]][0][j];
			}
		}
	}
	//rotating the face counterclockwise
	//create copy of cube so it can be modified
	tempFaces = copyArray(cube);
	for (i=0;i<3;i++){
		placeholder=2;
		for (j=0;j<3;j++) {
			//i think this formula is wrong
			
			cube[sides[4]][i][j]=tempFaces[sides[4]][j][placeholder];
		}
		placeholder--;
	}
}

function flipr(cube)
{
	temp = copyArray(cube);
	for(i = 0; i < 4; i++)
	{
		if(i == 0)
		{
			cube[i + 1] = temp[4];
		}
		else
		{
			cube[i + 1] = temp[i];
		}
	}
}

function flipl(cube)
{
	temp = copyArray(cube);
	for(i = 1; i < 5; i++)
	{
		if(i == 4)
		{
			cube[i] = temp[1];
		}
		else
		{
			cube[i] = temp[i + 1];
		}
	}
}

function flipu(cube)
{
	temp = copyArray(cube);
	cube[0] = temp[5];
	cube[5] = temp[0];
	cube[2] = temp[4];
	cube[4] = temp[2];
	
	for(i = 1; i < 5; i++)
	{
		for(r = 0; r < 3; r++)
		{
			for(c = 0; c < 3; c++)
			{
				cube[i][c][r] = temp[i][2 - r][2 - c];
			}
		}
	}
}

//solving

//full solution
function solve(cube, moves)
{
	//white side
	//get white cross
	for(i = 0; i < 4; i++)
	{
		/*
		 Cube looks like:	x b x
							o 0 r
							x g x
		 
		 Where x is anything
		 b must be blue (4)
		 o must be orange (1)
		 r must be red (3)
		 g must be green (2)
		 
		*/
		
		//if b != blue
		if(cube[0][0][1] != 4)
		{
			if(cube[5][2][1] == 4)
			{
				moves.push("fcw");
				moves.push("fcw");
			}
		}
		//if o != orange
		if(cube[0][1][0] != 1)
		{
			
		}
		//if r != red
		if(cube[0][1][2] != 3)
		{
			
		}
		//if g != green
		if(cube[0][2][1] != 2)
		{
			
		}
	}
	
	//sides
	
	//yellow side
}

function step3(cube, moves)
{
	//loop until two layers are solved
	rows = []; rows.push(0); rows.push(1); rows.push(1); rows.push(2);
	cols = []; cols.push(1); cols.push(0); cols.push(2); cols.push(1);
	
	//flip cube upside down
	moves.push("flipu");
	
	instructs.push("flipu");
	move(cube, instructs);
	instructs.splice(0, instructs.length);
	
	//make orange face front
	moves.push("flipr");
	
	instructs.push("flipr");
	move(cube, instructs);
	instructs.splice(0, instructs.length);
	
	//loop until win condition is met
	while(!winCondition(cube, 3))
	{
		//loop through orange, green, red, and blue
		for(i = 1; i < 5; i++)
		{
			var instructs = [];
			var left = (i == 1 ? 4 : (i - 1)); 	// face to the left
			var right = (i == 4 ? 1 : (i + 1)); // face to the right
			//if the box above the face matches the face, and its top is the color to the left, use the left algorithm
			if(cube[i][0][1] == f && cube[5][rows[i]][cols[i]] == left)
			{
				//add moves
				leftCenter(moves);
				
				//move cube
				leftCenter(instructs);
				move(cube, instructs);
				instructs.splice(0, instructs.length);
			}
			//if the box above the face matches the face, and its top is the color to the right, use the right algorithm
			if(cube[i][0][1] == f && cube[5][rows[i]][cols[i]] == right)
			{
				//add moves
				rightCenter(moves);
				
				//move cube
				rightCenter(instructs);
				move(cube, instructs);
				instructs.splice(0, instructs.length);
			}
			//if the cube is upside down
			if(cube[i][0][1] == left && cube[5][rows[i]][cols[i]] == f)
			{
				//add moves
				moves.push("ucw");
				
				//move cube
				instructs.push("ucw");
				move(cube, instructs);
				instructs.splice(0, instructs.length);
			}
			//if the cube is upside down
			if(cube[i][0][1] == right && cube[5][rows[i]][cols[i]] == f)
			{
				//add moves
				moves.push("ucc");
				
				//move cube
				instructs.push("ucc");
				move(cube, instructs);
				instructs.splice(0, instructs.length);
			}
			
		}
	}
}

function winCondition(cube, step)
{
	//check that all sides except for yellow are solved
	if(step == 3)
	{
		//check that the first two layers of the cube are solved
		for(f = 0; f < 5; f++)
		{
			var rFin = (f == 0 ? 3 : 2);
			for(r = 0; r < rFin; r++)
			{
				for(c = 0; c < 3; c++)
				{
					if(cube[f][r][c] != f)
					{
						return false;
					}
				}
			}
		}
	}
	
	return true;
}

//solving white face
function convertInstruction(instruction, instrNum)
{
	//console.log(instruction);
	switch(instruction)
	{
		case "fcw" : {instrNum[0] = 4; instrNum[1] = -1; instrNum[2] = 4; break;}
		case "fcc" : {instrNum[0] = 4; instrNum[1] = 1; instrNum[2] = 4; break;}
		case "lcw" : {instrNum[0] = 0; instrNum[1] = 1; instrNum[2] = 0; break;}
		case "lcc" : {instrNum[0] = 0; instrNum[1] = -1; instrNum[2] = 0; break;}
		case "rcw" : {instrNum[0] = 1; instrNum[1] = -1; instrNum[2] = 1; break;}
		case "rcc" : {instrNum[0] = 1; instrNum[1] = 1; instrNum[2] = 1; break;}
		case "dcw" : {instrNum[0] = 3; instrNum[1] = 1; instrNum[2] = 3; break;}
		case "dcc" : {instrNum[0] = 3; instrNum[1] = -1; instrNum[2] = 3; break;}
		case "bcw" : {instrNum[0] = 5; instrNum[1] = 1; instrNum[2] = 5; break;}
		case "bcc" : {instrNum[0] = 5; instrNum[1] = -1; instrNum[2] = 5; break;}
		case "ucw" : {instrNum[0] = 2; instrNum[1] = -1; instrNum[2] = 2; break;}
		case "ucc" : {instrNum[0] = 2; instrNum[1] = 1; instrNum[2] = 2; break;}
		case "flipr" : {instrNum[0] = 2; instrNum[1] = 1; instrNum[2] = 10; break;}
		case "flipl" : {instrNum[0] = 2; instrNum[1] = -1; instrNum[2] = 10; break;}
		case "flipu" : {instrNum[0] = 1; instrNum[1] = 1; instrNum[2] = 11; break;}
		case "flips" : {instrNum[0] = 1; instrNum[1] = 1; instrNum[2] = 10; break;}
	}
}

function move(cube, move)
{
	switch(instruction)
	{
		case "fcw" : {fcw(cube); break;}
		case "fcc" : {fcc(cube); break;}
		case "lcw" : {lcw(cube); break;}
		case "lcc" : {lcc(cube); break;}
		case "rcw" : {rcw(cube); break;}
		case "rcc" : {rcc(cube); break;}
		case "dcw" : {dcw(cube); break;}
		case "dcc" : {dcc(cube); break;}
		case "bcw" : {bcw(cube); break;}
		case "bcc" : {bcc(cube); break;}
		case "ucw" : {ucw(cube); break;}
		case "ucc" : {ucc(cube); break;}
		case "flipr" : {flipr(cube); break;}
		case "flipl" : {flipl(cube); break;}
		case "flipu" : {flipu(cube); break;}
	}
}

function moveList(cube, moves)
{
	for(i = 0; i < moves.length; i++)
	{
		switch(instruction)
		{
			case "fcw" : {fcw(cube); break;}
			case "fcc" : {fcc(cube); break;}
			case "lcw" : {lcw(cube); break;}
			case "lcc" : {lcc(cube); break;}
			case "rcw" : {rcw(cube); break;}
			case "rcc" : {rcc(cube); break;}
			case "dcw" : {dcw(cube); break;}
			case "dcc" : {dcc(cube); break;}
			case "bcw" : {bcw(cube); break;}
			case "bcc" : {bcc(cube); break;}
			case "ucw" : {ucw(cube); break;}
			case "ucc" : {ucc(cube); break;}
			case "flipr" : {flipr(cube); break;}
			case "flipl" : {flipl(cube); break;}
			case "flipu" : {flipu(cube); break;}
		}
	}
}

function whiteFacingDown(instructions)
{
	instructions.push("fcw");
	instructions.push("fcw");
}
function whiteAtBottom(instructions)
{
	instructions.push("dcw");
	instructions.push("rcw");
	instructions.push("fcc");
	instructions.push("rcc");
}
function whiteStuck(instructions)
{
	instructions.push("lcw");
	instructions.push("dcw");
	instructions.push("lcc")
}

function finishFace(instructions)
{
	instructions.push("rcc");
	instructions.push("dcc");
	instructions.push("rcw");
	instructions.push("dcw");
}

//solving center layer
function leftCenter(instructions)
{
	instructions.push("ucc"); 
	instructions.push("lcc"); 
	instructions.push("ucw"); 
	instructions.push("lcw"); 
	instructions.push("ucw");
	instructions.push("fcw"); 
	instructions.push("ucc");
	instructions.push("fcc");
}

function rightCenter(instructions)
{
	instructions.push("ucw");
	instructions.push("rcw"); 
	instructions.push("ucc");
	instructions.push("rcc"); 
	instructions.push("ucc");
	instructions.push("fcc");
	instructions.push("ucw");
	instructions.push("fcw");
}

//yellow side
function yellowCross(instructions)
{
	instructions.push("fcw");
	instructions.push("rcw");
	instructions.push("ucw");
	instructions.push("rcc");
	instructions.push("ucc");
	instructions.push("fcc");
}

function swapEdges(instructions)
{
	instructions.push("rcw");
	instructions.push("ucw");
	instructions.push("rcc");
	instructions.push("ucw");
	instructions.push("rcw");
	instructions.push("ucw");
	instructions.push("ucw");
	instructions.push("rcc");
	instructions.push("ucw");
}
function cycleCorners(instructions)
{
	instructions.push("ucw");
	instructions.push("rcw");
	instructions.push("ucc");
	instructions.push("lcc");
	instructions.push("ucw");
	instructions.push("rcc");
	instructions.push("ucc");
	instructions.push("lcw");
}
function orientCorners(instructions)
{
	instructions.push("rcc");
	instructions.push("dcc");
	instructions.push("rcw");
	instructions.push("dcw");
}

//helper functions
function copyArray(myarray)
{
	return JSON.parse(JSON.stringify(myarray));
}

function scrambleCube(moves, amount)
{
	var instructions = [];
	instructions.push("fcw");
	instructions.push("fcc");
	instructions.push("bcw");
	instructions.push("bcc");
	instructions.push("rcw");
	instructions.push("rcc");
	instructions.push("lcw");
	instructions.push("lcc");
	instructions.push("ucw");
	instructions.push("ucc");
	instructions.push("dcw");
	instructions.push("dcc");
	for(i = 0; i < amount; i++)
	{
		var num = Math.floor(Math.random() * 12);
		moves.push(instructions[num]);
	}
	
}
