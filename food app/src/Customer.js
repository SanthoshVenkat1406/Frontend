import React, { useState } from "react";

function Customer() {
  const [customerName, setCustomerName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    const validateForm = () => {
        const nameRegex = /^[a-zA-Z]+$/;
    };
    
        if (!nameRegex.test(name)) {
          alert("Name can only contain letters (alphabets)");
          return false;
        }
        return true;
      };
    if (customerName === "customerName") {
      setCustomerName(value);
    } else if (customerName=== "lastName") {
      setLastName(value);
    } else if (customerName === "address") {
      setAddress(value);
    } else if (customerName === "phoneNumber") {
      setPhoneNumber(value);
    }
  };

    if (customerName.trim() === "") {
      newErrors.customerName = "Customer name cannot be empty";
    }

    if (lastName.trim() === "") {
      newErrors.lastName = "Last name cannot be empty";
    }

    // Phone number validation (you can add more validation logic here)
    if (!/^\d{10}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number format";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleReset = () => {
    setCustomerName('');
    setLastName('');
    setAddress('');
    setPhoneNumber('');
    setError('');
  };

  return (
    <div>
      <center>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            required
          />
          {error && <p className="error">{error}</p>}

          <br /><br />

          <input type="submit" value="Submit" />
          <input type="button" value="Reset" onClick={handleReset} /><br /><br />
        </form>
      </center>
    </div>
  );
export default Customer;






