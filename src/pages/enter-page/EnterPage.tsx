import React from 'react';
import { Header } from '../../common/header/Header';
import styles from './enter-page.module.scss'

export const EnterPage = () => {
  return (
    <div>
      <Header/>
      <form className={styles.form} >
      {/* <AppLayout.Form> */}
        <label className={styles['form-decription']} htmlFor="name">
          Ваше имя?
        </label>
        <input className={styles['form-decription']} id="name" type="text" />
        <button className={styles['form-button']} type="submit">Отправить</button>
      </form>
      {/* </AppLayout.Form> */}
    </div>
  );
};
