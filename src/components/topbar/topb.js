import styles from "./topb.module.css";

const Top = ({ searchV }) => {
  return (
    <nav className={styles.nav1}>
      <p>MOVIES</p>
      <div className={styles.inputW}>
        <input
          type="text"
          placeholder="Enter Movie name..."
          onChange={(e) => searchV(e.target.value)}
        />
        {/* hello */}
      </div>
    </nav>
  );
};

export default Top;
