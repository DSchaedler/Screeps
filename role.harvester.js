require('lodash');

var roleHarvester = {
    run: function(creep, sourceNumber) {
        if(creep.carry.energy < creep.carryCapacity) {
            var sources =  Memory.sources
            if(sources.length > 0 && creep.harvest(Game.getObjectById(sources[sourceNumber])) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.getObjectById(sources[sourceNumber]), {visualizePathStyle: {stroke: '#48c906'}});}
        }
        else if(_(Game.creeps).filter( {memory: { role: 'mover' } } ).size() < 2 ) {
            if (Game.spawns.Spawn1.energy < Game.spawns.Spawn1.energyCapacity) {
                if(creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(Game.spawns.Spawn1, {visualizePathStyle: {stroke: '#48c906'}});}
            }
        }
        else {
            var transferTo = [];
            for(var name in Game.creeps) {
                var currentCreep = Game.creeps[name];
                if(currentCreep.memory.role == 'mover' && currentCreep.memory.source == sourceNumber) {
                    transferTo.push(currentCreep);}
            }
			for( i = 0; i < transferTo.length; i++) {
				creep.transfer(transferTo[i], RESOURCE_ENERGY);
			}
        }
    }
};
module.exports = roleHarvester;