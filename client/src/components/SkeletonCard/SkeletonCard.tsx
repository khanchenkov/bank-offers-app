import styled from "styled-components";
import {Container, Row, Col, Placeholder} from "react-bootstrap";
import {useMediaQuery} from 'react-responsive'

const SkeletonCard = () => {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1200px)' });
    const isLaptopOrPC = useMediaQuery({ query: '(min-width: 1200px)' });

    return(
        <OfferCardWrapper>
            <Container fluid="xl">
                <Row className="d-flex align-items-center " xl={5} lg={2} md={2} sm={2} xs={2}>
                    <Col>
                        <Placeholder as="p" animation="wave">
                            <Placeholder xs={12} bg="secondary"/>
                        </Placeholder>
                    </Col>
                    <Col>
                        <Placeholder as="p" animation="wave" >
                            <Placeholder xs={6} bg="secondary"/>
                            <Placeholder xs={12} bg="secondary"/>
                        </Placeholder>
                    </Col>
                    <Col>
                        {isLaptopOrPC &&
                        <>
                            <Placeholder as="p" animation="wave">
                                <Placeholder xs={6} bg="secondary"/>
                                <Placeholder xs={12} bg="secondary"/>
                            </Placeholder>
                        </>
                        }
                        {isTabletOrMobile &&
                        <>
                            <Placeholder as="p" animation="wave">
                                <Placeholder xs={6} bg="secondary"/>
                                <Placeholder xs={12} bg="secondary"/>
                            </Placeholder>
                        </>
                        }
                    </Col>
                    {isLaptopOrPC &&
                    <Col>
                        <Placeholder as="p" animation="wave">
                            <Placeholder xs={6} bg="secondary"/>
                            <Placeholder xs={12} bg="secondary"/>
                            <Placeholder xs={12} bg="secondary"/>
                        </Placeholder>
                    </Col>
                    }
                    <Col className="text-center">
                        <Placeholder as="p" animation="wave">
                            <Placeholder xs={6} bg="secondary"/>
                        </Placeholder>
                    </Col>
                </Row>
            </Container>
        </OfferCardWrapper>
    )
}

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

export default SkeletonCard;