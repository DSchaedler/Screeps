var roleUpgrader = {
    run: function(creep) {
        if(creep.carry.energy !=0) {
			if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
			creep.moveTo(creep.room.controller);}
		}
    }
}
module.exports = roleUpgrader;