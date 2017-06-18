var roleRepairer = {
    run: function(creep) {
		if(creep.carry.energy != 0) {
			var SR = creep.room.find(FIND_STRUCTURES, {
				filter: function(object){
					if(object.structureType != STRUCTURE_WALL) {
						return false;
                    }
                    if(object.hits > object.hitsMax) {
						return false;
					}
                    return true;
                }
            });
			
			SR.sort(function(a,b) {return ( ((a.hits / a.hitsMax) *  creep.pos.getRangeTo(a.x, a.y) ) - ((b.hits  / b.hitsMax) *  creep.pos.getRangeTo(a.x, a.y) ) ) } );
			
			console.log(SR);
			creep.moveTo(SR[0], {visualizePathStyle: {stroke: '#fff'}});
			creep.repair(SR[0]);
		} 
	}
}
module.exports = roleRepairer;