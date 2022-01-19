import {Container, Table} from "react-bootstrap";
import styled from "styled-components";
import {Link, useParams} from "react-router-dom";
import {
    ICreditAmount,
    ICustomerRequirements,
    IOffer,
    IOfferOrganization,
    IPeriods,
    IPeriodsRateTerm,
    IRate
} from "../../models/IOffer";
import {offersApi} from "../../services/RTKService";

const OfferPage = () => {

    const {id} = useParams();

    const {data: offer, isLoading, error} = offersApi.useGetOfferQuery(id)

    const {name: ofrName, organization, customerRequirements, rate}: IOffer = offer || {};
    const {name: orgName, logo}: IOfferOrganization = organization || {};
    const {age, manAgeAtRepayment}: ICustomerRequirements = customerRequirements || {};
    const {creditAmount, periods}: IRate = rate || {};
    const {rate: percents, term}: IPeriods = periods ? periods[0] : {};
    const {from: percentsFrom}: IPeriodsRateTerm = percents || {};
    const {from: termFrom, to: termTo}: IPeriodsRateTerm = term || {};
    const {from: creditFrom}: ICreditAmount = creditAmount || {};

    const beautifyNumber = (num: number) => new Intl.NumberFormat('ru-RU').format(num);

    return(
        <Container>
            <OfferBox>
                <Link to="/">
                    <Button className="alternative">
                        Назад
                    </Button>
                </Link>
                {isLoading && <h1>Загрузка...</h1>}
                <Heading>{orgName}</Heading>
                <Image src={logo} alt={orgName} />
                <Table striped bordered hover>
                    <tbody>
                    <tr>
                        <td>Цель</td>
                        <td>{ofrName}</td>
                    </tr>
                    <tr>
                        <td>Ставка</td>
                        <td>от {percentsFrom}%</td>
                    </tr>
                    <tr>
                        <td>Сумма</td>
                        <td>от {beautifyNumber(Number(creditFrom))} ₽</td>
                    </tr>
                    <tr>
                        <td>Срок</td>
                        <td>от {termFrom} до {termTo} месяцев</td>
                    </tr>
                    <tr>
                        <td>Возраст на момент получения</td>
                        <td>от {age} года</td>
                    </tr>
                    <tr>
                        <td>Возраст на момент погашения</td>
                        <td>от {manAgeAtRepayment} лет</td>
                    </tr>
                    </tbody>
                </Table>
                <Button>Перейти на сайт</Button>
            </OfferBox>
        </Container>
    )
}

const OfferBox = styled.div`
  background-color: #fff;
  padding: 25px;
  margin: 25px;
  border-radius: 5px;
`;

const Button = styled.button`
  height: 45px;
  width: 150px;
  background-color: steelblue;
  color: #fff;
  border: 0;
  border-radius: 8px;
  &.alternative {
    border: 1px solid steelblue;
    background-color: #fff;
    color: steelblue;
  }
  @media (max-width: 576px) {
    width: 120px;
    height: 30px;
    font-size: 12px;
  }
`;


const Heading = styled.h1`
  margin: 25px 0;
  @media(max-width: 576px) {
    font-size: 24px;
  }
`;

const Image = styled.img`
  display: block;
  width: 200px;
  margin: 0 0 30px 0;
  @media(max-width: 576px) {
    max-width: 125px;
  }
`;

export default OfferPage;