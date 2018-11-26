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

//solving white face
function convertInstruction(cube, instruction, instrNum)
{
	console.log("Cube " + cube);
	temp = copyArray(cube);
	//console.log(instruction);
	switch(instruction)
	{
		case "fcw" : {fcw(cube); instrNum[0] = 4; instrNum[1] = -1; break;}
		case "fcc" : {fcc(cube); instrNum[0] = 4; instrNum[1] = 1; break;}
		case "lcw" : {lcw(cube); instrNum[0] = 0; instrNum[1] = 1; break;}
		case "lcc" : {lcc(cube); instrNum[0] = 0; instrNum[1] = -1; break;}
		case "rcw" : {rcw(cube); instrNum[0] = 1; instrNum[1] = 1; break;}
		case "rcc" : {rcc(cube); instrNum[0] = 1; instrNum[1] = -1; break;}
		case "dcw" : {dcw(cube); instrNum[0] = 3; instrNum[1] = 1; break;}
		case "dcc" : {dcc(cube); instrNum[0] = 3; instrNum[1] = -1; break;}
		case "bcw" : {bcw(cube); instrNum[0] = 5; instrNum[1] = 1; break;}
		case "bcc" : {bcc(cube); instrNum[0] = 5; instrNum[1] = -1; break;}
		case "ucw" : {ucw(cube); instrNum[0] = 2; instrNum[1] = -1; break;}
		case "ucc" : {ucc(cube); instrNum[0] = 2; instrNum[1] = 1; break;}
	}
	console.log("Cube 2 " + cube);
}
function whiteFacingDown(cube, instructions)
{
	instructions.push("fcw");
	instructions.push("fcw");
}
function whiteAtBottom(cube)
{
	instructions.push("dcw");
	instructions.push("rcw");
	instructions.push("fcc");
	instructions.push("rcc");
}
function whiteStuck(cube)
{
	instructions.push("lcw");
	instructions.push("dcw");
	instructions.push("lcc")
}

function finishFace(cube)
{
	instructions.push("rcc");
	instructions.push("dcc");
	instructions.push("rcw");
	instructions.push("dcw");
}

//solving center layer
function leftCenter(cube)
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

function leftCenter(cube)
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
function yellowCross(cube)
{
	instructions.push("fcw");
	instructions.push("rcw");
	instructions.push("ucw");
	instructions.push("rcc");
	instructions.push("ucc");
	instructions.push("fcc");
}

function swapEdges(cube)
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
function cycleCorners(cube)
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
function orientCorners(cube)
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
