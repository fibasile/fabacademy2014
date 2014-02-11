


var w = new Array();


function roundedBox(width, height, depth, radius){

	  var size=new CSG.Vector3D(width, height, depth);
	  var r1 = new CSG.Vector3D(2*radius, 0, 0);
	  var r2 = new CSG.Vector3D(0,2*radius,0);
	  var size_r1 = size.minus(r1);
	  var size_r2 = size.minus(r2)
	  var rb = new Array();
	  rb.push(cube({size: [size_r1.x,size_r1.y,size_r1.z], center:true}));
	  rb.push(cube({size: [size_r2.x,size_r2.y,size_r2.z], center:true}));
	  rb.push(cylinder({r:radius, h:size.z, center:true}).translate([ radius-size.x/2,-radius+size.y/2,0]));
	  rb.push(cylinder({r:radius, h:size.z, center:true}).translate([ -radius+size.x/2,-radius+size.y/2,0]));
	  rb.push(cylinder({r:radius, h:size.z, center:true}).translate([ radius-size.x/2,radius-size.y/2,0]));
	  rb.push(cylinder({r:radius, h:size.z, center:true}).translate([ -radius+size.x/2,radius-size.y/2,0]));
	  return union(rb);
}

function eye(radius,rotation) {
   
	var s1 = sphere({r:radius}).setColor(1,1,1);
	var s2 = sphere({r:radius*0.1}).setColor("black").translate([0,-radius,0]);
	
    return difference(s1, s2).rotateX(rotation);

}

function mouth(width,height,angle){
	
	//var mbox = cube({size:[width, height, height/2.0], round: true});

	var mbox = roundedBox(width,height,height/2.0,height/5.0);
	return mbox.setColor(0,0,1).rotateX(90+angle);
	
}

function arm(width,height){
    var a2 = union(
			cylinder({r:width,h:height}),
			sphere({r:width}).translate([0,0,height])
		).rotateY(90);
	return union(
		cylinder({r:width,h:height}),
	    sphere({r:width}).translate([0,0,height]),
		a2.translate([0,0,height])
	).rotateY(-90);
}




function body(width_top, width_bottom,height,depth_top, depth_bottom,arm_width ,arm_length){
	var poly = polyhedron({points:[ [-width_bottom/2.0, -depth_bottom/2.0, 0], 
					   [width_bottom/2.0, -depth_bottom/2.0, 0],
                         [width_top/2.0,  -depth_top/2.0, height], 
                         [-width_top/2.0,  -depth_top/2.0, height],
					  [-width_bottom/2.0, depth_bottom/2.0, 0], 				
                         [width_bottom/2.0, depth_bottom/2.0, 0], 
                         [width_top/2.0,  depth_top/2.0, height], 
                         [-width_top/2.0,  depth_top/2.0, height],],
	           triangles: [ [3,2,0], [2,1,0], // front
                             [4,6,7], [4,5,6], // back
                             [0,5,4], [0,1,5], // bottom
                             [7,3,4], [3,0,4], // left
                             [6,2,3],  [7,6,3], // top
                             [2,6,1], [5,1,6] // right
                             ]});
							 poly.setColor(0,1,0);
	return union(
				poly,
				roundedBox(width_top, width_top/3, depth_top, depth_top/5 ).rotateX(90).translate([0,0,height]),
				//cube({ size: [width_top, width_top/3, depth_top], round:true}).rotateX(90).translate([-width_top/2.0,depth_top/2.0,height*0.95]),
				arm(arm_width,arm_length).translate([-width_bottom/2.0 + (width_bottom-width_top) ,0, height / 1.5]),
				arm(arm_width,arm_length).translate([-width_bottom/2.0 + (width_bottom-width_top) ,0, height / 2.5]).rotateX(180).rotateY(180)
			).setColor(0,1,0);
}


function getParameterDefinitions(){
	return [

		{name: 'body_height', type: 'float', initial: 48.0, caption: "Height of the companion"},
		{name: 'body_width_top',type: 'float', initial: 20.0, caption: "Width of the head"},
		{name: 'body_width_bottom',type: 'float', initial: 23.0, caption: "Width of the base"},
		{name: 'body_depth_top',type: 'float', initial: 10.0, caption: "Depth of the head"},
		{name: 'body_depth_bottom',type: 'float', initial: 16.0, caption: "Width of the base"},
		{name: 'body_arm_width',type: 'float', initial: 3.0, caption: "Size of the arm"},
		{name: 'body_arm_length',type: 'float', initial: 13.0, caption: "Length of the arm segments"},
		{name: 'eye_radius',type: 'float', initial: 5.0, caption: "Radius of the eyeball"},
		{name: 'eye_position',type: 'float', initial: 0.80, caption: "Position of the eyeball %"},
		{name: 'eye_rotation',type: 'float', initial: -10.0, caption: "Rotation of the eyeball (top-down)"},
		{name: 'mouth_position',type: 'float', initial: 0.50, caption: "Mouth position %"},
		{name: 'mouth_width',type: 'float', initial: 14.0, caption: "Width of the mouth"},
		{name: 'mouth_height',type: 'float', initial: 5.0, caption: "Height of the mouth"},
		{name: 'body_rotation', type: 'float', initial: 0, caption: "Body rotation"},
		
		
];
}


function main(params){
	
	var body_height= params.body_height; //48.0;
	var body_width_top= params.body_width_top;// 20.0;
	var body_width_bottom=params.body_width_bottom;//23.0;
	var body_depth_top=params.body_depth_top;//10.0;
	var body_depth_bottom=params.body_depth_bottom;//16.0;
	var body_arm_width=params.body_arm_width;//3.0;
	var body_arm_length=params.body_arm_length;//13.0;
	var eye_radius=params.eye_radius;//5.0;
	var eye_position=params.eye_position;//0.80;
	var eye_rotation=params.eye_rotation;//-10;
	var mouth_position=params.mouth_position;//0.50;
	var mouth_width=params.mouth_width;//14.0;
	var mouth_height=params.mouth_height;//5;
	var body_rotation=params.body_rotation;
	
	
	w.push(body(body_width_top, body_width_bottom,body_height, body_depth_top, body_depth_bottom, body_arm_width,body_arm_length ));
	w.push(eye(eye_radius,eye_rotation).translate([0,-body_width_top/4.0,body_height*eye_position])) ;
	w.push(mouth(mouth_width,mouth_height,-3*mouth_position ).translate([0, -body_depth_bottom/2.5, body_height*mouth_position]));
	return union(w).rotateZ(params.body_rotation);
} 

