import { useERC20Balance } from "../hooks/useERC20Balance";
import { useMoralis, useNativeBalance } from "react-moralis";
import { Image, Select } from "antd";
import { useMemo } from "react";

export default function AssetSelector({ setAsset, style }) {
  const { assets } = useERC20Balance();
  const { data: nativeBalance, nativeToken } = useNativeBalance();
  const { Moralis } = useMoralis();

  const fullBalance = useMemo(() => {
    if (!assets || !nativeBalance) return null;
    return [
      ...assets,
      {
        balance: nativeBalance.balance,
        decimals: nativeToken.decimals,
        name: nativeToken.name,
        symbol: nativeToken.symbol,
        token_address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      },
    ];
  }, [assets, nativeBalance, nativeToken]);

  function handleChange(e) {
    const token = fullBalance.find((token) => token.token_address === e.target.value);
    setAsset(token); 
  }

  const formatAsset = (item) => {
    let balance;
    if (item.balance !== undefined){
      balance = parseFloat(
        Moralis?.Units?.FromWei(item.balance, item.decimals),
      )?.toFixed(6)
    } else {
      balance = "0"
    }
    return `${item.symbol} ${balance}`
  }

  return (
    <select onChange={handleChange} size="large" style={style}>
       <option
              value="token"
              
            >select</option>
      {fullBalance &&
        fullBalance.map((item) => {
          return (
            <option
              value={item.token_address}
              key={item.token_address}
            >{formatAsset(item)}
            </option>
          );
        })}
    </select>
  );
}


/*<div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  gap: "8px",
                }}
              >
               
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "90%",
                  }}
                >
                  <p>{item.balance}</p>
                  <p style={{ alignSelf: "right" }}>
                   Hello
                  </p>
                </div>
              </div> */