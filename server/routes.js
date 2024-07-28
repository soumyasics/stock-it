const router = require("express").Router();
const company = require("./Company/companyController");
const admin = require("./Admin/adminController");
const userController = require("./user/userController");
const { isEmailUnique } = require("./middlewares/isEmailUnique");
const IPO = require("./IPO/ipoController");
const ET = require("./Tutors/tutorController");
const ArtilceRoutes = require("./article/articleController");
const buyStockController = require("./buyStocks/buyStocksController");
const CompanyArticleController = require("./companyArticle/articleController");
const CompanyComplaintController = require("./complaintCompanies/complaintCompanyController");
const UserComplaintController = require("./complaintUsers/complaintUsers.js");
const ETCompalintController = require("./complaintEts/complaintETController.js");
const RatingController = require("./rateET/rateETController.js");
const ETSubscriptionController = require("./SubscribeET/subscribeController.js")
const DividentController = require("./divident/dividentController.js")
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
router.post("/editCompanyById/:id", company.editCompanyById);
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
router.post("/editUserById/:id", userController.editUserById);
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
router.patch("/editIPO/:id", IPO.editIPO);
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
router.post("/editTutorById/:id", ET.editTutorById);
router.get("/getAllApprovedTutors", ET.getAllApprovedTutors);
// Article routes
router.post(
  "/createArticle",
  ArtilceRoutes.uploadVideo,
  ArtilceRoutes.createArticle
);

router.get("/getAllArticles", ArtilceRoutes.getAllArticles);
router.post("/getArticleById/:id", ArtilceRoutes.getArticleById);
router.post("/updateArticleById/:id", ArtilceRoutes.uploadVideo, ArtilceRoutes.updateArticleById);
router.delete("/deleteArticleById/:id", ArtilceRoutes.deleteArticleById);
router.get("/getArticleByTutorId/:id", ArtilceRoutes.getArticleByTutorId);

// company article routes
router.post(
  "/co-createArticle",
  CompanyArticleController.uploadVideo,
  CompanyArticleController.createArticle
);

router.get("/co-getAllArticles", CompanyArticleController.getAllArticles);
router.post("/co-getArticleById/:id", CompanyArticleController.getArticleById);
router.post(
  "/co-updateArticleById/:id",
  CompanyArticleController.uploadVideo,
  CompanyArticleController.updateArticleById
);
router.delete(
  "/co-deleteArticleById/:id",
  CompanyArticleController.deleteArticleById
);
router.get(
  "/co-getArticleByCompanyId/:id",
  CompanyArticleController.getArticleByTutorId
);

// buy stocks
router.post("/buyStocks", buyStockController.buyStocks);
router.post("/sellStocks/:id", buyStockController.sellStocksById);
router.get("/allBuyStocks", buyStockController.allBuyStocks);
router.get("/getBoughtStockById/:id", buyStockController.getBoughtStockById);
router.get(
  "/getAllBoughtStocksByUserId/:id",
  buyStockController.getAllBoughtStocksByUserId
);
router.get(
  "/getAllBoughtStocksByCompanyId/:id",
  buyStockController.getAllBoughtStocksByCompanyId
);

// company complaints
router.post("/createComplaint", CompanyComplaintController.createComplaint);
router.get("/getAllComplaints", CompanyComplaintController.getAllComplaints);
router.get(
  "/getComplaintById/:id",
  CompanyComplaintController.getComplaintById
);

// user complaints
router.post("/user-createComplaint", UserComplaintController.createComplaint);
router.get("/user-getAllComplaints", UserComplaintController.getAllComplaints);
router.get(
  "/user-getComplaintById/:id",
  UserComplaintController.getComplaintById
);

// et complaints
router.post("/createComplaintET", ETCompalintController.createComplaintET);
router.get("/getAllComplaintsET", ETCompalintController.getAllComplaintsET);
router.get("/getComplaintByIdET/:id", ETCompalintController.getComplaintByIdET);

// rating
router.post("/addRating", RatingController.addRating);
router.get("/getAllRating", RatingController.getAllRating);
router.get("/getAllRatingByETId/:id", RatingController.getAllRatingByETId);


// et subscription
router.post("/newSubscription", ETSubscriptionController.newSubscription);
router.post("/unSubscribe", ETSubscriptionController.unSubscribe);
router.get("/getAllSubscriptionByUserId/:id", ETSubscriptionController.getAllSubscriptionByUserId);
router.get("/getAllSubscriptionByETId/:id", ETSubscriptionController.getAllSubscriptionByETId);
router.post("/getSubscriptionStatus", ETSubscriptionController.getSubscriptionStatus);
router.get("/getAllSubscriptions", ETSubscriptionController.getAllSubscriptions);

// divident 
router.post("/addDivident", DividentController.addDivident);
router.get("/getAllDividents", DividentController.getAllDividents);
router.get("/getDividentById/:id", DividentController.getDividentById);
router.get("/getDividentsByIPOId/:id", DividentController.getDividentsByIPOId);




module.exports = router;
