var roleRepairer = {
    run: function(creep) {
        if(creep.carry.energy != 0) {
			var target = creep.pos.findClosestByPath(FIND_STRUCTURES, {}
				filter: object => object.hits < object.hitsMax
			});

			if (target != null) {
				creep.moveTo(targets[0]);
				creep.repair(targets[0]);}
			else {
				creep.moveTo(creep.room.controller);
				creep.upgradeController(creep.room.controller);}
		}
	}
};
module.exports = roleRepairer;