import styled from "styled-components";
import {Container} from 'react-bootstrap';

import {useAppDispatch} from "../../hooks/redux";
import {sortSlice} from "../../store/reducers/sortSlice";

const AppSort = () => {

    const dispatch = useAppDispatch();

    const {setRateSort, setSumCreditSort} = sortSlice.actions;

    return(
        <Container>
            <SortBox>
                <span>Сортировать:</span>
                <SortButton
                    onClick={()=>dispatch(setRateSort('rate'))}
                    className="active"
                >по ставке</SortButton>
                <SortButton
                    onClick={()=>dispatch(setSumCreditSort('sum'))}
                >по сумме</SortButton>
            </SortBox>
        </Container>
    )
}

const SortBox = styled.div`
  border-radius: 5px 5px 0 0;
  background-color: #fff;
  padding: 10px 20px;
  border-bottom: 1px solid #ebebeb;
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

const SortButton = styled.button`
  border: none;
  background-color: #fff;
  
  &.active {
   color: #999; 
  }
`;

export default AppSort;