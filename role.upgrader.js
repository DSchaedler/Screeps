var roleUpgrader = {
    run: function(creep) {
        if(creep.carry.energy > (creep.carryCapacity / 2) {
			creep.moveTo(creep.room.controller);
			creep.upgradeController(creep.room.controller);
		}
    }
};
module.exports = roleUpgrader;