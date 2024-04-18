## Auth0 login-with-popup prototype

Flow:

- Use window.open() to open nested route in a popup / new tab (depending on device / full screen status)
- On nested route, a button redirects on click + appends a "token" search param to URL
- On render, the nested route grabs this param, posts it to the window that opened the popup, and closes the popup
- The event listener in the original window grabs the message + stores the token value in state
- We can now do whatever we like with it
