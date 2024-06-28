import React from 'react';
import './page.css';
function NotFound() {
  return (
    
      <div className='error-page'>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <a href="/">Go back to Home</a>"
    </div>
    
  );
}

export default NotFound;