import { useState } from 'react';
import styles from './MultiRangeSliderInputs.module.scss';
import { MultiRangeSlider } from '../MultiRangeSlider';
import classNames from 'classnames';
import { useAppDispatch } from '../../../redux/hooks';
import { setPriceRange } from '../../../redux/filter/filterSlice';

export const MultiRangeSliderInputs = ({ min, max, step }) => {
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

	const handleMRSChange = () => {
		dispatch(setPriceRange({
			min: minValue,
			max: maxValue,
		}));
	};

  return (
    <div className={styles.multiRangeSliderInputs}>
			<div className={styles.multiRangeSliderContainer}>
				<MultiRangeSlider
					min={min}
					max={max}
					step={step}
					ruler={false}
					label={false}
					preventWheel={false}
					minValue={minValue}
					maxValue={maxValue}
					onInput={handleInput}
					onChange={handleMRSChange}
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
							onChange={(e) => {
								handleMinChange(e);
								handleMRSChange();
							}} 
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
							onChange={(e) => {
								handleMaxChange(e);
								handleMRSChange();
							}}
						/>
					</div>
				</div>
			</div>
    </div>
  );
};
