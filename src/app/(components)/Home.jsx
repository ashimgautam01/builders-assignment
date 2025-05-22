"use client"
import { useEffect, useMemo, useState } from "react";
import {
  ConnectionProvider,
  WalletProvider,
  useWallet,
} from "@solana/wallet-adapter-react";
import { clusterApiUrl, Connection } from "@solana/web3.js";
import { 
  Wallet, 
  RefreshCw, 
  AlertCircle, 
  Copy, 
  CheckCircle2,
  Coins,
  ExternalLink,
  Loader2
} from "lucide-react";
import AnimatedDiv from "./AnimatedDiv";
import {toast} from 'sonner'

require("@solana/wallet-adapter-react-ui/styles.css");

const NETWORK = "devnet";

const WalletInfo = () => {
  const { publicKey, connected, disconnect } = useWallet();
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);


const fetchBalance = async () => {
  if (!publicKey) return;
  toast.info(
    <span className="flex items-center gap-2">
      <Loader2 className="animate-spin text-purple-600" size={20} />
      <span>Loading your balance...</span>
    </span>,
    {
      style: { background: "#e0e7ff", color: "#3730a3" },
      duration: 1500,
      icon: false,
    }
  );
  setLoading(true);
  setError(null);
  const connection = new Connection(clusterApiUrl(NETWORK));
  try {
    const lamports = await connection.getBalance(publicKey);
    setBalance(lamports / 1e9);
    toast.success(
      <span className="flex items-center gap-2">
        <CheckCircle2 className="text-green-600" size={20} />
        <span>Balance loaded successfully!</span>
      </span>,
      {
        style: { background: "#dcfce7", color: "#166534" },
        duration: 1800,
        icon: false,
      }
    );
  } catch (error) {
    console.error("Error fetching balance:", error);
    setError("Failed to fetch balance");
    toast.error(
      <span className="flex items-center gap-2">
        <AlertCircle className="text-red-600" size={20} />
        <span>Failed to fetch balance</span>
      </span>,
      {
        style: { background: "#fee2e2", color: "#991b1b" },
        duration: 2500,
        icon: false,
      }
    );
  } finally {
    setLoading(false);
  }
};
 useEffect(() => {
    if (connected) {
      fetchBalance();
    } else {
      setBalance(null);
      setError(null);
    }
  }, [connected]);

const copyAddress = () => {
  if (!publicKey) return;
  navigator.clipboard.writeText(publicKey.toBase58());
  setCopied(true);
  toast.success(
    <span className="flex items-center gap-2">
      <Copy className="text-purple-600" size={18} />
      <span>Address copied to clipboard!</span>
    </span>,
    {
      style: { background: "#ede9fe", color: "#6d28d9" },
      duration: 1800,
      icon: false,
    }
  );
  setTimeout(() => {
    setCopied(false);
  }, 2000);
};

  return (
    <>

      
      {publicKey ? (
        <AnimatedDiv className="w-full max-w-md mt-6">
          <div className="bg-white rounded-xl border-2 border-purple-100 shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wallet className="text-purple-600" size={20} />
                  <h3 className="font-bold text-lg text-gray-800">Wallet Details</h3>
                </div>
                <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                  {NETWORK.toUpperCase()}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Your Solana wallet information</p>
            </div>
            
            <div className="px-6 py-4 space-y-4">
              <div className="space-y-1">
                <div className="text-sm text-gray-500">Wallet Address</div>
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <div className="font-mono text-sm truncate">
                    {publicKey.toBase58()}
                  </div>
                  <button 
                    onClick={copyAddress}
                    className="ml-2 p-1 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    {copied ? 
                      <CheckCircle2 className="text-green-500" size={16} /> : 
                      <Copy size={16} />
                    }
                  </button>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="text-sm text-gray-500 flex items-center gap-1">
                  <Coins size={16} className="text-purple-600" />
                  Balance
                </div>
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
                    <div className="animate-spin">
                      <RefreshCw size={16} className="text-purple-600" />
                    </div>
                  </div>
                ) : error ? (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg flex items-center gap-2">
                    <AlertCircle className="h-4 w-4" />
                    <div>
                      <div className="font-medium text-sm">Error</div>
                      <div className="text-xs">{error}</div>
                    </div>
                  </div>
                ) : (
                  <div className="text-2xl font-bold text-purple-700">
                    {balance?.toFixed(6) || "0"} SOL
                  </div>
                )}
              </div>
            </div>
            
            <div className="px-6 py-4 border-t border-gray-100 flex justify-between">
              <button 
                onClick={fetchBalance}
                disabled={loading}
                className="px-3 py-1.5 text-sm border border-purple-200 text-purple-600 rounded-md hover:bg-purple-50 transition-colors flex items-center gap-1"
              >
                <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
                Refresh
              </button>
              
              <button 
                onClick={() => disconnect()}
                className="px-3 py-1.5 text-sm bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors"
              >
                Disconnect
              </button>
            </div>
          </div>
          
          <AnimatedDiv className="mt-4">
            <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
              <div className="flex gap-2 items-start">
                <AlertCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-purple-800">Network Information</h4>
                  <p className="text-sm text-purple-700">
                    You're connected to the {NETWORK.toUpperCase()} network. This is a test network for development purposes.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedDiv>
        </AnimatedDiv>
      ) : (
        <AnimatedDiv className="mt-8 text-center">
          <div className="bg-white rounded-xl border-2 border-purple-100 shadow-lg max-w-md p-6">
            <h3 className="font-bold text-xl text-gray-800">Connect Wallet</h3>
            <p className="text-sm text-gray-500 mt-1 mb-6">
              Connect your Solana wallet to get started
            </p>
            
            <div className="flex flex-col items-center gap-4">
              <div className="animate-bounce">
                <Wallet size={64} className="text-purple-400" />
              </div>
              <div className="text-sm text-gray-500 max-w-xs">
                Click the "Select Wallet" button above to connect your Phantom wallet
              </div>
            </div>
          </div>
        </AnimatedDiv>
      )}
    </>
  );
};


export default WalletInfo