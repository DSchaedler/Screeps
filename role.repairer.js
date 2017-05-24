var roleRepairer = {
    run: function(creep) {
        if(creep.carry.energy != 0) {
			var fixThis = creep.pos.findClosestByRange(FIND_STRUCTURES, {
				filter: object => object.hits < object.hitsMax
			});
			var targets = [fixThis];

			targets.sort((a,b) => a.hits - b.hits);

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