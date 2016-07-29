var roleUpgrader = {
    run: function(creep) {
        creep.moveTo(creep.room.controller);
        creep.upgradeController(creep.room.controller);
		
		var transferTo = [];
        for(var name in Game.creeps) {
            var currentCreep = Game.creeps[name];
            if(currentCreep.memory.role == 'upgrader' ) {
                transferTo.push(currentCreep);}
		    creep.transfer(transferTo[2], RESOURCE_ENERGY);
		}
    }
};
module.exports = roleUpgrader;