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
			
			SR.sort(function(a,b) {return ( ( ( a.hits - creep.pos.getRangeTo(a.x, a.y) ) / a.hitsMax) - ( (b.hits - creep.pos.getRangeTo(b.x, b.y) ) / b.hitsMax) ) } );
			
			creep.moveTo(SR[0]);
			creep.repair(SR[0]);
		} 
	}
}
module.exports = roleRepairer;