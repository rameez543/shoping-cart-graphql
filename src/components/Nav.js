import React from 'react'
import { Box ,Text ,Heading} from 'gestalt'
import 'gestalt/dist/gestalt.css';
import { NavLink } from 'react-router-dom'

export const Nav = () => {
    return (<Box height={70} color="midnight" padding={1} display="flex" justifyContent="around" alignItems="center">
        <NavLink to="/signin" active="active" >
            <Text color="white" size="xl">
                Signin
            </Text>
        </NavLink>
        <Heading text="Home"><Text color= "pine" size="xl">HOME</Text></Heading>
        <NavLink to="/signup" active="active" >
            <Text color="white" size="xl">
                Signup
            </Text>
        </NavLink>
    </Box>)
}