var roleRepairer = require('role.repairer');
var roleRepairer = require('role.upgrader');

var roleBuilder = {
    run: function(creep, loopCount) {
        if(creep.carry.energy != 0) {
            if(!creep.memory.target) {
			    var target = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
			    if(target) {
			        creep.memory.target = target.id;   
			    }
            }
			if (creep.memory.target) {
			    var target = Game.getObjectById(creep.memory.target);
				if (creep.build(target) == ERR_NOT_IN_RANGE){
					creep.moveTo(target, {visualizePathStyle: {stroke: '#ee9c00'}});}
				if (creep.build(target) == ERR_INVALID_TARGET){
					delete creep.memory.target; }
			}
			else {
				roleRepairer.run(creep);}
		}	
    }
};
module.exports = roleBuilder;