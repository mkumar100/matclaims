import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

export default function SimpleCard(){

return(
    <>
<Card sx={{width:200, height:200}}>
    <CardActionArea href="https://google.com">
        <CardContent>
            <Typography>Click me!</Typography>
        </CardContent>
    </CardActionArea>
</Card>
</>);
}
