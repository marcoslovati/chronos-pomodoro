import styles from './Heading.module.css';

type HeadingProps = {
  children: React.ReactNode;
  // attr: number;
  // attr2: string;
};

function Heading({ children }: HeadingProps) {
  // const classe = `${styles.heading} ${styles.cyan}`;
  // return <h1 className={classe}>Olá mundo</h1>;

  return <h1 className={styles.heading}>{children}</h1>;
}

export { Heading };
