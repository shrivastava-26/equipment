import styles from "../component/css/equipmentTable.module.css";

const EquipmentTable = ({ list, onEdit, onDelete }) => {
    
  if (!list.length) return <p>No equipment found</p>;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Status</th>
          <th>Last Cleaned</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {list.map((item) => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.status}</td>
            <td>{item.lastCleanedDate?.slice(0, 10)}</td>
            <td>
              <button onClick={() => onEdit(item)}>Edit</button>
              <button onClick={() => onDelete(item._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EquipmentTable