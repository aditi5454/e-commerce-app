import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import TaxInfo from "./../../assets/icons/tax-info.png";
import "./bill-details.css";

const BillDetails = ({ buttonName }) => {

    useEffect(()=>{
        getGoToPage(buttonName);
    },[buttonName])

    const navigate= useNavigate();
    const [goToPage, setGoToPage] = useState();

    const getGoToPage =(buttonName) =>{
        if(buttonName === "Select Address"){
            setGoToPage("/cart-address");
        }
        else if(buttonName ==="Proceed to Payment"){
            setGoToPage("/payment");
        }
        else{
            setGoToPage("/order-placed");
        }  
    }

    const traversePage = () =>{
        navigate(goToPage);
    }

    return <div className="bill-details-component">
        <h5 className="bill-details-heading">Bill Details</h5>
        <div className="bill-details-container">
            <div className="bill-amount-heading">Item Total</div>
            <div className="bill-amount">&#x20B9;3099.00</div>
        </div>
        <div className="bill-details-container">
            <div className="tax-heading-and-logo">
                <div className="taxes-amount-heading">Tax & Charges</div>
                <img src={TaxInfo} alt="info" className="tax-info-logo"></img>
            </div>
            <div className="taxes-amount">&#x20B9;99.00</div>
        </div>
        <span className="dotted-line">---------------------------------------</span>
        <div className="bill-details-container">
            <div className="total-amount-heading">Total Amount</div>
            <div className="total-amount">&#x20B9;3198.00</div>
        </div>

        {
            buttonName ? <button className="select-address-button" onClick={traversePage} >{buttonName}</button> : <div></div>
        }

    </div>
}

export default BillDetails;