const EXTERNAL_DATA_URL = 'http://localhost:3000';

function generateSiteMap(data) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>http://localhost:3000</loc>
     </url>
     ${data.data.map(({ symbol }) => {
        return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${symbol}`}</loc>
       </url>
     `;
      })
      .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const headers = {
    Accepts: 'application/json',
    'X-CMC_PRO_API_KEY': process.env.COINMARKET_API_KEY
  };
  const request = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
    method: 'GET',
    headers: headers
  })
  const data = await request.json()

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(data);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;