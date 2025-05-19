import styles from './option-fieldset.module.css';
import { OptionFieldsetProps } from './option-fieldset.types';

const OptionFieldset = ({
  type = 'radio',
  name,
  options,
  onChange,
  legendText,
  errorMessage,
  selectedOption,
  legendClassName,
}: OptionFieldsetProps) => {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={legendClassName}>{legendText}</legend>

      <div className={styles.optionsContainer}>
        {options.map(({ icon: Icon, label, value }) => (
          <div key={label} className={styles.option}>
            <input
              type={type}
              id={`option-${value}`}
              name={name}
              value={value}
              className={styles.input}
              onChange={onChange}
              checked={selectedOption === value}
            />

            <label htmlFor={`option-${value}`} className={styles.label}>
              {Icon}

              <span>{label}</span>
            </label>
          </div>
        ))}
      </div>

      {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
    </fieldset>
  );
};

export default OptionFieldset;
