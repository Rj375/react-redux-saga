import "./App.css";
import Header from "./components/Header";
import  Router  from "./router/Router";
function App() {
  return (
    <div className="App">
      {/* <button onClick={() => handleAddToCart()}>Add To Cart</button> or do like this  */}
      <Header />
      <Router/>

      {/* <hr />
       <h1>Table Information</h1>

  <hr />     
    
    <table border="1" width="80%" style={{margin: "auto"}}>
        
          <tr>
            <th>Country</th>
            <th>State</th>
            <th>City</th>
            <th>Street</th>
            <th>Male</th>
            <th>Female</th>
            <th>Others</th>
          </tr>


          <tr>
             <td rowSpan="8">1</td>
             <td rowSpan="4">Kerala</td>
             <td rowSpan="2">Cochin</td>
             <td>New Street</td>
             <td>500</td>
             <td>600</td>
             <td>6</td>
             
          </tr>

          <tr>
            <td>Main Street</td>
            <td>300</td>
            <td>288</td>
            <td>2</td>
          </tr>

          <tr>
            <td rowSpan="2">Trivandrum</td>
            <td>Guru Street</td>
            <td>500</td>
            <td>600</td>
            <td>10</td>
          </tr>

          <tr>
            <td>TVK street</td>
            <td>500</td>
            <td>600</td>
            <td>2</td>
          </tr>
         
         <tr>
           <td rowSpan="4">Maharastra</td>
           <td rowSpan="2">Mumbai</td>
           <td>Krisha Street</td>
           <td>700</td>
           <td>850</td>
           <td>1</td>
         </tr>

         <tr>
           <td>Main Street</td>
           <td>500</td>
           <td>600</td>
           <td>2</td>
         </tr>

         <tr>
            <td rowSpan="2">Surath</td>
            <td>New Street</td>
            <td>500</td>
            <td>600</td>
            <td>4</td>
         </tr>

         <tr>
           <td>Billa Street</td>
           <td>500</td>
           <td>600</td>
           <td>2</td>
         </tr>



        <tr>
          <td rowSpan="2">2</td>
          <td rowSpan="2">Alaska</td>
          <td rowSpan="2">AKA Central</td>
          <td>New Street</td>
          <td>200</td>
          <td>210</td>
          <td>2</td>
        </tr>

        <tr>
          <td>Cross Street</td>
          <td>1000</td>
          <td>1050</td>
          <td>10</td>
        </tr>

   

     
         
      
      


    </table> */}
    </div>
  );
}

export default App;
