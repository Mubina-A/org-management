const staffService = require('../services/staff');

class StaffController {
   
    async  staffLogin(req, res) {
        try {
            console.log("req",req.body)
            console.log('--------------------------',req.body)
            const result = await staffService.staffLogin(req.body); 
            console.log("result",result)
            res.json({ statusCode: result.statusCode, token: result.data, statusMessage: result.statusMessage });
        } catch(err) {
            res.json({  statusCode: result.statusCode, statusMessage: result.statusMessage, });
        }
    }

    async  getOrganizationById(req, res) {
        try {
            const result = await staffService.getOrganizationById({...req.query, userData: req.user}); 
            res.json({ statusCode: result.statusCode, data: result.data, statusMessage: result.statusMessage });
        } catch(err) {
            res.json({  statusCode: result.statusCode, statusMessage: result.statusMessage, });
        }
    }

    async  getAllOrganization(req, res) {
        try {
            const result = await staffService.getAllOrganization({userData: req.user}); 
            console.log("result",result)
            res.json({ statusCode: result.statusCode, data: result.data, statusMessage: result.statusMessage });
        } catch(err) {
            res.json({  statusCode: result.statusCode, statusMessage: result.statusMessage, });
        }
    }

    async  deleteOrganization(req, res) {
        try {
            console.log("req",req)
            const result = await staffService.deleteOrganization({...req.query,userData: req.user}); 
            res.json({ statusCode: result.statusCode, data: result.data, statusMessage: result.statusMessage });
        } catch(err) {
            res.json({  statusCode: result.statusCode, statusMessage: result.statusMessage, });
        }
    }

    async  hardDeleteOrganization(req, res) {
        try {
            const result = await staffService.hardDeleteOrganization({...req.query,userData: req.user}); 
            res.json({ statusCode: result.statusCode, data: result.data, statusMessage: result.statusMessage });
        } catch(err) {
            res.json({  statusCode: result.statusCode, statusMessage: result.statusMessage, });
        }
    }

    async  createOrganization(req, res) {
        try {
            console.log("req",req.body)
            const result = await staffService.createOrganization({...req.body,userData: req.user}); 
            console.log("result",result)
            res.json({ statusCode: result.statusCode, statusMessage: result.statusMessage });
        } catch(err) {
            res.json({  statusCode: result.statusCode, statusMessage: result.statusMessage, });
        }
    }

    async  editOrganization(req, res) {
        try {
            console.log("req",req.body)
            const result = await staffService.editOrganization({...req.body,userData: req.user}); 
            console.log("result",result)
            res.json({ statusCode: result.statusCode, statusMessage: result.statusMessage });
        } catch(err) {
            res.json({  statusCode: result.statusCode, statusMessage: result.statusMessage, });
        }
    }

    async  getUserById(req, res) {
        try {
            const result = await staffService.getUserById({...req.query,}); 
            res.json({ statusCode: result.statusCode, data: result.data, statusMessage: result.statusMessage });
        } catch(err) {
            res.json({  statusCode: result.statusCode, statusMessage: result.statusMessage, });
        }
    }

    async  userLogin(req, res) {
        try {
            console.log("req",req.body)
            console.log('--------------------------',req.body)
            const result = await staffService.userLogin(req.body); 
            console.log("result",result)
            res.json({ statusCode: result.statusCode, token: result.data, statusMessage: result.statusMessage });
        } catch(err) {
            res.json({  statusCode: result.statusCode, statusMessage: result.statusMessage, });
        }
    }

}
module.exports = new StaffController();
