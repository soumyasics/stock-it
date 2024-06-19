const router = require("express").Router();
const company = require("./Company/companyController");

router.get("/", (req, res) => {
  return res.send({ message: "Stock it Server working" });
});

//company routes
router.post("/registerCompany", company.upload, company.registerCompany);
router.post("/viewCompanies", company.viewCompanies);
router.post("/loginCompany", company.login);
router.post("/acceptCompanyById/:id", company.acceptCompanyById);
router.post("/deActivateCompanyById", company.deActivateCompanyById);
router.post("/deleteCompanyById/:id", company.deleteCompanyById);
router.post("/activateCompanyById/:id", company.activateCompanyById);

module.exports = router;
