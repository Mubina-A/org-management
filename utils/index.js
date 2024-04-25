const permission = require("../models/permission");
const getPermission = async (user) => {
    const { roleId } = user;
    const data = await permission.find(
        { roleId: roleId }, // Filter criteria
        { privilegeKey: 1, isPermission: 1, _id: 0 } // Projection: include privilegeKey and isActive, exclude _id
    );
    return data;
};

module.exports = getPermission;
