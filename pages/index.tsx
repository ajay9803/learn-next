import Link from "next/link";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = () => {
  const dummyMeetups = [
    {
      id: "1",
      title: "dummy1",
      image:
        "https://cdn.britannica.com/05/58605-050-86F58113/Annapurna-massif-village-Nepal.jpg",
      address: "dummy location",
      description: "this is 1 meetup",
    },
    {
      id: "2",
      title: "dummy2",
      image:
        "https://cdn.britannica.com/05/58605-050-86F58113/Annapurna-massif-village-Nepal.jpg",
      address: "dummy location",
      description: "this is 1 meetup",
    },
    {
      id: "3",
      title: "dummy3",
      image:
        "https://cdn.britannica.com/05/58605-050-86F58113/Annapurna-massif-village-Nepal.jpg",
      address: "dummy location",
      description: "this is 1 meetup",
    },
    {
      id: "4",
      title: "dummy4",
      image:
        "https://cdn.britannica.com/05/58605-050-86F58113/Annapurna-massif-village-Nepal.jpg",
      address: "dummy location",
      description: "this is 1 meetup",
    },
  ];
  return (
    <Fragment>
      <MeetupList meetups={dummyMeetups}></MeetupList>
    </Fragment>
  );
};

export default HomePage;
