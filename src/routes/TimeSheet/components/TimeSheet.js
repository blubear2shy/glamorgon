import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

export const TimeSheet = ({ input, days, changeInput, doubleAsync }) => (
    <div style={{ margin: '0 auto' }} >
        <h1>{input}</h1>
        <Container>
            {
                Object.keys(days).map(day => (
                    <Row key={day}>
                        {
                            Object.keys(days[day]).map(time => (
                                <Col key={day+'_'+time}>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>time</InputGroupText>
                                        </InputGroupAddon>
                                        <Input value={days[day][time]} onChange={(event) => changeInput(event.target.value)}/>
                                    </InputGroup>
                                </Col>
                            ))
                        }
                    </Row>
                ))
            }

        </Container>
    </div>
)
TimeSheet.propTypes = {
    input: PropTypes.string.isRequired,
    days: PropTypes.object.isRequired,
    changeInput: PropTypes.func.isRequired,
    doubleAsync: PropTypes.func.isRequired,
}

export default TimeSheet
