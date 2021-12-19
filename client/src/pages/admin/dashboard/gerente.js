import ImgAdmin from '../../../assets/img/admin-gerente.jpg';

function DashboardContent() {
  
  return (<img alt="ImgAdmin" src={ImgAdmin}/>);
}

export default function Dashboard() {
  return <DashboardContent />;
}