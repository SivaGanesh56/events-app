import { useRouter } from 'next/router';
import React, { Fragment } from 'react'
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import EventContent from '../../components/event-detail/event-content';
import { getEventById } from '../../dummy-data';

const EventDetailPage = () => {

  const router = useRouter();

  const { eventId } = router.query;

  const event = getEventById(eventId);

  if (!event) return <p>No event Found !</p>;

  const { description, title, date, location, image } = event;

  return (
    <Fragment>
      <EventSummary title={title} />
      <EventLogistics date={date} address={location} image={image} imageAlt={title} />
      <EventContent><p>{description}</p></EventContent>
    </Fragment>
  )
}

export default EventDetailPage;