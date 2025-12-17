import Equipment from "../models/equipment.model.js";

export const getEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.find();
    return res.status(200).json({
      success: true,
      message: "Equipment fetched successfully",
      data: equipment
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch equipment",
      error: error.message
    });
  }
};

export const addEquipment = async (req, res) => {
  try {
    const { name, type, status, lastCleanedDate } = req.body;
    
    if (!name || !type || !status || !lastCleanedDate) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const equipment = await Equipment.create({
      name,
      type,
      status,
      lastCleanedDate
    });

    return res.status(201).json({
      success: true,
      message: "Equipment added successfully",
      data: equipment
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to add equipment",
      error: error.message
    });
  }
};

export const updateEquipment = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedEquipment = await Equipment.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedEquipment) {
      return res.status(404).json({
        success: false,
        message: "Equipment not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Equipment updated successfully",
      data: updatedEquipment
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update equipment",
      error: error.message
    });
  }
};

export const deleteEquipment = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEquipment = await Equipment.findByIdAndDelete(id);

    if (!deletedEquipment) {
      return res.status(404).json({
        success: false,
        message: "Equipment not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Equipment deleted successfully"
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete equipment",
      error: error.message
    });
  }
};
