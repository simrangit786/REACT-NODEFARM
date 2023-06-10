import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("call");
    fetch("http://localhost:8000/api")
      .then((res) => {
        // console.log(res.json(),"response")
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        return data.json();
      });
  }, []);


  return (
    <div class="container">
      <h1>🌽 Node Farm 🥦</h1>

      <div class="cards-container">
        {data.map((i) => {
          return (
            <figure class="card">
              <div class="card__emoji">
                {i.image}
                {i.image}
              </div>

              <div class="card__title-box">
                <h2 class="card__title">{i.productName}</h2>
              </div>

              <div class="card__details">
                {i.organic && (
                  <div class="card__detail-box">
                    <h6 class="card__detail card__detail--organic">Organic!</h6>
                  </div>
                )}

                <div class="card__detail-box">
                  <h6 class="card__detail">{i.quantity} per 📦</h6>
                </div>

                <div class="card__detail-box">
                  <h6 class="card__detail card__detail--price">{i.price}€</h6>
                </div>
              </div>

              <a class="card__link" href="#">
                <span>
                  Detail <i class="emoji-right">👉</i>
                </span>
              </a>
            </figure>
          );
        })}
      </div>
     
      
    </div>
    //     <div className="App">
    //       <h1>Node-farm App</h1>
    //       <table>
    //   <tr>
    //     <th>Id</th>
    //     <th>Product Name</th>
    //     <th>From</th>
    //     <th>Nutrients</th>
    //   </tr>
    //   {data.map(i => {
    //     return (
    //      <tr>
    //      <td>{i.id}</td>
    //      <td>{i.productName}</td>
    //      <td>{i.from}</td>
    //      <td>{i.nutrients}</td>
    //      <td>{i.image}</td>
    //    </tr>
    //     )

    //   })}

    // </table>

    //     </div>
  );
}

export default App;
