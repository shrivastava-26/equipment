import mongoose from 'mongoose';

const EquipmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ['Machine', 'Vessel', 'Tank', 'Mixer'],
    required: true
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive', 'Under Maintenance'],
    required: true
  },
  lastCleanedDate: { type: Date, required: true }
}, { timestamps: true });

const Equipment = mongoose.model("Equipment", EquipmentSchema);
export default Equipment;
