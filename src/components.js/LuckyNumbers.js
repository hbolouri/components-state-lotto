import React from 'react'

export default class LuckyNumbers extends React.Component {

    state= {
        number: [0,0,0,0,0,0,0],
    }

    resetNumbers = () => {
    console.log('resetNumbers', this.state.number);
      this.setState({number: [0,0,0,0,0,0,0]})
    }
 
    generateNum = () => { 
        let newArray =[];
        let newNum;
        for (let i=0; i< 6;i++) {
          newNum= Math.floor(Math.random()*50) 
          
          while (newArray.includes (newNum)) {
          newNum= Math.floor(Math.random()*50) } 
         
          newArray.push(newNum)
           
        }
      return newArray
     } 

     oneNum = () =>  Math.floor(Math.random()*10) 

     getNewNumbers  = () => {
     this.setState({number: [...this.generateNum(), this.oneNum() ]}) 
      }

render () {
  console.log(this.resetNumbers);

  let num = this.state.number

    return (
            <div>
                
                <h1 style={{textAlign: 'center'}}>Lotto 6 / 49</h1>
                <p style={{textAlign: 'center'}}>Generating Lucky Numbers</p>

                <main style={{display: 'flex', justifyContent: 'space-evenly', }}>
                  {num.map(x => <p style={{border: '5px solid hotpink', borderRadius: '50%', padding: '50px'}}>{x}</p>)}
                </main> 
                <br /><br />
                <div style={{textAlign: 'center'}}>
                <button style={{padding: '25px', fontSize: '1.5rem'}} onClick={this.resetNumbers}>Reset</button>
                <button style={{padding: '25px', fontSize: '1.5rem'}} onClick={this.getNewNumbers}>Show me lucky numbers</button>
                </div>
                
            </div>       
    )
}

}