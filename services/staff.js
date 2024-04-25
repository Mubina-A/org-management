const staff = require('../models/staff');
const organization = require('../models/organization');
const user = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class StaffService {
     
      async  staffLogin(params) {
        try {
            const { username, password } = params;
            const staffData = await staff.findOne({ username:username });
            if (!staffData) {
                return { statusCode: 401, statusMessage: 'User not found', message: 'User not found' };
              }
              const isPasswordValid = await bcrypt.compare(password, staffData.password);
              if (!isPasswordValid) {
                return { statusCode: 401, statusMessage: 'Incorrect password', message: 'Incorrect password' };
              }
            if(isPasswordValid){
               let userData = {
                    roleId:staffData.roleId,
                    groupId:staffData.groupId,
               }
               const token = jwt.sign(userData, process.env.JWT_SECRET,{ expiresIn: '1h' });
               return { statusCode: 200, statusMessage: 'Success', data: token };
            }
        } catch (err) {
            console.log(err)
          return { statusCode: 500, statusMessage: 'Internal Server Error' };
        }
      }

      async  getOrganizationById(params) {
        try {
            const { organizationId } = params;
            const data = await organization.findOne({organizationId:organizationId});
            return { statusCode: 200, statusMessage: 'Success', data: data };
        } catch (err) {
          return { statusCode: 500, statusMessage: 'Internal Server Error' };
        }
      }

      async  getAllOrganization(params) {
        try {
          console.log("test--------------")
            const data = await organization.find();
            console.log("data",data)
            return { statusCode: 200, statusMessage: 'Success', data: data };
        } catch (err) {
          return { statusCode: 500, statusMessage: 'Internal Server Error' };
        }
      }

      async  deleteOrganization(params) {
        try {
            const { organizationId } = params;
            console.log("params",params)
            const data = await organization.updateOne(
                { organizationId: organizationId, isActive: true },//condition
                { $set: { isActive: false } } // Update
            );
            console.log("data",data)
            return { statusCode: 200, statusMessage: 'Deleted Successfully', data: null };
        } catch (err) {
          return { statusCode: 500, statusMessage: 'Internal Server Error' };
        }
      }

      async  hardDeleteOrganization(params) {
        try {
            const { organizationId } = params;
            const data = await organization.deleteOne(
                { organizationId: organizationId}
            );
            return { statusCode: 200, statusMessage: 'Deleted Successfully', data: data };
        } catch (err) {
          return { statusCode: 500, statusMessage: 'Internal Server Error' };
        }
      }

      async  createOrganization(params) {
        try {
            const organizationData = await organization.create(params);
           return { statusCode: 200, statusMessage: 'Success', data: organizationData };
        } catch (err) {
            console.log(err)
          return { statusCode: 500, statusMessage: 'Internal Server Error' };
        }
      }

      async  editOrganization(params) {
        try {
            const { organizationId, description } = params;
            const data = await organization.updateOne(
                { organizationId: organizationId, isActive: true },//condition
                { description: description } // Update
            );
            return { statusCode: 200, statusMessage: 'Updated Successfully', data: data };
        } catch (err) {
          return { statusCode: 500, statusMessage: 'Internal Server Error' };
        }
      }

      async  getUserById(params) {
        try {
            const { userId } = params;
            const data = await user.findOne({userId:userId});  
            return { statusCode: 200, statusMessage: 'Success', data: data };
        } catch (err) {
          console.log(err)
          return { statusCode: 500, statusMessage: 'Internal Server Error' };
        }
      }

      async  userLogin(params) {
        try {
            const { username, password } = params;
            const data = await user.findOne({ username:username });
            console.log()
            if (!data) {
                return { statusCode: 401, statusMessage: 'User not found', message: 'User not found' };
              }
              const isPasswordValid = await bcrypt.compare(password, data.password);
              if (!isPasswordValid) {
                return { statusCode: 401, statusMessage: 'Incorrect password', message: 'Incorrect password' };
              }
            if(isPasswordValid){
               let userData = {
                    roleId:data.roleId,
                    groupId:data.groupId,
               }
               const token = jwt.sign(userData, process.env.JWT_SECRET,{ expiresIn: '1h' });
               return { statusCode: 200, statusMessage: 'Success', data: token };
            }
        } catch (err) {
            console.log(err)
          return { statusCode: 500, statusMessage: 'Internal Server Error' };
        }
      }

}
module.exports = new StaffService();