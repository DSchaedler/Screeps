var roleUpgrader = {
    run: function(creep) {
        if(creep.carry.energy !=0) {
			creep.say(Math.round((creep.carry.energy / creep.carryCapacity) * 100));
			creep.upgradeController(creep.room.controller);
			creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#48c906'}});
		}
    }
}
module.exports = roleUpgrader;