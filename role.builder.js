var roleRepairer = require('role.repairer');

var roleBuilder = {
    run: function(creep, loopCount) {
        if(creep.carry.energy != 0) {
			var target = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
			if (target != null) {
				if (creep.build(target) == ERR_NOT_IN_RANGE){
					creep.moveTo(target);}
			}
		}	
    }
};
module.exports = roleBuilder;