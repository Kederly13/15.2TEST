import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { loadEmployees } from 'store/employees/actions';
import { selectEmployees } from 'store/employees/selectors';

const EmployeeList = () => {
    const dispatch = useDispatch();
    const employees = useSelector(selectEmployees);

    useEffect(() => {
        dispatch(loadEmployees())
    }, [dispatch])
    return (
        <div>
            {employees.length > 0? (
                employees.map(user => (
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                        <h1>{user.email}</h1>
                    </div>
                ))
            ) : <div>Empty list</div>}
        </div>
    )
}
export default EmployeeList;