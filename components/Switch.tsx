import styles from './Switch.module.css';

type SwitchProps = {
  checked: boolean;
  onChange: () => void;
};

function Switch({ checked, onChange }: SwitchProps) {
  return (
    <button
      className={`${styles.switch} ${checked ? styles.checked : ''}`}
      onClick={onChange}
      role='switch'
      aria-checked={checked}
    >
      <span className={styles.thumb} />
    </button>
  );
}

export default Switch;