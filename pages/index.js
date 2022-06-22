import EventList from "../components/events/event-list";
import Head from "next/head";
import { getFeaturedEvents } from "../helpers/api_util";

function HomePage({events}) {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>Meta Tag Example</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
      </Head>
      <EventList items={events} />
    </div>
  );
}

export const getStaticProps = async (ctx) => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
  };
};

export default HomePage;
