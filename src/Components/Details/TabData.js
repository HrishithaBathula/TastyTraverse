import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";


const TabData = ({details}) => {
  return (
    <Tabs>
        <TabList className="d-flex mb-0">
        <Tab className="menu-btn overview-btn">Overview</Tab>
        <Tab className="menu-btn contact-btn">Contact Us</Tab>
        </TabList>
        <TabPanel className="mx-4 mb-4">
        <h4>About this place</h4>
            <table className="table">
                <tbody>
                    <tr>
                        <th className="fw-semibold">Cuisine</th>
                        {details &&
                            details.cuisines.map((item) => (
                            <td key={item.cuisine_name}>{item.cuisine_name}</td>
                        ))}
                    </tr>
                    <tr>
                        <th className="fw-semibold">Average Cost</th>
                        <td colspan='2'>{details.cost} for two people (approx.)</td>
                    </tr>
                    <tr>
                        <th className="fw-semibold">Rating</th>
                        <td colspan='2'>We got a rating of {details.average_rating}/5. Our viewers
                        always say our restaurant is the {details.rating_text} in
                        this city.</td>
                    </tr>
                    
                </tbody>
            </table> 
        </TabPanel>

        <TabPanel  className=" mx-4 mb-4">
            <table className="table">
                <tbody>
                <tr>
                    <th className="fw-semibold col-4">Phone Number: </th>
                    <td className="col-8">+91 114004566</td>
                </tr>
                <tr>
                    <th className="fw-semibold col-4">{details.restaurant_name} </th>
                    <td className="col-8">{details.address}</td>
                </tr>
                </tbody>
            </table>
        </TabPanel>
  </Tabs>
  )
}

export default TabData