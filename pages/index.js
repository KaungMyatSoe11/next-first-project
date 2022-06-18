import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';
import Head from 'next/head';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Head >
        <title>Meta Tag Example</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
      </Head>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
