import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import EventSearch from '../../components/event-search';
import EventList from '../../components/events/event-list';

import { getAllEvents } from '../../dummy-data';

const Events = () => {

  const events = getAllEvents();

  const router = useRouter();

  const onSearch = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventSearch onSearch={onSearch} />
      <EventList items={events} />
    </Fragment>
  )
}

export default Events;