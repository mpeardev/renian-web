import { useState } from "react";
import departmentsJson from "../../../public/json/departments.json";
import provincesJson from "../../../public/json/provinces.json";
import districtsJson from "../../../public/json/districts.json";

export const useUbigeo = () => {
	const [departments, setDepartments] = useState([]);
	const [provinces, setProvinces] = useState([]);
	const [districts, setDistricts] = useState([]);

	const handleDepartaments = () => {
		const temp = [];
		departmentsJson.map((d) => temp.push({ label: d.name, value: d.name }));
		setDepartments(temp);
	};

	const handleProvinces = (department) => {
		setProvinces([]);
		const departmentT = departmentsJson.filter(
			(values) => values.name == department
		);


		const temp = [];
		if (departmentT[0]?.id !== undefined) {
			for (let index = 0; index < provincesJson.length; index++) {
				provincesJson[index].department_id == departmentT[0].id &&
					temp.push({
						label: provincesJson[index].name,
						value: provincesJson[index].name,
					});
			}
		}

		setProvinces(temp);
	};

	const handleDistricts = (province) => {
		setDistricts([]);
		const provinceT = provincesJson.filter(
			(values) => values.name == province
		);

		const temp = [];
		if (provinceT[0]?.id !== undefined) {
			for (let index = 0; index < districtsJson.length; index++) {
				districtsJson[index].province_id == provinceT[0].id &&
					temp.push({
						label: districtsJson[index].name,
						value: districtsJson[index].name,
					});
			}
		}
		setDistricts(temp);
	};

	return {
		departments,
		provinces,
		districts,
        handleDepartaments,
		handleProvinces,
		handleDistricts,
	};
};
