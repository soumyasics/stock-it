const router = require("express").Router();
const company = require("./Company/companyController");
const admin = require("./Admin/adminController");
const userController = require("./user/userController");
const { isEmailUnique } = require("./middlewares/isEmailUnique");
const IPO=require('./IPO/ipoController')
const ET=require('./Tutors/tutorController')




router.get("/", (req, res) => {
  return res.send({ message: "Stock it Server working" });
});
// Admin routes
router.post("/loginAdmin", admin.loginAdmin);
router.post("/resetPwd", admin.resetPwd);

//company routes
router.post("/registerCompany", company.upload, company.registerCompany);
router.post("/viewCompanies", company.viewCompanies);
router.post("/loginCompany", company.login);
router.post("/viewCompanyById/:id", company.viewCompanyById);
router.post("/acceptCompanyById/:id", company.acceptCompanyById);
router.post("/deActivateCompanyById/:id", company.deActivateCompanyById);
router.post("/deleteCompanyById/:id", company.deleteCompanyById);
router.post("/activateCompanyById/:id", company.activateCompanyById);
router.post("/searchcompanyByName/:name", company.searchcompanyByName);

// user routes
router.post(
  "/registerUser",
  userController.upload,
  isEmailUnique,
  userController.createUser
);
router.post("/loginUser", userController.loginUser);
router.post("/getAllUsers", userController.getAllUsers);
router.post("/getUserById/:id", userController.getUserById);
router.post("/editUserById/:id",userController.upload, userController.editUserById);
router.post("/activateUserById/:id", userController.activateUserById);
router.post("/deActivateUserById/:id", userController.deActivateUserById);



//IPO routes
router.post("/createIpo",IPO.createIpo);
router.get("/getIpoByCompanyId/:id",IPO.getIpoByCompanyId);
router.post("/deleteIpo/:id",IPO.deleteIpo);
router.get("/getIpos",IPO.getIpos);
router.post("/getIPOById/:id",IPO.getIpoById);
router.post("/deleteIpo/:id",IPO.getIposForAdminApproval);
router.post("/approveIPOById/:id",IPO.approveIPOById);
router.post("/rejectIPOById/:id",IPO.rejectIPOById);
router.post("/updateIpo/:id",IPO.updateIpo);

// tutors 
router.post("/registerTutor",ET.upload, ET.registerTutor);
router.post("/loginTutor", ET.loginTutor);
router.post("/getAllTutors", ET.getAllTutors);
router.get("/getAllPendingTutors", ET.getAllPendingTutors);
router.post("/getTutorById/:id", ET.getTutorById);
router.post("/updateTutorById/:id",ET.upload, ET.updateTutorById);
router.post("/activateTutorById/:id", ET.activateTutorById);
router.post("/deactivateTutorById/:id", ET.deactivateTutorById);
router.post("/deactivateTutorById/:id", ET.approveTutorById);
router.post("/deleteTutorById/:id", ET.deleteTutorById);

module.exports = router;
