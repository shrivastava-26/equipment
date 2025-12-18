import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import EquipmentForm from "../component/EquipmentForm";
import EquipmentTable from "../component/EquipmentTable";
import {
  getEquipment,
  addEquipment,
  updateEquipment,
  deleteEquipment,
} from "./equipment.service";
import styles from "./equipment.module.css";

const Equipment = () => {
  const [equipment, setEquipment] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    fetchEquipment();
  }, []);

  const fetchEquipment = async () => {
    try {
      const res = await getEquipment();
      setEquipment(res.data.data);
    } catch {
      toast.error("Failed to load equipment");
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (editingItem) {
        await updateEquipment(editingItem._id, formData);
        toast.success("Equipment updated");
      } else {
        await addEquipment(formData);
        toast.success("Equipment added");
      }

      closeModal();
      fetchEquipment();
    } catch {
      toast.error("Action failed");
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteEquipment(id);
      toast.success("Equipment deleted");
      fetchEquipment();
    } catch {
      toast.error("Delete failed");
    }
  };

  const openAddModal = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingItem(null);
    setIsModalOpen(false);
  };

  const filteredList = equipment
    .filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) =>
      isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Equipment Manager</h2>

        <div className={styles.controls}>
          <input
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button onClick={() => setIsAscending(!isAscending)}>
            Sort {isAscending ? "↑" : "↓"}
          </button>

          <button onClick={openAddModal}>
            Add Equipment
          </button>
         
        </div>
      </div>

      <EquipmentTable
        list={filteredList}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {isModalOpen && (
        <div className={styles.modal}>
          <EquipmentForm
            onSubmit={handleSubmit}
            editingData={editingItem}
            onCancel={closeModal}
          />
        </div>
      )}
    </div>
  );
};

export default Equipment;
