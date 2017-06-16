var roleRepairer = {
    run: function(creep) {
		loopCount = 0;
		targets = [];
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
			
			creep.moveTo(SR);
			creep.repair(SR);
		} 
	}
}
module.exports = roleRepairer;