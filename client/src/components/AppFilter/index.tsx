import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';

const AppFilter = () => {
    return(
        <FilterBox>
            <Container>
                <Row>
                    <Col><Heading>Ипотечный калькулятор в Москве</Heading></Col>
                </Row>
                <Row className="d-flex align-items-end " xl={6} lg={6} md={1} sm={1} xs={1}>
                    <Col>
                        <Label htmlFor="selectPurpose">Цель ипотеки</Label>
                        <Select id="selectPurpose">
                            <option value="any">Любая</option>
                            <option value="">Рефинансирование</option>
                            <option value="">Квартира в новостройке</option>
                            <option value="">Квартира на вторичном рынке</option>
                            <option value="">Апартаменты в новостройке</option>
                            <option value="">Апартаменты на вторичном рынке</option>
                            <option value="">Загородный дом/Участок</option>
                            <option value="">Доля в квартире на вторичном рынке</option>
                            <option value="">Машиноместо/Гараж</option>
                            <option value="">Строительство дома</option>
                            <option value="">Таунхаус</option>
                            <option value="">Комната</option>
                            <option value="">Ремонт/отделка квартиры</option>
                            <option value="">Коммерческая недвижимость</option>
                            <option value="">Нецелевой ипотечный кредит под залог имеющейся недвижимости</option>
                        </Select>
                    </Col>
                    <Col>
                        <Label>Стоимость недвижимости</Label>
                        <Input type="text" placeholder="0"/>
                    </Col>
                    <Col>
                        <Label>Остаток долга</Label>
                        <Input type="text" placeholder="0"/>
                    </Col>
                    <Col>
                        <Label>Срок</Label>
                        <Select >
                            <option value="any">Любой</option>
                            <option value="year1">1 год</option>
                            <option value="year2">2 года</option>
                            <option value="year3">3 года</option>
                            <option value="year4">4 года</option>
                            <option value="year5">5 лет</option>
                            <option value="year6">6 лет</option>
                            <option value="year7">7 лет</option>
                            <option value="year8">8 лет</option>
                            <option value="year9">9 лет</option>
                            <option value="year10">10 лет</option>
                            <option value="year12">12 лет</option>
                            <option value="year15">15 лет</option>
                            <option value="year20">20 лет</option>
                            <option value="year25">25 лет</option>
                            <option value="year30">30 лет</option>
                        </Select>
                    </Col>
                    <Col>
                        <Button>Еще +</Button>
                    </Col>
                    <Col>
                        <Button>Показать (46)</Button>
                    </Col>
                </Row>
            </Container>
        </FilterBox>
    )
};

const FilterBox = styled.div`
  box-sizing: border-box;
  padding: 110px 0 40px;
  background-color: #ffffff;
  height: 400px;
  margin-bottom: 25px;
  
  @media (max-width: 992px) {
    height: 100%;
    padding: 40px 0;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 40px;
  color: rgb(60, 62, 68);
  margin-bottom: 70px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

const Label = styled.label`
  position: absolute; 
  font-size: 12px;
  color: slategray;
  transform: translateY(-30px);
`;

const Select = styled.select`
  padding: 0 15px;
  width: 100%;
  height: 45px;
  border-radius: 8px;
  @media (max-width: 992px) {
    margin-bottom: 40px;
  }
`;

const Button = styled.button`
  height: 45px;
  width: 100%;
  background-color: steelblue;
  color: #fff;
  border: 0;
  border-radius: 8px;
  @media (max-width: 992px) {
    margin-bottom: 30px;
  }
`;

const Input = styled.input`
  padding: 15px;
  height: 45px;
  width: 100%;
  border: 1px solid #666;
  border-radius: 8px;
  @media (max-width: 992px) {
    margin-bottom: 40px;
  }
`;

export default AppFilter;