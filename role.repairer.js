var roleRepairer = {
    run: function(creep) {
		
		const roomID = 'W99S43';
		
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
			
			Game.rooms[roomID].visual.circle(SR[0].pos.x, SR[0].pos.y, {radius: 0.25, fill: '#0aa53b'});
			Game.rooms[roomID].visual.circle(SR[1].pos.x, SR[1].pos.y, {radius: 0.25, fill: '#c9c906'});
			Game.rooms[roomID].visual.circle(SR[2].pos.x, SR[2].pos.y, {radius: 0.25, fill: '#bd0000'});
			
			creep.moveTo(SR[0], {visualizePathStyle: {stroke: '#ee9c00'}});
			creep.repair(SR[0]);
		} 
	}
}
module.exports = roleRepairer;