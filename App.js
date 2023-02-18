import React, { Component } from 'react';

// import './main.css';
import axios from 'axios'

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonData: {}
    };
  }

  componentDidMount() {
    // make an Axios GET request to retrieve JSON data
    axios.get('https://restframework.pythonanywhere.com/house/1/')
      .then(response => {
        // handle the response and update the component state
        // alert(response.data)
        const jsonData = response.data;
        this.setState({ jsonData });
      })
      .catch(error => {
        console.log(error);
      });
    }
      render() {
        // access the specific data you want to display from the component state
        const { bhk,price,gender,ty_of_prop,age_of_prop,furn_status,location,sf} = this.state.jsonData;
    



    return (
      <div className='main'>
        <div className='filters'>
          <div id="appliedfilters">
            <h2 >applied filters</h2>
            <a href="">clear all</a>
          </div>




          <br />

          <hr />
          <div className='price'>
            <h4>price</h4>

            <div>
              <input type="range" id="price" name="price"
                min="0" max="11" />
              <label for="price">price</label>
            </div>

          </div>
          <br />

          <hr />
          <div className='sq.feet'>
            <h4>sq.feet</h4>

            <div>
              <input type="range" id="sqFeet" name="sq.feet"
                min="0" max="11" />
              <label for="sq.feet">sq.feet</label>
            </div>

          </div>
          <br />

          <hr />
          <div>
            <h4>furnishing status</h4>
            <input type='radio' />fully furnished
            <input type='radio' />not furnished<br />
            <input type='radio' />half

          </div>
          <br />

          <hr />


          <h3>age of property</h3>
          <input type='radio' />1-5years
          <input type='radio' />5-10yrs<br />
          <input type='radio' />10+yrs
          <br />

          <hr />
          <h3>no.of bedrooms</h3>
          <input type='checkbox' />1BHK
          <input type='checkbox' />2BHK<br />
          <input type='checkbox' />3BHK
          <br />

          <hr />
          <h3>types of property</h3>
          <input type='checkbox' />Appartment
          <input type='checkbox' />villa<br />
          <input type='checkbox' />house
          <br />

          <hr />
          <h3>available for</h3>
          <input type='checkbox' />men
          <input type='checkbox' />women<br />
          <input type='checkbox' />married

        </div>
        <div className='properties'>
          <picture >
            <img src="https://th.bing.com/th?id=OIP.fFF3Uo8Gp2ROms2DO3nbxwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" width="100%" height="100%"></img>

          </picture>
          <table>
            <tr>
              <td colSpan="3"><h5 ><a href=""> {bhk}-- BHK flat for rent near karumathampatti</a></h5></td>

            </tr>
            <tr>
              <td>
              {price}
                <span>/month</span>
                <div id="info">deposit $200</div>
              </td>
              <td>{sf}/sqFeet
                {/* <span>150 sq.meter</span> */}
                <div id="info">build up area</div>
              </td>
              <td>
              
                <span>3</span>
                <div id="info">baths</div>
              </td>
            </tr>

            <tr ><td colSpan="3" id="info">{location}</td></tr>
            <tr><td>
              <button type="button" class="btn btn-dark">Contact</button></td></tr>
              
          </table>

        </div>

      </div>
    )
    }
  }
  export default MyComponent;