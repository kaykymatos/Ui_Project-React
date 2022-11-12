import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useAppDrawerContext } from "../../contexts";

interface IMenuLateralProps {
    children: React.ReactNode
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const { isDrawerOpen , toggleDrawerOpen} = useAppDrawerContext();

    return (
        <>
            <Drawer open={isDrawerOpen} onClose={toggleDrawerOpen} variant={smDown ? "temporary" : "permanent"}>
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                        <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }} alt="Avatar Usuário" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp0xKoXUryp0JZ1Sxp-99eQiQcFrmA1M1qbQ&usqp=CAU" />
                    </Box>
                    <Divider />

                    <Box flex={1}>
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>
                                        home
                                    </Icon>
                                </ListItemIcon>
                                <ListItemText primary="Página Inicial" />
                            </ListItemButton>
                        </List>
                    </Box>


                </Box>
            </Drawer>
            <Box height="100vh"  marginLeft={smDown?0:theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
}