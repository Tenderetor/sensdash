import React, {useEffect, useState, useContext} from 'react';
import styled from 'styled-components'

import colors from '../colors'



const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Heading = styled.div`
    font-size: 15px;
    font-weight: bold;
    flex-shrink: 0;
`

const Content = styled.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
`

interface propTypes {
    setVal: any
    val: number
    heading: string
}


function NumberSlider(props:propTypes) {

  return (
    <Container>
        <Heading>{props.heading}</Heading>
        <Content>
            {/*
            <InputRange
                maxValue={100}
                minValue={0}
                step={1}
                value={props.val}
                onChange={value => props.setVal(value)} 
                formatLabel={() => {return ""} }
            />
                */
            }
            <input
                type="range"
                value={props.val}
                onChange={props.setVal}
                step={1}
                min={0}
                max={100}
            />
            <div style={{marginLeft: '15px'}}>
                {`${props.val}%`}
            </div>
        </Content>
    </Container>
  );
}

export default NumberSlider;


