var roleRepairer = {
    run: function(creep) {
		if(creep.carry.energy != 0) {
			var SR = creep.room.find(FIND_STRUCTURES, {
				filter: function(object){
					if(object.structureType != STRUCTURE_WALL) {
						return false;
                    }
                    if(object.hits >= object.hitsMax) {
						return false;
					}
                    return true;
                }
            });
			
			SR.sort(function(a,b) {return ( (a.hits + creep.pos.getRangeTo(a.pos.x, a.pos.y) ) - ( b.hits + creep.pos.getRangeTo(b.pos.x, b.pos.y) ) ) } );
			
			try {
			    console.log("Repair Target Values: " + (SR[0].hits + creep.pos.getRangeTo(SR[0].pos.x, SR[0].pos.y) ) + ', ' + ( SR[1].hits + creep.pos.getRangeTo(SR[1].pos.x, SR[1].pos.y) ) + ', ' + ( SR[2].hits + creep.pos.getRangeTo(SR[2].pos.x, SR[2].pos.y) ));
			} catch(err){
			    console.log(err);
			}
			
			creep.moveTo(SR[0], {visualizePathStyle: {stroke: '#ee9c00'}});
			creep.repair(SR[0]);
		} 
	}
}
module.exports = roleRepairer;