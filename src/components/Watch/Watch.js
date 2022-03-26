import { Grid, Card, Button, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react';

const Watch = (props) => {
    const {title, url, price } = props.watch;
    const {handleClick}=props;
    
    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card>
      <CardMedia
        component="img"
        height="500"
        image={url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>handleClick(props.watch)} size="small" color='primary'>Add to cart
        
        <AddShoppingCartIcon />
      
        </Button>
      </CardActions>
    </Card>
        </Grid>
    );
};

export default Watch;

