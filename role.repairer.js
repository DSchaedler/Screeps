var roleRepairer = {
    run: function(creep) {
        if(creep.carry.energy != 0) {
			var target = creep.pos.findClosestByPath(FIND_STRUCTURES, {
				filter: object => object.hits < object.hitsMax
			});

			if (target != null) {
				if (creep.repair(target) == ERR_NOT_IN_RANGE) {
					creep.moveTo(target);}
			}
			else {
				creep.moveTo(creep.room.controller);
				creep.upgradeController(creep.room.controller);}
		}
	}
}
module.exports = roleRepairer;