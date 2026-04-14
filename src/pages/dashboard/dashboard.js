import React from 'react';
import './dashboard.css'
import '../../components/LoanoutChart/LoanoutChart'
import LoanoutChart from '../../components/LoanoutChart/LoanoutChart';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <h5 style={{alignSelf: 'flex-start'}}>Hi, Welcome backk!!!</h5>
            <div className='summary'>
                <div className='card'>
                    <div className='icon'><i class="fa-solid fa-cloud"></i></div>
                    <div className='item'>
                        <div className='title'>
                            New Items
                        </div>
                        <div className='content'>
                            10
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='icon'><i class="fa-solid fa-cloud"></i></div>
                    <div className='item'>
                        <div className='title'>
                            Total Items
                        </div>
                        <div className='content'>
                            10
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='icon'><i class="fa-solid fa-cloud"></i></div>
                    <div className='item'>
                        <div className='title'>
                            Total Out
                        </div>
                        <div className='content'>
                            10
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='icon'><i class="fa-solid fa-cloud"></i></div>
                    <div className='item'>
                        <div className='title'>
                            Total Loan
                        </div>
                        <div className='content'>
                            10
                        </div>
                    </div>
                </div>






            </div>
            <div className='overView'>
                <LoanoutChart></LoanoutChart>
            </div>

        </div>
    );
};

export default Dashboard;