import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpeg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-page']}>
        <img src={mealsImage} alt='' />
      </div>
    </Fragment>
  );
};

export default Header;
