import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';

const PaymentHistory = () => {
    return (
        <div>
            <Helmet>
				<title>JazzYogaCamp | Payment History</title>
			</Helmet>
				<SectionHeading title="Payment History" center={true} />

        </div>
    );
};

export default PaymentHistory;