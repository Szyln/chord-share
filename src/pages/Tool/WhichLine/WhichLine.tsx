import { useTranslation } from 'react-i18next';
import styles from './WhichLine.module.css';

export default function WhichLine() {
  const { t } = useTranslation();

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.docCard}>
        <h1 style={{ color: 'var(--primary-color)', fontSize: '1.5em', marginTop: 0, marginBottom: '20px' }}>
          {t('whichLine.pageTitle')}
        </h1>
        <p>{t('whichLine.introP1')}</p>
        <div className={styles.docImage}>
          <img src="/sample.png" alt="sample" />
        </div>
        <p>{t('whichLine.introP2')}</p>
      </div>

      <div className={styles.docCard}>
        <h2 className={styles.docHeader}>
          <span className="material-symbols-outlined">extension</span>
          Step 1
        </h2>
        <p>{t('whichLine.step1P1')}</p>
        <ul>
          <li>
            <a href="https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne" target="_blank" rel="noreferrer">
              {t('whichLine.step1LinkChrome')}
            </a>
          </li>
          <li>
            <a href="https://addons.mozilla.org/ja/firefox/addon/styl-us/" target="_blank" rel="noreferrer">
              {t('whichLine.step1LinkFf')}
            </a>
          </li>
        </ul>
        <div className={styles.highlightBox}>
          <p dangerouslySetInnerHTML={{ __html: t('whichLine.step1Note') }} />
        </div>
      </div>

      <div className={styles.docCard}>
        <h2 className={styles.docHeader}>
          <span className="material-symbols-outlined">format_paint</span>
          Step 2
        </h2>
        <p>{t('whichLine.step2P1')}</p>
        <ul>
          <li>
            <a href="https://userstyles.world/style/15212/chordwiki" target="_blank" rel="noreferrer">
              {t('whichLine.step2Link1')}
            </a>
          </li>
          <li>
            <a href="https://userstyles.world/style/15211/ufret" target="_blank" rel="noreferrer">
              {t('whichLine.step2Link2')}
            </a>
          </li>
          <li>
            <a href="https://userstyles.world/style/26249/default-slug" target="_blank" rel="noreferrer">
              {t('whichLine.step2Link3')}
            </a>
          </li>
        </ul>
        <p>{t('whichLine.step2P2')}</p>
        <div className={styles.docImage}>
          <img src="/install.png" alt="install" />
        </div>
        <div className={`${styles.highlightBox} ${styles.safeNote}`}>
          <p dangerouslySetInnerHTML={{ __html: t('whichLine.step2SafeNote') }} />
        </div>
      </div>

      <div className={styles.docCard}>
        <h2 className={styles.docHeader}>
          <span className="material-symbols-outlined">build</span>
          <span>{t('whichLine.troubleTitle')}</span>
        </h2>
        <p>{t('whichLine.troubleP1')}</p>
        <ol>
          <li>{t('whichLine.troubleL1')}</li>
          <li>{t('whichLine.troubleL2')}</li>
        </ol>
        <div className={styles.docImage}>
          <img src="/extention.png" alt="extention" />
        </div>
        <ol start={3}>
          <li>{t('whichLine.troubleL3')}</li>
        </ol>
        <div className={styles.docImage}>
          <img src="/enable.png" alt="enable" />
        </div>
        <ol start={4}>
          <li>{t('whichLine.troubleL4')}</li>
        </ol>
        <div className={styles.docImage}>
          <img src="/disable.png" alt="disable" />
        </div>
      </div>
    </div>
  );
}
