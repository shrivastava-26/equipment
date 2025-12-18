import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { EQUIPMENT_FORMDATA } from "../equipment/constant";
import styles from "../component/css/equipmentForm.module.css";

const EquipmentForm = ({ onSubmit, editingData, onCancel }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset( editingData 
        ? {...editingData, lastCleanedDate: editingData.lastCleanedDate?.slice(0, 10)}
        : undefined);
  }, [editingData, reset]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {EQUIPMENT_FORMDATA.map((field) => (
        <div key={field.name} className={styles.field}>
          {field.type === "select" ? (
            <select {...register(field.name, { required: field.required })}>
              <option value="">Select {field.label}</option>
              {field.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.name, { required: field.required })}
            />
          )}

          {errors[field.name] && (
            <span className={styles.error}>
              {field.label} is required
            </span>
          )}
        </div>
      ))}

      <div className={styles.actions}>
        <button type="submit">
          {editingData ? "Update" : "Add"}
        </button>

        {(
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default EquipmentForm;
