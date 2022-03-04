import styled from "styled-components";

const LoginPageStyles = styled.section`
  max-width: 400px;
  margin: 2rem auto;

  header {
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2rem;
  }

  .Toastify__toast {
    background-color: crimson;
    color: #ededed;
  }

  .Toastify__progress-bar {
    background-color: salmon;
  }
`;

const FormControl = styled.div`
  margin-bottom: 1rem;
`;

export { LoginPageStyles, FormControl };
