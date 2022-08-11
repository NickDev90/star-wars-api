import PropTypes from 'prop-types';
import cn from 'classnames';
import '../index.css';
import styles from './UiButton.module.css';

const UiButton = ({
    onClick, 
    disabled, 
    text, 
    theme='dark', 
    classes
}) => {

  return (
    <button 
            onClick={onClick}
            className={cn(styles.navi__button, styles[theme], classes)}
            disabled={disabled}
          >
            {text}
    </button>
  );
}

UiButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    theme: PropTypes.string,
    classes: PropTypes.string
}

export default UiButton;