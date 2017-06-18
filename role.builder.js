var roleRepairer = require('role.repairer');
var roleRepairer = require('role.upgrader');

var roleBuilder = {
    run: function(creep, loopCount) {
        if(creep.carry.energy != 0) {
			var target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
			if (target != null) {
				if (creep.build(target) == ERR_NOT_IN_RANGE){
					creep.moveTo(target, {visualizePathStyle: {stroke: '#fff'});}
			}
			else {
				roleRepairer.run(creep);}
		}	
    }
};
module.exports = roleBuilder;