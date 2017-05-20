var roleRepairer = require('role.repairer');

var roleBuilder = {
    run: function(creep) {
        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
		targets.sort();
        if(targets.length > 0) {
			creep.moveTo(targets[0]);
			creep.build(targets[0]);
        }
        else {
            roleRepairer.run(creep);}
    }
};
module.exports = roleBuilder;