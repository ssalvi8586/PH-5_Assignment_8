import { Grid, Card, Button, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react';

const Watch = (props) => {
    const {title, url, price } = props.watch;
    
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
        <Typography variant="body2" color="text.secondary">{price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart
        <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
        </Button>
      </CardActions>
    </Card>
        </Grid>
    );
};

export default Watch;

