import React, { useState } from 'react'
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from '@mui/system/styled';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import Backdrop from '@mui/material/Backdrop';


export default function Address() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container sx={{ border: "0px solid" }} maxWidth='xl'>
            <Paper sx={{ border: "1px solid #d9d9d9", boxShadow: "none", marginLeft: "10px", marginRight: "10px", marginTop: "20px", minHeight: "500px" }}>
                <Stack spacing={"20px"} >
                    <Stack sx={{ mt: "30px", px: "30px" }}>
                        <Typography variant='h6' sx={{ fontWeight: "bold" }}>常用地址</Typography>
                    </Stack>
                    <Stack sx={{ mt: "30px", px: "30px" }} direction="row" justifyContent="end">
                        <Button variant='outlined' onClick={handleOpen}>新增常用地址</Button>
                    </Stack>

                    <Paper sx={{ mt: "15px", boxShadow: "none", border: "1px solid #61D1BD" }}>

                        <Grid container columns={12} sx={{ p: "30px" }} rowSpacing={"10px"}>
                            <Grid item xs={9} >
                                <Grid container columns={12} spacing={"10px"}>
                                    <Grid item xs={2} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2' >收件人</Typography>
                                    </Grid>
                                    <Grid item xs={10} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2'  >王大明</Typography>
                                    </Grid>

                                    <Grid item xs={2} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2'>連絡電話</Typography>
                                    </Grid>
                                    <Grid item xs={10} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2' >0945864315</Typography>

                                    </Grid>
                                    <Grid item xs={2} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2' >信箱</Typography>
                                    </Grid>
                                    <Grid item xs={10} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2'>Laopigu@gmail.com</Typography>
                                    </Grid>
                                    <Grid item xs={2} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2'>取件地址</Typography>
                                    </Grid>
                                    <Grid item xs={10} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2' >台中市南區三民西路377號西川一路1號</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={3} sx={{ border: "0px solid #d9d9d9" }}>
                                <Stack spacing={"5px"} alignItems={"end"} justifyContent={"space-between"} sx={{ border: "0px solid", height: "100%", width: "100%" }}>
                                    <Stack spacing={"5px"} sx={{ border: "0px solid" }} direction={"row"}>
                                        <Button onClick={handleOpen} variant='outlined' sx={{ border: "1px solid #d9d9d9", color: "#AFAFAF" }}>編輯地址</Button>
                                        <IconButton>
                                            <DeleteIcon />
                                        </IconButton>

                                    </Stack>
                                    <Stack justifyContent={"center"} alignItems={"center"} sx={{ height: "40px", width: "135px", backgroundColor: "#61D1BD", borderRadius: "4px" }}>
                                        <Typography variant='button' sx={{ color: "white" }}>預設地址</Typography>
                                    </Stack>


                                </Stack>



                            </Grid>



                        </Grid>



                    </Paper>
                    <Paper sx={{ mt: "15px", boxShadow: "none", border: "1px solid #d9d9d9" }}>

                        <Grid container columns={12} sx={{ p: "30px" }} rowSpacing={"10px"}>
                            <Grid item xs={9} >
                                <Grid container columns={12} spacing={"10px"}>
                                    <Grid item xs={2} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2' >收件人</Typography>
                                    </Grid>
                                    <Grid item xs={10} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2'  >王大明</Typography>
                                    </Grid>

                                    <Grid item xs={2} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2'>連絡電話</Typography>
                                    </Grid>
                                    <Grid item xs={10} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2' >0945864315</Typography>

                                    </Grid>
                                    <Grid item xs={2} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2' >信箱</Typography>
                                    </Grid>
                                    <Grid item xs={10} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2'>Laopigu@gmail.com</Typography>
                                    </Grid>
                                    <Grid item xs={2} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2'>取件地址</Typography>
                                    </Grid>
                                    <Grid item xs={10} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2' >台中市南區三民西路377號西川一路1號</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={3} sx={{ border: "0px solid #d9d9d9" }}>
                                <Stack spacing={"5px"} alignItems={"end"} justifyContent={"space-between"} sx={{ border: "0px solid", height: "100%", width: "100%" }}>
                                    <Stack spacing={"5px"} sx={{ border: "0px solid" }} direction={"row"}>
                                        <Button variant='outlined' sx={{ border: "1px solid #d9d9d9", color: "#AFAFAF" }}>編輯地址</Button>
                                        <IconButton>
                                            <DeleteIcon />
                                        </IconButton>

                                    </Stack>

                                    <Button variant='outlined' sx={{ width: "135px" }}>設為預設地址</Button>

                                </Stack>



                            </Grid>



                        </Grid>



                    </Paper>
                    <Paper sx={{ mt: "15px", boxShadow: "none", border: "1px solid #d9d9d9" }}>

                        <Grid container columns={12} sx={{ p: "30px" }} rowSpacing={"10px"}>
                            <Grid item xs={9} >
                                <Grid container columns={12} spacing={"10px"}>
                                    <Grid item xs={2} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2' >收件人</Typography>
                                    </Grid>
                                    <Grid item xs={10} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2'  >王大明</Typography>
                                    </Grid>

                                    <Grid item xs={2} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2'>連絡電話</Typography>
                                    </Grid>
                                    <Grid item xs={10} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2' >0945864315</Typography>

                                    </Grid>
                                    <Grid item xs={2} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2' >信箱</Typography>
                                    </Grid>
                                    <Grid item xs={10} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2'>Laopigu@gmail.com</Typography>
                                    </Grid>
                                    <Grid item xs={2} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2'>取件地址</Typography>
                                    </Grid>
                                    <Grid item xs={10} >
                                        <Typography sx={{ minWidth: "30px" }} variant='subtitle2' >台中市南區三民西路377號西川一路1號</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={3} sx={{ border: "0px solid #d9d9d9" }}>
                                <Stack spacing={"5px"} alignItems={"end"} justifyContent={"space-between"} sx={{ border: "0px solid", height: "100%", width: "100%" }}>
                                    <Stack spacing={"5px"} sx={{ border: "0px solid" }} direction={"row"}>
                                        <Button variant='outlined' sx={{ border: "1px solid #d9d9d9", color: "#AFAFAF" }}>編輯地址</Button>
                                        <IconButton>
                                            <DeleteIcon />
                                        </IconButton>

                                    </Stack>

                                    <Button variant='outlined' sx={{ width: "135px" }}>設為預設地址</Button>

                                </Stack>



                            </Grid>



                        </Grid>



                    </Paper>

                </Stack>



            </Paper>

            <Modal open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
                <Fade in={open} >
                    <Box sx={style}>


                        <Stack direction={"row"} justifyContent={"end"}>
                            <IconButton onClick={handleClose} sx={{ "&:hover": { backgroundColor: "#d9d9d9" }, border: "1px solid #d9d9d9", backgroundColor: "white", marginRight: "-50px", marginTop: "-40px", boxShadow: "5" }}>
                                <ClearOutlinedIcon />
                            </IconButton>
                        </Stack>
                        <ItemWrapper sx={{ pl: "10px", pt: "0px" }}>
                            <Typography variant='h6' >新增常用地址</Typography>

                        </ItemWrapper>


                        <Stack spacing={"10px"} sx={{ minHeight: "450px", marginLeft: "10px", marginRight: "10px", my: "10px", border: "1px solid #D9D9D9", borderRadius: "4px", backgroundColor: "white" }}>


                            <ItemWrapper sx={{ pt: "20px" }}>
                                <Typography variant='subtitle2' >收件人</Typography>
                                <TextField placeholder='不得包含特殊符號 / $ . @ & # @...' inputProps={{ sx: { height: "15px" } }} sx={{ marginTop: "10px" }} size='small' fullWidth />
                            </ItemWrapper>
                            <ItemWrapper >
                                <Typography variant='subtitle2' >聯絡電話</Typography>
                                <TextField placeholder='ex: 09xxxxxxxx' inputProps={{ sx: { height: "15px" } }} sx={{ marginTop: "10px" }} size='small' fullWidth />
                            </ItemWrapper>
                            <ItemWrapper >
                                <Typography variant='subtitle2' >信箱</Typography>
                                <TextField placeholder='ex: asbc@gmail.com' inputProps={{ sx: { height: "15px" } }} sx={{ marginTop: "10px" }} size='small' fullWidth />
                            </ItemWrapper>
                            <ItemWrapper >
                                <Typography variant='subtitle2' >收件地址</Typography>
                                <TextField placeholder='收件地址' inputProps={{ sx: { height: "15px" } }} sx={{ marginTop: "10px" }} size='small' fullWidth />
                            </ItemWrapper>

                            <ItemWrapper sx={{ pt: "40px" }}>
                                <Stack direction={"row"} justifyContent={"space-around"}>
                                    <Button onClick={handleClose} variant='outlined'>取消</Button>
                                    <Button variant='contained'>新增</Button>
                                </Stack>
                            </ItemWrapper>

                        </Stack>
                    </Box>
                </Fade>

            </Modal>
        </Container>
    )
}


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '1px solid #d9d9d9',
    borderRadius: "4px",
    boxShadow: "none",
    px: "30px",
    py: "20px"
};


const ItemWrapper = styled(Box)({
    paddingTop: "5px",
    paddingLeft: "30px",
    paddingRight: "30px"
})