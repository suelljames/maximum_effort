import React from "react";
import { Jumbotron, Grid, Col, Panel } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProfileList from "./ProfileList";

const mapStateToProps = state => ({
  profiles: state.profiles
});

const Profile = ({ profiles }) => (
  <Jumbotron>
    <Grid>
      {profiles.map(d => (
        <Col sm={4} key={d.id}>
          <Panel>
            <Panel.Heading>
              <Panel.Title>
                <ProfileList name={d.name} email={d.email} />
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              Name: {d.name}
              <br />
              Birthdate: {d.birthdate}
              <br />
              Address: {d.address}
              <br />
              Email: {d.email}
              <br />
              UserName: {d.userName}
              <br />
              Password: {d.password}
              <br />
              Interests: {d.interests}
            </Panel.Body>
          </Panel>
        </Col>
      ))}
    </Grid>
  </Jumbotron>
);

export default connect(mapStateToProps)(ProfileList);
