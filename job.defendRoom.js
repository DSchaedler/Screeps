/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('job.defendRoom');
 * mod.thing == 'a thing'; // true
 */

var defendRoom = {
    run:function() {
		
		// Get room name from memory
		roomID = Memory.roomController.room.name;
		
		//will fail if no creeps are spawned
		if (Memory.creeps) {
    		var hostiles = Game.rooms[roomID].find(FIND_HOSTILE_CREEPS);
    		var hurtCreeps = Game.rooms[roomID].find(FIND_MY_CREEPS, {filter: creeps => creeps.hits < creeps.hitsmax});
    		var towers = Game.rooms[roomID].find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
		}
		
		if(towers.length > 0) {
			if(hostiles.length > 0) {
			    
			    //Do not notify on CPU hostile
				var username = hostiles[0].owner.username;
				if(username != "Invader") {
					Game.notify(`User ${username} spotted in room ${roomID}. Activiating Turrets.`);
				}
				
				towers.forEach(tower => tower.attack(hostiles[0]));
			}
			
			else if (hurtCreeps.length > 0) {
				towers.forEach(tower => tower.heal(hurtCreeps[0]));
			}
			
			else if (towers[0].energy > towers[0].energyCapacity / 2) {
				
				var targets = Game.rooms[roomID].find(FIND_STRUCTURES, { filter: object => object.hits < object.hitsMax	});
				targets.sort((a,b) => a.hits - b.hits);
		
				if (targets.length > 0) {
					towers.forEach(tower => tower.repair(targets[0]));}
			}
		}
	}
}

module.exports = defendRoom;