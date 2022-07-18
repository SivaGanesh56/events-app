import React from 'react'
import EventItem from './event';

import classes from './event-list.module.css';

const EventList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((event, idx) => <EventItem {...event} key={event.id} />)}
    </ul>
  )
}

export default EventList;