import { useEffect, useState } from "react";

function Searchapi() {
  const [apidata, setapidata] = useState([]);

  useEffect(() => {
    const data = [];
    async function getdata() {
      const names = [];
      const data = await fetch("https://randomuser.me/api/");
      const realdata = await data.json();
      names.push(realdata.results[0].name);
      return names;
    }

    for (let i = 0; i <= 10; i++) {
      getdata().then((ele) => {
        data.push(ele[0]);
        setapidata(data);
      });
    }
    console.log(apidata);
  }, []);

  return <div>hii</div>;
}

export default Searchapi;
