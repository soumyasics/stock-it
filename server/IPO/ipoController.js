const Ipo = require('./ipoSchema'); 

// Controller functions

// Create a new IPO
exports.createIpo = async (req, res) => {
    try {
        const { totalShares, costPerShare, companyId,capitation } = req.body;
        const newIpo = new Ipo({
            totalShares,
            costPerShare,
            capitation,
            companyId
        });
        await newIpo.save();
        res.status(201).json(newIpo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all IPOs
exports.getIpos = async (req, res) => {
    try {
        const ipos = await Ipo.find({adminApproved:true});
        res.json(ipos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// Get all IPOs
exports.getIposForAdminApproval = async (req, res) => {
    try {
        const ipos = await Ipo.find({adminApproved:false});
        res.json(ipos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// Get a single IPO by ID
exports.getIpoById = async (req, res) => {
    try {
        const ipo = await Ipo.findById(req.params.id);
        if (!ipo) {
            return res.status(404).json({ message: 'IPO not found' });
        }
        res.json(ipo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update an existing IPO
exports.updateIpo = async (req, res) => {
    try {
        const { totalShares, costPerShare, companyId,capitation } = req.body;
        const updatedIpo = await Ipo.findByIdAndUpdate(req.params.id, {
            totalShares,
            costPerShare,
            companyId,
            capitation
        }, { new: true });
        if (!updatedIpo) {
            return res.status(404).json({ message: 'IPO not found' });
        }
        res.json(updatedIpo);
        await Ipo.findByIdAndUpdate({_id:req.params.id},{adminApproved:false})
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete an IPO
exports.deleteIpo = async (req, res) => {
    try {
        const deletedIpo = await Ipo.findByIdAndDelete(req.params.id);
        if (!deletedIpo) {
            return res.status(404).json({ message: 'IPO not found' });
        }
        res.json({ message: 'IPO deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// Get a single IPO by ID
exports.getIpoByCompanyId = async (req, res) => {
    try {
        const ipo = await Ipo.find({companyId:req.params.id});
        if (!ipo) {
            return res.status(404).json({ message: 'IPO not found' });
        }
        res.json(ipo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.approveIPOById = async (req, res) => {
    try {
        const ipo = await Ipo.findByIdAndUpdate({_id:req.params.id},{adminApproved:true});
        if (!ipo) {
            return res.status(404).json({ message: 'IPO not found' });
        }
        res.json(ipo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};