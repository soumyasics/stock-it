const router = require("express").Router();
const company = require("./Company/companyController");
const admin = require("./Admin/adminController");
const userController = require("./user/userController");
const { isEmailUnique } = require("./middlewares/isEmailUnique");
const IPO = require("./IPO/ipoController");
const ET = require("./Tutors/tutorController");
const ArtilceRoutes = require("./article/articleController");
const buyStockController = require("./buyStocks/buyStocksController");
const CompanyArticleController = require("./companyArticle/articleController")

router.get("/", (req, res) => {
  return res.send({ message: "Stock it Server working" });
});
// Admin routes
router.post("/loginAdmin", admin.loginAdmin);
router.post("/resetPwd", admin.resetPwd);

//company routes
router.post("/registerCompany", company.upload, company.registerCompany);
router.post("/viewCompanies", company.viewCompanies);
router.post("/viewPendingCompanies", company.viewPendingCompanies);
router.post("/add-ticker", company.addTicker);
router.post("/loginCompany", company.login);
router.post("/viewCompanyById/:id", company.viewCompanyById);
router.post("/acceptCompanyById/:id", company.acceptCompanyById);
router.post("/deActivateCompanyById/:id", company.deActivateCompanyById);
router.post("/deleteCompanyById/:id", company.deleteCompanyById);
router.post("/activateCompanyById/:id", company.activateCompanyById);
router.post("/searchcompanyByName/:name", company.searchcompanyByName);
router.post("/companyForgotPassword", company.forgotPassword);

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
router.post(
  "/editUserById/:id",
  userController.upload,
  userController.editUserById
);
router.post("/activateUserById/:id", userController.activateUserById);
router.post("/deActivateUserById/:id", userController.deActivateUserById);
router.post("/user-forgot-password", userController.forgotPassword);

//IPO routes
router.post("/createIpo", IPO.createIpo);
router.get("/getIpoByCompanyId/:id", IPO.getIpoByCompanyId);
router.post("/deleteIpo/:id", IPO.deleteIpo);
router.get("/getIpos", IPO.getIpos);
router.post("/getIPOById/:id", IPO.getIpoById);
router.post("/deleteIpo/:id", IPO.getIposForAdminApproval);
router.post("/approveIPOById/:id", IPO.approveIPOById);
router.post("/rejectIPOById/:id", IPO.rejectIPOById);
router.get("/getAllPendingIPOs", IPO.getAllPendingIPOs);
router.get("/getAllApprovedIPOs", IPO.getAllApprovedIPOs);
router.get("/getAllRejectedIPOs", IPO.getAllRejectedIPOs);
// tutors
router.post("/registerTutor", ET.upload, ET.registerTutor);
router.post("/loginTutor", ET.loginTutor);
router.post("/getAllTutors", ET.getAllTutors);
router.get("/getAllPendingTutors", ET.getAllPendingTutors);
router.post("/getTutorById/:id", ET.getTutorById);
router.post("/updateTutorById/:id", ET.upload, ET.updateTutorById);
router.post("/activateTutorById/:id", ET.activateTutorById);
router.post("/deactivateTutorById/:id", ET.deactivateTutorById);
router.post("/adminApproveTutorById/:id", ET.adminApproveTutorById);
router.post("/adminRejectTutorById/:id", ET.adminRejectTutorById);
router.post("/deleteTutorById/:id", ET.deleteTutorById);
router.post("/tutor-forgot-password", ET.forgotPassword);

// Article routes
router.post(
  "/createArticle",
  ArtilceRoutes.uploadVideo,
  ArtilceRoutes.createArticle
);

router.get("/getAllArticles", ArtilceRoutes.getAllArticles);
router.post("/getArticleById/:id", ArtilceRoutes.getArticleById);
router.post("/updateArticleById/:id", ArtilceRoutes.updateArticleById);
router.post("/deleteArticleById/:id", ArtilceRoutes.deleteArticleById);
router.get("/getArticleByTutorId/:id", ArtilceRoutes.getArticleByTutorId);

// company article routes 
router.post(
  "/co-createArticle",
  CompanyArticleController.uploadVideo,
  CompanyArticleController.createArticle
);

router.get("/co-getAllArticles", CompanyArticleController.getAllArticles);
router.post("/co-getArticleById/:id", CompanyArticleController.getArticleById);
router.post("/co-updateArticleById/:id", CompanyArticleController.updateArticleById);
router.post("/co-deleteArticleById/:id", CompanyArticleController.deleteArticleById);
router.get("/co-getArticleByCompanyId/:id", CompanyArticleController.getArticleByTutorId);

// buy stocks 
router.post("/buyStocks", buyStockController.buyStocks);
router.get("/allBuyStocks", buyStockController.allBuyStocks);
router.get("/getBoughtStockById/:id", buyStockController.getBoughtStockById);
router.get("/getAllBoughtStocksByUserId/:id", buyStockController.getAllBoughtStocksByUserId);
router.get("/getAllBoughtStocksByCompanyId/:id", buyStockController.getAllBoughtStocksByCompanyId);

module.exports = router;
