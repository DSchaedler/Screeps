var roleRepairer = require('role.repairer');

var roleBuilder = {
    run: function(creep, loopCount) {
        if(creep.carry.energy != 0) {
			var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
			targets.sort();
			if(targets.length > 0) {
				if (creep.build(targets[0]) == ERR_NOT_IN_RANGE){
					creep.moveTo(targets[0]);}
			}
			else {
				roleRepairer.run(creep);}
		}	
    }
}
module.exports = roleBuilder;