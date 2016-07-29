require('lodash');

var roleUpgraderCharger = {
    run: function(creep) {
        if(creep.carry.energy == 0) {
            var harvestFrom = [];
            for(var name in Game.creeps) {
                var currentCreep = Game.creeps[name];
                if(currentCreep.memory.role == 'harvester') {
                    harvestFrom.push(currentCreep);
                }
                if(currentCreep.memory.role == 'harvester2') {
                    harvestFrom.push(currentCreep);
                }
            }
			
			harvestFrom.sort((a,b) => b.carry.energy - a.carry.energy);
            creep.moveTo(harvestFrom[0]);
            if(harvestFrom.length == 0) {
                creep.moveTo(31, 34);}
        }
        else {
            for(var name in Game.creeps) {
				var currentCreep = Game.creeps[name];
				if(currentCreep.memory.role == 'upgrader') {
				    if(currentCreep.carry.energy == 0) {
				        transferTo.push(currentCreep);}
				}
				creep.moveTo(transferTo[0]);
			    for( i = 0; i < transferTo.length; i++ ) {
				    creep.transfer(transferTo[i], RESOURCE_ENERGY);}
			}
        }
    }
};
module.exports = roleUpgraderCharger;