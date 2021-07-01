import styled from 'styled-components'

export const Container = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const GrandCard = styled.div`
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
background-color: #fff;
width: 70%;
height: 80%;
margin-right: auto;
margin-left: auto;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 8px;
`

export const Avatar = styled.img`
width: 208px;
height: 208px;
position: absolute;
top: 320px;
left: 350px;
border: 1px solid;
background-color: #A0A4AE;
border-radius: 50%;
@media only screen and (max-width: 978px) {
  position: unset;
  width: 96px;
  height: 96px;
  margin-top: 25px;
}
`
export const InformatioDiv = styled.div`
position: relative;
top: 65px;
left: -270px;
@media only screen and (max-width: 978px) {
  position: unset;
  margin-left: 20px;
  margin-bottom: 10px;
}
`

export const InfoGroup = styled.div`
`

export const InfotTitle = styled.span`
margin-right: 10px;
font-size: 28px;
font-weight: 600;
@media only screen and (max-width: 978px) {
  font-size: 18px;
}
`

export const InfoValue = styled.span`
font-size: 18px;
@media only screen and (max-width: 978px) {
  font-size: 15px;
}
`

export const Title = styled.span`
font-size: 30px;
font-weight: 600;
border-bottom: 1px solid;
@media only screen and (max-width: 978px) {
  font-size: 18px;
  text-align: center;
}
`

// types

export const Types = styled.div`
display: flex;
position: relative;
`

export const TypeContent = styled.div`
border: 1px solid rgba( 0, 0, 0, 0.3);
width: 100px;
text-align: center;
border-radius: 4px;
margin-left: 10px;
background-color: #D4AD4E;
position: relative;
top: -50px;
@media only screen and (max-width: 978px) {
  position: unset;
}
${(props) => props.grass && `
  background-color: green;
`}
${(props) => props.poison && `
  background-color: purple;
`}
${(props) => props.water && `
  background-color: #1552E2;
`}
${(props) => props.fire && `
  background-color: #AB1F23;
`}
${(props) => props.electric && `
  background-color: #DFDF35;
`}
${(props) => props.ground && `
  background-color: #48180B;
`}
${(props) => props.fairy && `
  background-color: #961A45;
`}
${(props) => props.normal && `
  background-color: #75515b;
`}
${(props) => props.ghost && `
  background-color: #33336B;
`}
${(props) => props.ice && `
  background-color: #86d2f5;
`}
${(props) => props.steel && `
  background-color: #5F756D;
`}
${(props) => props.rock && `
  background-color: #48180B;
`}
${(props) => props.bug && `
  background-color: #1C4B27;
`}
${(props) => props.dark && `
  background-color: #040706;
`}
${(props) => props.fighting && `
  background-color: #994025;
`}
${(props) => props.flying && `
  background-color: #4A677D;
`}
${(props) => props.dragon && `
  background-color: #448B95;
`}
${(props) => props.psychic && `
  background-color: #A42A6C;
`}
`

export const TypeValue = styled.span`
font-size: 16px;
font-weight: 600;
color: #fff;
`

// Abilities

export const Abilities = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
top: 20px;
@media only screen and (max-width: 978px) {
  position: unset;
}
`

// status

export const Status = styled.div`
width: 300px;
text-align: center;
margin-top: 30px;
@media only screen and (max-width: 978px) {
  width: 70%;
  height: 100%;
  margin-top: 0;
}
`
