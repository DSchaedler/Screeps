var roleUpgrader = {
    run: function(creep) {
        creep.moveTo(creep.room.controller);
        creep.upgradeController(creep.room.controller);
    }
};
module.exports = roleUpgrader;