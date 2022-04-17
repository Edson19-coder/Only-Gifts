import React from 'react'
import SideNavBar from '../../../components/SideNavBar/SideNavBar';
import { Line } from 'react-chartjs-2';
import faker from "faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Ventas',
    },
  },
};

const labels = ['Enero', 'Febrero', 'Marzo', 'abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Noviembre','Diciembre'];

export const data = {
  labels,
  datasets: [
    {
      label: '2021',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: '2022',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const ManagerVentas = () => {





  return (
    <div>
         <SideNavBar>
        <div className="container">
              <div className="row">
                  <div className="col-12 h2">
                          Ventas
                  </div>  
                 
              </div>
            <div className="row mt-3 bg-white rounded-3 shadow p-4" >
              <div className="col-12">
                <div className="d-flex align-items-center " style={{gap:"10px"}} >
                  De: 
                  <input className="form-control" type="datetime-local" name="" id="" />
                  A: 
                  <input className="form-control" type="datetime-local" name="" id="" />
                </div>
              </div>
            <Line options={options} data={data} />


              
            </div>
        </div>
        </SideNavBar>
    </div>
  )
}

export default ManagerVentas;