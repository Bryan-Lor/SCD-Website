import Head from "next/head";

export default function HeaderTag() {
  return (
    <Head>
      <title>Society of Computer Developers</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Search Engine Optimization */}
      <meta
        name="description"
        key="description"
        content="Founded in Fall 2021 as Wayne State's sole Computer Science organization, SCD is dedicated to creating opportunities for coding and development enthusiasts. Regardless of your background or experience in CS, we foster a supportive community that helps members with coding, resume building, networking, and skill development."
      />
      <meta
        name="keywords"
        content="Society of Computer Developers,SCD,Wayne State University,WSU"
      />
      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="1 days" />

      {/* Open Graph Tags */}
      <meta property="og:title" content="Society of Computer Developers" />
      <meta property="og:site_name" content="Society of Computer Developers" />
      <meta property="og:url" content="https://scd.cs.wayne.edu/" />
      <meta
        property="og:description"
        content="Established in Fall 2021 as Wayne State's only Computer Science organization,
          SCD is focused on creating opportunities for students interested in coding and development. We aim to provide a
          community of peers that support one another in coding, resume building, networking, and developing new skills. You
          don't have to be a CS major or know anything about CS to join!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/scd_logo.png" />
    </Head>
  );
}
