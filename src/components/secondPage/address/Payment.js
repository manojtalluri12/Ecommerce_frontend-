import React from "react";
import GooglePayButton from "@google-pay/button-react";
import { Link } from "react-router-dom";
import { useMyData } from "../../../Ecomcontext/Ecomcontext";
const Payment = ({findingpart}) => {
  const { handleplaceOrder}=useMyData()
  //console.log(id);
  return (
    <div className="">
      <p>choose one of the payment option</p>
      <div className="payinggrid">
      <div>
        <GooglePayButton
          environment="TEST"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: "CARD",
                parameters: {
                  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                  allowedCardNetworks: ["MASTERCARD", "VISA"],
                },
                tokenizationSpecification: {
                  type: "PAYMENT_GATEWAY",
                  parameters: {
                    gateway: "example",
                    gatewayMerchantId: "exampleGatewayMerchantId",
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: "12345678901234567890",
              merchantName: "Demo Merchant",
            },
            transactionInfo: {
              totalPriceStatus: "FINAL",
              totalPriceLabel: "Total",
              totalPrice: "100.00",
              currencyCode: "USD",
              countryCode: "US",
            },
          }}
          onLoadPaymentData={(paymentRequest) => {
            console.log("load payment data", paymentRequest);
          }}
          className="paybutton"/>
      </div>
      <div className="paybutton">
        <button
          onClick={() => handleplaceOrder(findingpart._id)}
          className="button"
        >
          CASH AND DELIVERY
        </button>
      </div>
      </div>
    </div>
  );
};

export default Payment;