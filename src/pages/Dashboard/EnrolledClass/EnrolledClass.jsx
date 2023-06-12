import React from "react";
import { Helmet } from "react-helmet-async";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";

const EnrolledClass = () => {
	return (
		<div>
			<Helmet>
				<title>JazzYogaCamp | Enrolled Classes</title>
			</Helmet>
			<SectionHeading title="Enrolled Classes" center={true} />
		</div>
	);
};

export default EnrolledClass;
