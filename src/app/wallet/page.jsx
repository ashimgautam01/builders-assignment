"use client";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { clusterApiUrl } from "@solana/web3.js";
import { useMemo } from "react";
import { Coins } from "lucide-react";
import WalletInfo from "../(components)/WalletInfo";
import AnimatedDiv from "../(components)/AnimatedDiv";
const NETWORK = "devnet";

export default function WalletPage() {
  const endpoint = clusterApiUrl(NETWORK);
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <main className="flex flex-col md:flex-row items-start justify-center min-h-screen bg-gradient-to-b from-white to-purple-50 p-4 w-full gap-8">
            <div className="flex flex-col max-w-md w-full mt-8 md:mt-16 lg:mt-30 lg:-ml-20">
              <AnimatedDiv className="text-center mb-6">
                <h1 className="text-4xl font-bold text-purple-700 mb-2 flex items-center gap-2 ml-20">
                  <Coins className="text-purple-600" />
                  Solana Wallet
                </h1>
                <p className="text-gray-600">
                  Connect your wallet to view details
                </p>
              </AnimatedDiv>
              <div className="hover:scale-105 transition-transform duration-200 w-fit ml-30 ">
                <WalletMultiButton />
              </div>
            </div>

            <div className="flex flex-col justify-start w-full md:w-auto mt-8 md:mt-16">
              <WalletInfo />
            </div>
          </main>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
