import React, { useState, useEffect } from "react";
import Header from "../../components/shared/layout/Header";
import API from "../../services/API";
import moment from "moment";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const uiColors = [
    "#3498db",
    "#e74c3c",
    "#2ecc71",
    "#f1c40f",
    "#9b59b6",
    "#e67e22",
    "#1abc9c",
    "#ecf0f1",
  ];

  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/bloodgroups-data");

      if (data?.success) {
        setData(data?.bloodGroupData);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodGroupData();
  }, []);

  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-recent-inventory");
      if (data?.success) {
        setInventoryData(data?.inventory);
        console.log(inventoryData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);

  return (
    <>
      <Header />
      <div className="d-flex d-row flex-wrap">
        {data?.map((record, index) => (
          <div
            className="card m-2 p-1"
            key={index}
            style={{ width: "18rem", backgroundColor: `${uiColors[index]}` }}
          >
            <div className="card-body">
              <h3 className="card-title bg-light text-dark mb-3 text-center">
                {record.bloodGroup}
              </h3>
              <p className="card-text">
                Total in : <b>{record.totalIn}</b> (ml)
              </p>
              <p className="card-text">
                Total out : <b>{record.totalOut}</b> (ml)
              </p>
            </div>
            <div className="card-footer text-light bg-dark text-center">
              Total Available : <b>{record.availableBlood}</b>(ml)
            </div>
          </div>
        ))}
      </div>
      <div className="container my-3">
        <h1 className="my-3"> Recent Blood Transactions</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Blood Group</th>
              <th scope="col">Inventory Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Donor Email</th>
              <th scope="col">Time and Date</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData?.map((record) => (
              <tr key={record._id}>
                <td>{record.bloodGroup}</td>
                <td>{record.inventoryType}</td>
                <td>{record.quantity} (ml)</td>
                <td>{record.email}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Analytics;
