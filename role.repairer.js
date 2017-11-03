var roleRepairer = {
    run: function(creep) {
		
		const roomID = 'E31N38';
		
		if(creep.carry.energy != 0) {
			var SR = creep.room.find(FIND_STRUCTURES, {
				filter: function(object){
					if(object.structureType != STRUCTURE_WALL && object.structureType != STRUCTURE_RAMPART && object.structureType != STRUCTURE_ROAD) {
						if(object.structureType == STRUCTURE_ROAD && object.hits <= (object.hitsMax /4)) {
                            return false
                        }
                        return false;
                    }
                    if(object.hits >= object.hitsMax) {
						return false;
					}
                    return true;
                }
            });
			
			SR.sort(function(a,b) {return ( (a.hits + (creep.pos.getRangeTo(a.pos.x, a.pos.y) * 5 ) ) - ( b.hits + (creep.pos.getRangeTo(b.pos.x, b.pos.y) * 5) ) ) } );
			
			if(SR[0]) {
    			Game.rooms[roomID].visual.circle(SR[0].pos.x, SR[0].pos.y, {radius: 0.5, fill: '#0aa53b'});
    			if(SR[1]) {Game.rooms[roomID].visual.circle(SR[1].pos.x, SR[1].pos.y, {radius: 0.5, fill: '#c9c906'}); }
    			if(SR[2]) {Game.rooms[roomID].visual.circle(SR[2].pos.x, SR[2].pos.y, {radius: 0.5, fill: '#bd0000'}); }
			}
			if(creep.repair(SR[0]) == ERR_NOT_IN_RANGE){
                creep.moveTo(SR[0], {visualizePathStyle: {stroke: '#ee9c00'}});
                creep.repair(SR[0]);
            }
		} 
	}
}
module.exports = roleRepairer;