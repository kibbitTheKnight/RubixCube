function rotateCube(face, cube, axis, scene, r, cc)
		{
			var turns = [];
			turns.push(new Array(6));
			//console.log(cube);
			turns[4] = [8, 17, 26, 5, 14, 23, 2, 11, 20]; //front, green face
			turns[5] = [24, 15, 6, 21, 12, 3, 18, 9, 0]; //back, blue face
			turns[0] = [6, 7, 8, 3, 4, 5, 0, 1, 2]; //left, orange face
			turns[1] = [26, 25 ,24, 23, 22, 21, 20, 19, 18]; //right, red face
			turns[2] = [24, 25, 26, 15, 16, 17, 6, 7, 8]; //up, white face
			turns[3] = [0, 1, 2, 9, 10, 11, 18, 19, 20]; //down, yellow face
			
			for(i = 0; i < cube.length; i++)
			{
				scene.remove(cube[i]);
			}
			
			for(i = 0; i < 9; i++)
			{
				cube[turns[face][i]].rotateOnAxis(axis, cc * r);
			}
			for(i = 0; i < cube.length; i++)
			{
				scene.add(cube[i]);
			}
			
		
		}