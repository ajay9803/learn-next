import Head from "next/head";
import Script from "next/script";
import { Fragment } from "react";


const HomePage = (props: any) => {

  return (
    <Fragment>

      {/* set up headers */}
      <Head>
        <title> Blog App </title>
        <meta name="description" content="this is description."></meta>
      </Head>

      {/* set up scripts outside head */}
      <Script id="1" strategy="lazyOnload">
        {/* alert('Hello world'); */}
      </Script>
      <p> Home Page</p>
      <div className="blogItem">

      </div>
    </Fragment>
  );
}; 



export default HomePage;
