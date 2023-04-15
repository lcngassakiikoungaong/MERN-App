import React, { useState } from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import "../css/shared_css/inputform.css";
import "../css/shared_css/table.css";
import "../css/shared_css/herobutton.css";
import "../css/grow.css";

/*eslint-disable jsx-a11y/anchor-is-valid*/

function Grow() {
  let [total, setTotal] = useState(parseFloat(sessionStorage.getItem("growTotal") || 0));
        let [rows, setRows] = useState(JSON.parse(sessionStorage.getItem("growTableRows")) || []);
    
        let onAddWebsite = (e) => {
          e.preventDefault();
            let cate = e.target.elements.Category.value;
            let prdr = e.target.elements.Purchase.value;
            let date = e.target.elements.Date.value;
            let amnt = e.target.elements.Amount.value;
        
            let formatAmnt = '$' + parseFloat(amnt).toLocaleString('en-US', {'minimumFractionDigits':2,'maximumFractionDigits':2});
            
            setTotal(parseFloat(total) + parseFloat(amnt));
            sessionStorage.setItem("growTotal", parseFloat(total) + parseFloat(amnt));
        
            setRows([...rows, { cate, prdr, date, formatAmnt }]);
            sessionStorage.setItem("growTableRows", JSON.stringify([...rows, { cate, prdr, date, formatAmnt }]));
        };

        let onDeleteRow = (index) => {
          let rowToDelete = rows[index];
          let amntToDelete = rowToDelete.formatAmnt;

          amntToDelete = amntToDelete.replace(/[$]|[,]/g, '');
          setTotal(parseFloat(total) - parseFloat(amntToDelete));
          sessionStorage.setItem("growTotal", parseFloat(total) - parseFloat(amntToDelete));
      
          let updatedRows = rows.filter((_, i) => i !== index);
          setRows(updatedRows);
          sessionStorage.setItem("growTableRows", JSON.stringify(updatedRows));
      };

        let [category, setCategory] = useState('');

        let handleCategoryChange = (event) => {
            setCategory(event.target.value);
        };

        
        let handleIncomeKeyPress = (event) => {
          
          if(event.charCode === 46) // check for decimal
          {
              if (event.target.value.indexOf('.') === -1) {                 
                  
              }else {
                  event.preventDefault();
              }
          }else if(event.charCode === 13) { //check for Enter
              
              //allow submission of the form

          }else{ //check for number only input
              if (( event.charCode > 31) && 
              (event.charCode < 48 || event.charCode > 57)){
                event.preventDefault();
              }

              let searchVal = event.target.value.search(/\./);
              if (searchVal !== -1 && event.target.selectionStart > searchVal && event.target.value.split('.')[1].length === 2) //check for only two decimals
              {
                event.preventDefault();
              }
          }
          
      };

return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
      />

      <section className='headergr'>
        <Navbar></Navbar>

        <div className="text-box">
          <h1>Grow</h1>
          <hr />
          <p>How much are you saving for emergencies or retirement?</p>
          <a href="#form-header" className="hero-btn" id="libertyBtn"
          >Click here to enter your investments</a>
        </div>
      </section>

        <section>
                <h1 id="form-header" className="form-header">Enter your Expenses</h1>
                <div className="containerL" id='containerL'>
                    <form action="#" method="POST" onSubmit={onAddWebsite}>
                    <div className="user-details">
              <div className="input-box">
                            <label htmlFor="categoryInput">Category</label>
                            <select
                            className="input-box"
                            name="Category"
                            id="categoryInput"
                            value={category}
                            onChange={handleCategoryChange}
                            required
                            >
                            <option value="">Select the category</option>
                <option value="Emergency">Emergency Fund</option>
                <option value="Retirement">Retirement Savings</option>
                <option value="Miscellaneous">Miscellaneous</option>
              </select>
            </div>
      
            <div className="input-box">
              <span className="details">Description</span>
              <input type="text" id="PurchaseInput" className="purchaseInput" placeholder="Enter the type of purchase"
                name="Purchase" required />
            </div>
      
            <div className="input-box">
              <span className="details">Date</span>
              <input type="date" id="DateInput" className="dateInput" placeholder="11/14/2022" name="Date" required />
            </div>
      
            <div className="input-box">
              <span className="details">Amount</span>
              <input type="text" 
              id="AmountInput" 
              className="amountInput" 
              data-type="currency"
              onKeyPress={handleIncomeKeyPress}
              placeholder="Enter the amount" 
              name="Amount" 
              required />
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Submit" id="button" />
          </div>
        </form>
      </div>
    </section>


            <section>
                <table id="tbl" className="table">
                <thead>
                <tr>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                        <td>{row.cate}</td>
                        <td>{row.prdr}</td>
                        <td>{row.date}</td>
                        <td>{row.formatAmnt}</td>
                        <td><button id="deleteBtn" onClick={() => onDeleteRow(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </section>

        <section className="summary-link">
          <a href="/summary" className="hero-btn gold-btn" id="LibertyBtn">
            Back to Summary
          </a>
        </section>

        <Footer></Footer>
    </>
  );
}

export default Grow;