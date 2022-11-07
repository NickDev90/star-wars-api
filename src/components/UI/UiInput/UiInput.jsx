import PropTypes from 'prop-types';
import styles from './UiInput.module.css';
import cn from 'classnames';
import '../index.css';

import icon from './img/cancel.svg'


const UiInput = ({value, handleInputChange, placeholder, classes}) => {

  return (
    <div className={cn(styles.input__container, classes)}>
        <input type="text" 
                placeholder={placeholder}
                value={value}
                onChange={(e) => handleInputChange(e.target.value)}
                className={styles.input}
        />
        <img  src={icon} 
              alt="cancel" 
              className={cn(styles.clear__icon, !value && styles.clear__icon__disabled)} 
              onClick={() => value && handleInputChange('')}
        />
    </div>
  );
}

UiInput.propTypes = {
    value: PropTypes.string,
    handlerInputChange: PropTypes.func,
    placeholder: PropTypes.string,
    classes: PropTypes.string,
}

export default UiInput;