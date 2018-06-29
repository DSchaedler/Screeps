var roleRepairer = {
    run: function(creep) {
		
		const roomID = 'W57S52';
		
		if(creep.carry.energy != 0) {
		creep.say(Math.round((creep.carry.energy / creep.carryCapacity) * 100));
            if(!creep.memory.target0) {
			
				var SR = creep.room.find(FIND_STRUCTURES, {
					filter: function(object){
						if(object.structureType == STRUCTURE_ROAD && object.hits <= (object.hitsMax / 4)) {
							return false
						}
						if(object.structureType != STRUCTURE_WALL && object.structureType != STRUCTURE_RAMPART) {
							return false;
						}
						if(object.hits >= object.hitsMax) {
							return false;
						}
						return true;
					}
				});
				
				SR.sort(function(a,b) {return ( (a.hits + (creep.pos.getRangeTo(a.pos.x, a.pos.y) * 5 ) ) - ( b.hits + (creep.pos.getRangeTo(b.pos.x, b.pos.y) * 5) ) ) } );
				
				creep.memory.target0 = SR[0].id
				creep.memory.target1 = SR[1].id
				creep.memory.target2 = SR[2].id
			}
			
			target0 = Game.getObjectById(creep.memory.target0)
			target1 = Game.getObjectById(creep.memory.target1)
			target2 = Game.getObjectById(creep.memory.target2)
			
			if(target0) {
    			Game.rooms[roomID].visual.circle(target0.pos.x, target0.pos.y, {radius: 0.5, fill: '#0aa53b'});
    			if(target1) {Game.rooms[roomID].visual.circle(target1.pos.x, target1.pos.y, {radius: 0.5, fill: '#c9c906'}); }
    			if(target2) {Game.rooms[roomID].visual.circle(target2.pos.x, target2.pos.y, {radius: 0.5, fill: '#bd0000'}); }
			}
			if(parseInt(Game.time % 5) == 0) { 
				delete creep.memory.target0;
				delete creep.memory.target1
				delete creep.memory.target2}
			if(creep.repair(target0) == ERR_NOT_IN_RANGE){
                creep.moveTo(target0, {visualizePathStyle: {stroke: '#ee9c00'}});
                
            }
		} 
	}
}
module.exports = roleRepairer;