import styles from "./Errors.module.scss";

export const Errors = ({ errors }: { errors?: string[] }) => {
  return (
    <>
      {errors && (
        <ul data-errors className={styles.errors}>
          {errors?.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Errors;
