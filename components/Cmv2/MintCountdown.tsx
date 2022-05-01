import Countdown from 'react-countdown';
import styles from "../../styles/MintPage.module.css";

interface MintCountdownProps {
  date: Date | undefined;
  style?: React.CSSProperties;
  status?: string;
  onComplete?: () => void;
}

interface MintCountdownRender {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

export const MintCountdown: React.FC<MintCountdownProps> = ({
  date,
  status,
  style,
  onComplete,
}) => {
  const renderCountdown = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: MintCountdownRender) => {
    hours += days * 24;
    if (completed) {
      return status ? <p>{status}</p> : null;
    } else {
      return (
        <div className={styles.timer} style={style}>

          <div className={styles.item}>
            <span className={styles.time}>
              {hours < 10 ? `0${hours}` : hours}
            </span>
            <span className={styles.timeName}>hrs</span>
          </div>

          <div className={styles.item}>
            <span className={styles.time}>
             :
            </span>
            <span className={styles.timeName}></span>
          </div>

          <div className={styles.item}>
            <span className={styles.time}>
              {minutes < 10 ? `0${minutes}` : minutes}
            </span>
            <span className={styles.timeName}>mins</span>
          </div>

          <div className={styles.item}>
            <span className={styles.time}>
             :
            </span>
            <span className={styles.timeName}></span>
          </div>

          <div className={styles.item}>
            <span className={styles.time}>
              {seconds < 10 ? `0${seconds}` : seconds}
            </span>
            <span className={styles.timeName}>secs</span>
          </div>

        </div>
      );
    }
  };

  if (date) {
    return (
      <Countdown
        date={date}
        onComplete={onComplete}
        renderer={renderCountdown}
      />
    );
  } else {
    return null;
  }
};
