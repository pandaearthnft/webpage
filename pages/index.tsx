import Head from 'next/head';

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-6 md:px-8 overflow-hidden">
      <Head>
        <title>Panda Earth, Blockchain-based CryptoPandas</title>
        <meta
          name="description"
          content="Panda Earth, Blockchain-based CryptoPandas 熊貓大陸, 基於區塊鏈的數字大熊貓"
        />
        <meta
          name="keywords"
          content="Panda Earth, CryptoPandas, Cryptocollectibles, Blockchain Pandas, erc-721, Blockchain Game, Panda Game, Panda protection, cryptokitties,eth,熊貓大陸, 數字大熊貓, 數字藏品, 區塊鏈熊貓, erc-721, 區塊鏈遊戲, 熊貓遊戲, 大熊貓保護 "
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="py-10 flex justify-center md:justify-between items-center text-lg flex-wrap">
        <div className="flex items-center cursor-default">
          <img
            alt="logo"
            width="75"
            height="75"
            src="data:image/png;base64,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"
          />
          <span className="text-3xl ml-4 font-semibold text-gray-800">
            PandaEarth
          </span>
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            className="link px-4"
            href="https://twitter.com/PandaEarthNFT"
          >
            Twitter
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="link px-4"
            href="https://discord.gg/2yqZBvfmXz"
          >
            Discord
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="link px-4"
            href="https://opensea.io/collection/pandaearth"
          >
            OpenSea
          </a>
        </div>
      </header>

      <main className="text-gray-800">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl text-center font-bold md:mt-12 mb-8 max-w-4xl">
            Blockchain-based CryptoPandas. <br />{" "}
            <span className="text-green-600 leading-snug">
              A community revive.
            </span>
          </h1>
          <h2 className="text-center text-xl text-gray-500 max-w-4xl">
            Panda Earth is one of the oldest games/pfp projects on the
            blockchain. Established May 8, 2018.
          </h2>
          <div className="relative w-[907px] h-[644px] my-6">
            <img src="/images/main.png" alt="pandas" width="100%" />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
