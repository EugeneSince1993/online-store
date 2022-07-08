import React, { useState } from 'react';
import styles from './MultiRangeSliderInputs.module.scss';
import { MultiRangeSlider } from '../MultiRangeSlider';
import classNames from 'classnames';

export const MultiRangeSliderInputs = ({ min, max, step }) => {
  const [minValue, set_minValue] = useState(min);
  const [maxValue, set_maxValue] = useState(max);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
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
					onInput={(e) => {
						handleInput(e);
					}}
				/>
			</div>
			<div className={styles.rangeFields}>
				<div className={classNames(styles.rangeFieldsContainer, styles.left)}>
          <div className={styles.from}>
						<span>от</span>
					</div>
					<div className={styles.rangeFieldsInput}>
						<input type="number" placeholder={min} />
					</div>
				</div>
				<div className={classNames(styles.rangeFieldsContainer, styles.right)}>
					<div className={styles.to}>
						<span>до</span>
					</div>
					<div className={styles.rangeFieldsInput}>	
						<input type="number" placeholder={max} />
					</div>
				</div>
			</div>
    </div>
  );
};
