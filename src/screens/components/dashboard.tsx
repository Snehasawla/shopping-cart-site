import React from 'react';
import { BestProduct } from '../../components/products';
import Jumbotron  from '../../shared/components/jumbotron';
import SectionHeader from '../../shared/components/sectionHeader'

const Dashboard = () => {
    return 
    <div>
        <Jumbotron />
        <SectionHeader title='Sample Header' route='/' />
        <BestProduct />
        <SectionHeader title='Sample Header' route='/' />
        <BestProduct />
    </div>
}

export default Dashboard;