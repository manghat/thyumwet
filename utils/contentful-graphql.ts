async function fetchGraphQL(query : string) {
    console.log('fetching graphql');
    console.log(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID);
    return fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
      // `https://graphql.contentful.com/content/v1/spaces/608lyjcxkf49`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
          // Authorization: `Bearer AmqifTTzwO0w-Wy2khwAmXZPHb9653g0EyEHolKWHeY`,
        },
        body: JSON.stringify({ query }),
      },
    ).then((response) => response.json());
  }

  (async function () {
    const query = `
    query {
        photographySeriesCollection{
          items{
            seriesTitle
            slug
          }
        }
      }
  `;
  
    const response = await fetchGraphQL(query);
    console.log(JSON.stringify(response, null, 2));
  })();


  // source : https://vercel.com/docs/integrations/contentful#adding-content-in-contentful