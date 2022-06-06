import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import {Chart, ArcElement}  from 'chart.js'
import Lable from './Lable'

Chart.register(ArcElement)

const Graph = () => {

    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
      
      };
   


      const config ={
          data:{
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)'
                ],
                hoverOffset: 2,
                borderRadius:30,
                spacing:10,
                padding:10
              }]
          },

             options:{
                 cutout: 115,
                 
             }
      }


  return (
    <div className='graph-box'>
     
      <div className="chart">
       <Doughnut {...config}></Doughnut>
     
       <h3>total <br />
       <span>$0</span>
       </h3>
       
      
      </div>
         
       <div className="labies">
          <Lable/>
       </div>
    
    </div>
  )
}

export default Graph