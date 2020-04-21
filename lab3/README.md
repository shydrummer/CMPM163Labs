Cube with shaders video link: https://drive.google.com/file/d/1I--A6AGeBcJIa3EtbBhMMYEW0mm5JxCV/view?usp=sharing

![alt text](shaders.png "shaders")

# How I made the cubes, left to right.

For the first cube, the effect of the shader is not visible in the photo. You need to view the video to see. The cube flickers between light blue and white. I used a sin function in the fragment shader that uses the current time in the computer system as an input for the color. Within the html script section, I have a delta that is slight increasing each frame in the animation. This is what creates the faded flicker vs a straight two color flicker.

For the second cube, I used the three.js built in Phong shader. In the parameters when I created the instance of the cube, I set the a base color, a specular color and the shininess value to my desired aesthietc.

For the third cube, I followed the setup from the tutorial to make a custom shader. In the fragment shader, I used the mix function to interporalte between two colors. I modified the color output to fall along the vUv.y rather than the vUv.x, to see how that would affect the output of the shader, as this sube I made following the video instructions.

For the final cube on the right, I used the three.js build in Phong shader. I created a green specular color. I also added a normalMap and map. For the map, I loaded a liquid graident pattern I found online. 
![](normal.png | width=100)
For the normal map, I loaded a galaxy picture.
![](space.png | width=100)
I then...