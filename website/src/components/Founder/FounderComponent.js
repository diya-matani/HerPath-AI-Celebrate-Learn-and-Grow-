import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "./Founder.css";
import linkedin from "../../images/social/linkedin.png";
import github from "../../images/social/github.png";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingBottom: theme.spacing(8),
  },
  cardMedia: {
    paddingTop: "50%",
    width: "50%", // 16:9
    justifyContent: "center",
    alignContent: "center",
    margin: "auto",
    marginTop: "15px"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function MemberComponent() {
  const classes = useStyles();

  return (
    <>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
            >
              Meet the Founder
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Card className="card">
                <CardMedia
                  className={classes.cardMedia}
                  image="https://github.com/diya-matani.png"
                  title="Diya Matani"
                  style={{ height: "10px", margin: "center" }}
                />
                <h2 style={{ textAlign: "center" }}>Diya Matani</h2>
                <ul className="links">
                  <a href="https://github.com/diya-matani">
                    <img
                      className="links__item"
                      src={github}
                      alt="github profile"
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/diya-matani/">
                    <img
                      className="links__item"
                      src={linkedin}
                      alt="linkedin profile"
                    />
                  </a>
                </ul>

                <CardContent className="card-content">
                  Hi, I'm Diya Matani! I'm passionate about technology and empowering women in the field of Computer Science. I started this initiative to bring together resources, communities, and support systems for young girls who want to explore and grow in the tech industry. I want to use technology to solve real-world problems and help others achieve their goals. Welcome to HerPath AI!
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}
