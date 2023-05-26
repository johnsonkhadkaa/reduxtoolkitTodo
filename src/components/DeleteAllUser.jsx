import styled from "styled-components";
import { useDispatch } from "react-redux";
import { clearAllUsers } from "../store/slices/UserSlice";

export const DeleteAllUser = () => {
  
  const dispatch = useDispatch()
  const deleteUsers = () => {
    dispatch(clearAllUsers())
  }
  
  return <Wrapper>
    <button className="clear-btn" onClick={() => deleteUsers()}>
      Clear Users
    </button>

  </Wrapper>
};

const Wrapper = styled.section`
  
  .clear-btn {
    text-transforms: capitalize;
    background-color:#db338a;
    margin-top : 2rem;
  }
`;
