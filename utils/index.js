const permission = require("../models/permission");
const getPermission = async (user) => {
   // console.log("user---",user)
    const { roleId } = user;
   // console.log("roleId",roleId)
    const data = await permission.find(
        { roleId: roleId }, // Filter criteria
        { privilegeKey: 1, isPermission: 1, _id: 0 } // Projection: include privilegeKey and isActive, exclude _id
    );
    // console.log("data",data)
    return data;
};

module.exports = getPermission;
