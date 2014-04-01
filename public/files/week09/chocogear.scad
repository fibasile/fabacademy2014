use <MCAD/involute_gears.scad>;
union(){
union(){
union(){

union(){
difference(){
gear (number_of_teeth=15,
			circular_pitch=500,
			hub_diameter=10,
			rim_width=5,
			rim_thickness=5,
			gear_thickness=4,
			hub_thickness=6,
			circles=9);


translate([0,0,0]) cylinder(r=5.6,h=8);
}
}



cylinder(r=12,h=2);
} 
cylinder(r=5.6,h=5);
}
translate([-5,-23.2,3]) linear_extrude(height=3) import("fablogo.dxf");
}

