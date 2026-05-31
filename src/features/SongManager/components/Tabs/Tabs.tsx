import styles from './Tabs.module.css';

interface TabsProps {
  tabList: string[];
  currentTab: string;
  onChangeTab: (tab: string) => void;
}

export default function Tabs({ tabList, currentTab, onChangeTab }: TabsProps) {
  if (tabList.length === 0) return null;

  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tabsContainer}>
        {tabList.map(tab => (
          <button
            key={tab}
            className={`${styles.tabBtn} ${tab === currentTab ? styles.active : ''}`}
            onClick={() => onChangeTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
