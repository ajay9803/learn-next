import { useRouter } from "next/router";

const MeetupDetails = () => {
    const router = useRouter();

    const meetupId =router.query.meetupId;
  return <p> Meetup Details {meetupId}</p>;
};

export default MeetupDetails;
