require('lodash');

var roleMover = {
    run: function(creep, source) {
        if(creep.carry.energy < (creep.carryCapacity / 10)) {
            var harvesters = [];
            for(var name in Game.creeps) {
                var currentCreep = Game.creeps[name];
                if(currentCreep.memory.role == 'harvester' && parseInt(currentCreep.memory.source) == source) {
					harvesters.push(currentCreep);
				}
            }
			if (harvesters.length > 0 ) {
				harvesters.sort(function(a, b){return (b.carry.energy / b.carryCapacity) - (a.carry.energy / a.carryCapacity)});
				if(creep.pos.getRangeTo(harvesters[0].x, harvesters[0].y) > 0) {
					creep.moveTo(harvesters[0], {reusePath: 10, visualizePathStyle: {stroke: '#fff'}})};}
        }
        else {
            if(Game.spawns.Spawn1.energy == Game.spawns.Spawn1.energyCapacity) {
                var transferTo = [];
				for(var name in Game.creeps) {
					var currentCreep = Game.creeps[name];
					if(currentCreep.memory.role == 'upgrader' || currentCreep.memory.role == 'builder' || currentCreep.memory.role == 'repairer') { //when assholes are out of the way, un-comment the last two checks.
					    if(currentCreep.carry.energy < (currentCreep.carryCapacity / 3)) {
					        transferTo.push(currentCreep);}
					}
				}
				if (transferTo.length > 0 && creep.pos.getRangeTo(transferTo[0].x, transferTo[0].y) > 0) {
					creep.moveTo(transferTo[0], {reusePath: 10, visualizePathStyle: {stroke: '#fff'}});}
			    for( i = 0; i < transferTo.length; i++ ) {
				    creep.transfer(transferTo[i], RESOURCE_ENERGY);}
				if(transferTo.length == 0) {
					var transferTo = creep.room.find(FIND_STRUCTURES, {
						filter: (structure) => {
							return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_TOWER) &&
								structure.energy < structure.energyCapacity;
						}
					});
					
					if (transferTo.length > 0) {
						transferTo.sort(function(a, b){return (a.energy / a.energyCapacity) - (b.energy / b.energyCapacity)})};
				}
				if(transferTo.length > 0) {
					if(creep.transfer(transferTo[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
						creep.moveTo(transferTo[0], {reusePath: 10, visualizePathStyle: {stroke: '#c9c906'}});}
				}
            }
            else if (Game.spawns.Spawn1.energy < Game.spawns.Spawn1.energyCapacity) {
                if(creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(Game.spawns.Spawn1, {reusePath: 10, visualizePathStyle: {stroke: '#c9c906'}});}
            }
        }
    }
};
module.exports = roleMover;