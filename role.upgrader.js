var roleUpgrader = {
    run: function(creep) {
        if(creep.carry.energy !=0) {
			creep.moveTo(creep.room.controller);
			creep.upgradeController(creep.room.controller);
		}
    }
};
module.exports = roleUpgrader;