import React, { useState, useEffect } from 'react';
import './Employee.css';

function Employee() {
  const [employeeName, setEmployeeName] = useState('');
  const authToken = localStorage.getItem('authToken');

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        // Make a request to your employee data API endpoint
        const response = await fetch('http://localhost:8000/api/employee', {
          method: 'POST',
          headers: {
            'auth-token': authToken,
          },
        });

        if (!response.ok) {
          // Handle authentication error
          console.error('Authentication failed');
          return;
        }

        // Assuming the API returns an object with an EmployeeName property
        const { EmployeeName } = await response.json();
        setEmployeeName(EmployeeName);
      } catch (error) {
        console.error('Error during API request', error);
      }
    };

    // Call the function when the component mounts
    fetchEmployeeData();
  }, [authToken]);

  return (
    <div className="emp">
      <h1>Employee name is {employeeName}</h1>
    </div>
  );
}

export default Employee;
