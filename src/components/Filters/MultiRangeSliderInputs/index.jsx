import { useState } from 'react';
import styles from './MultiRangeSliderInputs.module.scss';
import { MultiRangeSlider } from '../MultiRangeSlider';
import classNames from 'classnames';
import { useAppDispatch } from '../../../redux/hooks';
import { setMaxPrice, setMinPrice } from '../../../redux/filter/filterSlice';

export const MultiRangeSliderInputs = ({ min, max }) => {
	const dispatch = useAppDispatch();

  const [minValue, set_minValue] = useState(min);
  const [maxValue, set_maxValue] = useState(max);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

	const handleMinChange = (e) => {
		set_minValue(e.target.value);
	};
	const handleMaxChange = (e) => {
		set_maxValue(e.target.value);
	};

	const handleMinBlur = (value) => {
		dispatch(setMinPrice(Number(value)));
	};
	const handleMaxBlur = (value) => {
		dispatch(setMaxPrice(Number(value)));
	};

  return (
    <div className={styles.multiRangeSliderInputs}>
			<div className={styles.multiRangeSliderContainer}>
				<MultiRangeSlider
					min={min}
					max={max}
					ruler={false}
					label={false}
					preventWheel={false}
					minValue={minValue}
					maxValue={maxValue}
					onInput={handleInput}
				/>
			</div>
			<div className={styles.rangeFields}>
				<div className={classNames(styles.rangeFieldsContainer, styles.left)}>
          <div className={styles.from}>
						<span>от</span>
					</div>
					<div className={styles.rangeFieldsInput}>
						<input 
							type="number" 
							value={minValue} 
							onChange={handleMinChange} 
							onBlur={() => handleMinBlur(minValue)}
						/>
					</div>
				</div>
				<div className={classNames(styles.rangeFieldsContainer, styles.right)}>
					<div className={styles.to}>
						<span>до</span>
					</div>
					<div className={styles.rangeFieldsInput}>	
						<input 
							type="number" 
							value={maxValue} 
							onChange={handleMaxChange}
							onBlur={() => handleMaxBlur(maxValue)}
						/>
					</div>
				</div>
			</div>
    </div>
  );
};
