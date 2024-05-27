import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

/**
 * A React functional component that renders a calendar and allows the user to select a date.
 *
 * @return {JSX.Element} A div element containing a Calendar component with an onChange callback and the current value.
 */
export function CalendarInteract() {

  const [value, setValue] = useState(new Date());

  /**
   * Updates the value state with the nextValue provided.
   *
   * @param {Date} nextValue - The new value to set the state to.
   * @return {void} This function does not return anything.
   */
  const onChange = (nextValue) => {
    setValue(nextValue);
  };

  return (
          <div>
            <Calendar onChange={onChange} value={value} />
          </div>
  );
}