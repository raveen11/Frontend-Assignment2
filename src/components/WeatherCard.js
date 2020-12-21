import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class WeatherCard extends Component {

    render() {
        let weather=this.props.data;
        const styles = {
           width:'500px',
           marginLeft:'auto',
           marginRight:'auto',
           marginTop:'100px',
           border:'2px solid red' 
          }
          const style1={

          }
        return (
        <Card style={styles}>
            <CardActionArea>
              <CardMedia
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                City Name:
                  {weather.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                <div>
                       SunRise : {new Date(weather.sys.sunrise).toLocaleString()}
                   </div>
                   <div>
                       SunSet : {new Date(weather.sys.sunset).toLocaleString()}
                   </div>
                 </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Min-Temperature{weather.main.temp_min}
              </Button>
              <Button size="small" color="primary">
              Max-Temperature{weather.main.temp_max}
              </Button>
              <Button size="small" color="primary">
                Pressure:{weather.main.pressure}
              </Button>
              <Button size="small" color="primary">
                Humidity:{weather.main.humidity}
              </Button>
            </CardActions>
          </Card>
        );
    }
}

export default WeatherCard;