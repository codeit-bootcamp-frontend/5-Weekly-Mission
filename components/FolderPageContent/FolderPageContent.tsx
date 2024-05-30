import styles from './FolderPageContent.module.scss';
interface Props {
  children: React.ReactNode;
}

export default function FolderPageContent({ children }: Props) {
  return <main className={styles.wrapper}>{children}</main>;
}
