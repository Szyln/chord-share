import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Home.module.css';

function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleGoToList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      userId: { value: string };
    };
    const userId = target.userId.value;
    if (userId.trim()) {
      navigate(`/${userId}/list`);
    }
  };

  return (
    <div className={styles.container}>
      <h1>{t('home.title')}</h1>
      <p>{t('home.description')}</p>
      <form onSubmit={handleGoToList} className={styles.form}>
        <input 
          type="text" 
          name="userId" 
          placeholder={t('home.placeholder')} 
          required 
          className={styles.input}
        />
        <button type="submit" className={styles.button}>{t('home.submit')}</button>
      </form>
    </div>
  );
}

export default Home;
