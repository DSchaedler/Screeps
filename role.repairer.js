var roleRepairer = require('role.upgrader');

var roleRepairer = {
    run: function(creep) {
        if(creep.carry.energy != 0) {
			var target = creep.pos.findClosestByRange(FIND_STRUCTURES, {filter: function(object){return object.structureType === STRUCTURE_ROAD && (object.hits > object.hitsMax / 3);}})
			};

			if (target != null) {
				if (creep.repair(target) == ERR_NOT_IN_RANGE) {
					creep.moveTo(target);}
			}
		}
	}
module.exports = roleRepairer;