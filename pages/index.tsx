import Link from "next/link";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <p> Home Page </p>
      <ul>
        <li>
          <Link href={"/news/Flutter-news"}> Flutter </Link>
        </li>
        <li>
          <Link href={"/news/React-news"}> React </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default HomePage;
