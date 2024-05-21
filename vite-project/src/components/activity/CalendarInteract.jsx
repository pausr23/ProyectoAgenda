import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export function CalendarInteract() {

  const [value, setValue] = useState(new Date());

  const onChange = (nextValue) => {
    setValue(nextValue);
  };

  return (
          <div>
            <Calendar onChange={onChange} value={value} />
          </div>
  );
}