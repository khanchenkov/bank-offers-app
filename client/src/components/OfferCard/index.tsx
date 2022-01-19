import styled from "styled-components";
import {Container, Row, Col} from "react-bootstrap";
import {useMediaQuery} from 'react-responsive'
import {Link} from "react-router-dom";
import {
    ICreditAmount,
    ICustomerRequirements,
    IOffer,
    IOfferOrganization,
    IPeriods,
    IPeriodsRateTerm,
    IRate
} from "../../models/IOffer";

const OfferCard = (props: {data: object, id: number}) => {

    const {name: ofrName, alias, organization, customerRequirements, rate}: IOffer = props.data;
    const {name: orgName, license, logo}: IOfferOrganization = organization || {};
    const {age, documents, lastExperience}: ICustomerRequirements = customerRequirements || {};
    const {creditAmount, initialAmount, currency, periods}: IRate = rate || {};

    const {rate: percents, isFloatingRate, term, termUnit}: IPeriods = periods[0] || {};

    const {from: percentsFrom, to: percentsTo}: IPeriodsRateTerm = percents || {};
    const {from: termFrom, to: termTo}: IPeriodsRateTerm = term || {};

    const {from: creditFrom, to: creditTo}: ICreditAmount = creditAmount || {};


    const showCurrency = (currency: string): string => {
        switch(currency) {
            case "USD":
                return "$"
            case "RUB":
            default:
                return "₽"
        }
    }

    const creditSum = (creditFrom: string, creditTo: string) => {
        if (creditFrom !== undefined && creditTo !== undefined) {
            return <BoldNumbers>{beautifyNumber(Number(creditFrom))} {showCurrency(currency)} - {beautifyNumber(Number(creditTo))} {showCurrency(currency)}</BoldNumbers>
        }
        if (creditTo === undefined) {
            return <BoldNumbers>от {beautifyNumber(Number(creditFrom))} {showCurrency(currency)} </BoldNumbers>
        }
    }

    const beautifyNumber = (num: number) => new Intl.NumberFormat('ru-RU').format(num);
    const termToCredit = (term: number): number => term / 12;

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1200px)' })
    const isLaptopOrPC = useMediaQuery({ query: '(min-width: 1200px)' })

    return(
        <OfferCardWrapper>
            <Container fluid="xl">
                <Row className="d-flex align-items-center " xl={5} lg={2} md={2} sm={2} xs={2}>
                    <Col>
                        <BankLogo src={logo} alt={orgName}/>
                    </Col>
                    <Col>
                        {isLaptopOrPC && <BoldNumbers>от {percentsFrom}%</BoldNumbers>}
                        <CardInfoSpan>«{ofrName}»</CardInfoSpan>
                    </Col>
                    <Col>
                        {isLaptopOrPC &&
                            <>
                            {creditSum(creditFrom, creditTo)}
                            <span>На срок до {termToCredit(termTo)} лет</span>
                            </>
                        }
                        {isTabletOrMobile &&
                            <>
                            <BoldNumbers>от {percentsFrom}%</BoldNumbers>
                            <BoldNumbers>{
                                creditTo ? `до ${Number(creditTo) / 1000000} млн ` + showCurrency(currency)  : `до ∞ ` + showCurrency(currency)
                            }</BoldNumbers>
                            </>
                        }
                    </Col>
                    {isLaptopOrPC &&
                        <Col>
                            <CardInfoSpan>Возраст от {age} года</CardInfoSpan>
                            <CardInfoSpan>Стаж от {lastExperience} месяцев</CardInfoSpan>
                            <CardInfoSpan>{documents} документа</CardInfoSpan>
                        </Col>
                    }
                    <Col className="text-center">
                        <CardInfoSpan>лиц. № {license}</CardInfoSpan>
                        <Link to={"offer/" + props.id}>
                            <Button>
                                Посмотреть
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </OfferCardWrapper>
    )
}

const BankLogo = styled.img`
  max-width: 125px;
  width: auto;
  @media (max-width: 1200px) {
    display: block;
    margin: 0 auto 20px;
  }
`

const OfferCardWrapper = styled.div`
  background-color: #fff;
  min-height: 140px;
  width: 100%;
  border-bottom: 1px solid #ebebeb;
  padding: 25px;
  @media(max-width: 1200px) {
    padding: 40px;
  }
`;

const CardInfoSpan = styled.span`
  display: block;
  margin-bottom: 7px;
  font-size: 14px;
  @media (max-width: 1200px) {
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

const BoldNumbers = styled.span`
  display: block;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 7px;
  @media (max-width: 1200px) {
    text-align: center;
    font-size: 18px;
  }
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: steelblue;
  color: #fff;
  border: 0;
  border-radius: 8px;
  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    width: 100%;
    font-size: 12px;
  }
`;

export default OfferCard;