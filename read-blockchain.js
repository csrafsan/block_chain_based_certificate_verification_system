 WavesKeeper.signAndPublishTransaction({
      type: 12,
      data: {
           data: [
                { key: "string", value: "testVdfgdgf dfgdfgdfg dfg dfg al", type: "string" },
                { key: "binary", value: "base64:AbCdAbCdAbCdAbCdAbCdAbCdAbCdAbCdAbCdAbCdAbCd", type: "binary" },
                { key: "integer", value: 20, type: "integer" },
                { key: "boolean", value: false, type: "boolean" },
           ],
           fee: {
               "tokens": "0.01",
               "assetId": "WAVES"
           }
      }
 }).then((tx) => {
      console.log("Hurray! I've saved data!!!");
 }).catch((error) => {
      console.error("Something went wrong", error);
 });