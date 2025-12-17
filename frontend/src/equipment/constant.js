export const EQUIPMENT_FORMDATA = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Name",
    required: "Name is required"
  },
  {
    name: "type",
    label: "Type",
    type: "select",
    options: ["Machine", "Vessel", "Tank", "Mixer"],
    required: "Type is required"
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: ["Active", "Inactive", "Under Maintenance"],
    required: "Status is required"
  },
  {
    name: "lastCleanedDate",
    label: "Last Cleaned Date",
    type: "date",
    required: "Last cleaned date is required"
  }
];
