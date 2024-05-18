import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
function Appbar(){
    return (
        <div style=
        {{display: "flex",
        justifyContent:'space-between'}}>
            <div><Typography sx={{ fontFamily:'Playfair Display, serif', fontSize:'25px'}}variant={"h6"}>Falak's Journey</Typography></div>
            <div style={{display:"flex", color:"primary"}}>
                <div><Button sx={{ color:'white', fontFamily:'Playfair Display, serif'}}>Home</Button></div>
                <div><Button variant="text"  sx={{ color:'white', fontFamily:'Playfair Display, serif'}} >Portfolio</Button></div>
                <div><Button variant="text" sx={{ color:'white', fontFamily:'Playfair Display, serif'}}>Resume</Button></div>
                <div><Button variant="text" sx={{ color:'white', fontFamily:'Playfair Display, serif'}}>About Me</Button></div>
                <div><Button variant="text" sx={{ color:'white', fontFamily:'Playfair Display, serif'}}>Contact</Button></div>
            </div>
        </div>
    )
}

export default Appbar;