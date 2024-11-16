import { document } from "postcss";
import { useEffect, useRef, useState } from "react";

function ScrolltoTop({ url }) {
  console.log(url);
  const ref = useRef(null);
  const [data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [Height,setHeight]=useState(0)
  
 
  

  useEffect(() => {
    async function fetchData(getUrl) {
      try {
        setLoading(true);
        const response = await fetch(getUrl);
        const data = await response.json();
        if (data && data.products && data.products.length > 0) {
          setData(data.products);
          setLoading(false);
        }
      } catch (e) {
        console.log(e.message);

        setErrorMessage(e.message);
      }
    }

    fetchData(url);
  }, [url]);

  useEffect(() => {

    if(document.documentElement){
        const documentHeight = document.documentElement.scrollHeight;
        console.log(documentHeight);
        
    }else{console.log("not");
    }
 
    console.log("ref",ref.current.offsetHeight)
   const height= ref.current.offsetHeight
   
   setHeight(height)
    
  }, [document.documentElement]);

  return (
    <div
      ref={ref}
      className="flex flex-col min-h-screen gap-y-6 place-items-center justify-center pb-16"
    >
      <button
        onClick={() => {
          window.scrollTo({
            top: 3500 ,
            behavior: "smooth",
          });
        }}
        className="px-6 py-3 rounded-xl bg-gray-400"
      >
        Scroll to Bottom
      </button>
      {Loading ? (
        <h1>...Loading</h1>
      ) : (
        data.map((ele, Index) => {
          return <p key={Index}>{ele.title}</p>;
        })
      )}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="px-6 py-3 rounded-xl bg-gray-400"
      >
        Scroll to Top
      </button>
    </div>
  );
}

export default ScrolltoTop;
