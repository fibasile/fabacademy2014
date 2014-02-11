



// params

body_height=48.0; 
body_width_top=20.0;
body_width_bottom=23.0;
body_depth_top=10.0;
body_depth_bottom=16.0;
body_arm_width=3.0;
body_arm_length=13.0;
eye_radius=5.0;
eye_position=0.80;
eye_rotation=-10;
mouth_position=0.50;
mouth_width=14.0;
mouth_height=5;

$fn = 100;


// size is a vector [w, h, d]
module roundedBox(width, height, depth, radius) {
  size=[width, height, depth];
  cube(size - [2*radius,0,0], true);
  cube(size - [0,2*radius,0], true);
  for (x = [radius-size[0]/2, -radius+size[0]/2],
       y = [radius-size[1]/2, -radius+size[1]/2]) {
    translate([x,y,0]) cylinder(r=radius, h=size[2], center=true);
  }
}


module body(width_top, width_bottom,height,depth_top, depth_bottom,arm_width ,arm_length){

	  color("green"){
       union(){
        union(){
		
     polyhedron(points=[ [-width_bottom/2.0, -depth_bottom/2.0, 0], 
					   [width_bottom/2.0, -depth_bottom/2.0, 0],
                         [width_top/2.0,  -depth_top/2.0, height], 
                         [-width_top/2.0,  -depth_top/2.0, height],
					  [-width_bottom/2.0, depth_bottom/2.0, 0], 				
                         [width_bottom/2.0, depth_bottom/2.0, 0], 
                         [width_top/2.0,  depth_top/2.0, height], 
                         [-width_top/2.0,  depth_top/2.0, height],],
	           triangles= [ [3,2,0], [2,1,0], // front
                             [4,6,7], [4,5,6], // back
                             [0,5,4], [0,1,5], // bottom
                             [7,3,4], [3,0,4], // left
                             [6,2,3],  [7,6,3], // top
                             [2,6,1], [5,1,6] // right
                             ]);

     translate([0,0,body_height]) rotate([90,0,0])  roundedBox(body_width_top, body_width_top/3, body_depth_top,body_depth_top/5);
    
     //arms
     translate([-body_width_bottom/2.0 + (body_width_bottom-body_width_top) ,0, body_height / 1.5]) arm(arm_width,arm_length);
     }
     rotate([180,180,0]) translate([-body_width_bottom/2.0 + (body_width_bottom-body_width_top) ,0, body_height / 2.5]) arm(arm_width,arm_length);

		}	// union
	} // color
}

module eye(radius) {
   
	  rotate([eye_rotation,0,0]) difference(){
          color("white") sphere(r=radius);
          color("black") translate([0,-radius])  sphere(r=radius*0.1);
     }
}

module mouth(width,height,angle){
   color("blue") rotate([90+angle,0,0]) roundedBox(width,height,height/2.0,height/5.0);
}

module arm(width,height){
   rotate([0,-90,0]){
   union(){
   cylinder(r=width,h=height);
   translate([0,0,height]) sphere(r=width);
   translate([0,0,height]) rotate([0,90,0]) union(){
      cylinder(r=width,h=height);
	  translate([0,0,height]) sphere(r=width);
   }
   }
   }
}




union(){
  union(){
        body(body_width_top, body_width_bottom,body_height, body_depth_top, body_depth_bottom, body_arm_width,body_arm_length );
        translate([0,-body_width_top/4.0,body_height*eye_position]) eye(eye_radius);
  }
  translate([0, -body_depth_bottom/2.5, body_height*mouth_position]) mouth(mouth_width,mouth_height,-3*mouth_position );

}


