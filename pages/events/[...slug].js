import { useRouter } from 'next/router';
import React from 'react';
import EventList from '../../components/events/event-list';

import { getFilteredEvents } from '../../dummy-data';

// next differenate [] & [...] based on params
// if one param it is [], otherwis [...] 
const FilteredEvent = () => {

  const router = useRouter();

  const filteredData = router.query.slug;

  if (!filteredData) return <div>Loading...</div>;

  const year = +filteredData[0];
  const month = +filteredData[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) return <p>Invalid Filter. Please adjust our values</p>;


  const filteredEvents = getFilteredEvents({ year, month });


  if (!filteredEvents || filteredEvents.length == 0) return <div>No Events Found</div>;

  return (
    <div>
      <EventList items={filteredEvents}/>
    </div>
  )
}

export default FilteredEvent;