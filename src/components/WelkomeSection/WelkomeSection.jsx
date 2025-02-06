import clsx from 'clsx';
import styles from './WelkomeSectin.module.css'
import { CgBee } from "react-icons/cg";

const WelkomeSection = () => {
  const isOpenToWork = true;
  return (
  <div>
    <p className={clsx(styles.title, isOpenToWork ? styles.green : styles.red)}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias laboriosam non optio, dolore voluptas veniam, eum repellendus ab reiciendis
    odit tenetur temporibus? Autem at dolorem totam doloremque quisquam. Accusantium, inventore.
      </p>
      <div className={clsx(styles.div)}>
<button className={clsx(styles.button)}>
          <CgBee className={clsx(styles.icon)} />
    </button>
      </div>
  </div>
  );
};

export default WelkomeSection;