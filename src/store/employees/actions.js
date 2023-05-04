import getUsers from "services/getUsers";

export const setEmployeesAction = (payload) => {
    return {
        type: 'employees/setEmployees',
        payload: payload,
    }
}

export const loadEmployees = () => async (dispatcn) => {
    try {
        const {data} = await getUsers();
        dispatcn(setEmployeesAction(data))
    } catch (error) {
        console.log(e, 'error');
    }
    
}