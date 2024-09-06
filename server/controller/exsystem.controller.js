import Exsystem from "../model/exsystem.model.js";
import mongoose from "mongoose";

const getExSystem = async (_req, res) => {
  try {
    const exSys = await Exsystem.find().sort({ _id: -1 });
    if (exSys) {
      res.status(200).json(exSys);
      console.log(exSys);
    }
  } catch (error) {
    res.status(500).json({
      message: `Error getting all data in external system: ${error.message}`,
    });
    console.log(`Error in getExSystem controller: ${error.message}`);
  }
};

const addExSystem = async (req, res) => {
  const { name, baseUrl, authMethod, key, value, authPlace } = req.body;

  try {
    const exsys = await Exsystem.create({
      name,
      baseUrl,
      authMethod,
      key,
      value,
      authPlace,
    });

    if (exsys) {
      res.status(200).json(exsys);
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error creating external system: ${error.message}` });
    console.log(`Error in addExSystem controller: ${error.message}`);
  }
};

const updateExSystem = async (req, res) => {
  const { id } = req.params;

  // Get the updated external system data from the request body
  const externalSystem = req.body;

  try {
    const exsys = await Exsystem.findByIdAndUpdate(id, externalSystem);

    if (exsys) {
      res.status(200).json(exsys);
    } else {
      res.status(404).json({ message: "External System not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error updating external system: ${error.message}` });
    console.log(`Error in updateExSystem controller: ${error.message}`);
  }
};

const delExSystem = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  try {
    const result = await Exsystem.findByIdAndDelete(id);

    if (result) {
      res.status(200).json({ message: "External system deleted successfully" });
    } else {
      res.status(404).json({ message: "External system not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error deleting external system: ${error.message}` });
    console.log(`Error in delExSystem controller: ${error.message}`);
  }
};

export { getExSystem, addExSystem, updateExSystem, delExSystem };
