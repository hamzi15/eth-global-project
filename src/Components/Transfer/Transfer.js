import { CreditCardOutlined } from "@ant-design/icons";
import { Button, Input, notification } from "antd";
import Text from "antd/lib/typography/Text";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import AddressInput from "./AddressInput";
import AssetSelector from "./AssetSelector";
import Result from "./Result";

const styles = {
  card: {
    alignItems: "center",
    width: "100%",
  },
  header: {
    textAlign: "center",
  },
  input: {
    width: "100%",
    outline: "none",
    fontSize: "16px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textverflow: "ellipsis",
    appearance: "textfield",
    color: "#041836",
    fontWeight: "700",
    border: "none",
    backgroundColor: "transparent",
  },
  select: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
  },
  textWrapper: { maxWidth: "80px", width: "100%" },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexDirection: "row",
  },
};

function Transfer() {
  const { Moralis } = useMoralis();
  const [receiver, setReceiver] = useState();
  const [asset, setAsset] = useState();
  const [tx, setTx] = useState();
  const [amount, setAmount] = useState();
  const [isPending, setIsPending] = useState(false);

  console.log(asset);

  useEffect(() => {
    asset && amount && receiver ? setTx({ amount, receiver, asset }) : setTx();
    console.log(asset, amount, receiver)
  }, [asset, amount, receiver]);

  const openNotification = ({ message, description }) => {
    notification.open({
      placement: "bottomRight",
      message,
      description,
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  async function transfer() {
    const { amount, receiver, asset } = tx;

    let options = {};

    switch (asset.token_address) {
      case "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee":
        options = {
          native: "native",
          amount: Moralis.Units.ETH(amount),
          receiver,
          awaitReceipt: false,
        };
        break;
      default:
        options = {
          type: "erc20",
          amount: Moralis.Units.Token(amount, asset.decimals),
          receiver,
          contractAddress: asset.token_address,
          awaitReceipt: false,
        };
    }

    setIsPending(false);
    Moralis.transfer(options)
    .then(result =>  <Result prop={result}/>)
    .catch(err => console.log("here",err))
    /*
    txStatus
      .on("transactionHash", (hash) => {
        openNotification({
          message: "🔊 New Transaction",
          description: `${hash}`,
        });
        console.log("🔊 New Transaction", hash);
      })
      .on("receipt", (receipt) => {
        openNotification({
          message: "📃 New Receipt",
          description: `${receipt.transactionHash}`,
        });
        console.log("🔊 New Receipt: ", receipt);
        setIsPending(false);
      })
      .on("error", (error) => {
        openNotification({
          message: "📃 Error",
          description: `${error.message}`,
        });
        console.error(error);
        setIsPending(false);
      });*/
  }

  return (
    <div style={styles.card}>
      <div style={styles.tranfer}>
        <div style={{padding:"80px", textAlign:"center",color:"white",fontSize:"26px"}}>
          <h3>TRANSFER ASSETS</h3>
        </div>
        <div style={styles.select}>
          <div style={{padding:"20px", textAlign:"center",color:"white",fontSize:"26px"}}>
            <Text strong>Address:</Text>
          </div>
          <AddressInput autoFocus onChange={setReceiver} />
        </div>
        <div style={styles.select}>
          <div style={{padding:"20px", textAlign:"center",color:"white",fontSize:"26px"}}>
            <Text strong>Amount:</Text>
          </div><br/><CreditCardOutlined style={{color:"white", padding:"20px"}}/>
          <input style={{borderLeft:"none",borderRight:"none",borderTop:"none",borderBlockColor:"white",backgroundColor:'transparent'}}
            size="large"
           
            onChange={(e) => {
              setAmount(`${e.target.value}`);
            }}
          />
        </div>
        <div style={styles.select}>
          <div  style={{padding:"20px", textAlign:"center",color:"white",fontSize:"26px"}}>
            <Text strong style={{paddingRight:"40px"}} >Asset:</Text>
          </div>
          <AssetSelector setAsset={setAsset} style={{padding:"40px", width: "200px" }} />
        </div>
<div style={{display:"flex",paddingTop:"150px",justifyContent:"center"}}>
        <div
          
          loading={isPending}
          style={{ width: "200px", marginTop: "25px",height:"40px", textAlign:"center",borderRadius:"30px",backgroundColor:"white",alignItems:"center",paddingTop:"20px",cursor:"pointer" }}
          onClick={() => transfer()}
          disabled={!tx}
        >
          Transfer💸
        </div></div>
      </div>
    </div>
  );
}

export default Transfer;
