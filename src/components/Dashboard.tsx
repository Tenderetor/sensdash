import React, {useEffect, useState, useContext} from 'react';
import styled from 'styled-components'
import BarGraph from './BarGraph';
import { CSVLink, CSVDownload } from "react-csv";
import colors from '../colors'
import DownloadScreen from './DownloadScreen';
import Button from './Button';
import NumberSlider from './NumberSlider';
import db from '../firebase';

import { ref, onValue, push, set } from "firebase/database";

const colorsArr = [colors.darkPurple, colors.purple, colors.blue, colors.green, colors.darkBlue, colors.primary, colors.lightRed, colors.red, 'black', 'black']

const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const NavBar = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  background: #eeeeee;
  flex-shrink: 0;
  justify-content: flex-end;
  align-items: center;
`

const NavContent = styled.div`
  height: 100%;
  width: calc(100% / 3);
  display: flex;
  align-items: center;
`

const WaveContentContainer = styled.div`
    background: #eeeeee;
    width: 100%;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

const WaveContent = styled.div`
    width: calc(100% - 40px);
    height: calc(100% - 0px);
    background: white;
    display: flex;
    flex-shrink: 0;
    display: flex;
    flex-wrap:wrap;
    justify-content: flex-start;
    align-items: center;
`

const WaveGraphContainer = styled.div`
    width: calc(100% - 50px);
    height: calc(100% - 50px);
    flex-shrink: 0;
`

const CsvButton = styled.div`
  position: relative;
    height: 100%;
    width: 100%;
    cursor: pointer;
    font-size: 25px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    fle-direction: column;
    align-items: center;
    transition: all 0.3s ease;
    &:hover {
        color: white;
        background: ${colors.primary};
    }
 
`

const DateContainer = styled.div`
    font-size: 15px;
`
interface propTypes {
    coAverage: number
    coSamples: number[]
    waveSamples: any
    logout: any
    currentTime: Date
    lastUpdated: string
    largestWave: number
    serverOnline: boolean
}


function Dashboard(props:propTypes) {
    const [downloadOpen, setDownloadOpen] = useState(false)
    const [pump1, setPump1] = useState(0)
    const [pump1Key, setPump1Key] = useState("")

    const [pump2, setPump2] = useState(0)
    const [pump2Key, setPump2Key] = useState("")

    useEffect(() => {
        const pumpsRef = ref(db, 'Pumps/');
    
        onValue(pumpsRef, (snapshot:any) => {
          if(snapshot.exists()) {
            //console.log(snapshot.val())
    
            let pumps = snapshot.val()
            console.log(pumps)
            for (var key in pumps) {
                if(pumps[key].pump === "pump1") {
                    setPump1(pumps[key].value)
                    setPump1Key(key)
                }
                else if(pumps[key].pump === "pump2") {
                    setPump2(pumps[key].value)
                    setPump2Key(key)
                }
            }
          }
    
          
        })

      }, [])

  return (
    <Container>
        <NavBar>
            <NavContent
                style={{
                    justifyContent: 'flex-start',
                    paddingLeft: '20px',
                    fontWeight: 'bold'
                }}
            >
                
                <DateContainer>
                    Last updated: 
                    <div style={{fontSize: '20px'}}>
                        {props.lastUpdated}
                    </div>

                </DateContainer>
            </NavContent>

            <NavContent
                style={{
                    justifyContent: 'center',
                    fontWeight: 'bold'

                }}
            >
                <DateContainer>
                    Current time: 
                    <div style={{fontSize: '20px'}}>
                        {timeString(props.currentTime)}
                    </div>

                </DateContainer>
            </NavContent>

            <NavContent
                style={{
                    justifyContent: 'flex-end',
                    paddingRight: '20px'
                }}
            >
                <Button 
                    value={'logout'}
                    clicked={props.logout}
                    color={colors.primary}
                    textColor={'white'}
                />
            </NavContent>
        </NavBar>
        
        <WaveContentContainer>
            <WaveContent>
                {
                    props.waveSamples.map((prop:any, key:number) => 
                        <div style={{width: 'calc(100% / 4)', height: 'calc(100% / 3)', flexShrink: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <WaveGraphContainer>
                                <BarGraph
                                    title={prop.name}
                                    average={prop.average}
                                    value={prop.samples[0]}
                                    color={colorsArr[key]}
                                    min={0}
                                    max={props.largestWave * 1.1}
                                />
                            </WaveGraphContainer>
                        </div> 
                    )
                }

                <div style={{width: 'calc(100% / 4)', height: 'calc(100% / 3)', flexShrink: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <WaveGraphContainer>
                        <BarGraph
                            title={'CO2 Graph'}
                            average={props.coAverage}
                            value={props.coSamples[0]}
                            color={colors.green}
                        />
                    </WaveGraphContainer>
                </div> 

                <div style={{width: 'calc(100% / 4)', height: 'calc(100% / 3)', flexShrink: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        
                    <WaveGraphContainer>
                        <div style={{height: '70%', width: '100%'}}>
                            <div style={{height: '50%', width: '100%'}}>
                                <NumberSlider
                                    val={pump1}
                                    setVal={pump1Setter}
                                    heading="Pump 1"
                                />
                            </div>
                            <div style={{height: '50%', width: '100%'}}>
                                <NumberSlider
                                    val={pump2}
                                    setVal={pump2Setter}
                                    heading="Pump 2"
                                />
                            </div>

                        </div>

                        <div style={{height: '30%', width: '100%'}}>
                            <CsvButton 
                                onClick={() => setDownloadOpen(true)}
                            >
                                <div>Download</div>
                                <div>CSV</div>
                            </CsvButton>
                        </div>
                        
                    </WaveGraphContainer>
                </div> 

            </WaveContent>
        </WaveContentContainer>

        <div style={{
            width: '100%', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#eeeeee'
        }}>
            <div style={{marginLeft: '20px', fontSize: '15px'}}>* all averages calculated using last 10 samples</div>

            <div 
                style={{
                    marginRight: '20px', 
                    fontSize: '15pzx',
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                }}
                
            >
                Server:
                <div style={{height: '10px', marginLeft: '5px', marginTop: '2px', marginRight: '5px', width: '10px', borderRadius: '5px', background: props.serverOnline ? 'green' : 'red'}} />
                {props.serverOnline ? "online" : "offline" }
            </div>
        </div>

                {/*
        <BottomContent>
            <COContent>
                <div style={{height: '100%', aspectRatio: '1'}}>
                    <BarGraph
                        title={'CO2 Graph'}
                        average={props.coAverage}
                        value={props.coSamples[0]}
                        color={colors.primary}
                    />
                </div>
            </COContent>

            <COContent>
                <Button onClick={() => setDownloadOpen(true)}>Download CSV</Button>
            </COContent>


        </BottomContent>

                */}
            {
                downloadOpen &&
                    <DownloadScreen 
                        close={() => setDownloadOpen(false)}
                    />
            }
        
        
    </Container>
  );

  function getPumpsVal() {

  }

    function timeString(d: Date) {
        let str = `${d.toISOString().substring(0, 10)}   ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
        return str
    }

    function pump2Setter(e:any) {
        let val = e.target.value
        setPumps('pump2', val)
        setPump2(val)
    }

    function pump1Setter(e:any) {
        let val = e.target.value
        setPumps('pump1', val)
        setPump1(val)
    }

    function setPumps(pumpName: string, val: number) {
    
        const pumpsRef = ref(db, 'Pumps/' + pumpName);

        set(pumpsRef, {
            pump: pumpName,
            value: val,
        });
    }
}

export default Dashboard;


