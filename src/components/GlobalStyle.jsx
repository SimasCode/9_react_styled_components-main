import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  --primary: #22c55e;
}

html {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

button {
  cursor: pointer;
}

body {
  margin: 0;
}

img {
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

/* common rules */
.container {
  padding-left: 10px;
  padding-right: 10px;
  /* apridboti tik maximalu ploti */
  max-width: 600px;
  /* skaiciuoti parastes automatiskai vienodai is kaires ir is desines */
  margin: 0 auto;
}

input,
textarea,
select {
  font-size: 16px;
  padding: 0.3em 0.8em;
  border-radius: 4px;
  border: 1px solid #777;
  display: block;
  width: 300px;
}
textarea {
  min-height: 5rem;
  min-width: 300px;
  resize: vertical;
}

button {
  font-size: 16px;
  padding: 0.3em 0.8em;
  border-radius: 4px;
  border: 1px solid #777;
  cursor: pointer;
}

/* utility classes */

.flex {
  display: flex;
}

.between {
  justify-content: space-between;
  align-items: center;
}

.tac {
  text-align: center;
}

`;

export default GlobalStyle;
