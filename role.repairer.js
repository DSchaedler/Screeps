var roleRepairer = require('role.upgrader');

var roleRepairer = {
    run: function(creep) {
        if(creep.carry.energy != 0) {
			var target = creep.pos.findClosest(FIND_STRUCTURES, {
				filter: function(object){
					return object.structureType !== STRUCTURE_CONTROLLER && (object.hits > object.hitsMax);
				}
			});

			if (target != null) {
				if (creep.repair(target) == ERR_NOT_IN_RANGE) {
					creep.moveTo(target);}
			}
		}
	}
module.exports = roleRepairer;