const router = require("express").Router();
const company = require("./Company/companyController");
const admin=require('./Admin/adminController')

router.get("/", (req, res) => {
  return res.send({ message: "Stock it Server working" });
});
// Admin routes
router.post('/loginAdmin',admin.loginAdmin)
router.post('/resetPwd',admin.resetPwd)

//company routes
router.post("/registerCompany", company.upload, company.registerCompany);
router.post("/viewCompanies", company.viewCompanies);
router.post("/loginCompany", company.login);
router.post("/viewCompanyById/:id", company.viewCompanyById);
router.post("/acceptCompanyById/:id", company.acceptCompanyById);
router.post("/deActivateCompanyById", company.deActivateCompanyById);
router.post("/deleteCompanyById/:id", company.deleteCompanyById);
router.post("/activateCompanyById/:id", company.activateCompanyById);

module.exports = router;
