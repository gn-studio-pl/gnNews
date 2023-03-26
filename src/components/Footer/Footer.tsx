import { useState, useEffect } from 'react';
import { useNewsApiData } from 'hooks/useNewsApiData';
import styles from './styles.module.scss';

const Footer: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const newsData = useNewsApiData();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className={styles.footer}>
      <h3>{time.toLocaleTimeString()}</h3>
      <h3>Number of articles: {newsData?.length}</h3>
    </footer>
  );
};

export default Footer;
