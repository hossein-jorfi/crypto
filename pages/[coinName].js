import Chart from "@/components/modules/Chart";
import AboutCoin from "@/components/templates/AboutCoin";
import ChartTopBanner from "@/components/templates/ChartTopBanner";
import Convert from "@/components/templates/Convert";
import Comments from "@/components/templates/Comments";
import NameBanner from "@/components/templates/NameBanner";
import SecendBanner from "@/components/templates/SecendBanner";
import Article from "@/components/templates/Article";
import Head from "next/head";

const coinName = ({ data: { data }, query }) => {
  const coin_name = query.coinName.toUpperCase();
  const quote = data[coin_name].quote;

  return (
    <>
      <Head>
        <title>اطلاعات و قیمت لحضه ای {data[coin_name].name}</title>
        <meta
          name="description"
          content={`
                         اطلاعات و قیمت لحضه ای ${data[coin_name].name}
                         معامله ${data[coin_name].name}
                         `}
        />
      </Head>
      <div className="container-xxl row" style={{ margin: "5rem auto" }}>
        <div className="col-12 col-lg-9 p-0 p-lg-3">
          <NameBanner {...data[coin_name]} />
          <ChartTopBanner {...data[coin_name]} />
          <Chart coinName={coin_name} />
          <SecendBanner {...data[coin_name]} data={quote.USD} />
          <AboutCoin {...data[coin_name]} />
          <div className="d-none d-lg-block mt-5">
            <Article />
          </div>
        </div>
        <div className="col-12 col-lg-3 p-0 p-lg-3">
          <Convert {...data[coin_name]} />
          <Comments {...data[coin_name]} />
          <div className="d-block d-lg-none mt-5">
            <Article />
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default coinName;

export const getServerSideProps = async ({ query }) => {
  const parameters = {
    symbol: query.coinName,
    convert: "USD",
  };
  const headers = {
    Accepts: "application/json",
    "X-CMC_PRO_API_KEY": process.env.COINMARKET_API_KEY,
  };

  const res = await fetch(
    process.env.COINMARKET_URL + "?" + new URLSearchParams(parameters),
    {
      method: "GET",
      headers: headers,
    }
  );
  const data = await res.json();

  return {
    props: {
      data,
      query,
    },
  };
};
