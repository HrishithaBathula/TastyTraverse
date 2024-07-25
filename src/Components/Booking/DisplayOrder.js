import React from 'react'

const DisplayOrder = (props) => {
    const renderData = ({orderData}) => {
        if(orderData) {
            return(
                orderData.map((item) => {
                    return(
                        <tr key={item._id} >
                            <td>{item.id}</td>
                            <td>{item.date}</td>
                            <td>{item.rest_name}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.address}</td>
                            <td>{item.cost}</td>
                            {item.menuItems && item.menuItems.map((product)=> {
                                return (
                                    <td key={product["menu-name"]}>
                                        {product["menu-name"]}
                                    </td>
                                )
                            })
                            }    
                        </tr >

                    )
                })
            )
        }
    }
   
  return (
    <div className='container'>
        <h4 className='my-3 text-success text-center' style={{'fontweight': 'bold'}}>Order is Confirmed !</h4>
        <div className='overflow-x-auto'>
            <table className="table overflow-x-auto table-striped-columns">
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Order Date</th>
                        <th>Restaurant Name</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Cost</th>
                        <th className='w-auto'>Item Names</th>
                    </tr>
                </thead>
                <tbody>
                    {renderData(props)}
                </tbody>
            </table>
        </div>
     
        
    </div>
  )
}

export default DisplayOrder