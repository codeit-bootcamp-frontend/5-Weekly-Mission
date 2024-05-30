import Image from 'next/image';
import styles from './ShowTextToggle.module.scss';
interface ShowTextToggleProps {
  showText: boolean;
  onClick: () => void;
}

export default function ShowTextToggle({
  showText,
  onClick,
}: ShowTextToggleProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={styles.toggleButton}
      tabIndex={-1}
    >
      {showText ? (
        <Image src={'/assets/images/eye-on.svg'} alt='Hide password' fill />
      ) : (
        <Image src={'/assets/images/eye-off.svg'} alt='Show password' fill />
      )}
    </button>
  );
}
