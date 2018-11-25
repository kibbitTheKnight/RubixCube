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
			cube[sides[i]][2-j][2]=temp[sides[3]][j][2];
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
				cube[sides[0]][2-j][2]=temp[sides[1]][j][0];
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
	sides[0] = 1; sides[1] = 2; sides[2] = 3; sides[3] = 4;
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
				cube[sides[3]][0][j]=temp[sides[1]][0][j];
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
			cube[0][i][j] = tempFaces[0][j][2 - i];
		}
	}
}
//Lower Clockwise
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
		placeholder=2;
		for(j = 0; j < 3; j++)
		{
			cube[5][i][j] = tempFaces[5][placeholder][i];
			placeholder--;
		}
		
	}
}
//Lower Counterclockwise
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
		placeholder=2;
		for(j = 0; j < 3; j++)
		{
			cube[5][i][j] = tempFaces[5][j][palceholder];
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
				cube[sides[0]][j][2]=temp[sides[3]][0][j];
			
			}
		}
			if(i==1) {
				for(j=0;j<3;j++){
					//top <-left
				cube[sides[1]][0][j]=temp[sides[0]][j][2];
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
	sides[0]=1; sides[1]=0; sides[2]=3; sides[3]=5; sides[4]=4;
	
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
				cube[sides[0]][j][2]=temp[sides[1]][0][j];
			}
		}
	
	
		if(i==1){
			for(j=0;j<3;j++){
				//top <-right
				cube[sides[i]][0][j]=temp[sides[2]][j][0];
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
			cube[sides[4]][j][i]=tempFaces[sides[4]][j][i+add];
			add--;
		}
	}
}

//Back Clockwise -- not tested
function bcw(cube)
{
	//the order we will be looking at the sides 
	//left, top, right, bottom, front
	side[0]=1; side[1]=0; side[2]=3; side[3]=5; side[4]=4;
	
	//create copy of cube so it can be modified
	var temp = copyArray(cube);
	
	//rotating the edges
	for(i=0;i<4;i++){
		
		if(i==0) {
			base=2;
			for (j=0;j<3;j++){
				//left <- bot
				cube[side[0]][base-j][0]=temp[side[1]][j][2];
			}
		}
		
		if(i==1)
			for (j=0;j<3;j++) {
				//top <- left
				cube[side[1]][j][0]=temp[side[0]][j][0];
			}
			
		if(i==2)
			base=2;
			for(j=0;j<3;j++) {
				//right <- top
				cube[side[1]][base-j][2]=temp[side[1]][j][0];
			}
			
		if (i==3) {
			for (j=0;j<3;j++) {
				//bot <-right
				cube[side[3]][j][2]=temp[side[2]][j][2];
			}
		}
		
	}
	//rotating the face clockwise
	//create copy of cube so it can be modified
	tempFaces = copyArray(cube);
	for (i=0;i<3;i++){
		add=2;
		for (j=0;j<3;j++) {
			cube[side[4]][j][i]=tempFaces[side[4]][j][i+add];
			
		}
		add--;
	}
}
//Back Counterclockwise -- not tested
function bcc(cube)
{
	//left, top, right, bot, back
	sides[0] = 1; sides[1] = 0; sides[2] = 3; sides[3] = 5; sides[3] = 4;
	
	//create copy of cube so it can be modified
	var temp = copyArray(cube);
	//rotating the edges
	for(i=0;i<4;i++){
		
		if(i==0) {
			for (j=0;j<3;j++){
				//left <- top
				cube[side[0]][j][0]=temp[side[1]][j][0];
			}
		}
		
		if(i==1)
			base=2;
			for (j=0;j<3;j++) {
				//top <- right
				cube[side[1]][base-j][0]=temp[side[2]][j][2];
			}
			
		if(i==2)
			for(j=0;j<3; j++) {
				//right <-bot
				cube[side[2]][j][2]=temp[side[3]][j][2];
			}
			
		if (i==3) {
			base=2;
			for (j=0;j<3;j++) {
				//bot <-left
				cube[side[3]][base-j][2]=temp[side[1]][j][0];
			}
		}	
	}
	//rotating the face counterclockwise
	//create copy of cube so it can be modified
	tempFaces = copyArray(cube);
	for (i=0;i<3;i++){
		add=2;
		for (j=0;j<3;j++) {
			//i think this formula is wrong
			
			cube[side[4]][i][j]=tempFaces[side[4]][j+add][i];
		}
		add--;
	}
}

//solving

//solving white face
function whiteFacingDown(cube)
{
	fcw(cube);
	fcw(cube);
}
function whiteAtBottom(cube)
{
	dcw(cube);
	rcw(cube);
	fcc(cube);
	rcc(cube);
}
function whiteStuck(cube)
{
	lcw(cube);
	dcw(cube);
	lcc(cube);
}

function finishFace(cube)
{
	rcc(cube);
	dcc(cube);
	rcw(cube);
	dcw(cube);
}

//solving center layer
function leftCenter(cube)
{
	ucc(cube);
	lcc(cube);
	ucw(cube);
	lcw(cube);
	ucw(cube);
	fcw(cube);
	ucc(cube);
	fcc(cube);
}

function leftCenter(cube)
{
	ucw(cube);
	rcw(cube);
	ucc(cube);
	rcc(cube);
	ucc(cube);
	fcc(cube);
	ucw(cube);
	fcw(cube);
}

//yellow side
function yellowCross(cube)
{
	fcw(cube);
	rcw(cube);
	ucw(cube);
	rcc(cube);
	ucc(cube);
	fcc(cube);
}

function swapEdges(cube)
{
	rcw(cube);
	ucw(cube);
	rcc(cube);
	ucw(cube);
	rcw(cube);
	ucw(cube);
	ucw(cube);
	rcc(cube);
	ucw(cube);
}
function cycleCorners(cube)
{
	ucw(cube);
	rcw(cube);
	ucc(cube);
	lcc(cube);
	ucw(cube);
	rcc(cube);
	ucc(cube);
	lcw(cube);
}
function orientCorners(cube)
{
	rcc(cube);
	dcc(cube);
	rcw(cube);
	dcw(cube);
}

//helper functions
function copyArray(myarray)
{
	return JSON.parse(JSON.stringify(myarray));
}
