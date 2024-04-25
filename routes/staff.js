const express = require('express');
const router = express.Router();
// const authMiddleware = require('../middlewares/authMiddleware');
// const validators = require('../validators');
const staffController = require('../controllers/staff');
const { ACTION } = require("../constants");
const {verifyToken, hasRole, passport} = require('../config/passport');

router.post(
    '/staffLogin', 
    staffController.staffLogin
);

router.get(
    '/getOrganizationById', 
    verifyToken,
    hasRole(ACTION.VIEW),
    staffController.getOrganizationById
);

router.get(
    '/getAllOrganization', 
    verifyToken,
    hasRole(ACTION.VIEW),
    staffController.getAllOrganization
);

//softDelete
router.put(
    '/deleteOrganization', 
    verifyToken,
    hasRole(ACTION.DELETE),
    staffController.deleteOrganization
);

//hardDelete
router.delete(
    '/hardDeleteOrganization', 
    verifyToken,
    hasRole(ACTION.VIEW),
    staffController.hardDeleteOrganization
);

router.post(
    '/createOrganization', 
    verifyToken,
    hasRole(ACTION.CREATE),
    staffController.createOrganization
);

router.put(
    '/editOrganization', 
    verifyToken,
    hasRole(ACTION.EDIT),
    staffController.editOrganization
);

router.post(
    '/userLogin', 
    staffController.userLogin
);

router.get(
    '/getUserById', 
    verifyToken,
    hasRole(ACTION.VIEW),
    staffController.getUserById
);

module.exports = router;
