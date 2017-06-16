var roleRepairer = {
	loopCount = 0
    run: function(creep) {
		if(creep.carry.energy != 0) {
			loopCount = loopCount + 1;
			if(loopCount > 15) {}
				var fixThis = creep.room.find(FIND_STRUCTURES, {
					filter: object => object.hits < object.hitsMax
				});
				var targets = [fixThis];

				targets.sort((a,b) => a.hits - b.hits);
				loopCount = 0;
			}

			if (targets.length > 0) {
				creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#fff'}});
				creep.repair(targets[0]);}
			else {
				creep.moveTo(creep.room.controller);
                creep.upgradeController(creep.room.controller);}
		}
	}
};
module.exports = roleRepairer;