import React from 'react'
import "./bookStyle.css"
const Book = () => {
  return (
     <section className="book-section">
        <div className="book-form-box">
            <h1>Booking Enquiry</h1>
            <form action="" className="booking">
              <h3>Name</h3>
              <input type="text"/>
              <h3>Email</h3>
              <input type="email"/>
              <h3>Phone Number</h3>
              <input type="text"/>
              <h3>Number of Adults</h3>
              <input type="text"/>
              <h3>Number of Children</h3>
              <input type="text"/>
              <h3>Number of Days</h3>
              <input type="text"/>
              <h3>Room Number</h3>
              <input type="text"/>
              <h3>Any Instructions</h3>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </form>

            <div className="form-submit">
                <button>Submit</button>
            </div>
        </div>
     </section>
  )
}

export default Book;