var roleRepairer = {
    run: function(creep) {
		if(creep.carry.energy != 0) {
			var SR = creep.room.find(FIND_STRUCTURES, {
				filter: function(object){
					if(object.structureType != STRUCTURE_WALL) {
						return false;
                    }
                    if(object.hits > object.hitsMax / 3) {
						return false;
					}
                    return true;
                }
            });
			
			creep.moveTo(SR[0]);
			creep.repair(SR[0]);
		} 
	}
}
module.exports = roleRepairer;