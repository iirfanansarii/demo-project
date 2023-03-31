const {
  facilityFound,
  facilityNotFound,
  facilityAdded,
} = require("../constants/error-message");
const Facility = require("../models/facilty.model");

exports.getFacility = async (req, res ,next) => {
  try {
    const facilities = await Facility.findAll({});
    if (facilities.length > 0) {
      res.status(200).json({
        message: facilityFound,
        records: facilities.length,
        facilities,
      });
    } else {
      res.status(404).json({
        message: facilityNotFound,
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.addFacility = async (req, res , next) => {
  const newFacility = Facility.build(req.body);
  try {
    const facility = await newFacility.save();
    return res.status(201).json({
      message: facilityAdded,
      facility,
    });
  } catch (error) {
    next(error);
  }
};
