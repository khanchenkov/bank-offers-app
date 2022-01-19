import {useState} from "react";

import OfferCard from "../OfferCard";
import SkeletonCard from "../SkeletonCard/SkeletonCard";

import {Container} from "react-bootstrap";
import styled from "styled-components";

import {offersApi} from "../../services/RTKService";
import {useAppSelector} from "../../hooks/redux";


const OfferCardsList = () => {
    const {sort} = useAppSelector(state => state.sortReducer);

    const [limit, setLimit] = useState(10);

    const {data: offers, isLoading, error} = offersApi.useGetAllOffersQuery(limit);
    const skeleton = [...Array(2).keys()].map((el, i) => <SkeletonCard key={i} />)

    const renderItems = offers && offers.map((el, i) => <OfferCard key={i} data={el} id={i}/>)

    return(
        <OffersListBox>
            <Container>
                {isLoading && skeleton}
                {error && <ErrorBox>{error}</ErrorBox>}
                {renderItems}
            </Container>
            <Button
                onClick={() => setLimit(limit + 10)}
            >Показать больше</Button>
        </OffersListBox>
    )
}

const OffersListBox = styled.div`
  margin-bottom: 30px;
`;

const ErrorBox = styled.h2`
  background-color: #fff;
  padding: 25px;
`;

const Button = styled.button`
  display: block;
  height: 45px;
  margin: 30px auto 0px;
  width: 150px;
  background-color: steelblue;
  color: #fff;
  border: 0;
  border-radius: 8px;
`;

export default OfferCardsList;