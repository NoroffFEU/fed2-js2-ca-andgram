// Function to check if the user is authenticated
function redirectIfAuthenticated() {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      window.location.href = '/'; // Redirect if token exists
    }
  }
  
  // Run the redirection check
  redirectIfAuthenticated();
  