require('lodash');

var roleHarvester = {
    run: function(creep, sourceNumber) {
        if(creep.carry.energy < creep.carryCapacity) {
            var sources = Game.spawns.Spawn1.room.find(FIND_SOURCES);
            if(sources.length >0 && creep.harvest(sources[sourceNumber]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[sourceNumber]);}
        }
        else if( (_(Game.creeps).filter( {memory: { role: 'mover' } } ).size() < 2 ) || (Memory.creep.source == '0')) {
            if (Game.spawns.Spawn1.energy < Game.spawns.Spawn1.energyCapacity) {
                if(creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(Game.spawns.Spawn1);}
            }
        }
        else {
            var transferTo = [];
            for(var name in Game.creeps) {
                var currentCreep = Game.creeps[name];
                if(currentCreep.memory.role == 'mover' || currentCreep.memory.role == 'builder' || currentCreep.memory.role == 'upgrader' || currentCreep.memory.role == 'upgraderCharger' || currentCreep.memory.role == 'repairer') {
                    transferTo.push(currentCreep);}
            }
			for( i = 0; i < transferTo.length; i++) {
				creep.transfer(transferTo[i], RESOURCE_ENERGY);
			}
        }
    }
};
module.exports = roleHarvester;