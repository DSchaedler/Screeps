var roleRepairer = {
    run: function(creep) {
        if(creep.carry.energy > (creep.carryCapacity / 2)) {
			var targets = creep.room.find(FIND_STRUCTURES, {
				filter: object => object.hits < object.hitsMax
			});

			targets.sort((a,b) => a.hits - b.hits);

			if (targets.length > 0) {
				creep.moveTo(targets[0]);
				creep.repair(targets[0]);}
			else {
				creep.moveTo(creep.room.controller);
				creep.upgradeController(creep.room.controller);}
		}
	}
};
module.exports = roleRepairer;